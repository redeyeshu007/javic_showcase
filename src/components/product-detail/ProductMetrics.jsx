import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function ProductMetrics({ metrics }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="bg-[#050908] border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)]"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="flex flex-col items-center text-center gap-1 p-8 bg-[#050908] hover:bg-[#0B1412] transition-colors duration-300"
            >
              <span className="text-[clamp(28px,4vw,48px)] font-extrabold text-[#43C47A] leading-none tracking-tight">
                {metric.value}
              </span>
              <span className="text-[#68756F] text-sm font-medium mt-1">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
