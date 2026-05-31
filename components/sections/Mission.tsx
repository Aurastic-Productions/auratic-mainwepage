'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/motion/Reveal';

const PILLARS = [
  { label: 'Artistic Precision', desc: 'Every brief is treated as a creative direction, not a checklist.' },
  { label: 'Technical Depth',    desc: 'Sound, light, visuals, stage — engineered as one unified flow.' },
  { label: 'Uncompromising Aura', desc: 'The feeling the client imagined is the outcome we protect.' },
];

export default function Mission() {
  return (
    <section id="mission" className="section-y border-y border-white/[0.06] bg-gradient-to-b from-deep/20 to-void">
      <div className="wrap">



        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">

          {/* Left — statement */}
          <Reveal direction="up" delay={0.1}>
            <div className="border-l-2 border-magenta/40 pl-8 sm:pl-10">
              <h2
                className="font-display font-bold tracking-[-0.025em] leading-[1.05] uppercase mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
              >
                Mission
              </h2>
              <p className="text-ink leading-[1.8] mb-5" style={{ fontSize: 'clamp(24px, 1.2vw, 20px)' }}>
                Aurastic exists to treat every event as a work of art — planning, designing, and
                executing with{' '}
                <span className="italic-serif text-violet-300">artistic precision</span>,{' '}
                <span className="italic-serif text-violet-300">technical depth</span>, and an
                uncompromising commitment to the aura the client imagined.
              </p>
              <p className="text-ink-muted leading-[1.8]" style={{ fontSize: 'clamp(20px, 1.1vw, 18px)' }}>
                We do not separate the creative from the technical. Every decision — from the
                first site recce to the final cue — is made in service of one outcome: an
                experience the audience cannot forget.
              </p>
              <p className="mt-7 italic-serif text-gradient-magenta font-medium" style={{ fontSize: 'clamp(18px, 1.3vw, 22px)' }}>
                Every event deserves an aura. We create it.
              </p>
            </div>
          </Reveal>

          {/* Right — three pillars */}
          <div className="flex flex-col gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-7 rounded-[18px] border border-white/[0.10] bg-white/[0.03]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-magenta shrink-0" />
                  <h4 className="font-display font-bold tracking-[-0.01em]"
                    style={{ fontSize: 'clamp(24px, 1.2vw, 20px)' }}>
                    {p.label}
                  </h4>
                </div>
                <p className="text-ink-muted leading-[1.65] pl-5"
                  style={{ fontSize: 'clamp(18px, 1vw, 16px)' }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
