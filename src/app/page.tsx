"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { ShieldCheck, Wrench, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "services" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="MIROWIRO"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Trusted Electrician, Wythenshawe 24/7 Emergency Response"
      description="Fully qualified, transparent pricing, and 20 years keeping south Manchester safe. From emergency callouts to full rewires—Miro handles it all."
      buttons={[
        { text: "Call Now", href: "tel:07000000000" },
        { text: "Message on WhatsApp", href: "https://wa.me/44700000000" },
      ]}
      carouselItems={[
        { id: "c1", imageSrc: "https://images.unsplash.com/photo-1594833297837-e21544a49c95?q=80&w=800", imageAlt: "Authentic Manchester residential terrace street" },
        { id: "c2", imageSrc: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800", imageAlt: "Local Manchester semi-detached property" },
        { id: "c3", imageSrc: "https://images.unsplash.com/photo-1574359411659-1de2b2da46f8?q=80&w=800", imageAlt: "Professional electrician working in a residential setting" },
        { id: "c4", imageSrc: "https://images.unsplash.com/photo-1581783330335-273b6dc90265?q=80&w=800", imageAlt: "Qualified tradesperson at work in a home" },
        { id: "c5", imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800", imageAlt: "Traditional red brick suburban street in Manchester" },
        { id: "c6", imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800", imageAlt: "Modern renovation project in a local home" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Emergency Repairs",          description: "24/7 rapid response when you need power back safely.",          bentoComponent: "reveal-icon",          icon: Zap
        },
        {
          title: "EICR Testing",          description: "Thorough landlord compliance and safety inspections.",          bentoComponent: "reveal-icon",          icon: ShieldCheck
        },
        {
          title: "Full Rewires",          description: "Complete systems upgrades for aging properties.",          bentoComponent: "reveal-icon",          icon: Wrench
        },
      ]}
      title="Comprehensive Electrical Services"
      description="Premium solutions for homeowners and landlords across South Manchester."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "20+", description: "Years of Experience" },
        { id: "m2", value: "500+", description: "Happy Local Clients" },
        { id: "m3", value: "24/7", description: "Emergency Availability" },
        { id: "m4", value: "5-Star", description: "Rated Professional" },
      ]}
      title="Trusted by Wythenshawe"
      description="Proven local experience delivering reliable results every time."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",          badge: "Essential",          price: "£80",          subtitle: "Initial Emergency Callout",          features: ["Diagnostic check", "First 30 mins included", "Safety appraisal"],
          buttons: [{ text: "Book Now", href: "#contact" }]
        },
        {
          id: "p2",          badge: "Compliance",          price: "£150",          subtitle: "Landlord EICR Package",          features: ["Full EICR inspection", "Certification document", "Code check"],
          buttons: [{ text: "Book Now", href: "#contact" }]
        },
        {
          id: "p3",          badge: "Custom",          price: "Quote",          subtitle: "Full Property Rewiring",          features: ["Detailed estimate", "Certified materials", "Full project management"],
          buttons: [{ text: "Get Quote", href: "#contact" }]
        },
      ]}
      title="Transparent Pricing"
      description="Clear rates with no hidden costs. Professional service you can afford."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={true}
      names={[
        "NICEIC Approved", "Landlord Certified", "Manchester Business Guild",        "Emergency Rated", "Safety Standard", "Local Trust", "Wythenshawe Electric Council"]}
      title="Compliance & Quality Assured"
      description="Licensed and trusted professional electrical services."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Sarah J.", handle: "@sarahhome", testimonial: "Miro came out at 2 AM for an emergency fault. Fantastic service.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-charming-delighted-cute-female-customer-give-positive-feedback-show-thumbsup-like-gesture_1258-254022.jpg" },
        { id: "t2", name: "David M.", handle: "@manclandlord", testimonial: "Reliable EICR testing for my rental properties. Highly recommend.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg" },
        { id: "t3", name: "Emma W.", handle: "@localem", testimonial: "Professional and clean work. Rewired my whole kitchen perfectly.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/male-coworkers-office-with-lunch_273609-6308.jpg" },
        { id: "t4", name: "Robert B.", handle: "@robb", testimonial: "Transparency on pricing was refreshing. No hidden fees at all.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-as-real-estate-agent_23-2151064995.jpg" },
        { id: "t5", name: "Lucy K.", handle: "@lucyhome", testimonial: "Friendly and very knowledgeable. Fixed my lighting immediately.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-showing-new-home-his-surprised-happy-girlfriend_74855-10259.jpg" },
      ]}
      showRating={true}
      title="Client Success Stories"
      description="See why homeowners in South Manchester trust Miro."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "Are you fully qualified?", content: "Yes, I hold full electrical qualifications and am fully insured." },
        { id: "f2", title: "Do you offer emergency calls?", content: "Yes, 24/7 service for all emergency electrical needs in Wythenshawe." },
        { id: "f3", title: "What areas do you cover?", content: "I specialize in Wythenshawe and the broader South Manchester area." },
        { id: "f4", title: "Do you provide transparent quotes?", content: "Yes, every job is quoted clearly upfront with no surprise costs." },
      ]}
      title="Frequently Asked Questions"
      description="Answers to common queries about our electrical services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Ready to get your home's electricity safe and reliable? Miro is ready to help."
      buttons={[
        { text: "Call Now", href: "tel:07000000000" },
        { text: "WhatsApp Message", href: "https://wa.me/44700000000" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="MIROWIRO"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "© 2024 MIROWIRO Services", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}