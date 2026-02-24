import { aboutContent } from "@/data/content";
import Checklist from "./Checklist";

export default function About() {
  const c = aboutContent;
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="about-heading" className="text-[2rem] md:text-[2.4rem] mb-4">{c.heading}</h2>
          <p className="text-content-muted text-base">{c.intro}</p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14 reveal">
          <div>
            <h3 className="font-heading text-xl text-content-heading mb-3">{c.philosophy.title}</h3>
            <p className="text-content-muted mb-4">{c.philosophy.description}</p>
            <p className="font-semibold text-content-heading mb-3">{c.philosophy.carePlanLabel}</p>
            <Checklist items={c.philosophy.carePlanItems} />
          </div>
          <div>
            <h3 className="font-heading text-xl text-content-heading mb-3">{c.whoWeServe.title}</h3>
            <Checklist items={c.whoWeServe.items} />
          </div>
        </div>

      </div>
    </section>
  );
}
