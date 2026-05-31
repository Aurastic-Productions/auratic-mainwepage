'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/motion/Reveal';

export default function VisionSection() {
  return (
    <section id="vision" className="section-y bg-void">
      <div className="wrap">


        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden border border-violet-400/20 bg-gradient-to-br from-violet-900/30 via-deep/60 to-void p-10 sm:p-14 lg:p-20"
        >
          {/* Glow */}
          <div aria-hidden className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 10% 0%, rgba(139,92,246,0.2), transparent 60%), radial-gradient(ellipse 50% 50% at 90% 100%, rgba(232,121,249,0.12), transparent 60%)' }} />
            <h2
                className="font-display font-bold tracking-[-0.025em] leading-[1.05] uppercase mb-6 text-center"
                style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
              >
              VISION
              </h2>
          {/* Top accent */}
          <div className="h-[1.5px] w-full mb-10 sm:mb-14"
            style={{ background: 'linear-gradient(90deg, transparent 0%, #a78bfa 40%, #e879f9 70%, transparent 100%)' }} />

          {/* Big italic statement */}
          <h2
            className="italic-serif text-gradient-magenta leading-[1.1] mb-10 sm:mb-14"
            style={{ fontSize: 'clamp(36px, 5vw, 80px)' }}
          >
            The aura, for everyone.
          </h2>

          {/* Body — two columns on desktop */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <p className="text-ink leading-[1.8]" style={{ fontSize: 'clamp(16px, 1.2vw, 20px)' }}>
              To become the benchmark for{' '}
              <span className="italic-serif text-violet-300">artistic event execution</span>{' '}
              in South India, and to build the intelligent platform that makes artistic-grade
              event planning accessible, instant, and trusted — for every client, at every
              budget, across every city.
            </p>
            <p className="text-ink-muted leading-[1.8]" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
              A world where no client has to choose between quality and affordability. Where
              the same standard of execution that today exists only at the top tier of live
              production is available to a college coordinator, a wedding family, and a
              corporate team — through the combination of Aurastic Productions and Aurastic AI.
            </p>
          </div>

          {/* Bottom accent */}
          <div className="h-[1px] w-full mt-10 sm:mt-14"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.3) 50%, transparent 100%)' }} />
        </motion.div>

      </div>
    </section>
  );
}
