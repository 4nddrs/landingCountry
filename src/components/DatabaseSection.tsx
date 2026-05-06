import { motion, AnimatePresence } from "motion/react";
import { Database, Shrink, Maximize2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const databaseAssets = {
  complete: {
    title: "Modelo Relacional Principal",
    description: "Diagrama entidad-relación completo del sistema",
    image: "/images/base.png",
    diagram: "/Hipica.drawio.html",
  },
  summary: {
    title: "Modelo de Base de Datos Simplificado",
    description: "Vista resumida de relaciones principales",
    image: "/images/base1.png",
    diagram: "/Hipica1.drawio.html",
  },
} as const;

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

export function DatabaseSection() {
  const [viewMode, setViewMode] = useState<"complete" | "summary">("complete");
  const [isCracking, setIsCracking] = useState(false);
  const crackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const completeImage = new Image();
    completeImage.src = databaseAssets.complete.image;

    const summaryImage = new Image();
    summaryImage.src = databaseAssets.summary.image;

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

          <div className="relative">
            <AnimatePresence mode="wait">
              {viewMode === "summary" ? (
                <motion.div
                  key="database-summary"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="flex flex-col gap-6"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {databaseAssets.summary.title}
                    </h3>
                    <p className="text-slate-400 font-light">
                      {databaseAssets.summary.description}
                    </p>
                  </div>

                  <img
                    src={databaseAssets.summary.image}
                    alt={databaseAssets.summary.title}
                    data-lightbox-src={databaseAssets.summary.image}
                    className="aspect-[16/10] w-full rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] object-contain p-4 md:p-6 cursor-zoom-in"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="database-complete"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex flex-col gap-6"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {databaseAssets.complete.title}
                    </h3>
                    <p className="text-slate-400 font-light">
                      {databaseAssets.complete.description}
                    </p>
                  </div>

                  <a
                    href={databaseAssets.complete.diagram}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                    aria-label="Abrir el modelo relacional principal en una nueva pestaña"
                  >
                    <motion.div
                      key="complete-view"
                      className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] border border-blue-500/20 overflow-hidden cursor-zoom-in"
                      initial={{ opacity: 0, scale: 0.985 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <div
                        className="absolute inset-0 bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${databaseAssets.complete.image})`,
                          backgroundSize: "contain",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-400/0 transition-colors duration-300 hover:from-blue-500/5 hover:to-cyan-400/5" />
                    </motion.div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isCracking && (
                <motion.div
                  key="database-crack-burst"
                  className="pointer-events-none absolute inset-0 z-10"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.16 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.12),rgba(34,211,238,0.10)_32%,transparent_68%)]" />
                  {fracturePieces.map((piece) => (
                    <motion.div
                      key={piece.id}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-2xl"
                      style={{ clipPath: piece.clipPath }}
                      initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        x: [0, piece.x, piece.x * 1.15],
                        y: [0, piece.y, piece.y * 1.1],
                        rotate: [0, piece.rotate, piece.rotate * 1.08],
                      }}
                      transition={{
                        duration: 1.05,
                        delay: piece.delay,
                        ease: "easeOut",
                      }}
                    >
                      <img
                        src={databaseAssets.complete.image}
                        alt="Fragmento del modelo completo"
                        className="h-[56vh] w-[72vw] max-h-[700px] max-w-[1080px] object-cover md:h-[60vh] md:w-[62vw]"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

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
            <div className="mt-6 text-center">
              <span className="text-slate-400 text-sm">
                {viewMode === "complete"
                  ? ""
                  : ""}
              </span>
            </div>
          </div>

          {/* Bottom Description */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 font-light">
              Modelo relacional optimizado con transición entre vista completa y resumen interactivo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}