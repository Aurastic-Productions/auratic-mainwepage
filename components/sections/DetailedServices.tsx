'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/motion/Reveal';
import Image from 'next/image';

const SECTORS = [
  { n: '01', tag: 'Sound',      title: 'Professional Sound Systems',       desc: 'Line arrays, subwoofers, mixing consoles, microphones, DJ systems, engineers, and full technical support.' },
  { n: '02', tag: 'Lighting',   title: 'Intelligent Lighting Systems',     desc: 'Moving heads, LED PARs, blinders, follow spots, DMX consoles, haze machines, and certified programmers.' },
  { n: '03', tag: 'Visuals',    title: 'LED Visual Experience',            desc: 'Main-stage LED walls, side screens, processors, media servers, VJ systems, and live visual mixing.' },
  { n: '04', tag: 'Structure',  title: 'Stage Truss & Fabrication',        desc: 'Stage platforms, risers, goal-post truss, backdrop frameworks, barricading, and structural engineering.' },
  { n: '05', tag: 'SFX & Fireworks',        title: 'Special Effects & Pyrotechnics',   desc: 'Cold pyro, CO₂ jets, sparkulars, confetti, fog, haze, and licensed pyro operations.' },
  { n: '06', tag: 'Celebrity',     title: 'Artists & Celebrity Management',   desc: 'Artist booking, celebrity handling, green room, technical riders, and stage-entry choreography.' },
  { n: '07', tag: 'Power & Safety',      title: 'Venue Infrastructure & Utilities', desc: 'Generators, power distribution, electrical cabling, load management, and safety systems.' },
  { n: '08', tag: 'Decor & Aesthetics', title: 'Decor & Aesthetics',               desc: 'Welcome arches, banners, photo booths, LED backdrops, floral decor, and branding installations.' },
  { n: '09', tag: 'Design & Media',      title: 'Event Media Production',           desc: 'Photography, cinematic videography, drone coverage, live video mixing, highlight reels, and aftermovies.' },
  { n: '10', tag: 'Operations & Logistics', title: 'Logistics & Operations',           desc: 'Equipment transport, crew deployment, setup, dismantling, vendor coordination, and contingency ops.' },
  { n: '11', tag: 'Compliance', title: 'Permissions & Licensing',          desc: 'Venue NOCs, fire clearances, music licences, public event permissions, and regulatory documentation.' },
  { n: '12', tag: 'Direction',  title: 'Production Management',            desc: 'Show flow planning, technical direction, live cue management, stage management, and on-ground command.' },
];

const EVENT_TYPES = [
  { label: 'Corporate Events',            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/></svg> },
  { label: 'Live Concerts',               icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
  { label: 'Movie Audio Launches',        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="m15.6 11.6L22 7v10l-6.4-4.5v-0.9z"/><rect x="2" y="7" width="13" height="10" rx="2"/></svg> },
  { label: 'Government Events',           icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg> },
  { label: 'Political Events',            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M3 3v18h18"/><path d="m3 9 4-4 4 4 4-4 4 4"/></svg> },
  { label: 'NGO Events',                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: 'Product Launches',            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
  { label: 'Award Ceremonies',            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg> },
  { label: 'Exhibitions',                 icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
  { label: 'College Festivals',           icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
  { label: 'School Events',               icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
  { label: 'Open-Air Events',             icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg> },
  { label: 'Traditional Events',          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { label: 'Club & Social Events',        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><path d="M9 9l12-2"/></svg> },
  { label: 'Celebrity Events',            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { label: 'Festivals & Public Gatherings', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { label: 'Private Celebrations',        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg> },
  { label: 'Weddings & Receptions',       icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
];

const CAPABILITIES = [
  { tag: 'Sound',      img: '/sectors/audio.jpg', items: ['Line Arrays', 'Subwoofers', 'Front Fills', 'Delay Speakers', 'Stage Monitors', 'IEM Systems', 'Digital Mixing Consoles', 'Analog Mixers', 'DJ Setups', 'Sound Engineers', 'System Technicians'] },
  { tag: 'Lighting',   img: '/sectors/lighting.jpg', items: ['Moving Heads', 'LED PAR Lights', 'Blinders', 'Strobes', 'Follow Spots', 'Beam Lights', 'Wash Lights', 'Profile Fixtures','DMX Consoles', 'Lighting Consoles', 'Haze Machines','Lighting Programmers'] },
  { tag: 'Visuals',    img: '/sectors/visuals.jpg', items: ['Main-Stage LED Walls', 'Side Screens', 'Delay Screens', 'LED Processors', 'Fibre Cabling', 'Live Camera Feed Systems','VJ Systems', 'Live Visual Mixing','LED Technical Team'] },
  { tag: 'Structure',  img: '/sectors/structure.jpg', items: ['Stage Platforms', 'Risers','Carpeting', 'VIP Red Carpets', 'Goal Post Truss', 'Box Truss', 'Frameworks','Podiums','Scaffoldings', 'Roof Truss Systems',  'Barricading','Structural Engineering'] },
  { tag: 'SFX & Fireworks',        img: '/sectors/sfx.jpg', items: ['Cold Pyro', 'CO₂ Jets', 'Sparkular Machines', 'Flame Effects', 'Confetti Blasts', 'Fog Effects', 'Smoke Effects', 'Haze Effects', 'Stage FX Timing'] },
  { tag: 'Celebrity',     img: '/sectors/talent-upright.jpg', items: ['Artist Bookings ', 'Celebrity Handling', 'Artist Hospitality','Technical Rider ','Green Room Management', 'Stage Entry','Performance Flow','VIP Handling'] },
  { tag: 'Power & Safety',      img: '/sectors/power.jpg', items: ['Generators','Power Distribution', 'Electrical Cabling', 'Utility Coordination', 'Electrical Safety Systems', 'Power Backup Planning','Technical Infrastructure Support'] },
  { tag: 'Decor & Aesthetics', img: '/sectors/aesthetics.jpg', items: ['Welcome Arches', 'Event Banners', 'Standees', 'Photo Booths', 'LED Theme Backdrops','Entrance Design', 'Event Creatives', 'Branding Installations', 'Aesthetic Styling'] },
  { tag: 'Design & Media',      img: '/sectors/media.jpg', items: ['Designing','Candid Photography', 'Event Reels', 'Traditional Photography', 'Cinematic Videography', 'Drone Coverage', 'Live Video Mixing','Highlight Reels', 'Full Aftermovies','Social Media Edits'] },
  { tag: 'Operations & Logistics', img: '/sectors/operations.jpg', items: ['Equipment Transportation', 'Crew Transportation', 'Loading & Unloading', 'Setup Operations','Technician Deployment','Inventory Handling', 'On-Ground Logistics','Execution Support Teams'] },
  { tag: 'Compliance', img: '/sectors/compliance.jpg', items: ['Venue NOCs', 'Fire & Safety Clearances', 'Music Licences', 'Public Event Permissions', 'Corporate Access Permissions','Compliance Handling', 'Legal Event Documentation'] },
  { tag: 'Direction',  img: '/sectors/direction.jpg', items: ['Show Flows', 'Stage Management','DOP','Artist Synchronisation', 'Technical Direction', 'Live Cue Management','Rehearsals', 'Event Control Operations'] },
];

function SectionHeader({ kicker, title, sub, accent = 'violet' }: { kicker: string; title: React.ReactNode; sub: string; accent?: 'violet' | 'magenta' }) {
  return (
    <Reveal direction="up">
      <div className="text-center mb-14 sm:mb-20">
        <div className={`flex items-center justify-center gap-3 mb-5 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold ${accent === 'magenta' ? 'text-magenta' : 'text-violet-300'}`}>
          <span className={`w-8 h-px ${accent === 'magenta' ? 'bg-magenta/60' : 'bg-violet-400/60'}`} />
          {kicker}
          <span className={`w-8 h-px ${accent === 'magenta' ? 'bg-magenta/60' : 'bg-violet-400/60'}`} />
        </div>
        <h2 className="t-display-2 uppercase">{title}</h2>
        <p className="mt-5 text-ink-muted max-w-[52ch] mx-auto leading-[1.7]"
          style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}>
          {sub}
        </p>
      </div>
    </Reveal>
  );
}

export default function DetailedServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-y-lg bg-void">
      <div className="wrap space-y-28 sm:space-y-36">

        {/* ── SECTION 1: 12 Sectors ── */}
        <div>
          <SectionHeader
            kicker="What We Offer"
            title={<>12 Sectors. <span className="italic-serif text-gradient-magenta">One Standard.</span></>}
            sub="Every sector is handled by one team, billed under one quotation, owned end-to-end."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SECTORS.map((s, i) => (
              <Reveal key={s.n} direction="up" delay={(i % 4) * 0.06}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full p-7 rounded-[22px] border border-white/[0.10] overflow-hidden cursor-pointer"
                  style={{
                    background: 'linear-gradient(160deg, rgba(14,7,32,0.95) 0%, rgba(7,3,18,0.98) 100%)',
                    boxShadow: '0 8px 32px -8px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Corner glow on hover */}
                  <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at 0% 0%, rgba(139,92,246,0.18), transparent 70%)' }} />

                  {/* Top accent */}
                  <div className="h-[1.5px] w-full mb-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, transparent, #a78bfa, transparent)' }} />

                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[13px] tracking-[0.16em] uppercase text-violet-300/60 font-bold">
                      {s.n} / 12
                    </span>
                    <span className="text-[11px] tracking-[0.14em] uppercase text-magenta font-bold px-2.5 py-1 rounded-full border border-magenta/20 bg-magenta/[0.08]">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold leading-[1.2] mb-4 group-hover:text-white transition-colors duration-300"
                    style={{ fontSize: 'clamp(18px, 1.5vw, 22px)' }}>
                    {s.title}
                  </h3>

                  <p className="text-ink-muted leading-[1.65]"
                    style={{ fontSize: 'clamp(13px, 0.95vw, 15px)' }}>
                    {s.desc}
                  </p>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-4 right-4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' }} />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: Event Types ── */}
        <div>
          <SectionHeader
            kicker="What We Execute"
            title={<>Event Types <span className="italic-serif text-gradient-magenta">We Execute.</span></>}
            sub="From intimate celebrations to large-scale productions, Aurastic delivers artistic execution across every event format."
            accent="magenta"
          />

          <div className="relative">
            {/* Background glow */}
            <div aria-hidden className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139,92,246,0.06), transparent 70%)' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {EVENT_TYPES.map((e, i) => (
                <Reveal key={e.label} direction="up" delay={(i % 3) * 0.05}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative p-7 sm:p-8 rounded-[22px] border border-white/[0.08] overflow-hidden cursor-pointer"
                    style={{
                      background: 'linear-gradient(160deg, rgba(14,7,32,0.9) 0%, rgba(7,3,18,0.95) 100%)',
                    }}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,121,249,0.12), transparent 70%)' }} />

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(90deg, transparent, #e879f9, transparent)' }} />

                    <div className="relative flex items-start gap-5">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-[14px] border border-violet-400/20 bg-violet-500/[0.10] flex items-center justify-center shrink-0 group-hover:border-magenta/40 group-hover:bg-magenta/[0.10] transition-all duration-300 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-violet-300 group-hover:[&>svg]:text-magenta [&>svg]:transition-colors [&>svg]:duration-300">
                        {e.icon}
                      </div>
                      <div className="flex-1">
                        {/* Number */}
                        <div className="text-2xl tracking-[0.1em] uppercase font-bold text-violet-300/80 group-hover:text-magenta/90 transition-colors duration-300 mb-2">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        {/* Title */}
                        <h3
                          className="font-display font-bold leading-[1.15] text-white/80 group-hover:text-white transition-colors duration-300"
                          style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}
                        >
                          {e.label}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom border glow */}
                    <div className="absolute bottom-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(232,121,249,0.4), transparent)' }} />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Detailed Capabilities ── */}
        <div>
          <SectionHeader
            kicker="What's Included"
            title={<>Detailed <span className="italic-serif text-gradient-magenta">Capabilities.</span></>}
            sub="Every sector is backed by specialised equipment, technical expertise, and execution systems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.tag} direction="up" delay={(i % 4) * 0.04}>
                <motion.div
                  whileHover={openIndex !== i ? { scale: 1.02 } : {}}
                  transition={{ duration: 0.3 }}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="group relative rounded-[20px] overflow-hidden cursor-pointer border border-white/[0.10]"
                  style={{
                    borderColor: openIndex === i ? 'rgba(139,92,246,0.4)' : undefined,
                    aspectRatio: openIndex === i ? 'unset' : '1 / 1',
                    minHeight: openIndex === i ? '340px' : undefined,
                  }}
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      filter: openIndex === i ? 'blur(2px) brightness(1)' : 'brightness(0.75)',
                      transform: openIndex === i ? 'scale(1.08)' : 'scale(1)',
                    }}
                  >
                    <Image
                      src={c.img}
                      alt={c.tag}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Base overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/10 transition-opacity duration-500"
                    style={{ opacity: openIndex === i ? 0 : 1 }} />
                  {/* Dark overlay when open */}
                  <div className="absolute inset-0 bg-void/30 transition-opacity duration-500"
                    style={{ opacity: openIndex === i ? 1 : 0 }} />

                  {/* DEFAULT STATE — title + number */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300"
                    style={{ opacity: openIndex === i ? 0 : 1, pointerEvents: openIndex === i ? 'none' : 'auto' }}>
                    <div className="flex justify-end">
                      <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-lg leading-none">
                        +
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold leading-[1.1] text-white"
                        style={{ fontSize: 'clamp(22px, 2vw, 32px)' }}>
                        {c.tag}
                      </h3>
                      <div className="mt-2 h-[1.5px] w-8 group-hover:w-16 transition-all duration-500 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #a78bfa, #e879f9)' }} />
                    </div>
                  </div>

                  {/* OPEN STATE — capability pills inside same card */}
                  <div className="absolute inset-0 p-5 flex flex-col transition-opacity duration-300"
                    style={{ opacity: openIndex === i ? 1 : 0, pointerEvents: openIndex === i ? 'auto' : 'none' }}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 shrink-0">
                      <h3 className="font-display font-bold text-white leading-none"
                        style={{ fontSize: 'clamp(16px, 1.4vw, 22px)' }}>
                        {c.tag}
                      </h3>
                      <div className="w-6 h-6 rounded-full border border-violet-400/40 flex items-center justify-center text-violet-300 text-base leading-none">
                        ×
                      </div>
                    </div>
                    {/* Pills — scrollable */}
                    <div className="flex flex-wrap gap-2">
                      {c.items.map((item) => (
                        <span key={item}
                          className="px-3 py-1.5 rounded-full text-violet-200 border border-violet-400/30 bg-violet-500/[0.15] whitespace-nowrap"
                          style={{ fontSize: 'clamp(12px, 0.9vw, 14px)', fontWeight: 500 }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
