'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHead from '@/components/ui/SectionHead';

const TEAM = [
  {
    role: 'Artistic Director & Founder',
    name: 'Dwarakesh Venkateshan',
    bio: `A multidisciplinary creative — photographer, editor, audio engineer, visual designer, DJ, and event production specialist. Currently completing a B.Tech in AI & ML at Veltech University. His journey began in school, self-training in the Adobe Suite and handling stage technicals long before formal education. From hosting film launches to playing for 20,000+ crowds, Dwarakesh leads from the ground, capable of stepping into any role—from sound engineer to DJ—to keep the aura intact.`,
    image: '/team/founder.jpg', // User should provide image
    featured: true
  },
  {
    role: 'Chief Technology Officer (CTO)',
    name: 'To be announced',
    bio: 'Leading the development of Aurastic AI, our proprietary platform designed to scale artistic event planning through intelligent systems.',
    image: null,
    featured: false
  },
  {
    role: 'Chief Operating Officer (COO)',
    name: 'To be announced',
    bio: 'Overseeing the operational footprint across South India, ensuring precision in logistics and vendor excellence.',
    image: null,
    featured: false
  },
  {
    role: 'Executive Manager',
    name: 'To be announced',
    bio: 'Managing client relations and production management, ensuring the Aurastic standard is met from first brief to final delivery.',
    image: null,
    featured: false
  }
];

export default function Team() {
  const [founder, ...others] = TEAM;

  return (
    <section id="team" className="section-y-lg bg-void">
      <div className="wrap border-b border-white/5 pb-24">
        {/* Section header removed as per new design */}

        {/* Founder Featured Card */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="surface-card p-1 sm:p-2 overflow-hidden mt-0"
        >
          <div className="grid lg:grid-cols-[0.75fr, 1.65fr] gap-10 sm:gap-20 p-8 sm:p-12 lg:p-16 items-center">
            <div className="relative aspect-[3/4] max-w-[400px] mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-violet-500/10 border border-white/10 group">
               {founder.image ? (
                 <Image src={founder.image} alt={founder.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
               ) : (
                 <div className="absolute inset-0 grid place-items-center t-kicker opacity-20">Aurastic Identity</div>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="flex flex-col justify-center">
               <div className="t-kicker !text-magenta mb-4">{founder.role}</div>
               <h3 className="t-display-3 uppercase mb-8">{founder.name}</h3>
               <p className="t-body !text-ink-muted leading-[1.8] mb-8 whitespace-pre-wrap">
                 {founder.bio}
               </p>
               <div className="flex items-center gap-6">
                  <span className="w-12 h-px bg-white/20" />
                  <span className="t-meta italic-serif opacity-60">Chennai, Tamil Nadu</span>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Other Members / Placeholders */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-16">
          {others.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-magenta/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-white/10 grid place-items-center mb-8 group-hover:bg-magenta/10 transition-colors">
                 <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-violet-300 group-hover:text-magenta transition-colors">
                   <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                   <circle cx="9" cy="7" r="4" />
                   <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                   <path d="M18 7a4 4 0 0 0-3 3.87" />
                 </svg>
              </div>
              <div className="t-kicker !text-magenta mb-2 text-[10px]">{member.role}</div>
              <h4 className="t-h4 uppercase mb-4 opacity-50">{member.name}</h4>
              <p className="t-meta !text-ink-faint leading-relaxed italic">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Join Crew CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 p-8 sm:p-12 text-center rounded-[2.5rem] bg-gradient-to-t from-violet-500/10 to-transparent border border-violet-500/20"
        >
          <div className="w-16 h-16 rounded-full bg-violet-500/20 grid place-items-center mx-auto mb-6">
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-violet-300">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="t-display-2 uppercase mb-4 tracking-tight">Join the <span className="text-magenta">Crew</span></h3>
          <p className="t-body !text-ink-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate individuals—from sound engineers and lighting programmers to event managers and creative minds—who want to be part of the Aurastic standard.
          </p>
          <a
            href="/enquiry"
            className="inline-flex items-center gap-3 min-h-[52px] px-8 rounded-full bg-gradient-to-br from-violet-600 to-magenta text-white text-[14px] uppercase tracking-widest font-semibold shadow-[0_10px_30px_-10px_rgba(139,92,246,0.7)] hover:-translate-y-1 transition-all"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
