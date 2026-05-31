'use client';

const ITEMS: (string | string[])[] = [
  'Professional Audio System',
  ['Intelligent', 'Lighting System'],
  'LED Visual Experience',
  'Stage Truss',
  'Fabrication',
  'Special Effects',
  'Pyrotechnics',
  'Artist Management',
  'Celebrity Management',
  'Venue Infrastructure',
  ['Décor &', 'Aesthetics'],
  'Event Media Production',
  'Production Management',
  'Event Execution',
];

export default function Marquee() {
  const gradientStyle = {
    background: 'linear-gradient(135deg, #B58FFF, #7700E0)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
  };

  const renderItem = (item: string | string[], i: number) => {
    const label = Array.isArray(item) ? item.join(' ') : item;
    return (
      <span
        key={i}
        className="font-display font-semibold inline-flex items-center gap-6 sm:gap-12 shrink-0"
      >
        <span style={gradientStyle}>{label}</span>
        <span className="text-magenta text-[0.6em]">✧</span>
      </span>
    );
  };

  return (
    <section
      className="py-5 sm:py-7 border-y border-white/[0.08] bg-deep/30 overflow-hidden relative"
      aria-label="Our capabilities"
    >
      {/* Gradient fade edges */}
      <div aria-hidden className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-void to-transparent pointer-events-none" />
      <div aria-hidden className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-void to-transparent pointer-events-none" />

      {/* Outer wrapper clips overflow */}
      <div className="flex whitespace-nowrap">
        {/* Inner track — contains 2 copies, animates the full width of one copy */}
        <div
          className="flex gap-6 sm:gap-12 shrink-0"
          style={{
            animation: 'marquee-track 90s linear infinite',
            fontSize: 'clamp(20px, 3.6vw, 52px)',
            letterSpacing: '-0.01em',
          }}
        >
          {ITEMS.map(renderItem)}
          {ITEMS.map((item, i) => renderItem(item, i + 100))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-track {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}