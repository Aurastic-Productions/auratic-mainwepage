'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHead from '@/components/ui/SectionHead';

const CHAPTERS = [
  {
    kicker: 'Chapter 01',
    title: 'The Stage',
    content: `Long before Aurastic existed as a company, it existed as a feeling. The story began on school stages through dance, choreography, cultural competitions, and live performances where Dwarakesh first discovered the energy that exists between a performer and a crowd. Dance was never just an extracurricular activity. It was the first time he experienced how a room could shift emotionally because of rhythm, timing, movement, and atmosphere.

While performing, his attention slowly moved beyond the stage itself toward the invisible elements shaping the feeling around it. The lighting, the visuals, the music, the transitions, the audience reactions all of it fascinated him equally. He became deeply curious about why certain moments stayed with people long after the performance ended.`,
    meta: 'A performer who watched the room, not just the stage.'
  },
  {
    kicker: 'Chapter 02',
    title: 'The Craft',
    content: `That curiosity naturally led him into editing, visual storytelling, creative design, and event related media during his school years. None of it felt like separate skills. Visuals, music, movement, timing, stage flow, and audience reactions slowly started feeling like different expressions of the same emotion.

Everything felt connected and that connection became the lens through which he saw every event he would ever work on.`,
    meta: 'Different crafts. One invisible thread.'
  },
  {
    kicker: 'Chapter 03',
    title: 'The Convergence',
    content: `When Dwarakesh entered Vel Tech University to pursue Artificial Intelligence and Machine Learning, another side of his thinking began to grow. Technology introduced him to systems, workflows, automation, and structured problem solving while college culturals pulled him deeper into live events.

In his first year, he began training as a DJ, carrying forward a dream held since school. By his second year, he was performing across campus events while simultaneously becoming involved in stage coordination, event curation, production planning, creative direction, artist management, backstage execution, and media systems. Slowly, he became one of the unofficial creative forces behind major cultural events inside the university ecosystem.`,
    meta: 'Technologist meets Artist.'
  },
  {
    kicker: 'Chapter 04',
    title: 'The Crucible',
    content: `That understanding deepened through productions such as Lavaza 2024, the Veera Dheera Sooran audio launch in 2025, Lavaza 2025, the Anirudh audio launch in 2026, and Lavaza 2026. Working alongside major artists and professional production ecosystems exposed him to the pressure, discipline, and synchronization required behind large scale live experiences.

He began understanding how backstage precision creates front stage magic and how unforgettable moments are carefully engineered through timing and atmosphere.`,
    meta: 'Backstage precision creates front stage magic.'
  },
  {
    kicker: 'Chapter 05',
    title: 'The Turning Point',
    content: `Lavaza 2025 became a defining moment. Performing under the identity of DJ Dwara, he played across all three nights inside a fully professional production environment featuring L-Acoustics systems, DiGiCo SD338, and GrandMA3 setups. On the final night, immediately after Karthick Live, he performed in front of a crowd of more than twenty thousand people.

That moment permanently changed the scale of his vision. Events were no longer just performances. They became living systems where creativity, atmosphere, timing, precision, and execution all had to move together in perfect balance.`,
    meta: 'That was the moment the apprenticeship ended.'
  },
  {
    kicker: 'Chapter 06',
    title: 'The Founding',
    content: `Over the years, one realisation became impossible to ignore. Dance, visuals, editing, DJing, stage flow, production, technology, creative direction, and crowd psychology were never truly separate worlds. They were all connected by one invisible purpose creating human feeling.

That realisation became the foundation of Aurastic Productions, officially launched on 15 October 2025. Aurastic was never built to be just another event company. It was built as an artistic execution identity, founded on the belief that event execution itself is an art form. People may forget the schedule, the stage, or the equipment but they never forget how an experience made them feel.`,
    meta: 'One craft. One container. One aura.'
  },
];

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="story" className="section-y-lg bg-void overflow-hidden">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 mb-20 lg:mb-32 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-violet-500/[0.03] border border-white/[0.08] backdrop-blur-sm shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 t-kicker mb-8">
              <span className="w-8 h-px bg-magenta/40" />
              <span>A Word Before You Begin</span>
            </div>

            <h3 className="t-display-3 mb-8 !leading-[1.2]">
              There is a difference between an event that happens, and an{' '}
              <span className="italic-serif text-gradient-magenta">event that is felt</span>.
            </h3>

            <div className="space-y-6 t-body text-ink-muted lg:text-[1.1rem] leading-[1.7]">
              <p>
                The first is a checklist completed. Vendors arrive on time. Sound is loud enough.
                Lights come on at the cue. The event ends, and within a month, the memory of it
                begins to fade.
              </p>
              <p>
                The second is something else entirely. The first guest walks in and feels the room
                hold them. The entire experience was choreographed to land at exactly the right
                volume on exactly the right beat. The audience leaves talking about a moment they
                cannot quite describe but cannot quite forget.
              </p>
              <p className="border-l-2 border-magenta/30 pl-6 py-2 italic font-medium text-ink">
                That feeling, intangible but unmistakable, is what we call an aura.
                <br />
                Aurastic exists to create the second kind.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 self-stretch"
          >
            {/* Image 1 */}
            <div className="relative flex-1 min-h-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] group">
              <Image
                src="/custom/story-atmosphere.jpg"
                alt="Aurastic atmosphere"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="t-kicker !text-white/40 mb-1">Atmosphere</div>
                <div className="t-num text-2xl text-white/10">001</div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative flex-1 min-h-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] group">
              <Image
                src="/custom/story-stage.jpg"
                alt="Aurastic on stage"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="t-kicker !text-white/40 mb-1">On Stage</div>
                <div className="t-num text-2xl text-white/10">002</div>
              </div>
            </div>
          </motion.div>
        </div>

        <SectionHead
          kicker="The Story"
          title={<>The <span className="italic-serif text-gradient-magenta">Chapters</span> of Craft.</>}
          lede={
            <span
              className="text-gradient"
              style={{
                fontSize: 'clamp(17px, 1.4vw, 22px)',
                fontWeight: 500,
                fontFamily: 'var(--font-biko)',
                lineHeight: 1.6,
                background: 'linear-gradient(90deg, #a78bfa 0%, #e879f9 50%, #a78bfa 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-flow 4s linear infinite',
              }}
            >
              Every brand has a moment of birth. Aurastic&apos;s was a decade in the making.
              #anArtisticproduction
            </span>
          }
        />

        <div ref={containerRef} className="relative mt-20">
          {CHAPTERS.map((chapter, index) => (
            <ChapterCard key={index} chapter={chapter} index={index} total={CHAPTERS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterCard({ chapter, index, total }: { chapter: typeof CHAPTERS[0]; index: number; total: number }) {
  return (
    <div className="sticky top-[15vh] mb-[15vh] last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="surface-card-strong p-8 sm:p-12 lg:p-16 grid lg:grid-cols-[0.4fr_1fr] gap-10 lg:gap-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-[13px] sm:text-[18px] font-bold tracking-[0.18em] uppercase text-magenta mb-4" style={{ fontFamily: 'var(--font-bankgothic)' }}>{chapter.kicker}</div>
            <h4 className="t-display-3 uppercase leading-[1.1]">{chapter.title}</h4>
          </div>
          <div className="hidden lg:block">
            <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase text-white/80 mb-3">Focus</div>
            <p className="italic-serif text-white font-medium" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>{chapter.meta}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="t-body !text-[1.1rem] leading-[1.8] text-ink-muted whitespace-pre-wrap">
            {chapter.content}
          </div>
          <div className="lg:hidden mt-8 pt-8 border-t border-white/10">
            <p className="italic-serif text-white font-medium" style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>{chapter.meta}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
