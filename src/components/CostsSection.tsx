import { motion, AnimatePresence } from "motion/react";
import { DollarSign, TrendingUp, ChevronLeft, ChevronRight, Server, Code2, Boxes } from "lucide-react";
import { useState } from "react";

const costs = [
  { categoria: "Hardware", subtotal: "2.516", isSubtotal: false },
  { categoria: "Software (anual) *", subtotal: "8.736", isSubtotal: false },
  { categoria: "Desarrollo (RRHH + materiales)", subtotal: "123.310", isSubtotal: false },
  { categoria: "Subtotal", subtotal: "134.562", isSubtotal: true },
  { categoria: "Contingencia (10%)", subtotal: "13.456", isSubtotal: false },
  { categoria: "Total del proyecto", subtotal: "148.018 ", isTotal: true }
];

const maintenanceCosts = [
  { licencia: "Supabase Pro", descripcion: "Backend/API + Postgres", costoUnitario: "$25", periodo: "mensual" },
  { licencia: "Render Professional", descripcion: "Hosting web/app", costoUnitario: "$25", periodo: "mensual" },
  { licencia: "Hostinger", descripcion: "Hosting frontend", costoUnitario: "$20", periodo: "mensual" },
  { licencia: "GitHub/GitLab", descripcion: "Repositorios privados", costoUnitario: "0 (opción Free)", periodo: "---" },
  { licencia: "TOTAL:", descripcion: "", costoUnitario: "≈$44 + usage", periodo: "mensual", isTotal: true }
];

const tables = [
  {
    title: "Estructura de Costos",
    subtitle: "Inversión estimada del proyecto en bolivianos",
    type: "costs"
  },
  {
    title: "Viabilidad de Mantenimiento",
    subtitle: "Costos de mantener el software en funcionamiento",
    type: "maintenance"
  }
];

export function CostsSection() {
  const [currentTable, setCurrentTable] = useState(0);

  const nextTable = () => {
    setCurrentTable((prev) => (prev + 1) % tables.length);
  };

  const prevTable = () => {
    setCurrentTable((prev) => (prev - 1 + tables.length) % tables.length);
  };

  const currentTableData = tables[currentTable];

  const costCards = [
    { label: "Hardware", value: "1.7%", progress: 17, icon: Server },
    { label: "Software", value: "5.9%", progress: 59, icon: Code2 },
    { label: "Desarrollo", value: "83.3%", progress: 83.3, icon: Boxes }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#06101f_0%,#0a1324_52%,#0f1729_100%)]">
      <div className="max-w-6xl mx-auto w-full text-[#e8edf5]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTable}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
                {currentTableData.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full" />
              <p className="text-lg md:text-xl text-slate-300 font-light tracking-wide">
                {currentTableData.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-3xl blur-xl" />
          
          <AnimatePresence mode="wait">
            {currentTableData.type === "costs" ? (
              <motion.div
                key="costs"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Table Container - Costs */}
                <div className="relative bg-gradient-to-br from-[#1a2333]/90 to-[#0f1629]/90 rounded-3xl border border-blue-500/30 overflow-hidden backdrop-blur-xl shadow-2xl shadow-blue-900/20">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      {/* Table Header */}
                      <thead>
                        <tr className="border-b-2 border-blue-500/30 bg-blue-950/30">
                          <th className="px-10 py-6 text-left">
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                                <DollarSign className="w-6 h-6 text-blue-400" />
                              </div>
                              <span className="text-xl font-semibold text-blue-400 tracking-wide">Categoría</span>
                            </div>
                          </th>
                          <th className="px-10 py-6 text-right">
                            <div className="flex items-center justify-end gap-3">
                              <span className="text-xl font-semibold text-blue-400 tracking-wide">Subtotal (Bs)</span>
                              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                                <TrendingUp className="w-6 h-6 text-blue-400" />
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {costs.map((cost, index) => {
                          const delay = index * 0.08;
                          const isRegularRow = !cost.isSubtotal && !cost.isTotal;
                          
                          return (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay }}
                              className={`
                                transition-all duration-300 group
                                ${cost.isSubtotal ? 'bg-blue-600/12 border-y border-blue-400/35' : 'border-b border-blue-500/10'}
                                ${cost.isTotal ? 'bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 border-y border-blue-300/50 shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_0_40px_rgba(59,130,246,0.12)]' : ''}
                                ${isRegularRow ? 'hover:bg-blue-600/8 hover:shadow-md hover:shadow-blue-500/5' : ''}
                                ${index % 2 === 0 && isRegularRow ? 'bg-[#0d1420]/40' : isRegularRow ? 'bg-[#0a1018]/20' : ''}
                              `}
                            >
                              <td className={`px-10 py-10 ${cost.isTotal ? 'font-extrabold text-white text-2xl' : cost.isSubtotal ? 'font-bold text-white text-xl' : 'text-slate-200 text-base font-light'} group-hover:text-white transition-colors tracking-wide`}>
                                <span className={cost.isTotal ? 'inline-flex items-center gap-3' : ''}>
                                  {cost.categoria}
                                </span>
                              </td>
                              <td className={`px-10 py-10 text-right ${cost.isTotal ? 'font-extrabold text-4xl text-blue-300' : cost.isSubtotal ? 'font-bold text-2xl text-white' : 'text-slate-300 text-lg font-light'} transition-colors`}>
                                <span
                                  className={`inline-block min-w-[8ch] text-right ${cost.isTotal ? 'font-sans' : 'font-mono'}`}
                                  style={{ fontFamily: cost.isTotal ? 'Inter, sans-serif' : 'JetBrains Mono, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontVariantNumeric: 'tabular-nums' }}
                                >
                                  {cost.subtotal}
                                </span>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Footer Note */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="px-10 py-5 bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-blue-950/40 border-t border-blue-500/20"
                  >
                    <p className="text-sm text-slate-400 font-light">
                      * El costo de software incluye licencias anuales y servicios en la nube
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="maintenance"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Table Container - Maintenance */}
                <div className="relative bg-gradient-to-br from-[#1a2333]/90 to-[#0f1629]/90 rounded-3xl border border-blue-500/30 overflow-hidden backdrop-blur-xl shadow-2xl shadow-blue-900/20">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      {/* Table Header */}
                      <thead>
                        <tr className="border-b-2 border-blue-500/30 bg-blue-950/30">
                          <th className="px-8 py-6 text-left text-base font-semibold text-blue-400 tracking-wide whitespace-nowrap">Licencia/Servicio</th>
                          <th className="px-10 py-6 text-left text-base font-semibold text-blue-400 tracking-wide">Descripción</th>
                          <th className="px-8 py-6 text-center text-base font-semibold text-blue-400 tracking-wide whitespace-nowrap">Costo unitario</th>
                          <th className="px-8 py-6 text-center text-base font-semibold text-blue-400 tracking-wide">Periodo</th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {maintenanceCosts.map((item, index) => {
                          const delay = index * 0.08;
                          
                          return (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay }}
                              className={`
                                transition-all duration-300 group border-b border-blue-500/10
                                ${item.isTotal ? 'bg-gradient-to-r from-blue-600/25 via-blue-500/15 to-blue-600/25 border-y-2 border-blue-400/40 shadow-lg shadow-blue-500/10' : 'hover:bg-blue-600/8'}
                                ${index % 2 === 0 && !item.isTotal ? 'bg-[#0d1420]/40' : !item.isTotal ? 'bg-[#0a1018]/20' : ''}
                              `}
                            >
                              <td className={`px-8 py-6 whitespace-nowrap ${item.isTotal ? 'font-bold text-white text-lg' : 'text-slate-300 font-light'}`}>
                                {item.licencia}
                              </td>
                              <td className={`px-10 py-6 ${item.isTotal ? 'font-bold text-white' : 'text-slate-300 font-light'}`}>
                                {item.descripcion && <em>{item.descripcion}</em>}
                              </td>
                              <td className={`px-8 py-6 text-center font-mono whitespace-nowrap ${item.isTotal ? 'font-bold text-2xl text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]' : 'text-slate-300'}`}>
                                {item.costoUnitario}
                              </td>
                              <td className="px-8 py-6 text-center text-slate-300 font-light whitespace-nowrap">
                                {item.periodo}
                              </td>
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Footer Note */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="px-10 py-5 bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-blue-950/40 border-t-2 border-blue-500/20"
                  >
                    <p className="text-sm text-slate-400 font-light mt-2">
                      Convertidos a bolivianos, USD 44 ≈ Bs 308/mes.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>


        {/* Additional Info Cards - Only show for costs table */}
        {currentTableData.type === "costs" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {costCards.map((stat, index) => {
            const Icon = stat.icon;
            const radius = 34;
            const circumference = 2 * Math.PI * radius;
            const dashOffset = circumference - (Math.min(stat.progress, 100) / 100) * circumference;

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-blue-500/15 bg-gradient-to-br from-[#10192b] via-[#0b1424] to-[#08111e] p-6 text-center shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_18px_45px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex flex-col items-center gap-2 w-full">
                  <Icon className="w-6 h-6 text-blue-400 stroke-[1.6] drop-shadow-[0_0_10px_rgba(96,165,250,0.55)]" />
                  <p className="text-sm text-slate-300 tracking-wide">{stat.label}</p>
                </div>
                <svg viewBox="0 0 88 88" className="w-20 h-20 shrink-0 -mt-1">
                  <circle cx="44" cy="44" r={radius} stroke="rgba(148,163,184,0.15)" strokeWidth="7" fill="none" />
                  <circle
                    cx="44"
                    cy="44"
                    r={radius}
                    stroke="rgba(96,165,250,0.95)"
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    transform="rotate(-90 44 44)"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(96,165,250,0.6))' }}
                  />
                  <text x="44" y="49" textAnchor="middle" fill="#ffffff" style={{ fill: '#ffffff', fontSize: 17, fontWeight: 700, fontFamily: 'JetBrains Mono, SFMono-Regular, Menlo, Monaco, Consolas, monospace' }}>
                    {stat.value}
                  </text>
                </svg>
              </div>
              <p className="text-xs text-slate-500 mt-1">del presupuesto</p>
            </motion.div>
            );
          })}
        </div>
        )}
        {/* Minimalist Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={prevTable}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0b1424]/80 border border-blue-500/25 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.08)]"
            aria-label="Previous table"
          >
            <ChevronLeft className="w-5 h-5 text-blue-300" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {tables.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTable(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentTable === index
                    ? 'w-9 h-2 bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.55)]'
                    : 'w-2 h-2 bg-blue-500/30 hover:bg-blue-400/60'
                }`}
                aria-label={`Go to table ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTable}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0b1424]/80 border border-blue-500/25 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.08)]"
            aria-label="Next table"
          >
            <ChevronRight className="w-5 h-5 text-blue-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
