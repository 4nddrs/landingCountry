import { motion, AnimatePresence } from "motion/react";
import { Target, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const objectives = {
  general: "Desarrollar un prototipo funcional de un sistema ERP para la gestión y vigilancia de equinos en el Country Club Cochabamba, integrando módulos administrativos y un componente de monitoreo inteligente por visión por computadora, basado en un diagnóstico operativo y validado mediante pruebas que demuestren mejoras en eficiencia, seguridad y bienestar animal.",
  previewSpecific: [
    "Realizar un diagnóstico operativo y técnico de la sección hípica para identificar requerimientos, flujos de trabajo, problemas críticos y criterios de evaluación del sistema.",
    "Definir los requisitos funcionales, no funcionales y criterios de aceptación, incluyendo KPIs y métricas que guíen el diseño, implementación y validación del ERP.",
    "Desarrollar el módulo de Gestión de Caballos, para administrar datos, historial médico y eventos, garantizando integridad y trazabilidad.",
    "Desarrollar el módulo de Monitoreo Inteligente, integrando cámaras y visión por computadora para detectar comportamientos y generar alertas automáticas.",
    "Ejecutar pruebas piloto y validar el sistema, ajustando módulos según criterios de aceptación y retroalimentación del personal.",
  ],
  specific: [
    "Realizar un diagnóstico operativo y técnico de la sección hípica para identificar requerimientos, flujos de trabajo, problemas críticos y criterios de evaluación del sistema.",
    "Definir los requisitos funcionales, no funcionales y criterios de aceptación, incluyendo KPIs y métricas que guíen el diseño, implementación y validación del ERP.",
    "Desarrollar el módulo de Gestión de Caballos, para administrar datos, historial médico y eventos, garantizando integridad y trazabilidad.",
    "Desarrollar el módulo de Salud y Nutrición, para controlar vacunas, tratamientos, dietas y alertas, validado con personal veterinario.",
    "Desarrollar el módulo de Monitoreo Inteligente, integrando cámaras y visión por computadora para detectar comportamientos y generar alertas automáticas.",
    "Desarrollar el módulo de Gestión de Personal, administrando información, roles, permisos y asignaciones, validado mediante pruebas de usuario.",
    "Desarrollar el módulo de Planificación de Tareas y Turnos, optimizando asignaciones y reduciendo solapamientos mediante reglas operativas identificadas.",
    "Desarrollar el módulo de Logística y Transporte, para gestionar traslados, rutas y permisos, validado con simulaciones y pruebas reales.",
    "Desarrollar el módulo de Control de Stock e Inventarios, con alertas automáticas, puntos de reorden y reportes basados en datos históricos.",
    "Desarrollar el módulo de Mantenimiento de Establos e Instalaciones, para registrar y planificar mantenimiento preventivo y correctivo.",
    "Desarrollar el módulo de Reportes y Dashboard, consolidando KPIs operativos para apoyar la toma de decisiones.",
    "Ejecutar pruebas piloto y validar el sistema, ajustando módulos según criterios de aceptación y retroalimentación del personal.",
    "Documentar y transferir la solución, entregando documentación técnica, manuales y un plan de implementación escalable.",
  ]
};

export function ObjectivesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullObjectives, setShowFullObjectives] = useState(false);

  const activeObjectives = showFullObjectives ? objectives.specific : objectives.previewSpecific;

  const nextObjective = () => {
    setCurrentIndex((prev) => (prev + 1) % activeObjectives.length);
  };

  const prevObjective = () => {
    setCurrentIndex((prev) => (prev - 1 + activeObjectives.length) % activeObjectives.length);
  };

  const toggleObjectives = () => {
    if (showFullObjectives) {
      setShowFullObjectives(false);
      setCurrentIndex((prev) => Math.min(prev, objectives.previewSpecific.length - 1));
      return;
    }

    setShowFullObjectives(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#0f1629]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Objetivos del proyecto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* General Objective - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
          className="p-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Objetivo General
            </h3>
          </div>
          <p className="text-slate-300 leading-relaxed font-light">
            {objectives.general}
          </p>
        </motion.div>

        {/* Specific Objectives Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white">
            Objetivos Específicos
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
              transition={{ duration: 0.15, type: "spring", stiffness: 100 }}
              onClick={toggleObjectives}
              role="button"
              tabIndex={0}
              className="p-10 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                  <span className="text-blue-400 font-semibold">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-300 leading-relaxed font-light text-lg">
                    {activeObjectives[currentIndex]}
                  </p>
                  {!showFullObjectives && (
                    <p className="mt-3 text-sm text-slate-400">
                    
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevObjective}
              className="w-12 h-12 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 group"
              aria-label="Objetivo anterior"
            >
              <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </button>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {activeObjectives.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-blue-500' 
                      : 'w-2 bg-blue-500/30 hover:bg-blue-500/50'
                  }`}
                  aria-label={`Ir al objetivo ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextObjective}
              className="w-12 h-12 rounded-full bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 group"
              aria-label="Siguiente objetivo"
            >
              <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-slate-400 text-sm">
              {currentIndex + 1} de {activeObjectives.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}