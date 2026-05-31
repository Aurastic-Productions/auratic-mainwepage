'use client';

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';

const ITEMS = [
  { src: '/gallery/cultural.jpg', alt: 'Campus Festival' },
  { src: '/gallery/IMG_5041.jpg', alt: 'Audio Rig' },
  { src: '/gallery/proshow.JPG', alt: 'Concert' },
  { src: '/gallery/Untitled - 30 May 2026 at 23.47.11.jpg', alt: 'Lighting Beams' },
  { src: '/gallery/DSC04012.JPG', alt: 'Fireworks' },
  { src: '/gallery/indoor led .jpg', alt: 'Indoor LED' },
  { src: '/gallery/Untitled - 30 May 2026 at 22.33.41.jpg', alt: 'Truss Rigging' },
  { src: '/gallery/coprate 1.jpg', alt: 'Corporate Stage' },
  { src: '/gallery/IMG_6045.jpg', alt: 'Live Performance' },
  { src: '/gallery/IMG_7888.jpg', alt: 'Aurastic Experience' },
  { src: '/gallery/IMG_2604.jpg', alt: 'Night Vibe' },
  { src: '/gallery/IMG_2597.jpg', alt: 'Dance Flow' },
  { src: '/gallery/IMG_2599.jpg', alt: 'Energy & Motion' },
  { src: '/gallery/IMG_6044.jpg', alt: 'Aesthetics' },
  { src: '/gallery/Untitled - 30 May 2026 at 22.16.43.jpg', alt: 'Scaffolding Build' },
  { src: '/gallery/Untitled - 30 May 2026 at 22.22.06.jpg', alt: 'LED Panel Rigging' },
  { src: '/gallery/Untitled-2-08.jpg', alt: 'Celebrity', pos: 'object-top' },
  { src: '/gallery/corprate .jpg', alt: 'Corporate Setup' },
  { src: '/gallery/Direction.jpg', alt: 'Direction' },
  { src: '/gallery/Visuals.jpg', alt: 'Visuals' },
  { src: '/gallery/aesthetics.jpg', alt: 'Aesthetics' },
  { src: '/gallery/audio.jpg', alt: 'Audio' },
  { src: '/gallery/lighting.jpg', alt: 'Lighting' },
  { src: '/gallery/media.jpg', alt: 'Media' },
  { src: '/gallery/operatins.png', alt: 'Operations' },
  { src: '/gallery/sfx.JPG', alt: 'SFX' },
  { src: '/gallery/structure.png', alt: 'Structure' }
];

// Split the 27 items into 3 rows of 9
const ROW_1 = ITEMS.slice(0, 9);
const ROW_2 = ITEMS.slice(9, 18);
const ROW_3 = ITEMS.slice(18, 27);

export default function Gallery() {
  return (
    <section id="work" className="relative py-24 bg-void overflow-hidden">
      <div className="px-6 sm:px-12 lg:px-20 max-w-[1600px] mx-auto mb-16">
        {/* Header */}
        <Reveal direction="up">
          <div className="flex items-center gap-3 t-kicker mb-4">
            <span className="w-8 h-px bg-magenta/40" />
            <span>Visuals</span>
          </div>
          <h2 className="t-display-2 text-white">
            The <span className="italic-serif text-gradient-magenta pr-4">Gallery</span>
          </h2>
        </Reveal>
      </div>

      {/* Cinematic Marquee Section */}
      <div className="flex flex-col gap-4 sm:gap-6 px-0 sm:px-4">
        <MarqueeRow items={ROW_1} direction="left" speed="60s" />
        <MarqueeRow items={ROW_2} direction="right" speed="65s" />
        <MarqueeRow items={ROW_3} direction="left" speed="55s" />
      </div>

      {/* Embedded Styles for Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}} />
    </section>
  );
}

function MarqueeRow({ items, direction, speed }: { items: typeof ITEMS, direction: 'left' | 'right', speed: string }) {
  return (
    <div className="group/row relative flex overflow-hidden w-full">
      <div 
        className={`flex w-fit ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} hover:[animation-play-state:paused] active:[animation-play-state:paused] group-hover/row:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items].map((it, idx) => (
          <div 
            key={idx} 
            className="group/item relative w-[220px] sm:w-[350px] lg:w-[420px] h-[150px] sm:h-[250px] lg:h-[300px] shrink-0 mx-2 sm:mx-3 rounded-[16px] sm:rounded-[20px] overflow-hidden cursor-pointer"
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              unoptimized
              sizes="(max-width: 640px) 250px, 400px"
              className={`object-cover transition-transform duration-700 ease-out group-hover/row:brightness-50 group-hover/item:!brightness-110 group-hover/item:scale-110 ${it.pos || 'object-center'}`}
            />
            
            {/* Dark overlay dims all items when the row is hovered, BUT becomes fully transparent on the specifically hovered item */}
            <div className="absolute inset-0 bg-void/60 opacity-0 group-hover/row:opacity-100 group-hover/item:!opacity-0 transition-opacity duration-500 pointer-events-none" />
            
            {/* Title appears only on the hovered item */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 z-20 pointer-events-none flex justify-center">
              <span className="px-4 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-void/80 backdrop-blur-md text-white text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] border border-white/10 text-center">
                {it.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
