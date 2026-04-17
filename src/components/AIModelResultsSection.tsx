import { motion } from "motion/react";
import { Trophy, BarChart3, TrendingUp } from "lucide-react";

const comparisonMetrics = [
  {
    title: "Métricas Comparativas",
    description: "Visualización de las métricas de rendimiento entre modelos",
    image: "/ai/metrics_bar.png",
    icon: BarChart3
  },
  {
    title: "Análisis AUC vs Accuracy",
    description: "Relación entre la precisión y el área bajo la curva ROC",
    image: "/ai/auc_vs_accuracy.png",
    icon: TrendingUp
  }
];

export function AIModelResultsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#1a2333] via-[#0f1629] to-[#0a0e1a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-16 h-16 text-yellow-500 animate-bounce" />
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Resultados Finales
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Evaluación comparativa del rendimiento de los modelos de detección implementados
          </p>
        </motion.div>

        {/* Comparison Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {comparisonMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a2333] to-[#0f1629] p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                    <metric.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{metric.title}</h3>
                    <p className="text-sm text-gray-400">{metric.description}</p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10"
                >
                  <img 
                    src={metric.image}
                    alt={metric.title}
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
