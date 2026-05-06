import { motion, AnimatePresence } from "motion/react";
import { Network, GitBranch, Component, Server, ChevronLeft, ChevronRight, Maximize2, Shrink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const classDiagramAssets = {
  summary: "/images/clases.png",
  complete: "/images/diagrams/clases.png",
};

const classDiagramCompleteLink = "/Clases1.drawio.html";

const sequenceDiagramAssets = {
  summary: "/images/secuencia.png",
  complete: "/images/diagrams/secuencia.png",
};

const sequenceDiagramCompleteLink = "/DiagramaSecuencia.drawio.html";

const componentDiagramAssets = {
  summary: "/images/componentes.png",
  complete: "/images/diagrams/componentes.png",
};

const componentDiagramCompleteLink = "/DiagramaComponentes.drawio.html";

const deployDiagramAssets = {
  summary: "/images/despliegue.png",
  complete: "/images/diagrams/despliegue.png",
};

const deployDiagramCompleteLink = "/DiagramaDespliegue.drawio.html";

const fracturePieces = [
  {
    id: "top-left",
    clipPath: "polygon(0 0, 44% 0, 31% 36%, 0 26%)",
    x: -120,
    y: -88,
    rotate: -12,
    delay: 0,
  },
  {
    id: "top-mid-left",
    clipPath: "polygon(44% 0, 74% 0, 61% 33%, 31% 36%)",
    x: -10,
    y: -128,
    rotate: 8,
    delay: 0.03,
  },
  {
    id: "top-right",
    clipPath: "polygon(74% 0, 100% 0, 100% 34%, 61% 33%)",
    x: 128,
    y: -98,
    rotate: 14,
    delay: 0.06,
  },
  {
    id: "mid-left",
    clipPath: "polygon(0 26%, 31% 36%, 28% 70%, 0 100%)",
    x: -118,
    y: 110,
    rotate: -15,
    delay: 0.06,
  },
  {
    id: "center",
    clipPath: "polygon(31% 36%, 61% 33%, 58% 70%, 28% 70%)",
    x: 16,
    y: 120,
    rotate: 6,
    delay: 0.09,
  },
  {
    id: "mid-right",
    clipPath: "polygon(61% 33%, 100% 34%, 100% 100%, 58% 70%)",
    x: 132,
    y: 100,
    rotate: 16,
    delay: 0.12,
  },
  {
    id: "bottom-left",
    clipPath: "polygon(0 100%, 28% 70%, 58% 70%, 51% 100%)",
    x: -76,
    y: 168,
    rotate: -7,
    delay: 0.14,
  },
  {
    id: "bottom-right",
    clipPath: "polygon(51% 100%, 58% 70%, 100% 100%)",
    x: 94,
    y: 172,
    rotate: 10,
    delay: 0.16,
  },
] as const;

function ClassDiagramComparison() {
  const [viewMode, setViewMode] = useState<"complete" | "summary">("complete");
  const [isCracking, setIsCracking] = useState(false);
  const crackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const completeImage = new Image();
    completeImage.src = classDiagramAssets.complete;

    const summaryImage = new Image();
    summaryImage.src = classDiagramAssets.summary;

    return () => {
      if (crackTimerRef.current) {
        window.clearTimeout(crackTimerRef.current);
      }
    };
  }, []);

  const toggleView = () => {
    if (isCracking) {
      return;
    }

    if (viewMode === "complete") {
      setViewMode("summary");
      setIsCracking(true);
      crackTimerRef.current = window.setTimeout(() => {
        setIsCracking(false);
      }, 1200);
      return;
    }

    setViewMode("complete");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] border border-blue-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

        <AnimatePresence mode="wait">
          {viewMode === "summary" ? (
            <motion.img
              key="summary-image"
              src={classDiagramAssets.summary}
              alt="Diagrama de clases resumido"
              data-lightbox-src={classDiagramAssets.summary}
              className="absolute inset-0 h-full w-full object-contain p-4 md:p-6 cursor-zoom-in"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            />
          ) : (
            <motion.button
              key="complete-image"
              type="button"
              onClick={() => window.open(classDiagramCompleteLink, "_blank", "noopener,noreferrer")}
              className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div
                className="absolute inset-0 bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${classDiagramAssets.complete})`,
                  backgroundSize: "contain",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-400/0 transition-colors duration-300 hover:from-blue-500/5 hover:to-cyan-400/5" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isCracking && (
            <motion.div
              key="crack-burst"
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.14),rgba(34,211,238,0.10)_32%,transparent_68%)]" />
              {fracturePieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  className="absolute inset-0"
                  style={{
                    clipPath: piece.clipPath,
                    backgroundImage: `url(${classDiagramAssets.complete})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    filter:
                      "drop-shadow(0 0 10px rgba(217, 70, 239, 0.28)) drop-shadow(0 0 14px rgba(34, 211, 238, 0.18))",
                    mixBlendMode: "screen",
                  }}
                  initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                  animate={{
                    x: piece.x,
                    y: piece.y,
                    rotate: piece.rotate,
                    scale: 0.96,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.84,
                    delay: piece.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleView}
          className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-slate-950/55 px-4 py-2 text-sm text-white shadow-lg shadow-blue-950/20 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-slate-950/75"
        >
          {viewMode === "complete" ? (
            <>
              <Shrink className="h-4 w-4 text-cyan-300" />
            
            </>
          ) : (
            <>
              <Maximize2 className="h-4 w-4 text-cyan-300" />
             
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function SequenceDiagramComparison() {
  const [viewMode, setViewMode] = useState<"complete" | "summary">("complete");
  const [isCracking, setIsCracking] = useState(false);
  const crackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const completeImage = new Image();
    completeImage.src = sequenceDiagramAssets.complete;

    const summaryImage = new Image();
    summaryImage.src = sequenceDiagramAssets.summary;

    return () => {
      if (crackTimerRef.current) {
        window.clearTimeout(crackTimerRef.current);
      }
    };
  }, []);

  const toggleView = () => {
    if (isCracking) return;
    if (viewMode === "complete") {
      setViewMode("summary");
      setIsCracking(true);
      crackTimerRef.current = window.setTimeout(() => setIsCracking(false), 1200);
      return;
    }
    setViewMode("complete");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] border border-blue-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

        <AnimatePresence mode="wait">
          {viewMode === "summary" ? (
            <motion.img
              key="summary-seq"
              src={sequenceDiagramAssets.summary}
              alt="Diagrama de secuencia resumido"
              data-lightbox-src={sequenceDiagramAssets.summary}
              className="absolute inset-0 h-full w-full object-contain p-4 md:p-6 cursor-zoom-in"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            />
          ) : (
            <motion.button
              key="complete-seq"
              type="button"
              onClick={() => window.open(sequenceDiagramCompleteLink, "_blank", "noopener,noreferrer")}
              className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div
                className="absolute inset-0 bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${sequenceDiagramAssets.complete})`, backgroundSize: "contain" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-400/0 transition-colors duration-300 hover:from-blue-500/5 hover:to-cyan-400/5" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isCracking && (
            <motion.div key="crack-burst-seq" className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16 }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.14),rgba(34,211,238,0.10)_32%,transparent_68%)]" />
              {fracturePieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  className="absolute inset-0"
                  style={{
                    clipPath: piece.clipPath,
                    backgroundImage: `url(${sequenceDiagramAssets.complete})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    filter: "drop-shadow(0 0 10px rgba(217, 70, 239, 0.28)) drop-shadow(0 0 14px rgba(34, 211, 238, 0.18))",
                    mixBlendMode: "screen",
                  }}
                  initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                  animate={{ x: piece.x, y: piece.y, rotate: piece.rotate, scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.84, delay: piece.delay, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button onClick={toggleView} className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-slate-950/55 px-4 py-2 text-sm text-white shadow-lg shadow-blue-950/20 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-slate-950/75">
          {viewMode === "complete" ? (
            <>
              <Shrink className="h-4 w-4 text-cyan-300" />
  
            </>
          ) : (
            <>
              <Maximize2 className="h-4 w-4 text-cyan-300" />
  
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function ComponentDiagramComparison() {
  const [viewMode, setViewMode] = useState<"complete" | "summary">("complete");
  const [isCracking, setIsCracking] = useState(false);
  const crackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const completeImage = new Image();
    completeImage.src = componentDiagramAssets.complete;

    const summaryImage = new Image();
    summaryImage.src = componentDiagramAssets.summary;

    return () => {
      if (crackTimerRef.current) {
        window.clearTimeout(crackTimerRef.current);
      }
    };
  }, []);

  const toggleView = () => {
    if (isCracking) return;
    if (viewMode === "complete") {
      setViewMode("summary");
      setIsCracking(true);
      crackTimerRef.current = window.setTimeout(() => setIsCracking(false), 1200);
      return;
    }
    setViewMode("complete");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] border border-blue-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

        <AnimatePresence mode="wait">
          {viewMode === "summary" ? (
            <motion.img
              key="summary-comp"
              src={componentDiagramAssets.summary}
              alt="Diagrama de componentes resumido"
              data-lightbox-src={componentDiagramAssets.summary}
              className="absolute inset-0 h-full w-full object-contain p-4 md:p-6 cursor-zoom-in"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            />
          ) : (
            <motion.button
              key="complete-comp"
              type="button"
              onClick={() => window.open(componentDiagramCompleteLink, "_blank", "noopener,noreferrer")}
              className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div
                className="absolute inset-0 bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${componentDiagramAssets.complete})`, backgroundSize: "contain" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-400/0 transition-colors duration-300 hover:from-blue-500/5 hover:to-cyan-400/5" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isCracking && (
            <motion.div key="crack-burst-comp" className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16 }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.14),rgba(34,211,238,0.10)_32%,transparent_68%)]" />
              {fracturePieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  className="absolute inset-0"
                  style={{
                    clipPath: piece.clipPath,
                    backgroundImage: `url(${componentDiagramAssets.complete})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    filter: "drop-shadow(0 0 10px rgba(217, 70, 239, 0.28)) drop-shadow(0 0 14px rgba(34, 211, 238, 0.18))",
                    mixBlendMode: "screen",
                  }}
                  initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                  animate={{ x: piece.x, y: piece.y, rotate: piece.rotate, scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.84, delay: piece.delay, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button onClick={toggleView} className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-slate-950/55 px-4 py-2 text-sm text-white shadow-lg shadow-blue-950/20 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-slate-950/75">
          {viewMode === "complete" ? (
            <>
              <Shrink className="h-4 w-4 text-cyan-300" />
    
            </>
          ) : (
            <>
              <Maximize2 className="h-4 w-4 text-cyan-300" />
     
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function DeployDiagramComparison() {
  const [viewMode, setViewMode] = useState<"complete" | "summary">("complete");
  const [isCracking, setIsCracking] = useState(false);
  const crackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const completeImage = new Image();
    completeImage.src = deployDiagramAssets.complete;

    const summaryImage = new Image();
    summaryImage.src = deployDiagramAssets.summary;

    return () => {
      if (crackTimerRef.current) {
        window.clearTimeout(crackTimerRef.current);
      }
    };
  }, []);

  const toggleView = () => {
    if (isCracking) return;
    if (viewMode === "complete") {
      setViewMode("summary");
      setIsCracking(true);
      crackTimerRef.current = window.setTimeout(() => setIsCracking(false), 1200);
      return;
    }
    setViewMode("complete");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] border border-blue-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

        <AnimatePresence mode="wait">
          {viewMode === "summary" ? (
            <motion.img
              key="summary-deploy"
              src={deployDiagramAssets.summary}
              alt="Diagrama de despliegue resumido"
              data-lightbox-src={deployDiagramAssets.summary}
              className="absolute inset-0 h-full w-full object-contain p-4 md:p-6 cursor-zoom-in"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            />
          ) : (
            <motion.button
              key="complete-deploy"
              type="button"
              onClick={() => window.open(deployDiagramCompleteLink, "_blank", "noopener,noreferrer")}
              className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div
                className="absolute inset-0 bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${deployDiagramAssets.complete})`, backgroundSize: "contain" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-400/0 transition-colors duration-300 hover:from-blue-500/5 hover:to-cyan-400/5" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isCracking && (
            <motion.div key="crack-burst-deploy" className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16 }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.14),rgba(34,211,238,0.10)_32%,transparent_68%)]" />
              {fracturePieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  className="absolute inset-0"
                  style={{
                    clipPath: piece.clipPath,
                    backgroundImage: `url(${deployDiagramAssets.complete})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    filter: "drop-shadow(0 0 10px rgba(217, 70, 239, 0.28)) drop-shadow(0 0 14px rgba(34, 211, 238, 0.18))",
                    mixBlendMode: "screen",
                  }}
                  initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                  animate={{ x: piece.x, y: piece.y, rotate: piece.rotate, scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.84, delay: piece.delay, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button onClick={toggleView} className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-slate-950/55 px-4 py-2 text-sm text-white shadow-lg shadow-blue-950/20 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-slate-950/75">
          {viewMode === "complete" ? (
            <>
              <Shrink className="h-4 w-4 text-cyan-300" />
           
            </>
          ) : (
            <>
              <Maximize2 className="h-4 w-4 text-cyan-300" />
      
            </>
          )}
        </button>
      </div>
    </div>
  );
}

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

                {currentIndex === 0 ? (
                  <ClassDiagramComparison />
                ) : currentIndex === 1 ? (
                  <SequenceDiagramComparison />
                ) : currentIndex === 2 ? (
                  <ComponentDiagramComparison />
                ) : currentIndex === 3 ? (
                  <DeployDiagramComparison />
                ) : (
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
                )}
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