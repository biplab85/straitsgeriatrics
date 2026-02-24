"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { articlesContent, articleCategories } from "@/data/content";

const catColors: Record<number, string> = {
  1: "bg-blue-50 text-brand-primary dark:bg-brand-primary/10",
  2: "bg-accent-teal-light text-accent-teal dark:bg-accent-teal/10",
  3: "bg-accent-coral-light text-accent-coral dark:bg-accent-coral/10",
  4: "bg-accent-gold-light text-accent-gold dark:bg-accent-gold/10",
  5: "bg-blue-50 text-brand-secondary dark:bg-brand-secondary/10 dark:text-blue-300",
};

export default function Articles() {
  const c = articlesContent;
  return (
    <section id="articles" className="py-16 md:py-20 lg:py-24 bg-surface-section" aria-labelledby="articles-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="articles-heading" className="text-[2rem] md:text-[2.4rem] mb-4">{c.heading}</h2>
          <p className="text-content-muted text-base">{c.description}</p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-5 reveal">
          {articleCategories.map((a) => (
            <div
              key={a.category}
              className="article-mag-card p-6"
            >
              <span className={`text-[0.7rem] font-bold tracking-wider uppercase px-3 py-1 rounded-full inline-block mb-3 ${catColors[a.colorIndex]}`}>
                {a.category}
              </span>
              <h3 className="font-heading text-base text-content-heading mb-1.5">{a.title}</h3>
              <p className="text-content-muted text-sm">{a.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile swiper */}
        <div className="md:hidden reveal">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.3}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {articleCategories.map((a) => (
              <SwiperSlide key={a.category}>
                <div className="article-mag-card p-6">
                  <span className={`text-[0.7rem] font-bold tracking-wider uppercase px-3 py-1 rounded-full inline-block mb-3 ${catColors[a.colorIndex]}`}>
                    {a.category}
                  </span>
                  <h3 className="font-heading text-base text-content-heading mb-1.5">{a.title}</h3>
                  <p className="text-content-muted text-sm">{a.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Disclaimer */}
        <div className="DisclaimerContainer reveal mt-14 relative overflow-hidden rounded-2xl border border-brand-primary/15 dark:border-white/10">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eaf4fd] via-[#f0f8ff] to-[#e8f6f8] dark:from-brand-secondary/80 dark:via-[#062842] dark:to-[#07303d]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(60,168,240,0.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(60,168,240,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(15,163,177,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(15,163,177,0.06),transparent_50%)]" />
          {/* Decorative top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 px-8 py-10 md:px-12">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-white/[0.06] border border-brand-primary/20 dark:border-white/10 shadow-lg dark:shadow-black/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4M12 17h.01" />
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                </svg>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-xl text-content-heading mb-1.5">{c.disclaimer.title}</h3>
              <p className="text-content-muted text-[0.92rem] leading-relaxed">{c.disclaimer.text}</p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <a
                href={c.disclaimer.cta.href}
                className="btn-icon-group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-primary text-white font-semibold text-sm rounded-full border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 min-h-[44px] whitespace-nowrap shadow-[0_0_20px_rgba(60,168,240,0.2)] hover:shadow-[0_0_30px_rgba(60,168,240,0.3)]"
              >
                <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                {c.disclaimer.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
