import { motion } from "motion/react";
import { Brain, TrendingUp, Activity, Target } from "lucide-react";

const developmentSteps = [
  {
    title: "Entrenamiento del Modelo",
    description: "Proceso iterativo de entrenamiento con ajuste de hiperparámetros para optimizar el rendimiento",
    image: "/ai/training_curve.png",
    icon: TrendingUp,
    details: [
      "Configuración de arquitecturas YOLOv8 y Faster R-CNN",
      "Optimización de hiperparámetros",
      "Monitoreo de pérdidas y métricas de validación"
    ]
  },
  {
    title: "Matrices de Confusión",
    description: "Análisis detallado de las predicciones para ambos modelos evaluados",
    image: "/ai/confusion_matrix_yolov8.png",
    image2: "/ai/confusion_matrix_faster_rcnn.png",
    icon: Activity,
    details: [
      "YOLOv8: Evaluación de verdaderos/falsos positivos",
      "Faster R-CNN: Análisis comparativo de rendimiento",
      "Identificación de patrones de error"
    ]
  },
  {
    title: "Curvas ROC",
    description: "Visualización del rendimiento de clasificación a través de curvas ROC-AUC",
    image: "/ai/roc_curves.png",
    icon: Target,
    details: [
      "Comparación de ambos modelos",
      "Análisis del área bajo la curva (AUC)",
      "Evaluación de sensibilidad y especificidad"
    ]
  }
];

export function AIModelDevelopmentSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0a0e1a] via-[#0f1629] to-[#1a2333] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-16 h-16 text-blue-500 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Desarrollo del Modelo de IA
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Implementación y entrenamiento de modelos de detección de objetos para la vigilancia automatizada de equinos
          </p>
        </motion.div>

        <div className="space-y-20">
          {developmentSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-blue-400 font-semibold text-sm">Paso {index + 1}</span>
                      <h3 className="text-3xl font-semibold text-white">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {step.image2 ? (
                    // Two images side by side
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ duration: 0.3 }}
                        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2333] to-[#0f1629] p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img 
                          src={step.image}
                          alt={`${step.title} - YOLOv8`}
                          className="w-full h-auto rounded-lg relative z-10"
                        />
                        <p className="text-center text-sm text-gray-400 mt-2 relative z-10">YOLOv8</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: -5 }}
                        transition={{ duration: 0.3 }}
                        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2333] to-[#0f1629] p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img 
                          src={step.image2}
                          alt={`${step.title} - Faster R-CNN`}
                          className="w-full h-auto rounded-lg relative z-10"
                        />
                        <p className="text-center text-sm text-gray-400 mt-2 relative z-10">Faster R-CNN</p>
                      </motion.div>
                    </div>
                  ) : (
                    // Single image
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2333] to-[#0f1629] p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto rounded-lg relative z-10"
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Connecting line */}
              {index < developmentSteps.length - 1 && (
                <div className="flex justify-center my-12">
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
