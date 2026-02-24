"use client";

import Image from "next/image";
import { heroContent } from "@/data/content";

/* ─── Background: geometric lines + gradient orbs ─── */
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-80 dark:opacity-100" aria-hidden="true">
      {/* Diagonal line pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
        <defs>
          <pattern id="diag" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="80" stroke="#3CA8F0" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* Secondary cross-hatch */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.2]">
        <defs>
          <pattern id="diag2" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(-25)">
            <line x1="0" y1="0" x2="0" y2="120" stroke="#0FA3B1" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag2)" />
      </svg>

      {/* Corner geometric accents — top-right */}
      <svg className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.2]" viewBox="0 0 400 400">
        <path d="M400,0 L280,0 L400,120 Z" fill="none" stroke="#3CA8F0" strokeWidth="0.5" />
        <path d="M400,40 L340,0 M400,80 L280,0 M400,120 L220,0 M400,160 L160,0" stroke="#3CA8F0" strokeWidth="0.3" fill="none" />
      </svg>

      {/* Corner geometric accents — bottom-left */}
      <svg className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-[0.8]" viewBox="0 0 300 300">
        <path d="M0,200 L100,300 M0,240 L60,300 M0,160 L140,300 M0,120 L180,300" stroke="#0FA3B1" strokeWidth="0.3" fill="none" />
      </svg>

      {/* Gradient orbs */}
      <div className="hero-gradient-orb absolute top-[-15%] right-[-8%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(60,168,240,0.08),transparent_65%)]" />
      <div className="hero-gradient-orb absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(15,163,177,0.06),transparent_65%)]" style={{ animationDelay: "4s" }} />

      {/* Flowing curved accent lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="50%" stopColor="#3CA8F0" stopOpacity="1" />
            <stop offset="100%" stopColor="#0FA3B1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="hero-line-draw" d="M-100,300 C250,220 500,400 800,250 S1200,400 1500,280" stroke="url(#flowGrad)" strokeWidth="1" fill="none" />
        <path className="hero-line-draw" d="M-100,550 C350,470 600,620 900,490 S1300,610 1600,470" stroke="url(#flowGrad)" strokeWidth="0.7" fill="none" style={{ animationDelay: "4s" }} />
      </svg>

      {/* ── Animated horizontal travelling lines ── */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="hGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="30%" stopColor="#3CA8F0" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#0FA3B1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0FA3B1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0FA3B1" stopOpacity="0" />
            <stop offset="40%" stopColor="#0FA3B1" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#3CA8F0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3CA8F0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Horizontal lines at different heights */}
        <line className="hero-hline" x1="0" y1="0" x2="45%" y2="0" stroke="url(#hGrad1)" strokeWidth="0.6" style={{ "--dur": "18s", "--delay": "0s", transform: "translateY(18%)" } as React.CSSProperties} />
        <line className="hero-hline" x1="0" y1="0" x2="35%" y2="0" stroke="url(#hGrad2)" strokeWidth="0.5" style={{ "--dur": "22s", "--delay": "3s", transform: "translateY(38%)" } as React.CSSProperties} />
        <line className="hero-hline" x1="0" y1="0" x2="50%" y2="0" stroke="url(#hGrad1)" strokeWidth="0.4" style={{ "--dur": "16s", "--delay": "7s", transform: "translateY(62%)" } as React.CSSProperties} />
        <line className="hero-hline" x1="0" y1="0" x2="30%" y2="0" stroke="url(#hGrad2)" strokeWidth="0.6" style={{ "--dur": "20s", "--delay": "11s", transform: "translateY(82%)" } as React.CSSProperties} />
      </svg>

      {/* ── Animated vertical travelling lines ── */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="vGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="35%" stopColor="#3CA8F0" stopOpacity="0.3" />
            <stop offset="65%" stopColor="#0FA3B1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0FA3B1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0FA3B1" stopOpacity="0" />
            <stop offset="30%" stopColor="#0FA3B1" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#3CA8F0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3CA8F0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Vertical lines at different x positions */}
        <line className="hero-vline" x1="0" y1="0" x2="0" y2="40%" stroke="url(#vGrad1)" strokeWidth="0.5" style={{ "--dur": "20s", "--delay": "2s", transform: "translateX(12%)" } as React.CSSProperties} />
        <line className="hero-vline" x1="0" y1="0" x2="0" y2="35%" stroke="url(#vGrad2)" strokeWidth="0.4" style={{ "--dur": "24s", "--delay": "6s", transform: "translateX(35%)" } as React.CSSProperties} />
        <line className="hero-vline" x1="0" y1="0" x2="0" y2="45%" stroke="url(#vGrad1)" strokeWidth="0.6" style={{ "--dur": "17s", "--delay": "0s", transform: "translateX(68%)" } as React.CSSProperties} />
        <line className="hero-vline" x1="0" y1="0" x2="0" y2="30%" stroke="url(#vGrad2)" strokeWidth="0.5" style={{ "--dur": "22s", "--delay": "9s", transform: "translateX(88%)" } as React.CSSProperties} />
      </svg>
    </div>
  );
}

/* ─── SVG Icons ─── */
const icons = {
  user: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  activity: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  globe: (
    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  mapPin: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  stethoscope: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" />
    </svg>
  ),
};

/* ─── Bento Grid: 4 cols × 2 rows matching reference ─── */
function BentoGrid() {
  return (
    <div className="mt-14 md:mt-16 max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[185px] md:auto-rows-[200px]">

      {/* ── Card 1: Tall info card (Col 1, Row 1-2) ── */}
      <div className="bento-card row-span-2 bg-ds-bg-card dark:backdrop-blur-sm border border-ds-border rounded-[20px] p-5 md:p-6 flex flex-col justify-between hover:bg-ds-bg-card-hover hover:border-ds-border-hover transition-all duration-500 shadow-xl dark:shadow-none">
        <div>
          {/* Network of care icons */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-primary/20 border-2 border-brand-primary/30 flex items-center justify-center text-brand-primary">
              {icons.user}
            </div>
            <div className="w-10 h-10 rounded-full bg-accent-teal/20 border-2 border-accent-teal/30 flex items-center justify-center text-accent-teal">
              {icons.heart}
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 border-2 border-gray-200 dark:border-white/15 flex items-center justify-center text-ds-text-faint">
              {icons.users}
            </div>
          </div>

          {/* Dashed connection line */}
          <div className="flex items-center gap-1.5 mb-5">
            <div className="w-8 h-8 rounded-full bg-ds-bg-card border border-ds-border flex items-center justify-center text-ds-text-faint">
              {icons.activity}
            </div>
            <div className="flex-1 border-t border-dashed border-ds-border" />
            <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
              {icons.users}
            </div>
            <div className="flex-1 border-t border-dashed border-ds-border" />
            <div className="w-8 h-8 rounded-full bg-ds-bg-card border border-ds-border flex items-center justify-center text-ds-text-faint">
              {icons.activity}
            </div>
          </div>

          <h3 className="text-ds-text font-semibold text-[0.95rem] md:text-base leading-snug mb-2">
            Specialist-Led Geriatric Care for Older Adults
          </h3>
          <p className="text-ds-text-faint text-xs md:text-sm leading-relaxed">
            Comprehensive medical care led by a consultant geriatrician, supporting healthy ageing with clarity and confidence.
          </p>
        </div>

        <a
          href="#services"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full border border-ds-border text-ds-text-muted text-sm font-medium hover:border-brand-primary/40 hover:text-brand-primary transition-all duration-300 w-fit"
        >
          Learn More
        </a>
      </div>

      {/* ── Card 2: Accent stat card — Credentials (Col 2, Row 1) ── */}
      <div className="bento-card bg-brand-primary rounded-[20px] p-5 flex flex-col justify-between overflow-hidden relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <circle cx="150" cy="30" r="60" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="160" cy="40" r="80" fill="none" stroke="white" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="relative z-10">
          <h4 className="text-white font-semibold text-sm">Specialist Credentials</h4>
          <p className="text-[2rem] md:text-[2.2rem] font-bold text-white leading-tight mt-1">FRCP</p>
          <p className="text-white/70 text-xs mt-0.5">Fellow, Royal College of Physicians</p>
        </div>
        <p className="text-white/50 text-[11px] leading-relaxed mt-2 relative z-10">
          MBBS · MRCP · FAMS · FRCP — internationally recognized qualifications
        </p>
      </div>

      {/* ── Card 3: Large photo card — Doctor (Col 3, Row 1-2) ── */}
      <div className="bento-card row-span-2 rounded-[20px] overflow-hidden relative group shadow-lg hover:shadow-xl hover:shadow-brand-primary/10 transition-all duration-500">
        {/* Full background image */}
        <Image
          src="/doctor.png"
          alt="Dr. Tan Mei Ying Melanie"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Doctor name — bottom aligned */}
        <div className="absolute bottom-5 left-5 right-5 z-10">
          <p className="text-white font-semibold text-base md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Dr. Tan Mei Ying Melanie
          </p>
          <p className="text-white/70 text-xs md:text-sm mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            Consultant Geriatrician &amp; Founder
          </p>
        </div>
      </div>

      {/* ── Card 4: Photo card — Clinic (Col 4, Row 1) ── */}
      <div className="bento-card bg-ds-bg-card dark:backdrop-blur-sm border border-ds-border rounded-[20px] overflow-hidden hover:border-brand-primary/20 transition-all duration-500 shadow-xl dark:shadow-none">
        <div className="w-full h-full bg-gradient-to-br from-accent-teal/10 via-brand-primary/10 to-brand-secondary/15 flex items-center justify-center relative">
          <div className="text-center px-4">
            <div className="w-14 h-14 rounded-2xl bg-ds-bg-card border border-ds-border mx-auto mb-3 flex items-center justify-center">
              <svg className="w-7 h-7 text-ds-text-faint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <p className="text-ds-text-muted text-xs font-medium">Gleneagles Medical Centre</p>
            <p className="text-ds-text-faint text-[10px] mt-0.5">6 Napier Road, #03-14</p>
          </div>
        </div>
      </div>

      {/* ── Card 5: Photo card — Assessment (Col 2, Row 2) ── */}
      <div className="bento-card bg-ds-bg-card dark:backdrop-blur-sm border border-ds-border rounded-[20px] overflow-hidden hover:border-brand-primary/20 transition-all duration-500 shadow-xl dark:shadow-none">
        <div className="w-full h-full bg-gradient-to-br from-accent-gold/8 via-accent-coral/6 to-brand-primary/10 flex items-center justify-center relative">
          <div className="text-center px-4">
            <div className="w-14 h-14 rounded-2xl bg-ds-bg-card border border-ds-border mx-auto mb-3 flex items-center justify-center">
              <svg className="w-7 h-7 text-ds-text-faint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <p className="text-ds-text-muted text-xs font-medium">Comprehensive Assessments</p>
            <p className="text-ds-text-faint text-[10px] mt-0.5">Medical · Cognitive · Functional</p>
          </div>
        </div>
      </div>

      {/* ── Card 6: Stat card — Locations (Col 4, Row 2) ── */}
      <div className="bento-card bg-ds-bg-card dark:backdrop-blur-sm border border-ds-border rounded-[20px] p-5 flex flex-col justify-between hover:bg-ds-bg-card-hover hover:border-ds-border-hover transition-all duration-500 shadow-xl dark:shadow-none">
        <div>
          <h4 className="text-ds-text-body font-semibold text-sm">Clinic Locations</h4>
          <p className="text-[2rem] md:text-[2.2rem] font-bold text-brand-primary leading-tight mt-1">
            2 <span className="text-base font-medium text-ds-text-faint">clinics</span>
          </p>
          <p className="text-ds-text-faint text-[11px] leading-relaxed mt-1">
            Conveniently located across Singapore for accessible specialist care
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-primary/15 border border-brand-primary/20">
            <span className="text-brand-primary">{icons.mapPin}</span>
            <span className="text-[10px] text-brand-primary/80 font-medium">Gleneagles</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-teal/15 border border-accent-teal/20">
            <span className="text-accent-teal">{icons.mapPin}</span>
            <span className="text-[10px] text-accent-teal/80 font-medium">Toa Payoh</span>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─── Main Hero section ─── */
export default function Hero() {
  const c = heroContent;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-[#e8f4fd] dark:bg-[#0b1a2e] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-20 md:pt-24 md:pb-24">
        {/* Top badge pill */}
        <div className="hidden flex justify-center mb-10 reveal">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-ds-border bg-ds-glass-bg dark:backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-brand-primary text-xs font-bold uppercase tracking-wider">{c.label}</span>
            <span className="text-ds-text-faint text-xs hidden sm:inline">|</span>
            <span className="text-ds-text-faint text-xs hidden sm:inline">Singapore&apos;s Trusted Geriatric Care</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <h1 id="hero-heading" className="text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] leading-[1.1] mb-6 tracking-[-0.02em] bg-gradient-to-r from-brand-secondary via-brand-primary-dark to-accent-teal dark:from-white dark:via-[#7DD3FC] dark:to-[#0FA3B1] bg-clip-text text-transparent">
            {c.heading}
          </h1>
          <p className="text-ds-text-muted text-[0.95rem] md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            {c.subheading}
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-2 reveal">
          <a
            href={c.primaryCta.href}
            className="btn-icon-group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-brand-primary text-white dark:bg-transparent dark:text-white font-semibold rounded-full border-2 border-brand-primary dark:border-white/20 hover:bg-brand-primary/90 dark:hover:border-brand-primary dark:hover:bg-brand-primary/10 dark:hover:text-brand-primary transition-all duration-400 min-h-[52px] text-base tracking-wide shadow-lg shadow-brand-primary/20 dark:shadow-none"
          >
            {c.primaryCta.label}
            <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="reveal">
          <BentoGrid />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-body)] to-transparent pointer-events-none z-20" />
    </section>
  );
}
