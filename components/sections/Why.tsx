'use client';

import { motion } from 'framer-motion';
import SectionHead from '@/components/ui/SectionHead';

const REASONS = [
  {
    num: '01',
    title: 'Artistic Direction',
    icon: '✦',
    desc: 'We do not just provide equipment we provide direction. Every light cue and audio mix is a contribution to the event\'s artistic aura.',
  },
  {
    num: '02',
    title: 'Unified Production',
    icon: '◈',
    desc: 'One team handling audio, lighting, LED, stage, SFX, and media. Zero vendor friction. One quotation. One accountability.',
  },
  {
    num: '03',
    title: 'Technical Versatility',
    icon: '◇',
    desc: 'From a 20,000 crowd festival to a corporate VIP hospitality, our range of execution is wide, tested, and consistent.',
  },
  {
    num: '04',
    title: 'Hands-on Leadership',
    icon: '⬡',
    desc: 'Operating from the console, not just the office. Our leadership understands the equipment as deeply as the business.',
  },
  {
    num: '05',
    title: 'Precision Framework',
    icon: '◉',
    desc: 'Our 60/30/10 commitment ensures that by show day, the "event that is felt" is already fully engineered.',
  },
  {
    num: '06',
    title: 'AI-Enhanced Future',
    icon: '⬢',
    desc: 'Data driven systems optimise acoustics and visual choreography ensuring every venue sounds and looks its absolute best.',
  },
];

export default function Why() {
  return (
    <section id="why" className="section-y-lg bg-void border-t border-white/5">
      <div className="wrap">
        <SectionHead
          kicker="Why Us"
          title={<>The Aurastic <span className="italic-serif text-gradient-magenta pr-[0.12em] overflow-visible" style={{fontSize:"1.15em",lineHeight:1}}>Difference</span></>}
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
              Most companies offer equipment. We offer an execution. Six reasons why clients choose the Aurastic Aura.
            </span>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[1.5rem] overflow-hidden cursor-default"
              style={{
                background: 'linear-gradient(160deg, rgba(14,7,32,0.95) 0%, rgba(7,3,18,0.98) 100%)',
                border: '1px solid rgba(199,180,253,0.08)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.3)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px -16px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(199,180,253,0.08)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.04)';
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 0%, rgba(139,92,246,0.07) 0%, transparent 60%)' }} />

              {/* Top accent line — appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.7), rgba(109,40,217,0.5), transparent)' }} />

              <div className="relative p-7 sm:p-8 flex flex-col gap-5 h-full">

                {/* Header row */}
                <div className="flex items-start justify-between">
                  {/* Icon circle */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{
                      background: 'rgba(139,92,246,0.1)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      color: '#a78bfa',
                      transition: 'background 0.3s, border-color 0.3s',
                    }}>
                    {r.icon}
                  </div>
                  {/* Number */}
                  <span className="t-num text-[18px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(139,92,246,0.08)', color: 'rgba(167,139,250,0.5)', border: '1px solid rgba(139,92,246,0.15)' }}>
                    {r.num}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-white/8 to-transparent" />

                {/* Title */}
                    <h4 className="t-display-3 uppercase leading-[1.05] group-hover:text-white transition-colors duration-300">
                  {r.title}
                </h4>

                {/* Description */}
                <p className="t-body !text-ink-muted !text-[0.92rem] leading-[1.75] flex-1">
                  {r.desc}
                </p>

                {/* Bottom arrow — appears on hover */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span className="w-4 h-px bg-violet-400/60" />
                  <span className="t-kicker !text-violet-400/60 !text-[10px]">Aurastic Standard</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}