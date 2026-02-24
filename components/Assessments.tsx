import { assessmentsContent } from "@/data/content";
import Checklist from "./Checklist";

export default function Assessments() {
  const c = assessmentsContent;
  return (
    <section id="assessments" className="py-16 md:py-20 lg:py-24" aria-labelledby="assess-heading">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="reveal">
            <p className="section-label">{c.label}</p>
            <h2 id="assess-heading" className="text-[1.85rem] md:text-[2.2rem] mb-4">{c.heading}</h2>
            <p className="text-content-muted mb-8">{c.intro}</p>

            <h3 className="font-heading text-xl text-content-heading mb-4">{c.whenHelpful.title}</h3>
            <Checklist items={c.whenHelpful.items} />
          </div>

          {/* Right */}
          <div className="reveal">
            <div className="assess-card p-8">
              <h3 className="font-heading text-xl text-content-heading mb-4">{c.whatIncludes.title}</h3>
              <Checklist items={c.whatIncludes.items} />

              <h3 className="font-heading text-xl text-content-heading mt-8 mb-4">{c.outcomes.title}</h3>
              <Checklist items={c.outcomes.items} />

              <div className="mt-8">
                <a
                  href={c.cta.href}
                  className="btn-icon-group flex items-center justify-center gap-2 w-full px-7 py-3.5 bg-brand-primary text-white font-semibold rounded-full border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 min-h-[44px] shadow-[0_0_20px_rgba(60,168,240,0.2)] hover:shadow-[0_0_30px_rgba(60,168,240,0.3)]"
                >
                  <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  {c.cta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
