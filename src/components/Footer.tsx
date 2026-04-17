import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#0a0e1a] border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Country Club Cochabamba
          </h3>
          <p className="text-slate-400 font-light mb-6">
            Sistema de Planificación de Recursos Empresariales para la Gestión y Vigilancia de Equinos
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-blue-500 fill-blue-500" />
            <span>para el bienestar equino</span>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-500/10">
            <p className="text-sm text-slate-500 font-light">
              © 2025 Country Club Cochabamba. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}