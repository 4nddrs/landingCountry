import { motion } from "motion/react";
import { Gauge, CheckCircle2, Beaker } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const tests = [
  {
    icon: Gauge,
    title: "Pruebas de Rendimiento (Caja Negra)",
    technologies: "Artillery (Node.js), FastAPI y Supabase (PostgreSQL)",
    result: "Óptimo en carga ligera y media"
  },
  {
    icon: CheckCircle2,
    title: "Pruebas de Validación de Formularios",
    technologies: "Zod (validación en frontend), Pydantic en FastAPI (validación en backend)",
    result: "Óptimo — validación estricta evita errores de ingreso, formato, tipos y estructura"
  },
  {
    icon: Beaker,
    title: "Pruebas Unitarias del Backend (Caja Blanca)",
    technologies: "Pytest, FastAPI y Supabase",
    result: "Óptimo — todos los controladores, servicios y endpoints CRUD pasaron correctamente"
  }
];

export function TestingSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0f1629] to-[#1a2333]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -40, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Pruebas del Sistema
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tests List */}
          <div className="space-y-6">
            {tests.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 90 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <test.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {test.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium mb-2">
                      {test.technologies}
                    </p>
                    <p className="text-slate-400 font-light">
                      <span className="text-green-400 font-semibold">Resultado:</span> {test.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0f1629] border border-blue-500/20">
              {/* Video Container */}
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0a0e1a] to-[#1a2333] border border-blue-500/30 overflow-hidden">
                <video 
                  controls
                  className="w-full h-full object-contain"
                  controlsList="nodownload"
                >
                  <source src="/video/Ataque ARP Spoofing.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}