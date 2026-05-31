'use client';

/**
 * FloatingOrbs — pure CSS animations, no JS/Framer overhead.
 * Blur + large radial gradients are GPU-composited so they don't
 * block the main thread.
 */
export default function FloatingOrbs({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(139,92,246,0.45), rgba(139,92,246,0) 70%)',
          filter: 'blur(80px)',
          animation: 'orb-drift-a 26s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute -bottom-[25%] -right-[15%] w-[60vw] h-[60vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at 60% 60%, rgba(109,40,217,0.30), rgba(109,40,217,0) 70%)',
          filter: 'blur(100px)',
          animation: 'orb-drift-b 34s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <style>{`
        @keyframes orb-drift-a {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(6%,-5%) scale(1.06); }
          66%      { transform: translate(-3%,4%) scale(0.97); }
        }
        @keyframes orb-drift-b {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-7%,3%) scale(1.05); }
          70%      { transform: translate(4%,-6%) scale(1.08); }
        }
      `}</style>
    </div>
  );
}
