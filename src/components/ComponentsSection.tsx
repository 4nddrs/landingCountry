import { motion } from "motion/react";
import { Users, Star, Activity, Eye, FileText, Shield } from "lucide-react";

const systemComponents = [
  {
    icon: Users,
    title: "Gestión de Usuarios",
    description: "Administración completa de perfiles y permisos de usuario"
  },
  {
    icon: Star,
    title: "Control de Caballos",
    description: "Registro detallado y seguimiento de cada caballo"
  },
  {
    icon: Activity,
    title: "Control de Abastecimiento",
    description: "Gestión eficiente de inventarios y suministros"
  },
  {
    icon: Eye,
    title: "Vigilancia y Alertas",
    description: "Sistema de monitoreo en tiempo real."
  },
  {
    icon: FileText,
    title: "Reportes",
    description: "Generación automática de informes y análisis de datos"
  },
  {
    icon: Shield,
    title: "Roles y Permisos",
    description: "Gestión granular de accesos y privilegios del sistema"
  }
];

export function ComponentsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#1a2333] to-[#0a0e1a]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotateZ: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring", stiffness: 70 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Componentes del Sistema
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemComponents.map((component, index) => {
            const positions = [
              { x: -60, y: -40, rotate: -8 },
              { x: 0, y: -50, rotate: 0 },
              { x: 60, y: -40, rotate: 8 },
              { x: -60, y: 40, rotate: 8 },
              { x: 0, y: 50, rotate: 0 },
              { x: 60, y: 40, rotate: -8 }
            ];
            const pos = positions[index % 6];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: pos.x, y: pos.y, rotate: pos.rotate, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12, type: "spring", stiffness: 80 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <component.icon className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {component.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {component.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}