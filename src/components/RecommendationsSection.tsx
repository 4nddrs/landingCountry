import { motion } from "motion/react";
import { Shield, Link2, Smartphone, GraduationCap, AlertTriangle } from "lucide-react";

const recommendations = [
  {
    icon: AlertTriangle,
    title: "Auditorías continuas",
    description: "Realizar auditorías técnicas y operativas periódicas para asegurar eficiencia, seguridad y calidad de los datos."
  },
  {
    icon: Link2,
    title: "Canal con proveedores",
    description: "Establecer un canal formal con proveedores para mejorar la trazabilidad, coordinación y tiempos de entrega."
  },
  {
    icon: Smartphone,
    title: "Aplicación móvil",
    description: "Desarrollar una app para clientes y personal que permita pedidos, notificaciones y consulta de historial."
  },
  {
    icon: GraduationCap,
    title: "Capacitación periódica",
    description: "Implementar capacitaciones regulares para garantizar el uso correcto del ERP y mejorar la adopción del sistema."
  },
  {
    icon: Shield,
    title: "Seguridad digital",
    description: "Aplicar políticas estrictas de seguridad y capacitar al personal para prevenir accesos no autorizados y fraudes."
  }
];

export function RecommendationsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#1a2333] to-[#0a0e1a]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Recomendaciones
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto">
            Sugerencias para la implementación exitosa y sostenibilidad del sistema
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.slice(0, 3).map((recommendation, index) => {
              const positions = [
                { x: -60, y: -30, rotate: -5 },
                { x: 0, y: -40, rotate: 0 },
                { x: 60, y: -30, rotate: 5 }
              ];
              const pos = positions[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, ...pos }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 80 }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-105"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <recommendation.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {recommendation.title}
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed">
                      {recommendation.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* Second row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recommendations.slice(3, 5).map((recommendation, index) => {
              const actualIndex = index + 3;
              const positions = [
                { x: -60, y: 30, rotate: 5 },
                { x: 60, y: 30, rotate: -5 }
              ];
              const pos = positions[index];
              
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, ...pos }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: actualIndex * 0.1, type: "spring", stiffness: 80 }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-105"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <recommendation.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {recommendation.title}
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed">
                      {recommendation.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
         
        </motion.div>
      </div>
    </section>
  );
}