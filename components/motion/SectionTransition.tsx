'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Lightweight section fade-in using IntersectionObserver.
 * No scroll listeners, no useTransform — zero JS per frame.
 */
export default function SectionTransition({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
