import { useEffect, useRef, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { TeamSection } from "./components/TeamSection";
import { ProblemSection } from "./components/ProblemSection";
import { BackgroundSection } from "./components/BackgroundSection";
import { SolutionSection } from "./components/SolutionSection";
import { ObjectivesSection } from "./components/ObjectivesSection";
import { MethodologySection } from "./components/MethodologySection";
import { DiagramsSection } from "./components/DiagramsSection";
import { DatabaseSection } from "./components/DatabaseSection";
import { TechnologiesSection } from "./components/TechnologiesSection";
import { TestingSection } from "./components/TestingSection";
import { ComponentsSection } from "./components/ComponentsSection";
import { AIModelDevelopmentSection } from "./components/AIModelDevelopmentSection";
import { AIModelResultsSection } from "./components/AIModelResultsSection";
import { MotionCaptureSection } from "./components/MotionCaptureSection";
import { CostsSection } from "./components/CostsSection";
import { SoftwarePresentationSection } from "./components/SoftwarePresentationSection";
import { ConclusionSection } from "./components/ConclusionSection";
import { RecommendationsSection } from "./components/RecommendationsSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [testingUnlocked, setTestingUnlocked] = useState(false);
  const testingSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (!testingUnlocked) return;

    testingSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [testingUnlocked]);

  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#0a0e1a]">
        <div className="snap-start snap-always min-h-screen">
          <HeroSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <TeamSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <ProblemSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <BackgroundSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <SolutionSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <ObjectivesSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <MethodologySection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <DiagramsSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <DatabaseSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <TechnologiesSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <ComponentsSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <AIModelDevelopmentSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <AIModelResultsSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <MotionCaptureSection />
        </div>
        {testingUnlocked && (
          <div ref={testingSectionRef} className="snap-start snap-always min-h-screen">
            <TestingSection />
          </div>
        )}
        <div className="snap-start snap-always min-h-screen">
          <CostsSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <SoftwarePresentationSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <ConclusionSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <RecommendationsSection />
        </div>
        <div className="snap-start snap-always min-h-screen">
          <Footer
            testingUnlocked={testingUnlocked}
            onUnlockTesting={() => setTestingUnlocked(true)}
          />
        </div>
      </div>
    </>
  );
}