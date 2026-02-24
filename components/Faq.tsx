"use client";

import { useState } from "react";
import { faqContent, faqItems } from "@/data/content";

function FaqAccordion({ item, isOpen, toggle }: { item: typeof faqItems[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className={`faq-item border border-border rounded-2xl transition-all duration-300 ${isOpen ? "bg-surface-card shadow-lg border-brand-primary/20" : "bg-transparent hover:border-brand-primary/15"}`}>
      <button
        onClick={toggle}
        className="w-full flex items-start justify-between gap-4 p-6 text-left cursor-pointer min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-[0.95rem] leading-snug transition-colors duration-200 ${isOpen ? "text-brand-primary" : "text-content-heading"}`}>
          {item.question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-brand-primary text-white rotate-45" : "bg-surface-section text-content-muted"}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "400px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-6 pb-6">
          <p className="text-content-muted text-[0.9rem] leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const c = faqContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="section-label">{c.label}</p>
          <h2 id="faq-heading" className="text-[2rem] md:text-[2.4rem] mb-4">{c.heading}</h2>
          <p className="text-content-muted text-base">{c.description}</p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3 reveal">
          {faqItems.map((item, i) => (
            <FaqAccordion
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              toggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
