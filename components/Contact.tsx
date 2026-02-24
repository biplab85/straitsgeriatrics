"use client";

import { useState, useEffect, FormEvent } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { contactContent, siteConfig } from "@/data/content";
import { IconMap } from "./Icons";

export default function Contact() {
  const c = contactContent;
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => { Fancybox.destroy(); };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Show fancybox success modal
    Fancybox.show([
      {
        src: "#success-modal",
        type: "inline",
      },
    ]);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 lg:py-28" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="contact-heading" className="text-[2rem] md:text-[2.4rem] mb-4">{c.heading}</h2>
          <p className="text-content-muted text-base">{c.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — contact info */}
          <div className="reveal">
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-primary"><IconMap name="phone" /></span>
                </div>
                <div>
                  <h4 className="font-semibold text-content-heading text-sm mb-1">Phone</h4>
                  <a href={`tel:${c.info.phoneRaw}`} className="font-semibold text-base no-underline">{c.info.phone}</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-primary"><IconMap name="mail" /></span>
                </div>
                <div>
                  <h4 className="font-semibold text-content-heading text-sm mb-1">Email</h4>
                  <a href={`mailto:${c.info.email}`} className="text-sm no-underline">{c.info.email}</a>
                </div>
              </div>

              {/* Locations */}
              {c.info.locations.map((loc) => (
                <div key={loc.name} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary"><IconMap name="pin" /></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-content-heading text-sm mb-1">{loc.name}</h4>
                    <p className="text-content-muted text-sm leading-relaxed">{loc.address}<br />{loc.addressLine2}</p>
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-primary"><IconMap name="clock" /></span>
                </div>
                <div>
                  <h4 className="font-semibold text-content-heading text-sm mb-2">Operating Hours</h4>
                  <table className="text-sm w-full">
                    <tbody>
                      {c.info.hours.map((h) => (
                        <tr key={h.day}>
                          <td className="py-1.5 pr-6 border-b border-border text-content-muted">{h.day}</td>
                          <td className="py-1.5 border-b border-border text-right font-medium text-content-body">{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="mt-8 p-6 bg-surface-section-alt rounded-card">
              <h3 className="font-heading text-lg text-content-heading mb-4">{c.whatHappensNext.title}</h3>
              <div className="space-y-4">
                {c.whatHappensNext.steps.map((step, i) => (
                  <div key={step} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-brand-primary/10 text-brand-primary font-heading text-lg flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-content-muted text-sm pt-2">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal">
            <div className="contact-form-card p-8 md:p-10">
              <h3 className="font-heading text-xl text-content-heading mb-2">{c.form.title}</h3>
              <p className="text-content-muted text-sm mb-6">{c.form.subtitle}</p>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-semibold text-content-heading mb-1.5">Full Name *</label>
                  <input type="text" id="name" name="name" required placeholder="Your full name" autoComplete="name"
                    className="w-full px-4 py-3 bg-surface-section border border-border rounded-btn text-content-body text-sm min-h-[44px] focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all" />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-semibold text-content-heading mb-1.5">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="you@example.com" autoComplete="email"
                    className="w-full px-4 py-3 bg-surface-section border border-border rounded-btn text-content-body text-sm min-h-[44px] focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all" />
                </div>
                <div className="mb-5">
                  <label htmlFor="phone-input" className="block text-sm font-semibold text-content-heading mb-1.5">Phone Number *</label>
                  <input type="tel" id="phone-input" name="phone" required placeholder="+65 XXXX XXXX" autoComplete="tel"
                    className="w-full px-4 py-3 bg-surface-section border border-border rounded-btn text-content-body text-sm min-h-[44px] focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all" />
                </div>
                <div className="mb-5">
                  <label htmlFor="location" className="block text-sm font-semibold text-content-heading mb-1.5">Preferred Location</label>
                  <select id="location" name="location"
                    className="w-full px-4 py-3 bg-surface-section border border-border rounded-btn text-content-body text-sm min-h-[44px] focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all">
                    <option value="">Select a location</option>
                    {c.form.locations.map((loc) => (
                      <option key={loc.value} value={loc.value}>{loc.label}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-content-heading mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your concerns or any questions you have..."
                    className="w-full px-4 py-3 bg-surface-section border border-border rounded-btn text-content-body text-sm min-h-[120px] resize-y focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all" />
                </div>
                <button type="submit"
                  className="btn-icon-group w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-full border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 min-h-[44px] text-base cursor-pointer shadow-[0_0_20px_rgba(60,168,240,0.2)] hover:shadow-[0_0_30px_rgba(60,168,240,0.3)]"
                  disabled={submitted}
                >
                  {submitted ? (
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                  ) : (
                    <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7Z" /></svg>
                  )}
                  {submitted ? "Sending..." : "Send Enquiry"}
                </button>
                <p className="text-xs text-content-muted mt-3">{c.form.pdpaNote}</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Fancybox success modal (hidden) */}
      <div id="success-modal" className="hidden">
        <div className="p-10 text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-5">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E9E5A" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h3 className="font-heading text-2xl text-content-heading mb-2">{c.form.successTitle}</h3>
          <p className="text-content-muted">{c.form.successMessage}</p>
        </div>
      </div>
    </section>
  );
}
