import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CodingProfilesSection } from "@/components/CodingProfilesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CodingProfilesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
