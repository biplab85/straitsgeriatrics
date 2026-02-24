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
        <div className="reveal mt-10 text-center p-8 bg-gradient-to-br from-surface-card to-surface-section rounded-[20px] border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(60,168,240,0.05),transparent_60%)] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-heading text-lg text-content-heading mb-2">{c.disclaimer.title}</h3>
            <p className="text-content-muted text-[0.95rem] mb-5">{c.disclaimer.text}</p>
            <a
              href={c.disclaimer.cta.href}
              className="btn-icon-group inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-primary text-white font-semibold rounded-full border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 min-h-[44px] shadow-[0_0_20px_rgba(60,168,240,0.2)] hover:shadow-[0_0_30px_rgba(60,168,240,0.3)]"
            >
              <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              {c.disclaimer.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
