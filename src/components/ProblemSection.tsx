import { motion } from "motion/react";
import { AlertCircle, FileQuestion, Shield, TrendingDown, LockOpen, Clock } from "lucide-react";
import { useState } from "react";

const problems = [
  {
    icon: LockOpen,
    title: "Gestión manual de los caballos",
    content: "No existe un sistema automatizado para registrar entradas y salidas, lo que provoca confusiones y riesgo de pérdidas. Este problema fue identificado mediante observación directa y revisión de registros."
  },
  {
    icon: TrendingDown,
    title: "Descuido en el almacenamiento de alimentos",
    content: "Los almacenes carecen de control y orden adecuados, permitiendo accesos no controlados que generan pérdidas y desbalances nutricionales. Esto se evidenció en inventarios, fotografías y entrevistas."
  },
  {
    icon: Shield,
    title: "Mantenimiento insuficiente del establo",
    content: "El cuidado de instalaciones no sigue un protocolo regular, afectando el bienestar de los caballos. El problema fue documentado en reportes de mantenimiento y guías de observación."
  },
  {
    icon: Clock,
    title: "Falta de control del equipo de caballos y jinetes",
    content: "La ausencia de un registro formal del equipo incrementa el riesgo de pérdidas y deterioro. Esto fue detectado mediante inventarios y entrevistas."
  },
  {
    icon: TrendingDown,
    title: "Gestión ineficaz del transporte y personal caballerizo",
    content: "La planificación manual provoca retrasos y descoordinación en torneos y actividades diarias. Sondeos y entrevistas confirmaron estos retrasos."
  }
];

export function ProblemSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="problem-section" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#1a2333] to-[#0f1629]">
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            La problemática actual
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-20 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {problems.slice(0, 4).map((problem, index) => {
            const isLeft = index % 2 === 0;
            const isSelected = selectedIndex === index;
            const Icon = problem.icon;
            
            return (
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(isSelected ? null : index)}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, rotate: isLeft ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex flex-col items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#1a2333]/50 to-[#0f1629]/30 border transition-all duration-300 w-full text-left cursor-pointer ${
                  isSelected ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-blue-500/10 hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-lg text-slate-300 font-light">
                    {problem.title}
                  </p>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isSelected ? "auto" : 0,
                    opacity: isSelected ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-full"
                >
                  <p className="text-sm text-slate-400 leading-relaxed pl-16">
                    {problem.content}
                  </p>
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Última card centrada */}
        {problems.length > 4 && (() => {
          const problem = problems[4];
          const index = 4;
          const isSelected = selectedIndex === index;
          const Icon = problem.icon;
          
          return (
            <div className="flex justify-center max-w-4xl mx-auto">
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(isSelected ? null : index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex flex-col items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#1a2333]/50 to-[#0f1629]/30 border transition-all duration-300 w-full md:w-[calc(50%-1rem)] text-left cursor-pointer ${
                  isSelected ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-blue-500/10 hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-lg text-slate-300 font-light">
                    {problem.title}
                  </p>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isSelected ? "auto" : 0,
                    opacity: isSelected ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-full"
                >
                  <p className="text-sm text-slate-400 leading-relaxed pl-16">
                    {problem.content}
                  </p>
                </motion.div>
              </motion.button>
            </div>
          );
        })()}
      </div>
    </section>
  );
}