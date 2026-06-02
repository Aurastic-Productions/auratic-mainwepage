'use client';

import Reveal from '@/components/motion/Reveal';
import Image from 'next/image';
import { useRef } from 'react';

const RECENT_PICS = [
  '/gallery/stage_lights.jpg',
  '/gallery/proshow.JPG',
  '/gallery/IMG_6045.jpg',
  '/gallery/IMG_7888.jpg',
  '/gallery/indoor led .jpg',
  '/gallery/Untitled - 30 May 2026 at 23.47.11.jpg',
  '/gallery/coprate 1.jpg',
  '/gallery/IMG_5041.jpg',
];

export default function RecentWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth * 0.4, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth * 0.4, behavior: 'smooth' });
    }
  };

  return (
    <section id="recent-works" className="relative py-24 bg-void overflow-hidden">
      
      {/* Header and Controls */}
      <div className="px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto mb-12 flex items-end justify-between">
         <Reveal direction="up">
           <div className="flex items-center gap-3 t-kicker mb-4">
              <span className="w-8 h-px bg-magenta/40" />
              <span>Latest</span>
           </div>
           <h2 className="t-display-2 text-white">
              Recent <span className="italic-serif text-gradient-magenta">Works.</span>
           </h2>
         </Reveal>
         
         <Reveal direction="left" delay={0.2} className="hidden sm:flex gap-4">
            <button 
              onClick={scrollLeft} 
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-magenta/50 transition-all"
            >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={scrollRight} 
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-magenta/50 transition-all"
            >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
         </Reveal>
      </div>

      {/* Horizontal Scroll Gallery */}
      <Reveal direction="up" delay={0.2}>
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 px-6 sm:px-12 lg:px-20 overflow-x-auto snap-x snap-mandatory pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {RECENT_PICS.map((pic, i) => (
            <div 
              key={i} 
              className="relative flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden snap-center group cursor-pointer border border-white/5 bg-white/5"
            >
              <Image 
                src={pic}
                alt={`Recent Work ${i+1}`}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 35vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl sm:rounded-3xl pointer-events-none" />
            </div>
          ))}
        </div>
      </Reveal>
      
    </section>
  );
}
