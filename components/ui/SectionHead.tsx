'use client';

import { ReactNode } from 'react';
import Reveal from '@/components/motion/Reveal';

type Props = {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  layout?: 'split' | 'center';
  displaySize?: '1' | '2' | '3';
};

export default function SectionHead({
  kicker,
  title,
  lede,
  className = '',
  layout = 'split',
  displaySize = '3',
}: Props) {
  const displayClass = `t-display-${displaySize}`;

  if (layout === 'center') {
    return (
      <Reveal className={className}>
        <div className="max-w-[58ch] mx-auto text-center mb-12 sm:mb-14 lg:mb-20">
          {kicker && <Kicker text={kicker} center />}
          <h2 className={`${displayClass} ${kicker ? 'mt-5 sm:mt-6' : ''} uppercase overflow-visible`}>{title}</h2>
          {lede && <p className="t-lede mt-5 sm:mt-6 max-w-[52ch] mx-auto">{lede}</p>}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className={className}>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-end mb-12 sm:mb-14 lg:mb-20">
        <div>
          {kicker && <Kicker text={kicker} />}
          <h2 className={`${displayClass} ${kicker ? 'mt-4 sm:mt-5' : ''} max-w-[22ch] uppercase overflow-visible`}>{title}</h2>
        </div>
        {lede && (
          <p className="t-lede max-w-[44ch] lg:justify-self-end lg:pb-2">
            {lede}
          </p>
        )}
      </div>
    </Reveal>
  );
}

function Kicker({ text, center = false }: { text: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 t-kicker ${center ? 'justify-center' : ''}`}>
      <span className="w-7 h-px bg-violet-400/70" />
      <span>{text}</span>
    </div>
  );
}
