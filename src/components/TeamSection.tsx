import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
    {
        name: "Hugo Ballivian",
        role: "Desarrollador Frontend",
        image: "/persons/hugo ballivian.jpg",
        description: ""
    },
    {
        name: "Fabiana Bilbao",
        role: "Diseñadora UX/UI",
        image: "/persons/fabi.jpeg",
        description: ""
    },
    {
        name: "Mishel Bravo",
        role: "Desarrolladora de IA",
        image: "/persons/mish.jpeg",
        description: ""
    },
    {
    name: "Andrés Menchaca",
    role: "Desarrollador API & Servidores",
    image: "/persons/andres.jpeg",
    description: ""
    }
];

export function TeamSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0a0e1a] via-[#0f1629] to-[#1a2333] relative overflow-hidden">
      {/* Subtle Grid Pattern */}
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
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Nuestro Equipo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Profesionales comprometidos con la excelencia y la innovación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                {/* Gradient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-500" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-400/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative z-10">
                  {/* Image Container */}
                  <div className="mb-6 relative">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                      {/* Blue glow behind image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-400/30 blur-2xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <Linkedin className="w-5 h-5 text-blue-400" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/0 group-hover:border-blue-500/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
