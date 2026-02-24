import { telehealthContent } from "@/data/content";
import Checklist from "./Checklist";
import { IconMap } from "./Icons";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 reveal">
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

        {/* How it works */}
        <div className="reveal">
          <h3 className="text-center font-heading text-2xl text-content-heading mb-8">{c.howItWorks.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {c.howItWorks.steps.map((step, i) => (
              <div key={step.title} className="step-card flex gap-5 items-start pl-4 pb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-accent-teal text-white font-heading text-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-content-heading mb-1">{step.title}</h4>
                  <p className="text-content-muted text-sm">{step.description}</p>
                </div>
              </div>
            ))}
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
    </section>
  );
}
