"use client";

import { howItWorksContent } from "@/data/content";

/* Step icons – each maps to a unique SVG */
const stepIcons = [
  // 1 – Calendar / Book
  <svg key="i1" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>,
  // 2 – Clipboard / Review
  <svg key="i2" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="2" width="6" height="4" rx="1" />
    <path d="M9 14l2 2 4-4" />
  </svg>,
  // 3 – Target / Care Plan
  <svg key="i3" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // 4 – Refresh / Follow-up
  <svg key="i4" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 1-15.36 6.36" />
    <path d="M3 12a9 9 0 0 1 15.36-6.36" />
    <polyline points="21 3 21 9 15 9" />
    <polyline points="3 21 3 15 9 15" />
  </svg>,
];

export default function HowItWorks() {
  const c = howItWorksContent;

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="how-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#e8f4fd] dark:bg-transparent dark:bg-gradient-to-b dark:from-[#041c30] dark:via-brand-secondary dark:to-[#041c30]" />

      {/* Animated SVG background */}
      <svg
        className="absolute inset-0 z-[1] w-full h-full pointer-events-none opacity-75 dark:opacity-100"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
      >
        <defs>
          <radialGradient id="hw-orb1" cx="20%" cy="40%" r="35%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hw-orb2" cx="80%" cy="60%" r="30%">
            <stop offset="0%" stopColor="#0FA3B1" stopOpacity="0.07" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hw-streak" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="40%" stopColor="#3CA8F0" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#0FA3B1" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0FA3B1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hw-vline" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="50%" stopColor="#3CA8F0" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3CA8F0" stopOpacity="0" />
          </linearGradient>
          <filter id="hw-glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Orbs */}
        <circle cx="20%" cy="40%" r="250" fill="url(#hw-orb1)" />
        <circle cx="80%" cy="60%" r="200" fill="url(#hw-orb2)" />

        {/* Horizontal streak */}
        <rect y="130" width="220" height="1" rx="1" fill="url(#hw-streak)" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0.6;0" dur="7s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="-280,0;1480,0" dur="7s" repeatCount="indefinite" />
        </rect>
        <rect y="460" width="180" height="1" rx="1" fill="url(#hw-streak)" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="9s" begin="3s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="1480,0;-280,0" dur="9s" begin="3s" repeatCount="indefinite" />
        </rect>

        {/* Vertical riser */}
        <rect x="600" width="1" height="70" rx="1" fill="url(#hw-vline)" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="8s" begin="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,650;0,-80" dur="8s" begin="2s" repeatCount="indefinite" />
        </rect>

        {/* Floating dots */}
        <circle cx="350" r="2" fill="#3CA8F0" opacity="0" filter="url(#hw-glow)">
          <animate attributeName="opacity" values="0;0.6;0.6;0" dur="6s" begin="1s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,650;8,-50" dur="6s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="850" r="2" fill="#0FA3B1" opacity="0" filter="url(#hw-glow)">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="8s" begin="4s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,650;-6,-50" dur="8s" begin="4s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Edge lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/15 dark:via-brand-primary/25 to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-teal/15 dark:via-accent-teal/20 to-transparent z-[2]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="section-label !text-brand-primary">{c.label}</p>
          <h2
            id="how-heading"
            className="text-ds-text text-[2rem] md:text-[2.5rem] lg:text-[2.7rem] leading-tight"
          >
            {c.heading}
          </h2>
        </div>

        {/* Steps timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px z-0">
            <div className="w-full h-full bg-gradient-to-r from-brand-primary/40 via-accent-teal/30 to-brand-primary/40" />
            {/* Animated pulse on the line */}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 to-transparent animate-[hwPulse_4s_ease-in-out_infinite]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5">
            {c.steps.map((step, i) => (
              <div
                key={step.title}
                className="reveal group relative flex flex-col items-center text-center"
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  {/* Outer ring glow */}
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-brand-primary/20 to-accent-teal/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Circle */}
                  <div className="relative w-[72px] h-[72px] rounded-full bg-white dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.03] border border-gray-200/60 dark:border-white/[0.12] dark:backdrop-blur-sm flex items-center justify-center group-hover:border-brand-primary/30 transition-all duration-500 shadow-lg dark:shadow-lg dark:shadow-black/20">
                    {/* Number badge */}
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-brand-primary to-accent-teal text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                      {i + 1}
                    </span>
                    {/* Icon */}
                    <span className="text-brand-primary group-hover:text-brand-primary-light transition-colors duration-300">
                      {stepIcons[i]}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h4 className="text-ds-text font-semibold text-[0.95rem] mb-2 leading-snug px-2">
                  {step.title}
                </h4>
                <p className="text-ds-text-muted text-sm leading-relaxed px-1">
                  {step.description}
                </p>

                {/* Mobile connector (vertical line between cards) */}
                {i < c.steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-brand-primary/30 to-transparent mt-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes hwPulse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(800%); }
        }
      `}</style>
    </section>
  );
}
