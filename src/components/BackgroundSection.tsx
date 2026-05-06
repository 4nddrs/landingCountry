import { motion } from "motion/react";
import { BookOpen, FileText, History } from "lucide-react";

const backgrounds = [
  {
    icon: History,
    title: "Contexto histórico",
    description: "La gestión manual tradicional de los clubes hípicos limita su crecimiento y el control eficiente de sus recursos."
  },
  {
    icon: BookOpen,
    title: "Necesidad identificada",
    description: "La transformación digital es ya una prioridad para optimizar la gestión, seguridad y bienestar equino."
  },
  {
    icon: FileText,
    title: "Estudios previos",
    description: "Los sistemas ERP especializados aumentan la eficiencia operativa y reducen costos en el sector ecuestre."
  }
];

export function BackgroundSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0f1629] to-[#1a2333]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Antecedentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {backgrounds.map((item, index) => {
            const positions = [
              { x: -60, rotate: -5 },
              { y: -40, scale: 0.9 },
              { x: 60, rotate: 5 }
            ];
            const pos = positions[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, ...pos }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 80 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <item.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}