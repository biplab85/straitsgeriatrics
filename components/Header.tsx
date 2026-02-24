"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navigation, mobileNavExtra, siteConfig } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-surface-body/95 backdrop-blur-md border-b border-border transition-shadow duration-300 ${
          scrolled ? "shadow-header" : ""
        }`}
        role="banner"
      >
        <div className="container mx-auto flex items-center justify-between h-[72px] px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline" aria-label="Straits Geriatrics home">
            <Image
              src="/logo.avif"
              alt={siteConfig.name}
              width={200}
              height={60}
              className="flex-shrink-0 h-14 w-auto dark:brightness-0 dark:invert"
              priority
            />
            {/* <span className="font-heading text-xl text-content-heading whitespace-nowrap">
              {siteConfig.name}
            </span> */}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-content-body hover:text-content-heading hover:bg-surface-section text-sm font-medium px-3.5 py-2 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hidden md:flex items-center gap-1.5 text-content-heading font-semibold text-sm whitespace-nowrap no-underline"
              aria-label="Call us"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.91 10.6a16 16 0 0 0 6.49 6.49l1.43-1.43a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92Z" />
              </svg>
              {siteConfig.phone}
            </a>

            <a
              href="#contact"
              className="btn-icon-group hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2 bg-brand-primary text-white font-semibold text-sm rounded-full border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary transition-all duration-300 min-h-[44px] shadow-[0_0_20px_rgba(60,168,240,0.15)]"
            >
              <svg className="btn-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              Book a Consultation
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2.5 min-w-[44px] min-h-[44px] items-center justify-center"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-[22px] h-[2px] bg-content-heading rounded transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-[22px] h-[2px] bg-content-heading rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-[22px] h-[2px] bg-content-heading rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed top-[72px] left-0 right-0 bottom-0 bg-surface-body z-40 p-6 overflow-y-auto transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-1">
          {[...navigation, ...mobileNavExtra].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-3.5 text-content-body font-medium text-lg rounded-btn hover:bg-surface-section-alt transition-all no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 px-4 py-3.5 font-semibold text-content-heading text-lg no-underline"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.91 10.6a16 16 0 0 0 6.49 6.49l1.43-1.43a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92Z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </>
  );
}
