import { motion, AnimatePresence } from "motion/react";
import { Database, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const databaseDiagrams = [
  {
    title: "Modelo Relacional Principal",
    description: "Diagrama entidad-relación completo del sistema",
    image: "/images/base.png",
    diagram: "/Hipica.drawio.html"
  },
  {
    title: "Modelo de Base de Datos Simplificado",
    description: "Vista detallada de relaciones simplificadas",
    image: "/images/base1.png",
    diagram: "/Hipica1.drawio.html"
  }
];

export function DatabaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDiagram = () => {
    setCurrentIndex((prev) => (prev + 1) % databaseDiagrams.length);
  };

  const prevDiagram = () => {
    setCurrentIndex((prev) => (prev - 1 + databaseDiagrams.length) % databaseDiagrams.length);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0f1629] to-[#0a0e1a]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, rotateX: -20, y: 40 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Base de Datos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto">
            Arquitectura optimizada para rendimiento y escalabilidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 60 }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/20"
        >
          {/* Icon Header */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center">
              <Database className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              >
                {/* Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {databaseDiagrams[currentIndex].title}
                  </h3>
                  <p className="text-slate-400 font-light">
                    {databaseDiagrams[currentIndex].description}
                  </p>
                </div>

                {/* ERD Image */}
                <button
                  onClick={() => window.open(databaseDiagrams[currentIndex].diagram, '_blank')}
                  className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] border border-blue-500/20 overflow-hidden cursor-pointer hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.01] group w-full"
                >
                  <img 
                    src={databaseDiagrams[currentIndex].image} 
                    alt={databaseDiagrams[currentIndex].title}
                    className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-blue-600/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                      Click para abrir diagrama completo
                    </span>
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevDiagram}
                className="w-12 h-12 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 group"
                aria-label="Diagrama anterior"
              >
                <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </button>
              
              {/* Indicators */}
              <div className="flex gap-2">
                {databaseDiagrams.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-blue-500' 
                        : 'w-2 bg-blue-500/30 hover:bg-blue-500/50'
                    }`}
                    aria-label={`Ir al diagrama ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextDiagram}
                className="w-12 h-12 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 group"
                aria-label="Siguiente diagrama"
              >
                <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </button>
            </div>

            {/* Counter */}
            <div className="text-center mt-6">
              <span className="text-slate-400 text-sm">
                {currentIndex + 1} de {databaseDiagrams.length}
              </span>
            </div>
          </div>

          {/* Bottom Description */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 font-light">
              Modelo relacional optimizado con índices estratégicos y relaciones normalizadas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}