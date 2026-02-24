"use client";

import Image from "next/image";
import { doctorProfileContent } from "@/data/content";

export default function DoctorProfile() {
  const c = doctorProfileContent;

  return (
    <section
      id="doctor"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="doctor-heading"
    >
      {/* Full-width background */}
      <div className="absolute inset-0 z-0 bg-[#e8f4fd] dark:bg-transparent dark:bg-gradient-to-b dark:from-[#041c30] dark:via-brand-secondary dark:to-[#041c30]" />

      {/* Animated SVG background */}
      <svg
        className="absolute inset-0 z-[1] w-full h-full pointer-events-none opacity-75 dark:opacity-100"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <radialGradient id="dp-g1" cx="15%" cy="30%" r="35%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="dp-g2" cx="85%" cy="70%" r="30%">
            <stop offset="0%" stopColor="#0FA3B1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="dp-streak" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="40%" stopColor="#3CA8F0" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#0FA3B1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0FA3B1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="dp-vline" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#3CA8F0" stopOpacity="0" />
            <stop offset="50%" stopColor="#3CA8F0" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3CA8F0" stopOpacity="0" />
          </linearGradient>
          <filter id="dp-blur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Soft orbs */}
        <circle cx="15%" cy="30%" r="280" fill="url(#dp-g1)" />
        <circle cx="85%" cy="70%" r="220" fill="url(#dp-g2)" />

        {/* Horizontal streaks */}
        <rect y="160" width="200" height="1" rx="1" fill="url(#dp-streak)" opacity="0">
          <animate attributeName="opacity" values="0;0.7;0.7;0" dur="8s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="-250,0;1450,0" dur="8s" repeatCount="indefinite" />
        </rect>
        <rect y="580" width="160" height="1" rx="1" fill="url(#dp-streak)" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="6s" begin="3s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="1450,0;-250,0" dur="6s" begin="3s" repeatCount="indefinite" />
        </rect>

        {/* Vertical risers */}
        <rect x="300" width="1" height="80" rx="1" fill="url(#dp-vline)" opacity="0">
          <animate attributeName="opacity" values="0;0.6;0.6;0" dur="9s" begin="1s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,850;0,-100" dur="9s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="900" width="1" height="60" rx="1" fill="url(#dp-vline)" opacity="0">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="7s" begin="4s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,850;0,-100" dur="7s" begin="4s" repeatCount="indefinite" />
        </rect>

        {/* Rising dots */}
        <circle cx="480" r="2" fill="#3CA8F0" opacity="0" filter="url(#dp-blur)">
          <animate attributeName="opacity" values="0;0.6;0.6;0" dur="7s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,850;5,-50" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle cx="780" r="2" fill="#0FA3B1" opacity="0" filter="url(#dp-blur)">
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="9s" begin="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,850;-8,-50" dur="9s" begin="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Top/bottom edge lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 dark:via-brand-primary/30 to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-teal/15 dark:via-accent-teal/20 to-transparent z-[2]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="text-center mb-14 reveal">
          <p className="section-label !text-brand-primary">{c.label}</p>
        </div>

        {/* Profile layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

          {/* ── Left: Photo card ── */}
          <div className="reveal flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-brand-primary/20 via-accent-teal/15 to-brand-primary-dark/10 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Card */}
              <div className="relative rounded-[22px] overflow-hidden bg-white dark:bg-gradient-to-b dark:from-white/[0.08] dark:to-white/[0.02] border border-gray-200/60 dark:border-white/[0.08] shadow-2xl dark:backdrop-blur-sm">
                {/* Image */}
                <div className="relative">
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={380}
                    height={480}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Bottom fade overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-brand-secondary dark:from-[#052035] to-transparent" />
                </div>

                {/* Name plate over image bottom */}
                <div className="absolute bottom-0 left-0 w-full p-5 pb-6">
                  <h2
                    id="doctor-heading"
                    className="!text-white text-[1.5rem] md:text-[1.7rem] font-heading leading-tight mb-1"
                  >
                    {c.name}
                  </h2>
                  <p className="text-brand-primary font-semibold text-sm">{c.title}</p>
                </div>
              </div>

              {/* Language pills */}
              <div className="flex gap-2 justify-center mt-5">
                {c.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold text-ds-text-body bg-ds-bg-card border border-ds-border shadow-sm dark:shadow-none dark:backdrop-blur-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Details ── */}
          <div className="space-y-9">

            {/* Bio */}
            <div className="reveal">
              {c.bio.map((paragraph, i) => (
                <p key={i} className="text-ds-text-body leading-[1.8] text-[0.95rem] mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Qualifications */}
            <div className="reveal">
              <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-primary mb-5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-primary/15 border border-brand-primary/20">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
                  </svg>
                </span>
                Qualifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.qualifications.map((q) => (
                  <div
                    key={q.abbr}
                    className="group/q flex items-center gap-3.5 px-5 py-4 rounded-2xl bg-ds-bg-card border border-ds-border hover:bg-ds-bg-card-hover hover:border-ds-border-hover transition-all duration-300 shadow-sm dark:shadow-none"
                  >
                    <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/20 to-accent-teal/10 border border-brand-primary/15 text-brand-primary font-bold text-[11px] tracking-wide group-hover/q:from-brand-primary/30 group-hover/q:to-accent-teal/20 transition-all duration-300">
                      {q.abbr}
                    </span>
                    <span className="text-ds-text-muted text-sm leading-snug">{q.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Roles */}
            <div className="reveal">
              <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-primary mb-5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-primary/15 border border-brand-primary/20">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                Professional Roles
              </h3>
              <div className="space-y-3">
                {c.roles.map((role) => (
                  <div
                    key={role}
                    className="flex items-start gap-3.5 px-5 py-4 rounded-2xl bg-ds-bg-card border border-ds-border shadow-sm dark:shadow-none"
                  >
                    <span className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-accent-teal/15 border border-accent-teal/20">
                      <svg className="w-3 h-3 text-accent-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-ds-text-muted text-sm leading-relaxed">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="reveal">
              <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-primary mb-5">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-primary/15 border border-brand-primary/20">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </span>
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {c.expertise.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-brand-primary/10 to-accent-teal/10 border border-brand-primary/15 text-ds-text-body hover:from-brand-primary/20 hover:to-accent-teal/20 hover:border-brand-primary/25 transition-all duration-300 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
