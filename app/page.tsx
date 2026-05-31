'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useMemo } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useDevice } from '@/lib/useDevice';

import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import VideoShowcase from '@/components/sections/VideoShowcase';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Audience from '@/components/sections/Audience';
import RecentWorks from '@/components/sections/RecentWorks';
import OneWord from '@/components/sections/OneWord';
import SectionDivider from '@/components/motion/SectionDivider';
import SectionTransition from '@/components/motion/SectionTransition';

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-void" />,
});

export default function Page() {
  const progressRef = useRef(0);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const device = useDevice();

  const quality: 'low' | 'medium' | 'high' = useMemo(() => {
    if (device.prefersReducedMotion) return 'low';
    if (device.isLowPower) return 'low';
    if (device.isMobile) return 'low';
    if (device.isTablet) return 'medium';
    return 'high';
  }, [device]);

  const pinEnd = useMemo(() => {
    if (device.isMobile) return '+=80%';
    return '+=100%';
  }, [device.isMobile]);

  const sectionHeight = useMemo(() => {
    if (device.isMobile) return '150vh';
    return '180vh';
  }, [device.isMobile]);

  useEffect(() => {
    const pinSection = pinSectionRef.current;
    const canvasWrap = canvasWrapRef.current;
    if (!pinSection || !canvasWrap) return;
    if (device.prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinSection,
        start: 'top top',
        end: pinEnd,
        pin: canvasWrap,
        pinSpacing: false,
        scrub: 0.5,
        onUpdate: (self) => {
          progressRef.current = self.progress;
        },
      });

      gsap.to(canvasWrap, {
        opacity: 0,
        scrollTrigger: {
          trigger: pinSection,
          start: 'bottom 80%',
          end: 'bottom 30%',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [pinEnd, device.prefersReducedMotion]);

  return (
    <>
      <section
        id="top"
        ref={pinSectionRef}
        className="relative"
        style={{ height: sectionHeight }}
      >
        <div
          ref={canvasWrapRef}
          className="absolute inset-0 w-full h-[100svh]"
          style={{ willChange: 'opacity' }}
        >
          <HeroScene progressRef={progressRef} quality={quality} />

          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background:
                'linear-gradient(90deg, rgba(5,2,9,0.85) 0%, rgba(5,2,9,0.5) 40%, rgba(5,2,9,0.1) 65%, transparent 85%)',
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none lg:hidden"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,2,9,0.8) 0%, rgba(5,2,9,0.4) 30%, rgba(5,2,9,0.7) 100%)',
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(5,2,9,0.7) 100%)',
            }}
          />
        </div>

        <div className="sticky top-0 w-full h-[100svh]">
          <Hero />
        </div>
      </section>

      <Marquee />

      <SectionDivider label="About Aurastic" />
      <SectionTransition><About /></SectionTransition>

      <SectionDivider label="Our Sectors" />
      <SectionTransition><Services /></SectionTransition>

      <SectionDivider label="Who We Serve" />
      <SectionTransition><Audience /></SectionTransition>

      <SectionDivider label="The Framework" />
      <SectionTransition><Process /></SectionTransition>

      <SectionDivider label="Brand Film" />
      <SectionTransition><VideoShowcase /></SectionTransition>

      <SectionDivider label="Recent Works" />
      <SectionTransition><RecentWorks /></SectionTransition>

      <SectionDivider label="The Final Word" />
      <SectionTransition><OneWord /></SectionTransition>
    </>
  );
}
