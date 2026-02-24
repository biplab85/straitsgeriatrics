import { ReactNode } from "react";

/* ============================================================
   Straits Geriatrics — Centralized Content
   All site copy, data arrays, and configuration live here.
   ============================================================ */

// ------------------------------------------------------------------
// TYPES
// ------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  label: string;
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustItems: string[];
}

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
  color: "blue" | "teal" | "gold" | "coral" | "navy";
}

export interface AudienceCard {
  title: string;
  description: string;
  color: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  color: "blue" | "teal" | "gold" | "coral" | "navy";
  image: string;
}

export interface ChecklistItem {
  text: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface CredentialTag {
  label: string;
}

export interface ArticleCategory {
  category: string;
  title: string;
  description: string;
  colorIndex: number;
}

export interface ContactLocation {
  name: string;
  address: string;
  addressLine2: string;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  locations: ContactLocation[];
  hours: { day: string; time: string }[];
}

// ------------------------------------------------------------------
// SITE-WIDE
// ------------------------------------------------------------------

export const siteConfig = {
  name: "Straits Geriatrics",
  tagline: "Specialist geriatric medical care supporting healthy ageing in Singapore.",
  url: "https://www.straitsgeriatrics.com.sg",
  phone: "(65) 6341 5218",
  phoneRaw: "+6563415218",
  email: "contact@straitsgeriatrics.com.sg",
  whatsapp: "6563415218",
};

// ------------------------------------------------------------------
// NAVIGATION
// ------------------------------------------------------------------

export const navigation: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Assessments", href: "#assessments" },
  { label: "Telehealth", href: "#telehealth" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export const mobileNavExtra: NavLink[] = [
  { label: "Community Clinic", href: "#community" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// ------------------------------------------------------------------
// HERO
// ------------------------------------------------------------------

export const heroContent: HeroContent = {
  label: "Specialist Geriatric Medicine",
  heading: "Specialist Geriatric Care Supporting Healthy Ageing in Singapore",
  subheading:
    "Comprehensive medical care for older adults \u2014 helping patients and families navigate complex health needs with clarity and confidence.",
  primaryCta: { label: "Book a Consultation", href: "#contact" },
  secondaryCta: { label: "Call to Discuss Care", href: "tel:+6563415218" },
  trustItems: [
    "Consultant Geriatrician-Led",
    "MRCP \u00b7 FAMS \u00b7 FRCP",
    "Clinic, Home & Telehealth",
    "Two Locations in Singapore",
  ],
};

// ------------------------------------------------------------------
// VALUE PROPOSITIONS
// ------------------------------------------------------------------

export const valuePropsContent = {
  label: "Why Choose Us",
  heading: "Why Choose Straits Geriatrics",
};

export const valueProps: ValueProp[] = [
  {
    icon: "specialist",
    title: "Specialist-Led Care",
    description: "Expert geriatric medical care led by a consultant geriatrician.",
    color: "blue",
  },
  {
    icon: "holistic",
    title: "Holistic Assessments",
    description: "Whole-person evaluations covering physical, cognitive, and social needs.",
    color: "teal",
  },
  {
    icon: "communication",
    title: "Clear Explanations",
    description: "Transparent communication for patients and families.",
    color: "gold",
  },
  {
    icon: "evidence",
    title: "Evidence-Based",
    description: "Ethical, evidence-based clinical practice you can trust.",
    color: "coral",
  },
  {
    icon: "tailored",
    title: "Tailored Care",
    description: "Personalised plans aligned with individual health goals.",
    color: "navy",
  },
];

// ------------------------------------------------------------------
// WHO WE HELP
// ------------------------------------------------------------------

export const whoWeHelpContent = {
  label: "Who We Help",
  heading: "Care for Every Stage of Ageing",
};

export const audiences: AudienceCard[] = [
  {
    title: "Older Adults",
    description:
      "Medical care designed for the complex physical, cognitive, and functional changes associated with ageing.",
    color: "brand-primary",
  },
  {
    title: "Families & Caregivers",
    description:
      "Professional guidance and clear communication to support informed medical decisions.",
    color: "accent-teal",
  },
  {
    title: "Community & Healthcare Partners",
    description:
      "Collaborative care planning with primary care doctors, therapists, and community services.",
    color: "accent-gold",
  },
];

// ------------------------------------------------------------------
// SERVICES
// ------------------------------------------------------------------

export const servicesContent = {
  label: "Our Specialised Services",
  heading: "Our Specialised Services",
  description:
    "We offer a full range of geriatric medical services designed to address the complex and evolving health needs of older adults.",
  cta: { label: "Learn More About Our Assessments", href: "#assessments" },
};

export const services: ServiceCard[] = [
  {
    icon: "chronic",
    title: "Geriatrics Care",
    description:
      "Comprehensive medical care for older adults, addressing age-related conditions with a whole-person approach to promote healthy ageing.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    icon: "assessment",
    title: "Geriatrics Assessments",
    description:
      "Structured evaluation of medical, functional, cognitive, and social needs to develop a personalised care plan.",
    color: "teal",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
  },
  {
    icon: "tailored",
    title: "Therapy & Support Services",
    description:
      "Rehabilitation and therapeutic support including physiotherapy, occupational therapy, and counselling for older adults.",
    color: "gold",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    icon: "preventive",
    title: "Nursing Care",
    description:
      "Professional nursing services providing skilled medical care, wound management, and ongoing health monitoring for seniors.",
    color: "coral",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  },
];

// ------------------------------------------------------------------
// GERIATRIC ASSESSMENTS
// ------------------------------------------------------------------

export const assessmentsContent = {
  label: "Assessments",
  heading: "Comprehensive Geriatric Assessment",
  intro:
    "A geriatric assessment provides a structured evaluation of an older person\u2019s medical, functional, cognitive, and social needs.",
  whenHelpful: {
    title: "When Is an Assessment Helpful?",
    items: [
      "Frequent falls or unsteadiness",
      "Memory concerns or confusion",
      "Multiple medical conditions",
      "Medication-related side effects",
      "Decline in daily functioning",
    ],
  },
  whatIncludes: {
    title: "What the Assessment Includes",
    items: [
      "Detailed medical review",
      "Cognitive and memory screening",
      "Functional and mobility evaluation",
      "Medication optimization",
      "Individualized care recommendations",
    ],
  },
  outcomes: {
    title: "Outcomes You Can Expect",
    items: [
      "Clear understanding of health issues",
      "Practical recommendations for care",
      "Reduced health risks and complications",
      "Improved quality of life",
    ],
  },
  cta: { label: "Schedule an Assessment", href: "#contact" },
};

// ------------------------------------------------------------------
// HOME & TELEHEALTH
// ------------------------------------------------------------------

export const telehealthContent = {
  label: "Home & Telehealth",
  heading: "Geriatric Care at Home and via Telehealth",
  description:
    "For patients who have difficulty travelling, we offer home-based consultations and telehealth services to ensure continuity of care.",
  homeVisits: {
    title: "Home Visits",
    items: [
      "Comprehensive assessments at home",
      "Suitable for frail or homebound patients",
      "Reduced stress and travel burden",
    ],
  },
  telehealth: {
    title: "Telehealth Consultations",
    items: [
      "Follow-up consultations",
      "Medication reviews",
      "Care plan discussions with families",
    ],
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        title: "Book a Consultation",
        description: "Request a home visit or teleconsultation through our booking form or by phone.",
      },
      {
        title: "Specialist Assessment",
        description: "Assessment conducted by our consultant geriatrician at your home or via video call.",
      },
      {
        title: "Care Plan Discussion",
        description: "Care plan discussed with patient and family with clear recommendations.",
      },
      {
        title: "Ongoing Follow-Up",
        description: "Continuous follow-up and coordination of care as needed.",
      },
    ],
  },
  cta: { label: "Book Home or Telehealth Care", href: "#contact" },
};

// ------------------------------------------------------------------
// ABOUT
// ------------------------------------------------------------------

export const aboutContent = {
  label: "About Us",
  heading: "Dedicated Geriatric Care Focused on Quality of Life",
  intro:
    "At Straits Geriatrics, we believe that ageing deserves thoughtful, compassionate, and specialized medical care. Our approach focuses on maintaining function, independence, and dignity at every stage of life.",
  philosophy: {
    title: "Whole-Person, Individualized Care",
    description:
      "We look beyond single medical conditions to understand the full picture \u2014 physical health, cognition, function, social support, and personal goals.",
    carePlanLabel: "Our care plans are:",
    carePlanItems: [
      "Personalized to each patient",
      "Evidence-based and clinically sound",
      "Practical for patients and caregivers",
    ],
  },
  whoWeServe: {
    title: "Who We Serve",
    items: [
      "Older adults with multiple medical conditions",
      "Seniors experiencing functional or cognitive decline",
      "Families seeking clarity and guidance",
      "Patients requiring coordinated, long-term care",
    ],
  },
  specialist: {
    label: "Clinical Leadership",
    name: "Dr. Tan Mei Ying Melanie",
    title: "Consultant Geriatrician & Founder",
    bio: "Straits Geriatrics is led by Dr. Tan Mei Ying Melanie, a consultant geriatrician with extensive experience in managing complex medical issues in older adults. She currently serves as Vice-President of the Society for Geriatric Medicine Singapore and is a Visiting Consultant at both National University Hospital (NUH) and Ng Teng Fong General Hospital (NTFGH).",
    credentials: [
      "MBBS (Monash)",
      "MRCP (UK)",
      "FAMS (Singapore)",
      "FRCP (UK)",
      "Grad. Dip. Palliative Care",
      "Silver Ambassador Award",
    ],
    expertise:
      "Frailty and falls \u00b7 Memory and cognitive disorders \u00b7 Medication optimization \u00b7 Chronic disease management",
  },
};

// ------------------------------------------------------------------
// DOCTOR PROFILE
// ------------------------------------------------------------------

export const doctorProfileContent = {
  label: "Meet Your Geriatrician",
  name: "Dr. Tan Mei Ying Melanie",
  title: "Consultant Geriatrician & Founder",
  image: "/doctor.png",
  bio: [
    "Dr. Tan Mei Ying Melanie is a consultant geriatrician with extensive experience in managing complex medical issues in older adults. She founded Straits Geriatrics to provide comprehensive, patient-centred care that empowers seniors and their families.",
    "She is a recipient of the Silver Ambassador Award and has played a pivotal role in developing the HOME Unit for hospitalised seniors, as well as guiding the implementation of the Elder Bundle for geriatric care.",
  ],
  qualifications: [
    { abbr: "MBBS", detail: "Monash University, Australia" },
    { abbr: "MRCP", detail: "Royal College of Physicians, UK" },
    { abbr: "FAMS", detail: "Academy of Medicine, Singapore" },
    { abbr: "FRCP", detail: "Royal College of Physicians, UK" },
    { abbr: "Grad. Dip.", detail: "Palliative Care" },
  ],
  roles: [
    "Vice-President, Society for Geriatric Medicine Singapore",
    "Visiting Consultant, National University Hospital (NUH)",
    "Visiting Consultant, Ng Teng Fong General Hospital (NTFGH)",
  ],
  expertise: [
    "Dementia & Memory Loss",
    "Frailty & Falls",
    "Chronic Disease Management",
    "Medication Optimisation",
    "Home & Palliative Care",
    "Geriatric Assessments",
  ],
  languages: ["English", "Mandarin", "Hokkien"],
};

// ------------------------------------------------------------------
// COMMUNITY CLINIC
// ------------------------------------------------------------------

export const communityContent = {
  label: "Community Clinic",
  heading: "Community-Based Geriatric Care",
  intro:
    "Our community clinic provides accessible specialist geriatric care close to home in the heart of Toa Payoh.",
  services: {
    title: "Services Available",
    items: [
      "Geriatric consultations",
      "Health screening packages",
      "Chronic disease management",
      "Preventive care",
    ],
  },
  location: {
    name: "Toa Payoh Community Clinic",
    address: "Blk 185, Toa Payoh Central, #01-320",
    postalCode: "Singapore 310185",
  },
  visitInfo: {
    title: "Visit Information",
    items: [
      "Easily accessible by public transport",
      "Appointment scheduling available",
      "Bring medication list and referral letter",
    ],
  },
  cta: { label: "Book at Community Clinic", href: "#contact" },
};

// ------------------------------------------------------------------
// HOW IT WORKS (HOME PAGE)
// ------------------------------------------------------------------

export const howItWorksContent = {
  label: "How It Works",
  heading: "Your Path to Better Care",
  steps: [
    {
      title: "Initial Consultation & Assessment",
      description: "Book an appointment at our clinic, at home, or via telehealth.",
    },
    {
      title: "Comprehensive Health Review",
      description: "Thorough review of health concerns, medications, and functional status.",
    },
    {
      title: "Individualized Care Plan",
      description: "Clear, practical recommendations tailored to your needs and goals.",
    },
    {
      title: "Ongoing Follow-Up",
      description: "Continued coordination of care with regular reviews and support.",
    },
  ],
};

// ------------------------------------------------------------------
// ARTICLES
// ------------------------------------------------------------------

export const articlesContent = {
  label: "Insights",
  heading: "Insights on Healthy Ageing",
  description:
    "Our articles provide practical, medically accurate information to support older adults and caregivers in making informed decisions.",
  disclaimer: {
    title: "Need Professional Advice?",
    text: "Educational content is not a substitute for medical care. Speak with our specialist for personalised guidance.",
    cta: { label: "Book a Consultation", href: "#contact" },
  },
};

export const articleCategories: ArticleCategory[] = [
  {
    category: "Ageing & Wellness",
    title: "Healthy Ageing",
    description: "Tips and guidance for ageing well in Singapore.",
    colorIndex: 1,
  },
  {
    category: "Memory & Cognitive Health",
    title: "Cognitive Health",
    description: "Understanding memory changes and when to seek help.",
    colorIndex: 2,
  },
  {
    category: "Falls & Mobility",
    title: "Falls & Mobility",
    description: "Prevention strategies and mobility support.",
    colorIndex: 3,
  },
  {
    category: "Caregiving Guidance",
    title: "Caregiving Guidance",
    description: "Support for families and caregivers.",
    colorIndex: 4,
  },
  {
    category: "Preventive Health",
    title: "Preventive Health",
    description: "Screenings and prevention for seniors.",
    colorIndex: 5,
  },
];

// ------------------------------------------------------------------
// CTA BANNER
// ------------------------------------------------------------------

export const ctaBannerContent = {
  heading: "Take the Next Step in Care",
  description:
    "If you have concerns about ageing-related health issues \u2014 for yourself or a loved one \u2014 we are here to help.",
  primaryCta: { label: "Book a Consultation", href: "#contact" },
  secondaryCta: { label: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
};

// ------------------------------------------------------------------
// CONTACT
// ------------------------------------------------------------------

export const contactContent = {
  label: "Contact",
  heading: "Contact Straits Geriatrics",
  description: "If you have concerns about ageing-related health issues, our team is here to help.",
  info: {
    phone: siteConfig.phone,
    phoneRaw: siteConfig.phoneRaw,
    email: siteConfig.email,
    locations: [
      {
        name: "Gleneagles Medical Centre",
        address: "6 Napier Road, #03-14",
        addressLine2: "Singapore 258499",
      },
      {
        name: "Toa Payoh Community Clinic",
        address: "Blk 185, Toa Payoh Central, #01-320",
        addressLine2: "Singapore 310185",
      },
    ],
    hours: [
      { day: "Monday \u2013 Friday", time: "08:30 \u2013 17:30" },
      { day: "Saturday", time: "08:30 \u2013 12:30" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  whatHappensNext: {
    title: "What Happens Next",
    steps: [
      "Our team will respond to your enquiry",
      "Appointment details will be confirmed",
      "You will receive guidance on preparing for your visit",
    ],
  },
  form: {
    title: "Book an Appointment",
    subtitle: "Fill in the form below and we will get back to you shortly.",
    locations: [
      { value: "gleneagles", label: "Gleneagles Medical Centre" },
      { value: "toapayoh", label: "Toa Payoh Community Clinic" },
      { value: "home", label: "Home Visit" },
      { value: "telehealth", label: "Telehealth" },
    ],
    pdpaNote:
      "Your information is kept confidential in accordance with Singapore\u2019s Personal Data Protection Act (PDPA).",
    successTitle: "Enquiry Sent!",
    successMessage:
      "Thank you for reaching out. Our team will respond to your enquiry within 1 business day.",
  },
};

// ------------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------------

export const footerContent = {
  tagline: siteConfig.tagline,
  quickLinks: [
    { label: "Services", href: "#services" },
    { label: "Assessments", href: "#assessments" },
    { label: "Home & Telehealth", href: "#telehealth" },
    { label: "About", href: "#about" },
    { label: "Community Clinic", href: "#community" },
    { label: "Articles", href: "#articles" },
    { label: "Contact", href: "#contact" },
  ],
  hours: "Mon \u2013 Fri: 08:30 \u2013 17:30\nSaturday: 08:30 \u2013 12:30\nSunday: Closed",
  copyright: `\u00a9 ${new Date().getFullYear()} Straits Geriatrics. All rights reserved.`,
  disclaimer:
    "The information on this website is for educational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare provider.",
};

// ------------------------------------------------------------------
// HERO BENTO CARDS (6 cards with image placeholders)
// ------------------------------------------------------------------

export interface HeroCard {
  image: string;        // placeholder path — replace with real images later
  placeholder: string;  // fallback letter/label
  gradient: string;     // placeholder gradient
  title: string;
  description: string;
}

export const heroCards: HeroCard[] = [
  {
    image: "",
    placeholder: "SG",
    gradient: "from-brand-primary/30 to-brand-secondary/40",
    title: "Specialist Geriatric Care",
    description: "Consultant geriatrician-led medical care for older adults",
  },
  {
    image: "",
    placeholder: "GA",
    gradient: "from-accent-teal/30 to-brand-primary/30",
    title: "Comprehensive Assessments",
    description: "Holistic evaluations of medical, cognitive, and functional needs",
  },
  {
    image: "",
    placeholder: "GM",
    gradient: "from-brand-secondary/40 to-accent-teal/30",
    title: "Gleneagles Medical Centre",
    description: "6 Napier Road, #03-14, Singapore 258499",
  },
  {
    image: "",
    placeholder: "HT",
    gradient: "from-accent-gold/25 to-accent-coral/20",
    title: "Home & Telehealth",
    description: "Geriatric care at your doorstep or via secure video call",
  },
  {
    image: "",
    placeholder: "TP",
    gradient: "from-accent-teal/25 to-brand-primary/20",
    title: "Toa Payoh Community Clinic",
    description: "Blk 185, Toa Payoh Central, #01-320, Singapore 310185",
  },
  {
    image: "",
    placeholder: "PC",
    gradient: "from-accent-coral/20 to-accent-gold/25",
    title: "Patient-Centred Care",
    description: "Evidence-based, ethical practice with the Silver Ambassador Award",
  },
];

// ------------------------------------------------------------------
// TESTIMONIALS
// ------------------------------------------------------------------

export interface Testimonial {
  quote: string;
  name: string;
  relation: string;
}

export const testimonialsContent = {
  label: "Testimonials",
  heading: "What Our Patients Say",
};

export const testimonials: Testimonial[] = [
  {
    quote: "Dr. Tan took the time to explain every aspect of my mother\u2019s condition clearly. For the first time, our family felt confident making care decisions together.",
    name: "David Lim",
    relation: "Son of patient",
  },
  {
    quote: "The comprehensive assessment was thorough and compassionate. I finally understood why I was having so many falls and what we could do about it.",
    name: "Mrs. Wong S.H.",
    relation: "Patient, age 82",
  },
  {
    quote: "Having a home visit saved us tremendous stress. The care was just as thorough as a clinic visit, and my father was much more comfortable.",
    name: "Sarah Chen",
    relation: "Daughter & primary caregiver",
  },
  {
    quote: "As a referring GP, I appreciate Dr. Tan\u2019s detailed reports and collaborative approach. My elderly patients are in excellent hands.",
    name: "Dr. Raymond Goh",
    relation: "Referring general practitioner",
  },
  {
    quote: "The medication review identified three unnecessary drugs that were causing my side effects. I feel so much better now with a simplified regime.",
    name: "Mr. Tan K.B.",
    relation: "Patient, age 75",
  },
];

// ------------------------------------------------------------------
// FAQ
// ------------------------------------------------------------------

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqContent = {
  label: "FAQ",
  heading: "Frequently Asked Questions",
  description: "Find answers to common questions about geriatric care and our services.",
};

export const faqItems: FaqItem[] = [
  {
    question: "What is a geriatrician and how is it different from a general doctor?",
    answer: "A geriatrician is a medical specialist trained in the healthcare of older adults. Unlike a general practitioner, a geriatrician focuses on the complex, interrelated medical conditions common in ageing \u2014 including cognitive decline, falls, frailty, and polypharmacy \u2014 and takes a whole-person approach to care.",
  },
  {
    question: "When should someone see a geriatrician?",
    answer: "Consider seeing a geriatrician if you or a loved one experiences frequent falls, memory concerns, difficulty managing multiple medications, decline in daily functioning, or if there is a need for comprehensive health planning in older age.",
  },
  {
    question: "Do I need a referral to see Dr. Tan Mei Ying Melanie?",
    answer: "A referral is not required for private consultations at our Gleneagles or Toa Payoh clinics. However, if you are seeking subsidised care or have insurance that requires a referral, please check with your provider.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a list of all current medications (or the medications themselves), any relevant medical reports or test results, a referral letter (if applicable), your NRIC or passport, and insurance details if applicable.",
  },
  {
    question: "Does Straits Geriatrics offer home visits?",
    answer: "Yes. We offer home-based geriatric consultations for patients who are homebound, frail, or have difficulty travelling. Home visits include comprehensive assessments and are available island-wide in Singapore.",
  },
  {
    question: "Are telehealth consultations available?",
    answer: "Yes. We offer secure video consultations for follow-ups, medication reviews, and care plan discussions. This is especially convenient for families coordinating care from different locations.",
  },
  {
    question: "What are the clinic operating hours?",
    answer: "Our clinics are open Monday to Friday from 08:30 to 17:30, and Saturday from 08:30 to 12:30. We are closed on Sundays and public holidays.",
  },
];

// ------------------------------------------------------------------
// SEO / STRUCTURED DATA
// ------------------------------------------------------------------

export const seoMetadata = {
  title: "Straits Geriatrics \u2014 Specialist Geriatric Care in Singapore",
  description:
    "Comprehensive specialist geriatric care for older adults in Singapore. Led by consultant geriatrician Dr. Tan Mei Ying Melanie. Clinic, home visit & telehealth services.",
  keywords:
    "geriatrician Singapore, geriatric care, elderly care specialist, senior health screening, Dr Melanie Tan, Gleneagles geriatrics",
  ogTitle: "Straits Geriatrics \u2014 Specialist Geriatric Care in Singapore",
  ogDescription:
    "Comprehensive medical care for older adults \u2014 helping patients and families navigate complex health needs with clarity and confidence.",
};

export const structuredData = {
  clinic: {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Straits Geriatrics",
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    medicalSpecialty: "Geriatric Medicine",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "6 Napier Road, #03-14, Gleneagles Medical Centre",
        addressLocality: "Singapore",
        postalCode: "258499",
        addressCountry: "SG",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Blk 185, Toa Payoh Central, #01-320",
        addressLocality: "Singapore",
        postalCode: "310185",
        addressCountry: "SG",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "12:30",
      },
    ],
  },
  physician: {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Tan Mei Ying Melanie",
    medicalSpecialty: "Geriatric Medicine",
    qualifications:
      "MBBS (Monash), MRCP (UK), FAMS (Singapore), FRCP (UK), Graduate Diploma in Palliative Care",
    affiliation: [
      { "@type": "MedicalOrganization", name: "Straits Geriatrics" },
      { "@type": "Hospital", name: "National University Hospital" },
      { "@type": "Hospital", name: "Ng Teng Fong General Hospital" },
    ],
    memberOf: {
      "@type": "MedicalOrganization",
      name: "Society for Geriatric Medicine Singapore",
      roleName: "Vice-President",
    },
  },
};
