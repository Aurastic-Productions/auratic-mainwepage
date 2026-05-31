'use client';

import Link from 'next/link';
import Image from 'next/image';

const COLS = [
  {
    title: 'Event Production',
    items: [
      { label: 'Professional Audio', href: '/#services' },
      { label: 'Intelligent Lighting', href: '/#services' },
      { label: 'LED Visual Experience', href: '/#services' },
      { label: 'Stage Truss & Fabrication', href: '/#services' },
      { label: 'Special Effects & Pyro', href: '/#services' },
      { label: 'Event Media Production', href: '/#services' },
    ],
  },
  {
    title: 'Event Management',
    items: [
      { label: 'Celebrity Management', href: '/#services' },
      { label: 'Operations & Logistics', href: '/#services' },
      { label: 'Permissions & Licensing', href: '/#services' },
      { label: 'Production Management', href: '/#services' },
      { label: 'Decor & Aesthetics', href: '/#services' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/#about' },
      { label: 'Founder', href: '/#founder' },
      { label: 'The team', href: '/team' },
      { label: 'How we work', href: '/#process' },
      { label: 'Why Aurastic', href: '/#why' },
    ],
  },
  {
    title: 'Reach us',
    items: [
      { label: '+91 78458 56809', href: 'tel:+917845856809' },
      { label: 'aurasticproduction@gmail.com', href: 'mailto:aurasticproduction@gmail.com' },
      { label: '@aurastic_official', href: 'https://instagram.com/aurastic_official' },
      { label: 'Book an event', href: '/#contact' },
    ],
  },
];

const BUSINESS = [
  ['Trade name', 'AURASTIC (Sole Proprietorship)'],
  ['GSTIN', '33CSAPV8105K1ZJ'],
  ['SAC code', '998596'],
  ['Udyam / MSME', 'UDYAM-TN-24-0154140'],
];

export default function Footer() {
  return (
    <footer
      className="relative pt-20 sm:pt-28 lg:pt-[120px] pb-10 bg-void border-t border-white/[0.1] overflow-hidden"
      style={{ paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom))' }}
    >
      {/* Decorative top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="wrap">
        <div className="grid gap-12 sm:gap-14 grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-16 pb-12 sm:pb-14 border-b border-white/[0.08]">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="#top"
              className="inline-flex items-center"
              aria-label="Aurastic Productions"
            >
              <Image
                src="/brand/aurastic-white.png"
                alt="Aurastic Productions"
                width={400}
                height={96}
                className="h-20 sm:h-24 lg:h-28 w-auto"
              />
            </Link>
            <p className="mt-5 sm:mt-6 t-body max-w-[36ch]">
              An artistic event production company in South India.
            </p>
            <p className="mt-6 text-xl lg:text-2xl tracking-widest text-white uppercase" style={{ fontFamily: 'var(--font-bankgothic, "Bank Gothic", sans-serif)' }}>
              Every event deserves an aura - we create it ....
            </p>
            <p className="mt-4 t-meta max-w-[40ch]">
              D.2/238-C, Ground Floor, TSP Camp Road, Veerapuram, Chennai, Tiruvallur
              District, Tamil Nadu — 600055.
            </p>
            <div className="mt-8 sm:mt-10">
              <Image
                src="/brand/AU_EP WHITE.png"
                alt="A New Era Of Event Production"
                width={500}
                height={120}
                className="w-[240px] sm:w-[320px] h-auto object-contain opacity-90 drop-shadow-[0_10px_30px_rgba(119,0,224,0.4)]"
              />
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h5 className="t-kicker !text-violet-300 mb-5 sm:mb-6">{col.title}</h5>
              <ul className="space-y-3 sm:space-y-3.5">
                {col.items.map((it) => {
                  // Phone number uses Exo (numerical/data) per brand spec
                  const isPhone = it.href.startsWith('tel:');
                  return (
                    <li key={it.label}>
                      <a
                        href={it.href}
                        target={it.href.startsWith('http') ? '_blank' : undefined}
                        rel={it.href.startsWith('http') ? 'noopener' : undefined}
                        className={`inline-block text-ink-muted text-[13.5px] sm:text-[14.5px] mouse:hover:text-ink transition break-all ${
                          isPhone ? 'font-num tracking-[0.02em]' : ''
                        }`}
                      >
                        {it.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>


        <div className="flex flex-wrap justify-between items-center gap-5 pt-7 text-[12px] sm:text-[13px] text-ink-faint">
          <div>© 2025 – 2026 Aurastic Productions. All rights reserved.</div>
          <div className="flex gap-2.5">
            {[
              {
                href: 'https://www.youtube.com/@AURASTIC_PRODUCTIONS',
                label: 'YouTube',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                ),
              },
              {
                href: 'https://www.facebook.com/share/18VuWyPNhA/',
                label: 'Facebook',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
              },
              {
                href: 'https://www.instagram.com/aurastic_official?igsh=MTR4bGVpYmIwN3N5MQ==',
                label: 'Instagram',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <rect x={3} y={3} width={18} height={18} rx={5} />
                    <circle cx={12} cy={12} r={4} />
                    <circle cx={17.5} cy={6.5} r={1} fill="currentColor" />
                  </svg>
                ),
              },
              {
                href: 'https://www.threads.com/@aurastic_official',
                label: 'Threads',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M16 12v1a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                  </svg>
                ),
              },
              {
                href: 'https://x.com/Aurastic_off',
                label: 'Twitter',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                ),
              },
              {
                href: 'https://www.linkedin.com/company/aurastic-productions/about/?viewAsMember=true',
                label: 'LinkedIn',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener' : undefined}
                aria-label={s.label}
                className="w-11 h-11 grid place-items-center rounded-[12px] border border-white/[0.18] text-ink-muted mouse:hover:text-white mouse:hover:border-violet-500 mouse:hover:bg-violet-500/10 active:bg-violet-500/20 transition [&>svg]:w-4 [&>svg]:h-4"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


