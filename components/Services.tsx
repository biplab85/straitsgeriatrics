"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { servicesContent, services } from "@/data/content";
import { IconMap } from "./Icons";

const accentMap: Record<string, string> = {
  blue: "bg-brand-primary text-white",
  teal: "bg-accent-teal text-white",
  gold: "bg-accent-gold text-white",
  coral: "bg-accent-coral text-white",
  navy: "bg-brand-secondary text-white",
};

function ServiceCard({ s }: { s: (typeof services)[0] }) {
  return (
    <div className="group relative bg-surface-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-52 md:h-56 overflow-hidden">
        <Image
          src={s.image}
          alt={s.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Icon badge */}
        <div
          className={`absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg ${accentMap[s.color]} transition-transform duration-300 group-hover:scale-110`}
        >
          <IconMap name={s.icon} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="font-heading text-lg text-content-heading mb-2 group-hover:text-brand-primary transition-colors duration-300">
          {s.title}
        </h3>
        <p className="text-content-muted text-sm leading-relaxed flex-1">
          {s.description}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-brand-primary text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Learn more
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const c = servicesContent;
  return (
    <section
      id="services"
      className="py-16 md:py-20 lg:py-24 bg-surface-section-alt"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="section-label">{c.label}</p>
          <h2
            id="services-heading"
            className="text-[2rem] md:text-[2.4rem] mb-4"
          >
            {c.heading}
          </h2>
          <p className="text-content-muted text-base">{c.description}</p>
        </div>

        {/* Desktop / Tablet grid — 2×2 for 4 services */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto reveal">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>

        {/* Mobile swiper */}
        <div className="md:hidden reveal">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {services.map((s) => (
              <SwiperSlide key={s.title} className="!h-auto">
                <ServiceCard s={s} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
