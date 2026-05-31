'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, MeshReflectorMaterial, useTexture } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

/**
 * Quality tier — controls scene complexity, reflection resolution,
 * particle count, post-FX intensity.
 *   low    → mobile / low-power (30-45 fps target)
 *   medium → tablet / mid-range desktop
 *   high   → desktop with dedicated GPU / 4K / TV
 */
export type Quality = 'low' | 'medium' | 'high';

/* ---------------------------------------------------------------
   Camera rig — driven by an external scroll progress ref (0 → 1)
   --------------------------------------------------------------- */
function CameraRig({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  useFrame((state) => {
    const p = progressRef.current;

    // Choreographed camera path through 4 beats.
    //   0.00  — wide establishing
    //   0.33  — push in on stage
    //   0.66  — orbit right
    //   1.00  — rise up high
    const x = THREE.MathUtils.lerp(
      0,
      p < 0.33 ? 0 : p < 0.66 ? 3.5 * ((p - 0.33) / 0.33) : 3.5 * (1 - (p - 0.66) / 0.34),
      1,
    );
    const y = 2 + p * 3;
    const z = 10 - p * 4;

    // Subtle mouse parallax
    const mx = state.pointer.x * 0.4;
    const my = state.pointer.y * 0.2;

    state.camera.position.lerp(new THREE.Vector3(x + mx, y + my, z), 0.06);
    state.camera.lookAt(0, 1.5, 0);
  });
  return null;
}

/* ---------------------------------------------------------------
   A single spotlight — rotates in a slow sweep
   --------------------------------------------------------------- */
function MovingSpot({
  position,
  color,
  phase = 0,
  speed = 0.5,
  intensity = 40,
}: {
  position: [number, number, number];
  color: string;
  phase?: number;
  speed?: number;
  intensity?: number;
}) {
  const spotRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + phase;
    if (targetRef.current) {
      targetRef.current.position.x = Math.sin(t) * 4;
      targetRef.current.position.z = Math.cos(t * 0.7) * 2 - 1;
      targetRef.current.position.y = 0;
    }
    if (spotRef.current) {
      spotRef.current.intensity = intensity + Math.sin(t * 2) * 8;
    }
  });

  return (
    <>
      <spotLight
        ref={spotRef}
        position={position}
        angle={0.35}
        penumbra={0.7}
        decay={2}
        distance={18}
        intensity={intensity}
        color={color}
        castShadow
      />
      <object3D ref={targetRef} />
      {/* Attach target */}
      <SpotTargetBind spotRef={spotRef} targetRef={targetRef} />
      {/* Visible light fixture */}
      <mesh position={position}>
        <cylinderGeometry args={[0.18, 0.12, 0.5, 16]} />
        <meshStandardMaterial color="#1a1530" metalness={0.8} roughness={0.3} emissive={color} emissiveIntensity={0.6} />
      </mesh>
    </>
  );
}

function SpotTargetBind({
  spotRef,
  targetRef,
}: {
  spotRef: React.RefObject<THREE.SpotLight>;
  targetRef: React.RefObject<THREE.Object3D>;
}) {
  useFrame(() => {
    if (spotRef.current && targetRef.current) {
      spotRef.current.target = targetRef.current;
    }
  });
  return null;
}

/* ---------------------------------------------------------------
   Stage truss — cylindrical steel frame
   --------------------------------------------------------------- */
function Truss({ position, height = 6 }: { position: [number, number, number]; height?: number }) {
  const segments = Math.floor(height / 0.4);

  return (
    <group position={position}>
      {/* Four vertical rods */}
      {[[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]].map(([x, z], i) => (
        <mesh key={i} position={[x, height / 2, z]}>
          <cylinderGeometry args={[0.04, 0.04, height, 8]} />
          <meshStandardMaterial color="#1a1530" metalness={0.9} roughness={0.3} />
        </mesh>
      ))}
      {/* Diagonal cross-bracing */}
      {Array.from({ length: segments }).map((_, i) => {
        const y = (i + 0.5) * (height / segments);
        return (
          <group key={i}>
            <mesh position={[0, y, -0.25]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.7, 6]} />
              <meshStandardMaterial color="#1a1530" metalness={0.9} roughness={0.4} />
            </mesh>
            <mesh position={[0, y, 0.25]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[0.02, 0.02, 0.7, 6]} />
              <meshStandardMaterial color="#1a1530" metalness={0.9} roughness={0.4} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/* ---------------------------------------------------------------
   LED wall with animated shader
   --------------------------------------------------------------- */
function LEDWall() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color('#8b5cf6') },
      uColorB: { value: new THREE.Color('#e879f9') },
      uColorC: { value: new THREE.Color('#3b0764') },
    }),
    [],
  );

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <group>
      {/* Main LED panel — wider and shorter */}
      <mesh position={[0, 1.8, -4]} receiveShadow>
        <planeGeometry args={[22, 6, 1, 1]} />
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform float uTime;
            uniform vec3 uColorA;
            uniform vec3 uColorB;
            uniform vec3 uColorC;
            varying vec2 vUv;

            float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
            float noise(vec2 p) {
              vec2 i = floor(p); vec2 f = fract(p);
              vec2 u = f*f*(3.0-2.0*f);
              return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
            }

            // Diagonal beam sweep
            float beam(vec2 uv, float angle, float width, float t) {
              float s = sin(angle); float c = cos(angle);
              float d = abs(uv.x * c - uv.y * s - fract(t) * 2.0 + 0.5);
              return smoothstep(width, 0.0, d) * 0.6;
            }

            // Concentric ring pulse
            float rings(vec2 uv, float t) {
              vec2 center = vec2(0.5, 0.5);
              float dist = length(uv - center) * 2.0;
              return smoothstep(0.05, 0.0, abs(fract(dist - t * 0.4) - 0.5)) * 0.5;
            }

            // Horizontal scan bars
            float scanBars(vec2 uv, float t) {
              float bar = sin((uv.y - t * 0.15) * 18.0) * 0.5 + 0.5;
              return smoothstep(0.6, 1.0, bar) * 0.25;
            }

            // Diamond / cross pattern
            float diamond(vec2 uv, float t) {
              vec2 c = vec2(0.5);
              vec2 d = abs(uv - c);
              float shape = smoothstep(0.32 + sin(t*0.5)*0.04, 0.30, d.x + d.y);
              float inner = smoothstep(0.18, 0.16, d.x + d.y);
              return (shape - inner) * 0.5;
            }

            void main() {
              vec2 uv = vUv;

              // Base flowing noise
              float n  = noise(vec2(uv.x*3.0 + uTime*0.2,  uv.y*2.0 - uTime*0.15));
              float n2 = noise(vec2(uv.x*7.0 - uTime*0.4,  uv.y*5.0 + uTime*0.25));
              float base = smoothstep(0.2, 0.9, n + n2*0.35);

              // Layered design elements
              float b1 = beam(uv, 0.4,  0.04, uTime * 0.12);
              float b2 = beam(uv, -0.4, 0.03, uTime * 0.09 + 0.5);
              float r  = rings(uv, uTime);
              float sb = scanBars(uv, uTime);
              float dm = diamond(uv, uTime);

              // Pixel grid for LED texture
              vec2 grid = fract(uv * vec2(130.0, 55.0));
              float cell = smoothstep(0.88, 1.0, grid.x) + smoothstep(0.88, 1.0, grid.y);
              float dim = 1.0 - cell * 0.45;

              // Compose colour
              vec3 col = mix(uColorC, uColorA, base);
              col = mix(col, uColorB, b1 + b2 + r + dm);
              col += vec3(0.6, 0.4, 1.0) * sb;
              col *= dim;

              // Scanline flicker
              float scan = sin(uv.y * 320.0) * 0.03 + 0.97;
              col *= scan;

              // Inner vignette
              float vig = smoothstep(1.3, 0.35, length(uv - 0.5));
              col *= vig * 0.85 + 0.15;

              gl_FragColor = vec4(col, 1.0);
            }
          `}
        />
      </mesh>

      {/* Thin frame border around the panel */}
      <lineSegments position={[0, 1.8, -3.98]}>
        <edgesGeometry args={[new THREE.PlaneGeometry(22.15, 6.15)]} />
        <lineBasicMaterial color="#c4b5fd" transparent opacity={0.25} />
      </lineSegments>

      {/* Bottom edge glow strip */}
      <mesh position={[0, -1.2, -3.95]}>
        <planeGeometry args={[22, 0.06]} />
        <meshBasicMaterial color="#e879f9" toneMapped={false} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

/* ---------------------------------------------------------------
   Reflective stage floor — reflection resolution scales with device
   --------------------------------------------------------------- */
function Stage({ quality }: { quality: Quality }) {
  const reflectionRes = quality === 'high' ? 1024 : quality === 'medium' ? 512 : 256;
  const cylinderSegs = quality === 'low' ? 32 : 64;
  const torusSegs = quality === 'low' ? 32 : 64;

  return (
    <group>
      {/* Circular stage riser */}
      <mesh position={[0, 0.15, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[2.2, 2.4, 0.3, cylinderSegs]} />
        <meshStandardMaterial color="#0a0514" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={reflectionRes}
          mixBlur={1}
          mixStrength={40}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#07030d"
          metalness={0.5}
          mirror={0.4}
        />
      </mesh>
    </group>
  );
}

/* ---------------------------------------------------------------
   The floating Aurastic mark, suspended in the lighting
   --------------------------------------------------------------- */
function HoverMark() {
  const logoTexture = useTexture('/brand/aurastic-mark-square.png');
  logoTexture.anisotropy = 8;
  logoTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    // Sits on top of the stage platform (platform top = 0.3, so y = 0.3)
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.25} floatingRange={[0, 0.15]}>
      <group position={[0, 0.55, 0]}>
        {/* Pedestal base */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.35, 0.4, 0.12, 32]} />
          <meshStandardMaterial color="#12082a" metalness={0.8} roughness={0.2} emissive="#8b5cf6" emissiveIntensity={0.15} />
        </mesh>
        {/* Logo plane standing upright on the pedestal */}
        <mesh position={[0, 0.7, 0]} castShadow>
          <planeGeometry args={[1.6, 1.6]} />
          <meshBasicMaterial
            map={logoTexture}
            transparent
            toneMapped={false}
          />
        </mesh>
        {/* Subtle glow disc under the logo */}
        <mesh position={[0, 0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.5, 32]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.18} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

/* ---------------------------------------------------------------
   Suspended Line Array Speakers
   --------------------------------------------------------------- */
function SpeakerArray({ position, rotation }: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return (
    <group position={position} rotation={rotation || [0, 0, 0]}>
      {/* Suspension Cables going up to the truss (truss is at y ~ 6.8, base is at 4.0, length = 2.8) */}
      <mesh position={[-0.2, 1.4, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 2.8, 8]} />
        <meshStandardMaterial color="#444" roughness={0.4} metalness={0.8} />
      </mesh>
      <mesh position={[0.2, 1.4, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 2.8, 8]} />
        <meshStandardMaterial color="#444" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Fly bumper / hanging bracket */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.85, 0.06, 0.5]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Curved Speaker boxes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <group key={i} position={[0, -0.15 - i * 0.28, Math.sin(i * 0.15) * 0.15]} rotation={[i * 0.06, 0, 0]}>
          {/* Main Box */}
          <mesh>
            <boxGeometry args={[0.8, 0.24, 0.45]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.8} />
          </mesh>
          {/* Front Grill area */}
          <mesh position={[0, 0, 0.226]}>
            <planeGeometry args={[0.75, 0.2]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.9} />
          </mesh>
          {/* Emissive accents */}
          <mesh position={[0.35, 0, 0.227]}>
            <circleGeometry args={[0.01, 8]} />
            <meshBasicMaterial color="#e879f9" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ---------------------------------------------------------------
   The scene root — ADAPTIVE:
   - Quality ('low' | 'medium' | 'high') controls geometry, reflection res,
     particle count, shadows, post-processing.
   - Canvas DPR, antialias, and power preference adapt to device capability.
   --------------------------------------------------------------- */
export default function HeroScene({
  progressRef,
  quality = 'high',
}: {
  progressRef: React.MutableRefObject<number>;
  quality?: Quality;
}) {
  // Adaptive settings
  const dpr: [number, number] =
    quality === 'high' ? [1, 1.5] : quality === 'medium' ? [1, 1.2] : [0.75, 1];
  const enableShadows = quality !== 'low';
  const sparkleMain = quality === 'high' ? 40 : quality === 'medium' ? 20 : 8;
  const sparkleAccent = quality === 'high' ? 15 : quality === 'medium' ? 8 : 0;
  const multisampling = quality === 'high' ? 2 : 0;
  const showPostFX = quality !== 'low';
  const bloomIntensity = quality === 'high' ? 1.0 : 0.7;

  // Spotlight intensity & count — drop 2 lights on 'low' for perf
  const spotlights =
    quality === 'low'
      ? [
          { pos: [-4, 7, 2] as [number, number, number], color: '#c4b5fd', phase: 0, speed: 0.45, intensity: 45 },
          { pos: [4, 7, 2] as [number, number, number], color: '#e879f9', phase: Math.PI / 2, speed: 0.5, intensity: 45 },
        ]
      : [
          { pos: [-4, 7, 2] as [number, number, number], color: '#c4b5fd', phase: 0, speed: 0.45, intensity: 50 },
          { pos: [4, 7, 2] as [number, number, number], color: '#e879f9', phase: Math.PI / 2, speed: 0.5, intensity: 50 },
        ];

  return (
    <Canvas
      shadows={enableShadows}
      dpr={dpr}
      gl={{
        antialias: quality !== 'low',
        powerPreference: quality === 'low' ? 'low-power' : 'high-performance',
        alpha: false,
        stencil: false,
      }}
      camera={{ position: [0, 2, 10], fov: 38 }}
      frameloop="always"
    >
      <color attach="background" args={['#050209']} />
      <fog attach="fog" args={['#050209', 8, 28]} />

      <Suspense fallback={null}>
        <CameraRig progressRef={progressRef} />

        {/* Key ambient fill */}
        <ambientLight intensity={0.15} color="#b794ff" />
        <hemisphereLight intensity={0.2} color="#c4b5fd" groundColor="#0a0514" />

        {/* Moving concert spotlights */}
        {spotlights.map((s, i) => (
          <MovingSpot
            key={i}
            position={s.pos}
            color={s.color}
            phase={s.phase}
            speed={s.speed}
            intensity={s.intensity}
          />
        ))}

        {/* Back uplight for LED wall */}
        <pointLight position={[0, 1, -3]} intensity={8} color="#e879f9" distance={6} />

        {/* Scene content */}
        <Stage quality={quality} />
        <LEDWall />
        <Truss position={[-5, 0, 1]} height={7} />
        <Truss position={[5, 0, 1]} height={7} />

        {/* Overhead truss beam connecting the towers */}
        <mesh position={[0, 6.8, 1]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 10, 8]} />
          <meshStandardMaterial color="#1a1530" metalness={0.9} roughness={0.3} />
        </mesh>

        <HoverMark />

        {/* Atmosphere — haze / sparkles */}
        <Sparkles count={sparkleMain} scale={[14, 8, 8]} size={2} speed={0.3} opacity={0.6} color="#c4b5fd" />
        <Sparkles count={sparkleAccent} scale={[10, 4, 4]} size={4} speed={0.15} opacity={0.3} color="#e879f9" />

        <Environment preset="night" />

        {/* Post-processing — the cinematic polish. Disabled on low-end for perf. */}
        {showPostFX && (
          <EffectComposer multisampling={multisampling}>
            <Bloom intensity={bloomIntensity} luminanceThreshold={0.35} luminanceSmoothing={0.9} mipmapBlur radius={0.9} />
            <ChromaticAberration
              offset={new THREE.Vector2(0.0006, 0.0008)}
              blendFunction={BlendFunction.NORMAL}
              radialModulation={false}
              modulationOffset={0}
            />
            <Vignette eskil={false} offset={0.2} darkness={0.8} />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  );
}


