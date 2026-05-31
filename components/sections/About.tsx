'use client';

import Reveal from '@/components/motion/Reveal';
import AnimatedCounter from '@/components/motion/AnimatedCounter';

const STAMPS = [
  'AURA',
  'ARTISTIC',
  'CREATIVITY',
  'CRAFTED',
  'PRECISE'
];

const STATS = [
  { value: 20, prefix: '',  suffix: '+',  label: 'Events Delivered' },
  { value: 10, prefix: '₹', suffix: 'L+', label: 'Combined Turnover' },
  { value: 10, prefix: '',  suffix: '+',  label: 'Clients Served' },
  { value: 8,  prefix: '',  suffix: '',   label: 'Months Operating' },
];

const PILLARS = [
  { n: 'A', title: 'Artistic Commitment',         body: 'Every event whether a flashmob or a crore level concert is approached with the same seriousness of craft, atmosphere, and execution. Scale changes. Commitment never does.' },
  { n: 'U', title: 'Unified Flow',                body: 'Sound, lighting, visuals, stage movement, artist timing, and audience energy are never treated as separate elements. Aurastic designs them as one synchronized experience.' },
  { n: 'R', title: 'Real Collaborative Knowledge', body: 'Clients should understand the experience being created around them. Every project is collaborative, transparent, and built on shared technical understanding not just deliverables. The knowledge moves with the experience, not just the invoice.' },
  { n: 'A', title: 'Atmosphere First',             body: 'Before equipment, before schedules, before production plans we focus on one thing: how the experience should feel. Every execution decision is made to protect and amplify that atmosphere.' },
  { n: 'S', title: 'Synchronized Execution',      body: 'Great experiences are built through precision. Timing, coordination, transitions, rehearsals, and backstage flow are carefully aligned so the audience experiences effortless immersion.' },
  { n: 'T', title: 'Technical Flow',               body: 'We do not simply provide equipment. We engineer the choreography between sound, light, visuals, stage, and performance that transforms technical systems into emotional experiences.' },
  { n: 'I', title: 'Invisible Direction',          body: 'The best event direction is rarely noticed directly. The audience should never feel the complexity behind the execution only the emotion flowing naturally through the experience.' },
  { n: 'C', title: 'Crafted Experiences',          body: 'Nothing inside Aurastic is treated as generic. Every visual, transition, cue, stage moment, and execution detail is intentionally crafted to leave a lasting emotional impact.' },
];

export default function About() {
  return (
    <section id="about" className="section-y">
      <div className="wrap">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20 items-start">

          {/* ── Left column ── */}
          <div className="lg:sticky lg:top-32">

            <div className="t-kicker flex items-center gap-3">
              <span className="font-display font-bold tracking-[0.04em] text-magenta">[ I ]</span>
              <span className="w-7 h-px bg-violet-400/70" />
              Our Philosophy
            </div>

            <Reveal direction="up" className="mt-8 mb-4">
              <h2 className="t-display-2 max-w-[14ch] uppercase">Not a vendor.</h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h2 className="t-display-2 italic-serif text-violet-300 max-w-[16ch] mt-2 normal-case">
                An artistic execution company.
              </h2>
            </Reveal>

            <Reveal delay={0.3} direction="fade">
              <div className="mt-6 sm:mt-7 space-y-4 max-w-[58ch] t-body">
                <p>
                  Aurastic designs, plans, and delivers events as complete artistic
                  experiences. We hold every event , a flashmob,
                  a weddings in lakhs, a crore level concert to the same standard of
                  craft. The scale shifts. The artistic commitment does not.
                </p>
                <p>
                  Most companies sell equipment. Aurastic sells{' '}
                  <em className="text-violet-200 not-italic font-medium">technical flow</em>
                  {' '},the choreography that ties sound, light, LED, stage, and
                  performance into the experience the client originally imagined.
                </p>
                <p className="text-violet-200 italic-serif text-[15px] sm:text-[16px]">
                  "The knowledge travels with the client, not just the invoice."
                </p>
              </div>
            </Reveal>

            {/* Stamps */}
            <Reveal delay={0.4} direction="up" stagger>
              <div className="mt-7 sm:mt-8 flex flex-wrap gap-2 sm:gap-2.5">
                {STAMPS.map((s) => (
                  <span
                    key={s}
                    className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-white/[0.18] text-[12.5px] sm:text-[13px] font-medium text-violet-200 bg-violet-500/[0.06]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Stats box */}
            <Reveal delay={0.5} direction="zoom">
              <div className="relative mt-6 grid grid-cols-2 gap-6 sm:gap-8 p-10 rounded-[20px] sm:rounded-[24px] border border-white/[0.22] bg-gradient-to-br from-violet-900/50 to-surface/60 overflow-hidden max-w-[700px]">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 80% at 100% 0%, rgba(232,121,249,0.2), transparent 60%)',
                  }}
                />
                {STATS.map((st) => (
                  <div key={st.label} className="relative">
                    <strong
                      className="block font-num font-bold tracking-[-0.01em] leading-none text-gradient"
                      style={{ fontSize: 'clamp(36px, 4.4vw, 64px)' }}
                    >
                      <AnimatedCounter
                        to={st.value}
                        duration={2}
                        prefix={st.prefix}
                        suffix={st.suffix}
                      />
                    </strong>
                    <span
                      className="block mt-2.5 font-bankgothic tracking-[0.18em] uppercase text-ink-muted"
                      style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}
                    >
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
          {/* ── end left column ── */}

          {/* ── Right column — AURASTIC pillars ── */}
          <Reveal direction="right" distance={50}>
            <div className="t-kicker mb-6">What We Stand For</div>
            <ol className="relative space-y-5 sm:space-y-6">
              <span
                aria-hidden
                className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 via-magenta/30 to-transparent"
              />
              {PILLARS.map((p, i) => (
                <Reveal key={i} delay={i * 0.08} direction="up">
                  <li className="relative pl-12 sm:pl-14">
                    <span className="absolute left-0 top-1 w-7 h-7 grid place-items-center rounded-full border border-violet-400/40 bg-deep/60 backdrop-blur font-display font-bold text-[13px] text-magenta">
                      {p.n}
                    </span>
                    <h3 className="t-h4 text-ink">{p.title}</h3>
                    <p className="mt-1.5 t-body max-w-[58ch]">{p.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Reveal>
          {/* ── end right column ── */}

        </div>
      </div>
    </section>
  );
}
