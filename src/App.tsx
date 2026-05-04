/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import { Navbar } from "@/components/ui/navbar";
import { SkillsSection } from "@/components/ui/skills-section";
import { Footer } from "@/components/ui/footer-section";
import { AboutSection, ExperienceSection, EducationSection, ProjectsSection } from "@/components/PortfolioSections";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ResumeDownload } from "@/components/ui/resume-download";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 selection:bg-neutral-200 dark:selection:bg-white/20 flex flex-col items-center relative overflow-x-hidden font-sans">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.02)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      <Navbar />
      
      <main className="w-full flex flex-col items-center relative z-10">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
          <HeroSection />
        </div>
        
        <AboutSection />
        
        <SkillsSection />

        <ProjectsSection />

        <ExperienceSection />

        <EducationSection />

        <ResumeDownload />
      </main>

      <Footer />
    </div>
    </LanguageProvider>
  );
}
