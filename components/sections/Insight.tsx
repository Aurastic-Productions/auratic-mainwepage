'use client';

import Reveal from '@/components/motion/Reveal';
import SectionHead from '@/components/ui/SectionHead';

export default function Insight() {
  return (
    <section
      id="insight"
      className="section-y border-y border-white/[0.06] bg-gradient-to-b from-deep/40 to-void"
    >
      <div className="wrap">
        <SectionHead
          kicker="The industry insight"
          title={
            <>
              What we see that{' '}
              <span className="italic-serif text-gradient-magenta">others don&rsquo;t.</span>
            </>
          }
          lede={
            <span style={{
              fontFamily: 'var(--font-biko)',
              fontSize: 'clamp(20px, 1.4vw, 22px)',
              fontWeight: 500,
              lineHeight: 1.6,
              background: 'linear-gradient(90deg, #a78bfa 0%, #e879f9 50%, #a78bfa 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-flow 4s linear infinite',
              display: 'block',
            }}>
              The event industry in India is built on deliverables. Every company sells a product &ldquo;here is your sound,&rdquo; &ldquo;here is your lighting,&rdquo; &ldquo;here is your LED wall.&rdquo; Clients pay for equipment. The transaction ends there.
            </span>
          }
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="up" duration={0.9}>
            <div className="rounded-[20px] sm:rounded-[24px] border border-white/[0.10] bg-white/[0.04] p-7 sm:p-9 h-full">
              <div className="text-[15px] tracking-[0.2em] uppercase text-violet-300 font-bold">
                The Gap
              </div>
              <h3
                className="mt-3 font-display font-bold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(30px, 2.8vw, 42px)' }}
              >
                CLIENTS NEED MORE THAN EQUIPMENT.
              </h3>
              <p className="mt-2 italic-serif text-violet-300" style={{ fontSize: 'clamp(20px, 2vw, 32px)' }}>
                They Need Flow.
              </p>
              <p
                className="mt-5 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(20px, 1.2vw, 20px)' }}
              >
                Clients know how they want an event to feel. What they rarely understand is how
                sound, lighting, visuals, stage design, and live execution must work together to
                create that feeling.
              </p>
              <p
                className="mt-4 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(20px, 1.2vw, 20px)' }}
              >
                Most vendors sell equipment.{' '}
                <span className="italic-serif text-violet-200">Aurastic translates vision into experience.</span>
              </p>
              <p
                className="mt-5 font-display text-violet-200"
                style={{ fontSize: 'clamp(30px, 1.35vw, 23px)' }}
              >
                The gap isn&rsquo;t pricing.{' '}
                <span className="italic-serif text-magenta">It&rsquo;s technical flow.</span>
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" duration={0.9} delay={0.1}>
            <div className="rounded-[20px] sm:rounded-[24px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.10] to-magenta/[0.05] p-7 sm:p-9 h-full">
              <div className="text-[15px] tracking-[0.2em] uppercase text-magenta font-bold">
                How Aurastic closes it
              </div>
              <h3
                className="mt-3 font-display font-bold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(30px, 2.8vw, 42px)' }}
              >
                WE SHARE MORE THAN DELIVERABLES.
              </h3>
              <p className="mt-2 italic-serif text-gradient-magenta" style={{ fontSize: 'clamp(20px, 2vw, 32px)' }}>
                We Share Understanding.
              </p>
              <p
                className="mt-5 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(20px, 1.2vw, 20px)' }}
              >
                Aurastic shares the technical flow behind every decision, helping clients understand
                how ideas become executable reality.
              </p>
              <p
                className="mt-4 text-ink-muted leading-[1.7]"
                style={{ fontSize: 'clamp(20px, 1.2vw, 20px)' }}
              >
                As the event evolves, we translate vision into action while protecting both{' '}
                <span className="italic-serif text-violet-200">creative intent</span> and{' '}
                <span className="italic-serif text-violet-200">operational precision</span>.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
                <Stat n="12" l="Service sectors" />
                <Stat n="1" l="Quotation" />
                <Stat n="1" l="Accountability" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl border border-white/[0.10] bg-void/40 p-3 sm:p-4 text-center">
      <div
        className="font-display font-extrabold text-white leading-none"
        style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
      >
        {n}
      </div>
      <div className="mt-1 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-ink-muted">
        {l}
      </div>
    </div>
  );
}
