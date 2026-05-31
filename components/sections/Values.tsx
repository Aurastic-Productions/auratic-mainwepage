'use client';

import Reveal from '@/components/motion/Reveal';

const VALUES = [
  {
    n: '01',
    title: 'Artistry Over Transaction',
    body: 'Every event is a creative work, not a service industry deliverable. We approach every brief as a director approaches a film.',
  },
  {
    n: '02',
    title: 'Hands On Leadership',
    body: 'Leadership at Aurastic is defined by presence, not distance. The founder is on the ground, on every major event, holding the aura intact.',
  },
  {
    n: '03',
    title: 'Technical Flow Over Technical Delivery',
    body: 'We do not just deliver equipment. We engineer the choreography between every element sound, light, visuals, stage, performance into one unified experience.',
  },
  {
    n: '04',
    title: 'The Self-Made Standard',
    body: 'Every skill inside Aurastic was built through hands on work, not borrowed from a manual. The standard we hold is the standard we earned.',
  },
  {
    n: '05',
    title: 'Every Event Matters',
    body: 'Size does not decide effort. A flashmob and a crore level concert receive the same artistic commitment. The scale shifts. The standard does not.',
  },
  {
    n: '06',
    title: 'Uncompromised Equipment Standards',
    body: 'L-Acoustics, DiGiCo, GrandMA, RCF and equivalent tier only. The tools we use are not negotiable because the experience we create is not negotiable.',
  },
];

export default function Values() {
  return (
    <section id="values" className="section-y border-y border-white/[0.06] bg-gradient-to-b from-deep/30 to-void">
      <div className="wrap">


        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start mb-14">
          <Reveal direction="up" delay={0.1}>
            <h2
              className="font-display font-bold tracking-[-0.025em] leading-[1.0] uppercase"
              style={{ fontSize: 'clamp(40px, 5.5vw, 88px)' }}
            >
              Values
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <span style={{
              fontFamily: 'var(--font-biko)',
              fontSize: 'clamp(17px, 1.4vw, 22px)',
              fontWeight: 500,
              lineHeight: 1.75,
              background: 'linear-gradient(90deg, #a78bfa 0%, #e879f9 50%, #a78bfa 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-flow 4s linear infinite',
              display: 'block',
            }}>
              Artistry over transaction. Hands-on leadership. Technical flow over technical delivery.
              The self-made standard. Every event matters — size does not decide effort.
              Uncompromised equipment standards.
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.08] rounded-[20px] sm:rounded-[24px] overflow-hidden">
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={(i % 3) * 0.08} direction="up">
              <div className="p-6 sm:p-7 lg:p-8 bg-void h-full">
                <div className="text-[18px] sm:text-[18px] tracking-[0.18em] uppercase text-violet-300 font-semibold mb-3">
                  {v.n}
                </div>
                <h4
                  className="font-display font-semibold tracking-[-0.015em] leading-[1.15] mb-3"
                  style={{ fontSize: 'clamp(28px, 1.6vw, 26px)' }}
                >
                  {v.title}
                </h4>
                <p
                  className="text-ink-muted leading-[1.6]"
                  style={{ fontSize: 'clamp(20px, 1.05vw, 17px)' }}
                >
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
