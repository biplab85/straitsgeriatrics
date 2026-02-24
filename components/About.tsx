import { aboutContent } from "@/data/content";
import Checklist from "./Checklist";

export default function About() {
  const c = aboutContent;
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="about-heading" className="text-[2rem] md:text-[2.4rem] mb-4">{c.heading}</h2>
          <p className="text-content-muted text-base leading-relaxed">{c.intro}</p>
        </div>

        {/* Two premium cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 reveal">
          {/* Philosophy card */}
          <div className="group relative rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200/70 dark:border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/[0.04]">
            {/* Top accent bar */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-brand-primary to-accent-teal rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Corner glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[radial-gradient(circle,rgba(60,168,240,0.06),transparent_70%)] group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                </svg>
              </div>

              <h3 className="font-heading text-xl text-content-heading mb-3">{c.philosophy.title}</h3>
              <p className="text-content-muted text-[0.95rem] leading-relaxed mb-5">{c.philosophy.description}</p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-border via-border to-transparent mb-5" />

              <p className="font-semibold text-content-heading text-sm uppercase tracking-wider mb-4">{c.philosophy.carePlanLabel}</p>
              <Checklist items={c.philosophy.carePlanItems} />
            </div>
          </div>

          {/* Who We Serve card */}
          <div className="aboutRightAside group relative rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200/70 dark:border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-accent-teal/30 hover:shadow-xl hover:shadow-accent-teal/[0.04]">
            {/* Top accent bar */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-accent-teal to-brand-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Corner glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[radial-gradient(circle,rgba(15,163,177,0.06),transparent_70%)] group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <h3 className="font-heading text-xl text-content-heading mb-5">{c.whoWeServe.title}</h3>
              <Checklist items={c.whoWeServe.items} />

              {/* Healthcare pulse animation */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/[0.06]">
                <svg
                  className="w-full h-16 opacity-30 dark:opacity-20"
                  viewBox="0 0 600 60"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="about-pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0FA3B1" stopOpacity="0" />
                      <stop offset="30%" stopColor="#0FA3B1" stopOpacity="1" />
                      <stop offset="50%" stopColor="#3CA8F0" stopOpacity="1" />
                      <stop offset="70%" stopColor="#0FA3B1" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0FA3B1" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="about-pulse-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
                      <stop offset="50%" stopColor="#3CA8F0" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3CA8F0" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="about-pulse-clip">
                      <rect x="0" y="0" width="600" height="60" />
                    </clipPath>
                  </defs>

                  {/* Base line */}
                  <line x1="0" y1="30" x2="600" y2="30" stroke="#3CA8F0" strokeOpacity="0.08" strokeWidth="1.5" />

                  {/* Pulse line (static path) */}
                  <path
                    d="M0,30 L160,30 L180,30 L195,8 L210,52 L225,18 L240,42 L255,25 L270,30 L440,30 L460,30 L475,12 L490,48 L505,20 L520,38 L535,28 L550,30 L600,30"
                    fill="none"
                    stroke="url(#about-pulse-grad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Traveling glow dot */}
                  <circle r="3" fill="#3CA8F0" opacity="0" clipPath="url(#about-pulse-clip)">
                    <animateMotion
                      path="M0,30 L160,30 L180,30 L195,8 L210,52 L225,18 L240,42 L255,25 L270,30 L440,30 L460,30 L475,12 L490,48 L505,20 L520,38 L535,28 L550,30 L600,30"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0;0.8;0.8;0.8;0" dur="4s" repeatCount="indefinite" />
                  </circle>

                  {/* Soft trailing glow */}
                  <circle r="8" fill="#3CA8F0" opacity="0" filter="blur(4px)" clipPath="url(#about-pulse-clip)">
                    <animateMotion
                      path="M0,30 L160,30 L180,30 L195,8 L210,52 L225,18 L240,42 L255,25 L270,30 L440,30 L460,30 L475,12 L490,48 L505,20 L520,38 L535,28 L550,30 L600,30"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="opacity" values="0;0.3;0.3;0.3;0" dur="4s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
