'use client';

import { motion } from 'framer-motion';
import SectionHead from '@/components/ui/SectionHead';

const PHASES = [
  {
    num: '01',
    percentage: '60%',
    title: 'Pre-Production',
    color: '#a78bfa',
    colorDim: 'rgba(139,92,246,0.08)',
    borderColor: 'rgba(139,92,246,0.2)',
    glowColor: 'rgba(139,92,246,0.12)',
    desc: 'Requirement gathering, site recce, concept design, final quotation, permissions and compliance.',
    insight: 'Sixty percent of an event is determined before anyone arrives at the venue.',
    bullets: ['Concept & design approval', 'Final quotation acceptance', '50% advance'],
    tags: ['Site Recce', 'Concept Design', 'Vendor Lock', 'Compliance'],
  },
  {
    num: '02',
    percentage: '30%',
    title: 'Production',
    color: '#7C3AED',
    colorDim: 'rgba(124,58,237,0.08)',
    borderColor: 'rgba(124,58,237,0.2)',
    glowColor: 'rgba(124,58,237,0.12)',
    desc: 'Setup, technical rehearsal, live execution, on-ground command, real-time problem solving, invisible direction.',
    insight: 'The work the audience never sees, holding the work they do.',
    bullets: ['Final run-through approval', 'Technical cue lock', 'Live execution'],
    tags: ['Setup', 'Rehearsal', 'Live Command', 'Real-time Direction'],
  },
  {
    num: '03',
    percentage: '10%',
    title: 'Post-Production',
    color: '#c4b5fd',
    colorDim: 'rgba(196,181,253,0.08)',
    borderColor: 'rgba(196,181,253,0.18)',
    glowColor: 'rgba(196,181,253,0.1)',
    desc: 'Dismantling, venue handover, edited media delivery, final invoicing, structured client feedback.',
    insight: 'Closure is as artistic as the opening.',
    bullets: ['Final media confirmation', 'Handover completion', 'Event closure'],
    tags: ['Dismantling', 'Media Delivery', 'Invoicing', 'Feedback'],
  },
];

export default function Process() {
  return (
    <section id="process" className="section-y-lg bg-void">
      <div className="wrap">
        <SectionHead
          title={<>Precision is not an <span className="italic-serif text-gradient-magenta pr-[0.12em] overflow-visible" style={{fontSize:"1.15em",lineHeight:1}}>Accident</span></>}
          lede={
            <span style={{
              fontFamily: 'var(--font-biko)',
              fontSize: 'clamp(17px, 1.4vw, 22px)',
              fontWeight: 500,
              lineHeight: 1.6,
              background: 'linear-gradient(90deg, #a78bfa 0%, #e879f9 50%, #a78bfa 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-flow 4s linear infinite',
              display: 'block',
            }}>
              Every Aurastic event runs through a structured three-phase framework. Heavy pre-production prevents friction on show day.
            </span>
          }
          className="[&>div]:mb-6 sm:[&>div]:mb-8 lg:[&>div]:mb-10"
        />

        <div className="space-y-5">
          {PHASES.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[1.75rem] overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, rgba(14,7,32,0.97) 0%, rgba(7,3,18,0.99) 100%)',
                border: `1px solid ${phase.borderColor}`,
                boxShadow: `0 20px 60px -20px ${phase.glowColor}, inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
            >
              {/* Top accent line */}
              <div className="h-[1.5px]"
                style={{ background: `linear-gradient(90deg, transparent 0%, ${phase.color} 40%, ${phase.color}80 70%, transparent 100%)` }} />

              {/* Corner glow */}
              <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 0%, ${phase.colorDim} 0%, transparent 60%)` }} />

              <div className="relative grid lg:grid-cols-[3fr_4fr_3fr]">

                {/* ── LEFT: Phase identity ── */}
                <div className="flex flex-col justify-between p-8 lg:p-10"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>

                  {/* Watermark % */}
                  <div className="font-bold leading-none select-none"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(48px, 5.5vw, 72px)',
                      color: phase.color,
                      opacity: 0.1,
                      letterSpacing: '-0.02em',
                    }}>
                    {phase.percentage}
                  </div>

                  <div className="mt-6">
                    {/* Phase badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.15em] mb-4"
                      style={{ background: phase.colorDim, color: phase.color, border: `1px solid ${phase.borderColor}` }}>
                      <span className="w-1 h-1 rounded-full" style={{ background: phase.color }} />
                      PHASE {phase.num}
                    </span>
                    <h4 className="t-display-3 uppercase leading-[1.0]" style={{ fontSize: 'clamp(22px, 2.6vw, 38px)' }}>
                      {phase.title}
                    </h4>
                  </div>
                </div>

                {/* ── CENTER: Description ── */}
                <div className="flex flex-col justify-center gap-6 p-8 lg:p-10"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>

                  {/* Main description */}
                  <p className="t-body !text-ink !text-[1rem] leading-[1.85]">{phase.desc}</p>

                  {/* Insight quote */}
                  <div className="flex gap-4 p-4 rounded-xl"
                    style={{ background: phase.colorDim, border: `1px solid ${phase.borderColor}` }}>
                    <span className="text-lg shrink-0 mt-0.5" style={{ color: phase.color }}>"</span>
                    <p className="t-body italic !text-[0.9rem] leading-[1.7]" style={{ color: phase.color + 'cc' }}>
                      {phase.insight}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {phase.tags.map((tag, ti) => (
                      <span key={ti}
                        className="text-[11px] px-3 py-1.5 rounded-full font-medium tracking-wide"
                        style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── RIGHT: Sign-off ── */}
                <div className="flex flex-col justify-center p-8 lg:p-10"
                  style={{ background: `linear-gradient(160deg, ${phase.colorDim} 0%, transparent 60%)` }}>

                  {/* Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-5 h-px" style={{ background: phase.color + '80' }} />
                    <p className="t-kicker !text-[11px] tracking-[0.2em]" style={{ color: phase.color + 'aa' }}>
                      Sign-off Requirements
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {phase.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + bi * 0.08, duration: 0.45 }}
                        className="flex items-center gap-3 p-3 rounded-xl"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                          style={{ background: phase.colorDim, color: phase.color, border: `1px solid ${phase.borderColor}` }}>
                          {bi + 1}
                        </span>
                        <p className="t-body !text-ink !text-[0.9rem] font-medium">{b}</p>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Progress indicator */}
                  <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="t-kicker !text-[10px] !text-white/25">Phase weight</p>
                      <p className="t-num !text-[13px] font-bold" style={{ color: phase.color }}>{phase.percentage}</p>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: phase.percentage }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${phase.color}, ${phase.color}80)` }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}