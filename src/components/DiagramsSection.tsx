import { motion, AnimatePresence } from "motion/react";
import { Network, GitBranch, Component, Server, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const diagrams = [
  {
    icon: Network,
    title: "Diagrama de Clases",
    description: "Estructura orientada a objetos del sistema",
    image: "/images/clases.png",
    diagram: "/Clases1.drawio.html"
  },
  {
    icon: GitBranch,
    title: "Diagrama de Secuencia",
    description: "Flujo de interacciones entre componentes",
    image: "/images/secuencia.png",
    diagram: "/DiagramaSecuencia.drawio.html"
  },
  {
    icon: Component,
    title: "Diagrama de Componentes",
    description: "Organización modular de la arquitectura",
    image: "/images/componentes.png",
    diagram: "/DiagramaComponentes.drawio.html"
  },
  {
    icon: Server,
    title: "Diagrama de Despliegue",
    description: "Infraestructura y distribución del sistema",
    image: "/images/despliegue.png",
    diagram: "/DiagramaDespliegue.drawio.html"
  }
];

export function DiagramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDiagram = () => {
    setCurrentIndex((prev) => (prev + 1) % diagrams.length);
  };

  const prevDiagram = () => {
    setCurrentIndex((prev) => (prev - 1 + diagrams.length) % diagrams.length);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#1a2333] to-[#0f1629]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Diagramas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 60 }}
          className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0f1629] border border-blue-500/20"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
                    {(() => {
                      const Icon = diagrams[currentIndex].icon;
                      return <Icon className="w-6 h-6 text-blue-400" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {diagrams[currentIndex].title}
                    </h3>
                    <p className="text-slate-400 text-sm font-light">
                      {diagrams[currentIndex].description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => window.open(diagrams[currentIndex].diagram, '_blank')}
                  className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] border border-blue-500/20 overflow-hidden cursor-pointer hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.01] w-full"
                >
                  <img
                    src={diagrams[currentIndex].image}
                    alt={diagrams[currentIndex].title}
                    className="w-full h-full object-contain p-4 md:p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-blue-600/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                      Click para abrir diagrama completo
                    </span>
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevDiagram}
                className="w-12 h-12 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 group"
                aria-label="Diagrama anterior"
              >
                <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </button>

              <div className="flex gap-2">
                {diagrams.map((_, index) => (
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

            <div className="text-center mt-6">
              <span className="text-slate-400 text-sm">
                {currentIndex + 1} de {diagrams.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}