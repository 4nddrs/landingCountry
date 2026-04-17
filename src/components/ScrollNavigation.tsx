import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ScrollNavigationProps {
  totalSections: number;
}

export function ScrollNavigation({ totalSections }: ScrollNavigationProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.querySelector('.snap-y') as HTMLElement;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const section = Math.round(scrollTop / sectionHeight);
      setCurrentSection(section);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = document.querySelector('.snap-y') as HTMLElement;
      if (!container) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentSection < totalSections - 1) {
          scrollToSection(currentSection + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(totalSections - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, totalSections]);

  const scrollToSection = (index: number) => {
    const container = document.querySelector('.snap-y') as HTMLElement;
    if (!container) return;
    
    const sectionHeight = window.innerHeight;
    container.scrollTo({
      top: index * sectionHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      {/* Section Dots */}
      <div className="flex flex-col gap-3 py-4 px-2 rounded-full bg-[#1a2333]/30 backdrop-blur-xl border border-blue-500/10">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className="group relative"
            aria-label={`Go to section ${index + 1}`}
          >
            <motion.div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-blue-500 scale-125'
                  : 'bg-slate-600 hover:bg-slate-400'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
            
            {/* Active Indicator Glow */}
            {currentSection === index && (
              <motion.div
                className="absolute inset-0 bg-blue-500/50 rounded-full blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <AnimatePresence>
        {currentSection > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => scrollToSection(currentSection - 1)}
            className="mt-2 p-2 rounded-full bg-[#1a2333]/50 backdrop-blur-xl border border-blue-500/10 hover:border-blue-500/30 text-blue-400 hover:bg-blue-600/10 transition-all duration-300"
            aria-label="Previous section"
          >
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSection < totalSections - 1 && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => scrollToSection(currentSection + 1)}
            className="p-2 rounded-full bg-[#1a2333]/50 backdrop-blur-xl border border-blue-500/10 hover:border-blue-500/30 text-blue-400 hover:bg-blue-600/10 transition-all duration-300"
            aria-label="Next section"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Section Counter */}
      <div className="mt-2 px-3 py-1 rounded-full bg-[#1a2333]/50 backdrop-blur-xl border border-blue-500/10">
        <span className="text-xs text-blue-400 font-medium">
          {currentSection + 1} / {totalSections}
        </span>
      </div>
    </div>
  );
}
