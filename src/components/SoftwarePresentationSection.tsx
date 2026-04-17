import { motion } from "motion/react";
import { ExternalLink, Monitor, Play } from "lucide-react";

export function SoftwarePresentationSection() {
  const handleOpenSoftware = () => {
    // Reemplaza esta URL con la URL real de tu software
    window.open("https://tu-software-url.com", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#0f1629] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Presentación del Software
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Explora el sistema en acción
          </p>
        </motion.div>

        {/* Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Laptop Base */}
          <div className="relative">
            {/* Screen */}
            <div className="relative rounded-t-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-4 border-4 border-[#2a2a2a]">
              {/* Screen Content */}
              <div className="relative aspect-video rounded-lg bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] border border-blue-500/20 overflow-hidden">
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}
                />
                
                {/* Screen Overlay with Button */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="mb-6 flex justify-center"
                    >
                      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600/20 to-blue-600/5 flex items-center justify-center backdrop-blur-sm border border-blue-500/20">
                        <Monitor className="w-12 h-12 text-blue-400" />
                      </div>
                    </motion.div>

                    {/* Launch Button */}
                    <motion.button
                      onClick={handleOpenSoftware}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-medium text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300"
                    >
                      {/* Button Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                      
                      <span className="relative flex items-center gap-3">
                        <Play className="w-5 h-5" />
                        Abrir Software
                        <ExternalLink className="w-5 h-5" />
                      </span>
                    </motion.button>

                    <p className="mt-4 text-sm text-slate-400 font-light">
                      Haz clic para acceder al sistema completo
                    </p>
                  </motion.div>
                </div>

                {/* Screen Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Webcam */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-700 border border-slate-600" />
            </div>

            {/* Keyboard Base */}
            <div className="relative h-4 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-2xl" />
            <div className="relative h-2 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]" 
              style={{ 
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                margin: '0 auto',
                width: '110%',
                marginLeft: '-5%'
              }} 
            />

            {/* Shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-600/20 blur-3xl rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}