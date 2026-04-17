import { motion } from "motion/react";
import { Database, Eye, LayoutDashboard, Bell } from "lucide-react";

const solutions = [
  {
    icon: Database,
    title: "Gestión digital completa",
    description: "Centraliza toda la información en un solo sistema"
  },
  {
    icon: Eye,
    title: "Monitoreo inteligente",
    description: "Vigilancia en tiempo real de todos los caballos"
  },
  {
    icon: LayoutDashboard,
    title: "Panel centralizado",
    description: "Visualización clara de todos los datos importantes"
  },
  {
    icon: Bell,
    title: "Alertas automáticas",
    description: "Notificaciones y reportes instantáneos"
  }
];

export function SolutionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0f1629] to-[#0a0e1a]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, rotateX: 20 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Nuestra solución
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const directions = [
              { x: -60, y: -40 },
              { x: 60, y: -40 },
              { x: -60, y: 40 },
              { x: 60, y: 40 }
            ];
            const direction = directions[index % 4];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: direction.x, y: direction.y, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 80 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-105"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <solution.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {solution.description}
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