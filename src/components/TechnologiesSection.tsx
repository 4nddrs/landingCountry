import { motion } from "motion/react";
import { Code2, Wrench, Box, Cloud, Palette, Brain, MessageSquare, Layers, GitBranch, Database, Bot, Clock, Server } from "lucide-react";

const techCategories = [
  {
    title: "Herramientas de Desarrollo de Software",
    icon: Wrench,
    subcategories: [
      {
        subtitle: "API",
        technologies: ["Python"]
      },
      {
        subtitle: "Web",
        technologies: ["TypeScript", "Tailwind CSS", "React", "Vite"]
      },
      {
        subtitle: "IA",
        technologies: ["OpenCV", "NumPy", "YOLOv8"]
      },
      {
        subtitle: "Chatbot",
        technologies: ["PyTelegramBotAPI", "APScheduler"]
      },
      {
        subtitle: "Diseño",
        technologies: ["Figma"]
      }
    ]
  },
  {
    title: "Frameworks de Desarrollo",
    icon: Layers,
    subcategories: [
      {
        subtitle: "",
        technologies: ["FastAPI"]
      }
    ]
  },
  {
    title: "Plataformas de Despliegue",
    icon: Cloud,
    subcategories: [
      {
        subtitle: "",
        technologies: ["Hostinger"]
      }
    ]
  },
  {
    title: "Control de Versiones",
    icon: GitBranch,
    subcategories: [
      {
        subtitle: "",
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
  "YOLOv8": "pytorch",
  "Figma": "figma",
  "FastAPI": "fastapi",
  
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
                      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020]/90 p-6 md:p-8 shadow-2xl shadow-black/30 backdrop-blur-md"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5" />
                  {/* Category Header */}
                  <div className="relative z-10 flex items-center gap-8 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                </div>
                {/* Subcategories */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <motion.div
                      key={subIndex}
                      initial={{ opacity: 0, x: subIndex % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                          className="relative group self-start"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11192c]/90 p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:border-blue-400/20 hover:bg-[#132038]/95">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                        <div className="relative z-10 flex flex-col gap-6">
                          {/* Subcategory title */}
                          <h4 className="text-lg font-semibold text-blue-300 leading-none">
                            {subcategory.subtitle}
                          </h4>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3 pt-2">
                            {subcategory.technologies.map((tech, techIndex) => {
                              const techIcon = iconMapping[tech];
                              const useLucideIcon = !techIcon;
                              
                              // Lucide icons for specific technologies
                              const getLucideIcon = (techName: string) => {
                                switch(techName) {
                                  case "NumPy": return Database;
                                  case "PyTelegramBotAPI": return Bot;
                                  case "APScheduler": return Clock;
                                  case "Render Cloud Platform": return Cloud;
                                  case "Hostinger": return Server;
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
                                  <div className="flex flex-col items-center gap-2 px-3 py-2 rounded-xl bg-white/5 shadow-sm shadow-black/10 hover:bg-white/10 transition-all duration-300">
                                    {/* Tech Icon */}
                                    <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
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
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020]/90 p-6 md:p-8 shadow-2xl shadow-black/30 backdrop-blur-md"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5" />
                  {/* Category Header */}
                  <div className="relative z-10 flex items-center gap-8 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {category.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                  </div>
                  {/* Subcategories */}
                  <div className="relative z-10 space-y-6">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                        className="relative group"
                      >
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1728]/70 p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:border-blue-400/20 hover:bg-[#111a2e]/80">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                          <div className="relative z-10 flex flex-col gap-6">
                            {/* Subcategory title */}
                            <h4 className="text-lg font-semibold text-blue-300 leading-none">
                              {subcategory.subtitle}
                            </h4>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-3 pt-2">
                              {subcategory.technologies.map((tech, techIndex) => {
                                const techIcon = iconMapping[tech];
                                const useLucideIcon = !techIcon;
                                
                                // Lucide icons for specific technologies
                                const getLucideIcon = (techName: string) => {
                                  switch(techName) {
                                    case "NumPy": return Database;
                                    case "PyTelegramBotAPI": return Bot;
                                    case "APScheduler": return Clock;
                                    case "Render Cloud Platform": return Cloud;
                                    case "Hostinger": return Server;
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
                                    <div className="flex flex-col items-center gap-2 px-3 py-2 rounded-xl bg-white/5 shadow-sm shadow-black/10 hover:bg-white/10 transition-all duration-300">
                                      {/* Tech Icon */}
                                      <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
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
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020]/90 p-6 md:p-8 shadow-2xl shadow-black/30 backdrop-blur-md"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5" />
                  {/* Category Header */}
                <div className="relative z-10 flex items-center gap-8 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <CategoryIcon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                </div>

                {/* Subcategories */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <motion.div
                      key={subIndex}
                      initial={{ opacity: 0, x: subIndex % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                      className="relative group self-start"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11192c]/90 p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:border-blue-400/20 hover:bg-[#132038]/95">
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                          <div className="relative z-10 flex flex-col gap-6">
                          {/* Subcategory title */}
                            <h4 className="text-lg font-semibold text-blue-300 leading-none">
                            {subcategory.subtitle}
                          </h4>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3 pt-2">
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
                                  case "Hostinger": return Server;
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
                                    <div className="flex flex-col items-center gap-2 px-3 py-2 rounded-xl bg-white/5 shadow-sm shadow-black/10 hover:bg-white/10 transition-all duration-300">
                                    {/* Tech Icon */}
                                      <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
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
        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
         
        </motion.div>
      </div>
    </section>
  );
}
