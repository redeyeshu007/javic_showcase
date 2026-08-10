import { motion } from 'framer-motion';

export default function ProductSolution({ product }) {
  if (!product.solution) return null;

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
              Our Solution
            </span>
            <h2 className="text-3xl lg:text-[32px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
              How we built it.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="pt-2"
          >
            <p className="text-[#4b5563] text-[15px] leading-relaxed">
              {product.solution}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
