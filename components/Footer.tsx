import { footerContent, siteConfig, contactContent } from "@/data/content";

export default function Footer() {
  const c = footerContent;
  return (
    <footer className="bg-[var(--bg-footer)] pt-16" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-200 dark:border-white/10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 no-underline mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[10px] flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 3v18M5 8c0-2.2 3.1-4 7-4s7 1.8 7 4c0 3-3 4-7 7-4-3-7-4-7-7Z" />
                </svg>
              </div>
              <span className="font-heading text-xl text-gray-900 dark:text-white">{siteConfig.name}</span>
            </a>
            <p className="text-gray-500 dark:text-white/45 text-sm max-w-[300px]">{c.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Quick Links</h4>
            {c.quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="block text-gray-500 dark:text-white/55 text-sm py-1 hover:text-gray-900 dark:hover:text-white transition-colors no-underline">
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Contact</h4>
            <p><a href={`tel:${siteConfig.phoneRaw}`} className="text-gray-500 dark:text-white/55 text-sm hover:text-gray-900 dark:hover:text-white no-underline">{siteConfig.phone}</a></p>
            <p><a href={`mailto:${siteConfig.email}`} className="text-gray-500 dark:text-white/55 text-sm hover:text-gray-900 dark:hover:text-white no-underline">{siteConfig.email}</a></p>
            {contactContent.info.locations.map((loc) => (
              <p key={loc.name} className="text-gray-500 dark:text-white/55 text-[0.82rem] mt-3 leading-relaxed">
                <strong className="text-gray-700 dark:text-white/70">{loc.name}</strong><br />
                {loc.address}<br />{loc.addressLine2}
              </p>
            ))}
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-body text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Hours</h4>
            <p className="text-sm leading-relaxed whitespace-pre-line text-gray-500 dark:text-white/70">{c.hours}</p>
            <a
              href="#contact"
              className="btn-icon-group inline-flex items-center justify-center gap-2 px-5 py-2 mt-4 bg-brand-primary text-white font-semibold text-sm rounded-full border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 min-h-[44px]"
            >
              <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              Book Appointment
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 py-6 text-xs text-gray-400 dark:text-white/35">
          <p>{c.copyright}</p>
          <p className="max-w-xl text-right">{c.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
