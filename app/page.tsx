import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import Assessments from "@/components/Assessments";
import Telehealth from "@/components/Telehealth";
import About from "@/components/About";
import DoctorProfile from "@/components/DoctorProfile";
import CommunityClinic from "@/components/CommunityClinic";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main">
        <Hero />
        <div className="section-gradient-divider" />
        <ValueProps />
        <div className="section-gradient-divider" />
        <WhoWeHelp />
        <div className="section-gradient-divider" />
        <Services />
        <div className="section-gradient-divider" />
        <Assessments />
        <div className="section-gradient-divider" />
        <Telehealth />
        <div className="section-gradient-divider" />
        <About />
        <div className="section-gradient-divider" />
        <DoctorProfile />
        <div className="section-gradient-divider" />
        <Testimonials />
        <div className="section-gradient-divider" />
        <CommunityClinic />
        <div className="section-gradient-divider" />
        <HowItWorks />
        <div className="section-gradient-divider" />
        <Articles />
        <div className="section-gradient-divider" />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <BackToTop />
      <ScrollReveal />
      <CustomCursor />
    </>
  );
}
