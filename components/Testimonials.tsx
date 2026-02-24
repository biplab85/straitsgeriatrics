"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonialsContent, testimonials } from "@/data/content";

const accentColors = [
  "from-brand-primary to-accent-teal",
  "from-accent-teal to-brand-primary",
  "from-accent-gold to-accent-coral",
  "from-brand-primary to-brand-secondary",
  "from-accent-coral to-accent-gold",
];

function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  return (
    <div className="testimonial-card p-8 md:p-10 h-full flex flex-col">
      {/* Quote icon */}
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentColors[i % accentColors.length]} flex items-center justify-center mb-5 flex-shrink-0`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="none">
          <path d="M11 7.5V4H7.5C4.462 4 2 6.462 2 9.5V20h8V10H6c0-3 2-3 2-3l3 .5ZM23 7.5V4h-3.5C16.462 4 14 6.462 14 9.5V20h8V10h-4c0-3 2-3 2-3l3 .5Z" />
        </svg>
      </div>

      {/* Quote text */}
      <blockquote className="text-content-body text-[0.95rem] leading-relaxed mb-6 flex-1 italic">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3 mt-auto pt-5 border-t border-border">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${accentColors[i % accentColors.length]} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-sm font-bold">{t.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-content-heading font-semibold text-sm">{t.name}</p>
          <p className="text-content-muted text-xs">{t.relation}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const c = testimonialsContent;
  return (
    <section id="testimonials" className="py-16 md:py-20 lg:py-24 bg-surface-section" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="testimonials-heading" className="text-[2rem] md:text-[2.4rem]">{c.heading}</h2>
        </div>

        {/* Desktop: 3-col grid showing first 3 */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 reveal">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>

        {/* Tablet + Mobile: Swiper */}
        <div className="lg:hidden reveal">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 1.5 }, 768: { slidesPerView: 2.1 } }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={t.name}>
                <TestimonialCard t={t} i={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
