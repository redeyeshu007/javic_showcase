import { motion } from 'framer-motion';

export default function ProductTechStack({ product }) {
  if (!product.techStack || product.techStack.length === 0) return null;

  return (
    <section className="py-20 bg-[#F9FAFB] border-t border-white pb-28 lg:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#43C47A] mb-4 block">
            Technology
          </span>
          <h2 className="text-3xl lg:text-[32px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
            Built with.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          {product.techStack.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 rounded-full bg-white border border-[rgba(0,0,0,0.06)] text-[#1a1a1a] text-[15px] font-semibold hover:border-[rgba(67,196,122,0.35)] hover:text-[#2A7A4C] transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
