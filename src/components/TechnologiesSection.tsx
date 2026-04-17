import { motion } from "motion/react";
import { Code2, Wrench, Box, Cloud, Palette, Brain, MessageSquare, Layers, GitBranch, Database, Bot, Clock } from "lucide-react";

const techCategories = [
  {
    title: "Herramientas de Desarrollo de Software",
    icon: Wrench,
    subcategories: [
      {
        subtitle: "1.1. Desarrollo de la API",
        technologies: ["Python"]
      },
      {
        subtitle: "1.2. Desarrollo Web",
        technologies: ["TypeScript", "Tailwind CSS", "React", "Vite"]
      },
      {
        subtitle: "1.3. Inteligencia Artificial",
        technologies: ["OpenCV", "NumPy", "YOLOv8 (Ultralytics)"]
      },
      {
        subtitle: "1.4. Desarrollo de Chatbot",
        technologies: ["Telebot (PyTelegramBotAPI)", "APScheduler"]
      },
      {
        subtitle: "1.5. Diseño de Interfaz",
        technologies: ["Figma"]
      }
    ]
  },
  {
    title: "Frameworks de Desarrollo",
    icon: Layers,
    subcategories: [
      {
        subtitle: "2.1. Frameworks para API",
        technologies: ["FastAPI"]
      }
    ]
  },
  {
    title: "Plataformas de Despliegue",
    icon: Cloud,
    subcategories: [
      {
        subtitle: "3. Plataformas Cloud",
        technologies: ["Render Cloud Platform", "Vercel"]
      }
    ]
  },
  {
    title: "Control de Versiones",
    icon: GitBranch,
    subcategories: [
      {
        subtitle: "4. Sistemas de Control de Versiones",
        technologies: ["Git", "GitHub"]
      }
    ]
  }
];

const iconMapping: Record<string, string> = {
  "Python": "py",
  "TypeScript": "ts",
  "Tailwind CSS": "tailwind",
  "React": "react",
  "Vite": "vite",
  "OpenCV": "opencv",
  "YOLOv8 (Ultralytics)": "pytorch",
  "Figma": "figma",
  "FastAPI": "fastapi",
  "Vercel": "vercel",
  "Git": "git",
  "GitHub": "github"
};

export function TechnologiesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0a0e1a] to-[#0f1629]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Stack Tecnológico
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-slate-300 font-light">
            Herramientas, frameworks y plataformas utilizadas
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* First category - Herramientas de Desarrollo (full width) */}
          {techCategories.slice(0, 1).map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-blue-500/30">
                    <CategoryIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                </div>
              <br />
                {/* Subcategories */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <motion.div
                      key={subIndex}
                      initial={{ opacity: 0, x: subIndex % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent transition-all duration-300" />
                        
                        <div className="relative z-10">
                          {/* Subcategory title */}
                          <h4 className="text-lg font-semibold text-blue-300 mb-4">
                            {subcategory.subtitle}
                          </h4>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3">
                            {subcategory.technologies.map((tech, techIndex) => {
                              const techIcon = iconMapping[tech];
                              const useLucideIcon = !techIcon;
                              
                              // Lucide icons for specific technologies
                              const getLucideIcon = (techName: string) => {
                                switch(techName) {
                                  case "NumPy": return Database;
                                  case "Telebot (PyTelegramBotAPI)": return Bot;
                                  case "APScheduler": return Clock;
                                  case "Render Cloud Platform": return Cloud;
                                  default: return Code2;
                                }
                              };
                              
                              const LucideIcon = getLucideIcon(tech);
                              
                              return (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.7 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: categoryIndex * 0.15 + subIndex * 0.1 + techIndex * 0.05,
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  className="group/tech"
                                >
                                  <div className="flex flex-col items-center gap-2 px-5 py-3 rounded-lg bg-[#1a1f2e] border border-slate-700/50 hover:border-blue-500/60 hover:bg-[#1e2535] transition-all duration-300">
                                    {/* Tech Icon */}
                                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                      {useLucideIcon ? (
                                        <LucideIcon className="w-full h-full text-blue-400" />
                                      ) : (
                                        <img 
                                          src={`https://skillicons.dev/icons?i=${techIcon}`}
                                          alt={tech}
                                          className="w-full h-full object-contain"
                                        />
                                      )}
                                    </div>
                                    <span className="text-xs text-center text-slate-300 font-medium group-hover/tech:text-white transition-colors leading-tight">
                                      {tech}
                                    </span>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
          <br />
          {/* Frameworks and Plataformas side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techCategories.slice(1, 3).map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              const actualIndex = categoryIndex + 1;
              
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: actualIndex * 0.15 }}
                  className="relative"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-blue-500/30">
                      <CategoryIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {category.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                  </div>
                  <br />
                  {/* Subcategories */}
                  <div className="space-y-6">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                        className="relative group"
                      >
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                          {/* Glow effect on hover */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent transition-all duration-300" />
                          
                          <div className="relative z-10">
                            {/* Subcategory title */}
                            <h4 className="text-lg font-semibold text-blue-300 mb-4">
                              {subcategory.subtitle}
                            </h4>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-3">
                              {subcategory.technologies.map((tech, techIndex) => {
                                const techIcon = iconMapping[tech];
                                const useLucideIcon = !techIcon;
                                
                                // Lucide icons for specific technologies
                                const getLucideIcon = (techName: string) => {
                                  switch(techName) {
                                    case "NumPy": return Database;
                                    case "Telebot (PyTelegramBotAPI)": return Bot;
                                    case "APScheduler": return Clock;
                                    case "Render Cloud Platform": return Cloud;
                                    default: return Code2;
                                  }
                                };
                                
                                const LucideIcon = getLucideIcon(tech);
                                
                                return (
                                  <motion.div
                                    key={techIndex}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                      duration: 0.4, 
                                      delay: actualIndex * 0.15 + subIndex * 0.1 + techIndex * 0.05,
                                      type: "spring",
                                      stiffness: 200
                                    }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="group/tech"
                                  >
                                    <div className="flex flex-col items-center gap-2 px-5 py-3 rounded-lg bg-[#1a1f2e] border border-slate-700/50 hover:border-blue-500/60 hover:bg-[#1e2535] transition-all duration-300">
                                      {/* Tech Icon */}
                                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                        {useLucideIcon ? (
                                          <LucideIcon className="w-full h-full text-blue-400" />
                                        ) : (
                                          <img 
                                            src={`https://skillicons.dev/icons?i=${techIcon}`}
                                            alt={tech}
                                            className="w-full h-full object-contain"
                                          />
                                        )}
                                      </div>
                                      <span className="text-xs text-center text-slate-300 font-medium group-hover/tech:text-white transition-colors leading-tight">
                                        {tech}
                                      </span>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Control de Versiones (full width) */}
          <br />
          {techCategories.slice(3, 4).map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const actualIndex = categoryIndex + 3;
            
            return (
              <motion.div
                key={actualIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: actualIndex * 0.15 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-blue-500/30">
                    <CategoryIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                </div>

                {/* Subcategories */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <motion.div
                      key={subIndex}
                      initial={{ opacity: 0, x: subIndex % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a2333] to-[#0f1629] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent transition-all duration-300" />
                        
                        <div className="relative z-10">
                          {/* Subcategory title */}
                          <h4 className="text-lg font-semibold text-blue-300 mb-4">
                            {subcategory.subtitle}
                          </h4>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3">
                            {subcategory.technologies.map((tech, techIndex) => {
                              const techIcon = iconMapping[tech];
                              const useLucideIcon = !techIcon;
                              
                              // Lucide icons for specific technologies
                              const getLucideIcon = (techName: string) => {
                                switch(techName) {
                                  case "NumPy": return Database;
                                  case "Telebot (PyTelegramBotAPI)": return Bot;
                                  case "APScheduler": return Clock;
                                  case "Render Cloud Platform": return Cloud;
                                  default: return Code2;
                                }
                              };
                              
                              const LucideIcon = getLucideIcon(tech);
                              
                              return (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.7 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: actualIndex * 0.15 + subIndex * 0.1 + techIndex * 0.05,
                                    type: "spring",
                                    stiffness: 200
                                  }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  className="group/tech"
                                >
                                  <div className="flex flex-col items-center gap-2 px-5 py-3 rounded-lg bg-[#1a1f2e] border border-slate-700/50 hover:border-blue-500/60 hover:bg-[#1e2535] transition-all duration-300">
                                    {/* Tech Icon */}
                                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                      {useLucideIcon ? (
                                        <LucideIcon className="w-full h-full text-blue-400" />
                                      ) : (
                                        <img 
                                          src={`https://skillicons.dev/icons?i=${techIcon}`}
                                          alt={tech}
                                          className="w-full h-full object-contain"
                                        />
                                      )}
                                    </div>
                                    <span className="text-xs text-center text-slate-300 font-medium group-hover/tech:text-white transition-colors leading-tight">
                                      {tech}
                                    </span>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        <br />
        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Tecnologías", value: "15+", icon: Code2 },
            { label: "Frameworks", value: "1", icon: Layers },
            { label: "Plataformas", value: "2", icon: Cloud },
            { label: "Control de Versiones", value: "2", icon: GitBranch }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring" }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-600/20 flex items-center justify-center">
                    <StatIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-sm text-slate-400 mb-1">{stat.label}</p>
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
