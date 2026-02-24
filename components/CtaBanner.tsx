"use client";

import { ctaBannerContent } from "@/data/content";

export default function CtaBanner() {
  const c = ctaBannerContent;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 text-center"
      aria-labelledby="cta-heading"
    >
      {/* ── Gradient background ── */}
      <div className="absolute inset-0 z-0 bg-[#e8f4fd] dark:bg-transparent dark:bg-gradient-to-br dark:from-[#041e35] dark:via-brand-secondary dark:to-[#0a3a5e]" />

      {/* ── SVG animated decorations ── */}
      <svg
        className="absolute inset-0 z-[1] h-full w-full pointer-events-none opacity-75 dark:opacity-100"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
      >
        <defs>
          {/* Soft glow filter */}
          <filter id="cta-soft">
            <feGaussianBlur stdDeviation="6" />
          </filter>

          {/* Horizontal streak gradient */}
          <linearGradient id="cta-hstreak" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="40%" stopColor="#3CA8F0" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#0FA3B1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0FA3B1" stopOpacity="0" />
          </linearGradient>

          {/* Vertical rise gradient */}
          <linearGradient id="cta-vrise" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="30%" stopColor="#3CA8F0" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#4464AC" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#4464AC" stopOpacity="0" />
          </linearGradient>

          {/* Diagonal accent gradient */}
          <linearGradient id="cta-diag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FA3B1" stopOpacity="0" />
            <stop offset="50%" stopColor="#0FA3B1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3CA8F0" stopOpacity="0" />
          </linearGradient>

          {/* Orb radial */}
          <radialGradient id="cta-orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4464AC" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Particle glow */}
          <radialGradient id="cta-dot">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3CA8F0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Horizontal streaks ── */}
        <rect y="85" width="260" height="1.5" rx="1" fill="url(#cta-hstreak)" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0.8;0" dur="7s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="-300,0; 1500,0" dur="7s" repeatCount="indefinite"
          />
        </rect>

        <rect y="210" width="180" height="1" rx="1" fill="url(#cta-hstreak)" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0.6;0" dur="5s" begin="2s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="1500,0; -300,0" dur="5s" begin="2s" repeatCount="indefinite"
          />
        </rect>

        <rect y="320" width="320" height="1" rx="1" fill="url(#cta-hstreak)" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="9s" begin="4s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="-400,0; 1600,0" dur="9s" begin="4s" repeatCount="indefinite"
          />
        </rect>

        {/* ── Vertical rising lines ── */}
        <rect x="200" width="1.5" height="120" rx="1" fill="url(#cta-vrise)" opacity="0">
          <animate attributeName="opacity" values="0;0.7;0.7;0" dur="8s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,450; 0,-150" dur="8s" repeatCount="indefinite"
          />
        </rect>

        <rect x="750" width="1" height="100" rx="1" fill="url(#cta-vrise)" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="10s" begin="3s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,450; 0,-150" dur="10s" begin="3s" repeatCount="indefinite"
          />
        </rect>

        <rect x="1020" width="1.5" height="90" rx="1" fill="url(#cta-vrise)" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0.6;0" dur="7s" begin="1.5s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,450; 0,-150" dur="7s" begin="1.5s" repeatCount="indefinite"
          />
        </rect>

        {/* ── Floating orb ── */}
        <circle cx="600" cy="200" r="140" fill="url(#cta-orb)" filter="url(#cta-soft)">
          <animateTransform
            attributeName="transform" type="translate"
            values="0,0; 25,35; -30,-15; 0,0"
            dur="18s" repeatCount="indefinite"
          />
          <animate attributeName="r" values="140;170;140" dur="14s" repeatCount="indefinite" />
        </circle>

        {/* ── Diagonal cross-path ── */}
        <line x1="-50" y1="400" x2="300" y2="0" stroke="url(#cta-diag)" strokeWidth="1" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0.6;0" dur="11s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,0; 900,0" dur="11s" repeatCount="indefinite"
          />
        </line>

        <line x1="1250" y1="0" x2="900" y2="400" stroke="url(#cta-diag)" strokeWidth="1" opacity="0">
          <animate attributeName="opacity" values="0;0.4;0.4;0" dur="13s" begin="5s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,0; -900,0" dur="13s" begin="5s" repeatCount="indefinite"
          />
        </line>

        {/* ── Rising particles ── */}
        <circle cx="350" cy="0" r="3" fill="url(#cta-dot)" opacity="0">
          <animate attributeName="opacity" values="0;0.8;0.8;0" dur="6s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,420; 15,-50" dur="6s" repeatCount="indefinite"
          />
        </circle>

        <circle cx="600" cy="0" r="2.5" fill="url(#cta-dot)" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0.6;0" dur="8s" begin="2s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,420; -10,-50" dur="8s" begin="2s" repeatCount="indefinite"
          />
        </circle>

        <circle cx="880" cy="0" r="2" fill="url(#cta-dot)" opacity="0">
          <animate attributeName="opacity" values="0;0.7;0.7;0" dur="7s" begin="4s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,420; 8,-50" dur="7s" begin="4s" repeatCount="indefinite"
          />
        </circle>

        <circle cx="130" cy="0" r="2" fill="url(#cta-dot)" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="9s" begin="1s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,420; -5,-50" dur="9s" begin="1s" repeatCount="indefinite"
          />
        </circle>

        <circle cx="1060" cy="0" r="2.5" fill="url(#cta-dot)" opacity="0">
          <animate attributeName="opacity" values="0;0.55;0.55;0" dur="7.5s" begin="3.5s" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform" type="translate"
            values="0,420; 12,-50" dur="7.5s" begin="3.5s" repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* ── Soft grain overlay ── */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Animated top edge line ── */}
      <svg
        className="absolute top-0 left-0 w-full h-[2px] z-[3] pointer-events-none"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 1200 2"
      >
        <line x1="0" y1="1" x2="1200" y2="1" stroke="url(#cta-line-grad)" strokeWidth="2">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
        </line>
        <defs>
          <linearGradient id="cta-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#3CA8F0" />
            <stop offset="70%" stopColor="#0FA3B1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Content ── */}
      <div className="container mx-auto px-6 relative z-10 reveal">
        <h2
          id="cta-heading"
          className="text-ds-text text-[2rem] md:text-[2.6rem] lg:text-[2.9rem] mb-4 leading-tight tracking-tight"
        >
          {c.heading}
        </h2>

        <p className="text-ds-text-muted text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {c.description}
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          {/* Primary CTA */}
          <a
            href={c.primaryCta.href}
            className="group relative inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-semibold text-base min-h-[48px] transition-all duration-500 ease-out bg-brand-primary text-white dark:bg-white dark:text-brand-secondary shadow-[0_0_30px_rgba(60,168,240,0.2)] hover:shadow-[0_0_50px_rgba(60,168,240,0.35)] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-brand-primary via-accent-teal to-brand-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-[1px] animate-[ctaGradientShift_3s_linear_infinite]" style={{ backgroundSize: "200% 100%" }} />
            <svg className="w-[18px] h-[18px] shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {c.primaryCta.label}
          </a>

          {/* Secondary CTA – glass style */}
          <a
            href={c.secondaryCta.href}
            className="group relative inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-semibold text-base min-h-[48px] transition-all duration-500 ease-out text-ds-text border border-brand-secondary/20 dark:border-white/25 backdrop-blur-sm bg-white/60 dark:bg-white/[0.06] hover:bg-white/80 dark:hover:bg-white/[0.12] hover:border-brand-secondary/40 dark:hover:border-white/50 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(7,59,94,0.06)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
          >
            <svg className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.91 10.6a16 16 0 0 0 6.49 6.49l1.43-1.43a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92Z" />
            </svg>
            {c.secondaryCta.label}
          </a>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes ctaGradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
}
