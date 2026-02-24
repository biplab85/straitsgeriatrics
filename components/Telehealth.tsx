import { telehealthContent } from "@/data/content";
import Checklist from "./Checklist";
import { IconMap } from "./Icons";

/* Step icons for the How-it-works mini-timeline */
const teleStepIcons = [
  // 1 – Calendar / Book
  <svg key="ts1" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>,
  // 2 – Stethoscope / Assessment
  <svg key="ts2" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" />
  </svg>,
  // 3 – Clipboard / Care Plan
  <svg key="ts3" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="2" width="6" height="4" rx="1" /><path d="M9 14l2 2 4-4" />
  </svg>,
  // 4 – Refresh / Follow-up
  <svg key="ts4" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 1-15.36 6.36" /><path d="M3 12a9 9 0 0 1 15.36-6.36" />
    <polyline points="21 3 21 9 15 9" /><polyline points="3 21 3 15 9 15" />
  </svg>,
];

export default function Telehealth() {
  const c = telehealthContent;
  return (
    <section id="telehealth" className="py-16 md:py-20 lg:py-24 bg-surface-section" aria-labelledby="telehealth-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="telehealth-heading" className="text-[2rem] md:text-[2.4rem] mb-4">{c.heading}</h2>
          <p className="text-content-muted text-base">{c.description}</p>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 reveal">
          <div className="tele-card p-8">
            <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-brand-primary/10 text-brand-primary">
              <IconMap name="home" />
            </div>
            <h3 className="font-heading text-xl text-content-heading mb-4">{c.homeVisits.title}</h3>
            <Checklist items={c.homeVisits.items} />
          </div>
          <div className="tele-card p-8">
            <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-accent-teal/10 text-accent-teal">
              <IconMap name="telehealth" />
            </div>
            <h3 className="font-heading text-xl text-content-heading mb-4">{c.telehealth.title}</h3>
            <Checklist items={c.telehealth.items} />
          </div>
        </div>

        {/* How it works — premium timeline */}
        <div className="reveal">
          <div className="text-center mb-10">
            <p className="section-label !text-brand-primary">{c.howItWorks.title}</p>
            <h3 className="font-heading text-2xl md:text-[1.75rem] text-content-heading">Simple Steps to Get Started</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Horizontal connector line (desktop) */}
            <div className="hidden md:block absolute top-[36px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px z-0">
              <div className="w-full h-full bg-gradient-to-r from-brand-primary/30 via-accent-teal/20 to-brand-primary/30" />
              <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-transparent via-brand-primary/25 to-transparent animate-[teleStepPulse_4s_ease-in-out_infinite]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5">
              {c.howItWorks.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-5">
                    {/* Hover glow */}
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-brand-primary/20 to-accent-teal/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative w-[72px] h-[72px] rounded-full bg-white dark:bg-white/[0.06] border border-gray-200/80 dark:border-white/[0.12] flex items-center justify-center group-hover:border-brand-primary/40 transition-all duration-500 shadow-md dark:shadow-black/20">
                      {/* Number badge */}
                      <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-brand-primary to-accent-teal text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                        {i + 1}
                      </span>
                      {/* Icon */}
                      <span className="text-brand-primary group-hover:scale-110 transition-transform duration-300">
                        {teleStepIcons[i]}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <h4 className="font-semibold text-content-heading text-[0.95rem] mb-1.5 leading-snug px-2">
                    {step.title}
                  </h4>
                  <p className="text-content-muted text-sm leading-relaxed px-1">
                    {step.description}
                  </p>

                  {/* Mobile vertical connector */}
                  {i < c.howItWorks.steps.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-gradient-to-b from-brand-primary/30 to-transparent mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href={c.cta.href}
            className="btn-icon-group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-full border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 min-h-[44px] text-base shadow-[0_0_20px_rgba(60,168,240,0.2)] hover:shadow-[0_0_30px_rgba(60,168,240,0.3)]"
          >
            <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="M9 22V12h6v10" /></svg>
            {c.cta.label}
          </a>
        </div>
      </div>

      {/* Timeline animation */}
      <style>{`
        @keyframes teleStepPulse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(800%); }
        }
      `}</style>
    </section>
  );
}
