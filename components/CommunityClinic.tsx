import { communityContent } from "@/data/content";
import Checklist from "./Checklist";
import { IconMap } from "./Icons";

export default function CommunityClinic() {
  const c = communityContent;
  return (
    <section id="community" className="py-16 md:py-20 lg:py-24 bg-surface-section-alt" aria-labelledby="community-heading">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="reveal">
            <p className="section-label">{c.label}</p>
            <h2 id="community-heading" className="text-[1.85rem] md:text-[2.2rem] mb-4">{c.heading}</h2>
            <p className="text-content-muted mb-6">{c.intro}</p>
            <h3 className="font-heading text-lg text-content-heading mb-4">{c.services.title}</h3>
            <Checklist items={c.services.items} />
          </div>

          {/* Right — location card */}
          <div className="reveal">
            <div className="community-card p-8 flex flex-col gap-5">
              <div className="relative z-10 w-14 h-14 rounded-[14px] bg-accent-teal/10 flex items-center justify-center">
                <span className="text-accent-teal"><IconMap name="pin" /></span>
              </div>
              <div>
                <h3 className="font-heading text-lg text-content-heading mb-1">{c.location.name}</h3>
                <p className="text-content-muted text-[0.95rem]">
                  {c.location.address}<br />{c.location.postalCode}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-content-heading text-sm mb-3">{c.visitInfo.title}</h4>
                <Checklist items={c.visitInfo.items} />
              </div>
              <a
                href={c.cta.href}
                className="btn-icon-group relative z-10 flex items-center justify-center gap-2 w-full px-7 py-3.5 bg-brand-primary text-white font-semibold rounded-full border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 min-h-[44px] mt-2 shadow-[0_0_20px_rgba(60,168,240,0.2)] hover:shadow-[0_0_30px_rgba(60,168,240,0.3)]"
              >
                <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                {c.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
