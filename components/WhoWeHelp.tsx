import { whoWeHelpContent, audiences } from "@/data/content";

const accentColors = [
  "from-brand-primary to-brand-primary-light",
  "from-accent-teal to-brand-primary",
  "from-accent-gold to-accent-coral",
];

const iconSvgs = [
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" /></svg>,
];

export default function WhoWeHelp() {
  const c = whoWeHelpContent;
  return (
    <section className="py-16 md:py-20 lg:py-24" aria-labelledby="audience-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="audience-heading" className="text-[2rem] md:text-[2.4rem]">{c.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {audiences.map((a, i) => (
            <div key={a.title} className="audience-gradient-card group">
              <div className="bg-surface-card rounded-[18px] p-8 h-full">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accentColors[i]} flex items-center justify-center mb-5 text-white shadow-lg`}>
                  {iconSvgs[i]}
                </div>
                <h3 className="font-heading text-xl text-content-heading mb-3">{a.title}</h3>
                <p className="text-content-muted text-[0.95rem] leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
