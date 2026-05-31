'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

type Props = {
  label?: string;
};

/**
 * Quiet editorial divider — a hairline that sweeps in with a small
 * label. No sparkles, no theatre. Used sparingly between major
 * acts of the page.
 */
export default function SectionDivider({ label }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const line = el.querySelector<HTMLElement>('[data-line]');
    const tag = el.querySelector<HTMLElement>('[data-label]');
    if (!line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        },
      );
      if (tag) {
        gsap.fromTo(
          tag,
          { opacity: 0, y: 6 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="relative py-8 sm:py-12 pointer-events-none flex justify-center items-center w-full"
      aria-hidden
    >
      <div className="w-full max-w-[90%] mx-auto relative flex items-center justify-center gap-4 sm:gap-6">
        <div className="relative flex-1 h-px">
          <div
            data-line
            className="absolute inset-0 origin-right"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6))',
              willChange: 'transform',
            }}
          />
        </div>
        
        {label && (
          <span
            data-label
            className="shrink-0 tracking-[0.4em] uppercase"
            style={{
              fontFamily: 'var(--font-bankgothic)',
              fontSize: 'clamp(16px, 1.4vw, 20px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.75)',
              letterSpacing: '0.4em',
            }}
          >
            {label}
          </span>
        )}
        
        <div className="relative flex-1 h-px">
          <div
            className="absolute inset-0 origin-left"
            style={{
              background: 'linear-gradient(270deg, transparent, rgba(139,92,246,0.6))',
            }}
          />
        </div>
      </div>
    </div>
  );
}


