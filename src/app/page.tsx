import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PortfolioShowcase } from "@/components/portfolio-showcase";
import { FeaturedProjects } from "@/components/featured-projects";
// import { AdditionalProjects } from "@/components/additional-projects";
// import { MoreProjects } from "@/components/more-projects";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <PortfolioShowcase />
      <FeaturedProjects />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
