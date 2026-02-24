import Image from "next/image";
import { footerContent, siteConfig, contactContent } from "@/data/content";

export default function Footer() {
  const c = footerContent;
  return (
    <footer className="bg-[var(--bg-footer)] pt-16" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-200 dark:border-white/10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 no-underline mb-3" aria-label="Straits Geriatrics home">
              <Image
                src="/logo.avif"
                alt={siteConfig.name}
                width={200}
                height={60}
                className="flex-shrink-0 h-14 w-auto dark:brightness-0 dark:invert"
              />
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
          <p className="flex items-center gap-1">Made with <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> <a href="http://sklentr.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline no-underline">Sklentr</a></p>
        </div>
      </div>
    </footer>
  );
}
