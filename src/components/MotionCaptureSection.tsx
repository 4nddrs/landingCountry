import { motion, AnimatePresence } from "motion/react";
import { Expand } from "lucide-react";
import { useState } from "react";

const captureVideos = [
  {
    title: "Captura 1",
    src: "/video/capture1.mp4"
  },
  {
    title: "Captura 2",
    src: "/video/capture2.mp4"
  }
];

export function MotionCaptureSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-[#0f1629] to-[#0a0e1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16">
            Captura de Movimiento en 3D
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {captureVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <button
                onClick={() => setSelectedVideo(video.src)}
                className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a2333] to-[#0f1629] p-3 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-left"
                aria-label={`Ampliar ${video.title}`}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-blue-500/20 bg-black">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center">
                    <Expand className="w-4 h-4 text-white" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-7xl rounded-2xl overflow-hidden border border-white/20 bg-black"
                onClick={(event) => event.stopPropagation()}
              >
                <video
                  src={selectedVideo}
                  className="w-full h-auto max-h-[85vh]"
                  autoPlay
                  controls
                  loop
                  playsInline
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
