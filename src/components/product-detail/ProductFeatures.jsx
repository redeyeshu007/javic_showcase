import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function ProductFeatures({ product }) {
  if (!product.features || product.features.length === 0) return null;

  return (
    <section className="py-20 bg-[#F9FAFB] border-t border-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#43C47A] mb-4 block">
              Key Features
            </span>
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
              What it can do.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6 pt-2"
          >
            {product.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-[rgba(67,196,122,0.15)] flex items-center justify-center text-[#43C47A] shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] font-bold text-[15px] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#4b5563] text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
