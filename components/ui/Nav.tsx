'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '/#story',    label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#process',  label: 'How It Works' },
  { href: '/#work',     label: 'Work' },
  { href: '/#team',     label: 'Team' },
  { href: '/#contact',  label: 'Contact' },
];

export default function Nav() {
  const [hidden,   setHidden]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState('');

  /* Hide on scroll-down, show on scroll-up */
  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY);
      setScrolled(y > 40);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight active section via IntersectionObserver */
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.replace('/#', ''));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Close mobile menu on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 z-[100] px-3 sm:px-5 lg:px-8"
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ top: 'calc(env(safe-area-inset-top) + 14px)' }}
      >
        <div className="wrap">
          <div
            className={`
              flex items-center
              pl-4 pr-3 py-2 sm:pl-5 sm:pr-3.5 sm:py-2.5
              rounded-full
              border transition-all duration-500
              ${scrolled
                ? 'bg-[rgba(8,4,20,0.55)] backdrop-blur-[28px] border-white/[0.13] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)]'
                : 'bg-[rgba(8,4,20,0.35)] backdrop-blur-[20px] border-white/[0.08] shadow-none'
              }
            `}
          >
            {/* ── Logo ── */}
            <Link
              href="#top"
              className="shrink-0 flex items-center"
              aria-label="Aurastic Productions home"
            >
              <Image
                src="/brand/aurastic-white.png"
                alt="Aurastic Productions"
                width={260}
                height={65}
                priority
                className="h-12 sm:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav aria-label="Primary" className="hidden xl:flex flex-1 justify-center">
              <ul className="flex items-center gap-1">
                {LINKS.map((l) => {
                  const id = l.href.replace('/#', '');
                  const isActive = active === id;
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={`
                          relative inline-flex items-center px-3.5 py-2 rounded-full
                          text-[13.5px] 2xl:text-[14.5px] font-medium tracking-wide
                          transition-all duration-200
                          ${isActive
                            ? 'text-white bg-white/[0.08]'
                            : 'text-white/50 hover:text-white/90 hover:bg-white/[0.05]'
                          }
                        `}
                      >
                        {l.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-white/[0.08] -z-10"
                            transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ── CTA + hamburger ── */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/#contact"
                className="
                  hidden sm:inline-flex items-center gap-2
                  px-5 py-2.5 rounded-full
                  bg-gradient-to-br from-violet-500 via-violet-500 to-fuchsia-500
                  text-white text-[13px] 2xl:text-[14px] font-semibold tracking-wide
                  shadow-[0_0_20px_-4px_rgba(139,92,246,0.6)]
                  hover:shadow-[0_0_28px_-2px_rgba(139,92,246,0.8)]
                  hover:-translate-y-px active:scale-[0.97]
                  transition-all duration-200
                "
              >
                Book an Event
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                  <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              {/* Mobile hamburger */}
              <button
                className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-white/70 hover:text-white hover:bg-white/[0.07] transition"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  {open ? (
                    <path d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <>
                      <line x1={3} y1={7}  x2={21} y2={7}  />
                      <line x1={3} y1={17} x2={21} y2={17} />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="xl:hidden fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0,   scale: 1 }}
              exit={{   opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden fixed left-3 right-3 sm:left-5 sm:right-5 z-[99] rounded-2xl overflow-hidden
                         bg-[rgba(8,4,20,0.88)] backdrop-blur-2xl border border-white/[0.1]
                         shadow-[0_24px_64px_-12px_rgba(0,0,0,0.7)]"
              style={{ top: 'calc(env(safe-area-inset-top) + 72px)' }}
            >
              {/* Top accent line */}
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

              <ul className="flex flex-col p-2">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center min-h-[48px] px-4 py-2.5 rounded-xl
                                 text-[15px] font-medium text-white/70
                                 hover:text-white hover:bg-white/[0.06]
                                 active:bg-white/[0.1] transition-all duration-150"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="px-3 pb-3">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full min-h-[48px] rounded-xl
                             bg-gradient-to-br from-violet-500 to-fuchsia-500
                             text-white text-[15px] font-semibold
                             shadow-[0_8px_24px_-6px_rgba(139,92,246,0.5)]
                             active:scale-[0.98] transition"
                >
                  Book an Event
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
