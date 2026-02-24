"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { valuePropsContent, valueProps } from "@/data/content";
import { IconMap } from "./Icons";

/* ─── Color config per card ─── */
const accent: Record<string, { grad: string; line: string; dot: string; iconBg: string; iconText: string }> = {
  blue: {
    grad: "from-[#3CA8F0] to-[#34BDEC]",
    line: "bg-gradient-to-b from-[#3CA8F0]/40 to-transparent",
    dot: "bg-[#3CA8F0]",
    iconBg: "bg-[#3CA8F0]/15",
    iconText: "text-[#3CA8F0]",
  },
  teal: {
    grad: "from-[#0FA3B1] to-[#34BDEC]",
    line: "bg-gradient-to-b from-[#0FA3B1]/40 to-transparent",
    dot: "bg-[#0FA3B1]",
    iconBg: "bg-[#0FA3B1]/15",
    iconText: "text-[#0FA3B1]",
  },
  gold: {
    grad: "from-[#C8962E] to-[#E6B95E]",
    line: "bg-gradient-to-b from-[#C8962E]/40 to-transparent",
    dot: "bg-[#C8962E]",
    iconBg: "bg-[#C8962E]/15",
    iconText: "text-[#C8962E]",
  },
  coral: {
    grad: "from-[#E86F51] to-[#F09A85]",
    line: "bg-gradient-to-b from-[#E86F51]/40 to-transparent",
    dot: "bg-[#E86F51]",
    iconBg: "bg-[#E86F51]/15",
    iconText: "text-[#E86F51]",
  },
  navy: {
    grad: "from-[#4464AC] to-[#3CA8F0]",
    line: "bg-gradient-to-b from-[#4464AC]/40 to-transparent",
    dot: "bg-[#4464AC]",
    iconBg: "bg-[#4464AC]/15",
    iconText: "text-[#6B8FD4]",
  },
};

/* ─── Desktop: Single column inside panel ─── */
function FeatureColumn({ vp, index, isLast }: { vp: typeof valueProps[0]; index: number; isLast: boolean }) {
  const c = accent[vp.color];
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative flex-1 min-w-0">
      {/* Hover background glow */}
      <div className="absolute inset-0 rounded-2xl bg-brand-primary/[0.03] dark:bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative px-5 xl:px-7 py-8 text-center">
        {/* Large gradient number */}
        <span
          className={`block text-[3rem] xl:text-[3.5rem] font-bold leading-none bg-gradient-to-br ${c.grad} bg-clip-text text-transparent opacity-[0.15] group-hover:opacity-[0.35] transition-all duration-500 select-none mb-4`}
        >
          {num}
        </span>

        {/* Accent dot + line */}
        <div className="flex flex-col items-center mb-5">
          <div className={`w-2 h-2 rounded-full ${c.dot} shadow-[0_0_8px_currentColor] group-hover:shadow-[0_0_14px_currentColor] transition-shadow duration-500`} />
          <div className={`w-[1.5px] h-5 ${c.line} mt-1`} />
        </div>

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${c.iconBg} ${c.iconText} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-400`}>
          <IconMap name={vp.icon} />
        </div>

        {/* Text */}
        <h3 className="font-heading text-[1.05rem] text-ds-text mb-2 leading-snug">{vp.title}</h3>
        <p className="text-ds-text-faint text-[0.8rem] leading-relaxed group-hover:text-ds-text-muted transition-colors duration-400">
          {vp.description}
        </p>
      </div>

      {/* Vertical divider (not on last) */}
      {!isLast && (
        <div className="absolute top-10 bottom-10 right-0 w-px bg-gradient-to-b from-transparent via-ds-divider to-transparent" />
      )}
    </div>
  );
}

/* ─── Mobile card ─── */
function MobileCard({ vp, index }: { vp: typeof valueProps[0]; index: number }) {
  const c = accent[vp.color];
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="relative bg-ds-bg-card border border-ds-border rounded-2xl p-6 overflow-hidden shadow-md dark:shadow-none">
      {/* Top accent gradient bar */}
      <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${c.grad} rounded-full`} />

      <div className="flex items-start gap-4 mt-2">
        {/* Number */}
        <span className={`text-[2.2rem] font-bold leading-none bg-gradient-to-br ${c.grad} bg-clip-text text-transparent opacity-25 select-none flex-shrink-0`}>
          {num}
        </span>

        <div>
          {/* Icon */}
          <div className={`w-10 h-10 rounded-xl ${c.iconBg} ${c.iconText} flex items-center justify-center mb-3`}>
            <IconMap name={vp.icon} />
          </div>
          <h3 className="font-heading text-[1.05rem] text-ds-text mb-1.5 leading-snug">{vp.title}</h3>
          <p className="text-ds-text-faint text-[0.8rem] leading-relaxed">{vp.description}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function ValueProps() {
  const c = valuePropsContent;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-surface-section relative" aria-labelledby="values-heading">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="values-heading" className="text-[2rem] md:text-[2.4rem]">{c.heading}</h2>
        </div>

        {/* ── Desktop: Premium floating panel ── */}
        <div className="hidden md:block reveal">
          <div className="vp-panel relative rounded-3xl bg-white dark:bg-[#0b1a2e] border border-gray-200/60 dark:border-transparent overflow-hidden">
            {/* Subtle inner patterns */}
            <div className="absolute inset-0 pointer-events-none opacity-75 dark:opacity-100" aria-hidden="true">
              <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
                <defs>
                  <pattern id="vpGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <line x1="60" y1="0" x2="60" y2="60" stroke="#3CA8F0" strokeWidth="0.3" />
                    <line x1="0" y1="60" x2="60" y2="60" stroke="#3CA8F0" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#vpGrid)" />
              </svg>
              {/* Corner glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[radial-gradient(circle,rgba(60,168,240,0.08),transparent_70%)]" />
              <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-[radial-gradient(circle,rgba(15,163,177,0.06),transparent_70%)]" />
            </div>

            {/* Horizontal connecting line */}
            <div className="absolute top-[140px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-ds-divider to-transparent pointer-events-none" />

            {/* Feature columns */}
            <div className="relative z-10 flex">
              {valueProps.map((vp, i) => (
                <FeatureColumn key={vp.title} vp={vp} index={i} isLast={i === valueProps.length - 1} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: Card swiper ── */}
        <div className="md:hidden reveal">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={14}
            slidesPerView={1.12}
            centeredSlides
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            className="pb-12"
          >
            {valueProps.map((vp, i) => (
              <SwiperSlide key={vp.title}>
                <MobileCard vp={vp} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
