import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import CustomMarquee from "@/components/CustomMarquee";
import ExperincesSection from "@/components/ExperincesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <main className="space-y-8">
      <HeroSection />
      <CustomMarquee />
      <SkillSection />
      <ExperincesSection />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
