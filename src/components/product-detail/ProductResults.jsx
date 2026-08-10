import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function ProductResults({ product }) {
  if (!product.results || product.results.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#43C47A] mb-4 block">
              Results & Impact
            </span>
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
              What actually changed.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-4 pt-2"
          >
            {product.results.map((result, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#F9FAFB] border border-[rgba(0,0,0,0.04)]"
              >
                <div className="w-7 h-7 rounded-full bg-[rgba(67,196,122,0.12)] flex items-center justify-center text-[#43C47A] shrink-0 mt-0.5">
                  <TrendingUp size={14} strokeWidth={2.5} />
                </div>
                <div>
                  <span className="font-bold text-[#1a1a1a] text-[15px]">
                    {result.metric}
                  </span>
                  <span className="text-[#4b5563] text-[15px]"> {result.detail}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
