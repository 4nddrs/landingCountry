import { motion, AnimatePresence } from "motion/react";
import { Search, Palette, Code, TestTube, Rocket, FileText, ClipboardList, RefreshCw, CheckSquare, Network, FlaskConical, ChevronLeft, ChevronRight, BarChart, Users, Layers, KanbanSquare, BookOpen } from "lucide-react";
import { useState } from "react";

const phases = [
  {
    icon: Search,
    title: "Estrategia de Investigación",
    description:
      "Enfoque aplicado y mixto de tipo descriptivo. Se orienta a documentar procesos reales sin manipular variables para comprender el funcionamiento de la hípica."
  },
  {
    icon: ClipboardList,
    title: "Recolección y Análisis",
    description:
      "Combinación de métodos teóricos y empíricos (encuestas, entrevistas y observación) analizados mediante estadística descriptiva y triangulación de datos."
  },
  {
    icon: Users,
    title: "Población y Fuentes",
    description:
      "Muestreo no probabilístico del personal operativo y revisión de documentos institucionales del Country Club, sustentado en literatura técnica especializada."
  },
  {
    icon: Layers,
    title: "Metodologías de Trabajo",
    description:
      "Desarrollo de software bajo el estándar RUP (iterativo e incremental) gestionado con metodología Kanban para asegurar un flujo de entregas continuas."
  }
];



export function MethodologySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhase = () => {
    setCurrentIndex((prev) => (prev + 1) % phases.length);
  };

  const prevPhase = () => {
    setCurrentIndex((prev) => (prev - 1 + phases.length) % phases.length);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0f1629] to-[#1a2333]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Metodología
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Enfoque Card */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
          className="p-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Estructura del Desarrollo
            </h3>
          </div>
          <p className="text-slate-300 leading-relaxed font-light">
            La metodología integra la investigación de campo con el ciclo de vida del desarrollo de software para transformar necesidades operativas en funcionalidades técnicas. Este proceso iterativo permite validar cada etapa del sistema con el personal del Country Club.
          </p>
        </motion.div>

        {/* Phases Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-semibold text-white">
            Fases del proceso
          </h3>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/30 mb-6">
                  {(() => {
                    const Icon = phases[currentIndex].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {phases[currentIndex].title}
                </h4>
                <p className="text-slate-300 leading-relaxed font-light text-lg">
                  {phases[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevPhase}
              className="w-12 h-12 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 group"
              aria-label="Fase anterior"
            >
              <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </button>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {phases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-blue-500/30 hover:bg-blue-500/50'
                  }`}
                  aria-label={`Ir a la fase ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPhase}
              className="w-12 h-12 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 group"
              aria-label="Siguiente fase"
            >
              <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-slate-400 text-sm">
              {currentIndex + 1} de {phases.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}