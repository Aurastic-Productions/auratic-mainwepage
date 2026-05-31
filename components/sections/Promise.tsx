'use client';

import { motion } from 'framer-motion';
import SectionHead from '@/components/ui/SectionHead';

const PROMISES = [
  {
    tag: '01',
    target: 'To the Client',
    lede: 'Every client walks away feeling',
    color: '#a78bfa',
    colorDim: 'rgba(139,92,246,0.08)',
    borderColor: 'rgba(139,92,246,0.2)',
    items: [
      { t: 'Stress-free',     d: 'Hand the event to us and sleep through the night before.' },
      { t: 'Impressed',       d: 'We exceed the brief — we do not merely meet it.' },
      { t: 'Surprised',       d: 'Moments and details you never thought to ask for.' },
      { t: 'Inside the Aura', d: 'The mood and energy held from first guest to last light.' },
    ],
  },
  {
    tag: '02',
    target: 'To the Audience',
    lede: 'Every guest inside an Aurastic room will feel',
    color: '#6D28D9',
    colorDim: 'rgba(109,40,217,0.08)',
    borderColor: 'rgba(109,40,217,0.2)',
    items: [
      { t: 'Goosebumps',               d: 'A physical response to a moment designed to land.' },
      { t: 'Part of something bigger',  d: 'Not a spectator — inside the experience.' },
      { t: 'A "wow" moment',            d: 'At least one engineered beat that forces focus.' },
      { t: '"This is different"',       d: 'A visible sense that this is above industry standard.' },
    ],
  },
];

const CRAFT = [
  { n: '01', t: 'Full site recce',            sub: 'Conducted before every event without exception' },
  { n: '02', t: 'Pro-grade checks',           sub: 'Sound, lighting & LED verified at professional standards' },
  { n: '03', t: 'On-schedule setup',          sub: 'Completed with buffer time built in' },
  { n: '04', t: 'Lighting cues locked',       sub: 'Theme-based cues confirmed at rehearsal' },
  { n: '05', t: 'Client communication',       sub: 'Kept in the loop at every major milestone' },
];

export default function Promise() {
  return (
    <section id="promise" className="section-y-lg bg-void">
      <div className="wrap">

        <SectionHead
          kicker="The Promise"
          title={<>The Experiential <span className="italic-serif text-gradient-magenta pr-[0.12em] overflow-visible" style={{fontSize:"1.15em",lineHeight:1}}>Contract</span></>}
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
              What every client and every audience is entitled to — regardless of event size or budget.
            </span>
          }
        />

        {/* ── Promise cards ── */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mb-5 lg:mb-6">
          {PROMISES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[1.75rem] overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, rgba(14,7,32,0.97) 0%, rgba(7,3,18,0.99) 100%)',
                border: `1px solid ${p.borderColor}`,
                boxShadow: `0 24px 80px -24px ${p.colorDim}, inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: `radial-gradient(circle at 80% 0%, ${p.colorDim} 0%, transparent 65%)` }} />

              {/* Top bar */}
              <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-4">
                  <span className="t-num text-[18px] px-3 py-1.5 rounded-full border font-bold tracking-widest"
                    style={{ color: p.color, borderColor: p.borderColor, background: p.colorDim }}>
                    {p.tag}
                  </span>
                  <h4 className="t-display-3 uppercase text-white" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>{p.target}</h4>
                </div>
              </div>

              {/* Lede */}
              <p className="px-8 pt-5 pb-1 t-body !text-white/60 !text-[0.85rem] italic">{p.lede}:</p>

              {/* Items */}
              <div className="px-8 pb-8 pt-3 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {p.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + ii * 0.06, duration: 0.5 }}
                    className="group flex flex-col gap-1.5 p-4 rounded-xl transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = p.borderColor)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)')}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                      <p className="t-kicker !text-[15px] !text-white font-bold" style={{ color: p.color, fontFamily: 'var(--font-biko)' }}>{item.t}</p>
                    </div>
                    <p className="t-body !text-ink-muted !text-[0.9rem] leading-[1.65] pl-3.5">{item.d}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Craft commitments ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[1.75rem] overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, rgba(14,7,32,0.7) 0%, rgba(7,3,18,0.85) 100%)',
            border: '1px solid rgba(199,180,253,0.1)',
            backdropFilter: 'blur(16px)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          {/* Top accent line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

          <div className="p-8 sm:p-10 lg:p-12">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-px bg-magenta/60" />
                  <p className="t-kicker !text-magenta/80 !text-[18px]">To the Craft</p>
                </div>
                <h4 className="t-display-3 uppercase" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
                  Operational Non-Negotiables
                </h4>
              </div>
              <p className="t-body !text-white/60 !text-[0.85rem] max-w-[28ch] sm:text-right">
                Every Aurastic event is held to these five standards. No exceptions.
              </p>
            </div>

            {/* 5 items — horizontal on desktop */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {CRAFT.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="group relative flex flex-col gap-3 p-5 rounded-2xl transition-all duration-300 cursor-default"
                  style={{
                    background: 'rgba(139,92,246,0.04)',
                    border: '1px solid rgba(139,92,246,0.12)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.09)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.28)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.12)';
                  }}
                >
                  {/* Number */}
                  <span className="t-num text-[15px] w-9 h-9 rounded-full flex items-center justify-center font-bold"
                    style={{ background: 'rgba(139,92,246,0.18)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.3)' }}>
                    {c.n}
                  </span>
                  {/* Title */}
                  <p className="t-kicker !text-white/100 !text-[14px] leading-snug" style={{ fontFamily: 'var(--font-biko)' }}>{c.t}</p>
                  {/* Sub */}
                  <p className="t-body !text-white/80 !text-[0.82rem] leading-[1.6]">{c.sub}</p>
                  {/* Bottom glow on hover */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}