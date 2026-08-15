import { motion } from 'framer-motion';

export default function ProductOutcome({ product }) {
  if (!product.outcomeDescription) return null;

  return (
    <section className="py-12 lg:py-16 bg-[#FEFAE6]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#6b7280] text-[15px] font-semibold tracking-wide mb-2 block">
              Results
            </span>
            <h2 className="text-3xl lg:text-[42px] font-extrabold text-[#111827] leading-tight tracking-tight">
              Outcome
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pt-2"
          >
            <p className="text-[#4b5563] text-[16px] leading-relaxed mb-8 max-w-3xl text-justify">
              {product.outcomeDescription}
            </p>
            {product.websiteUrl && (
              <a 
                href={product.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[#111827] font-extrabold text-[17px] border-b-[3px] border-[#111827] pb-1 hover:text-[#43C47A] hover:border-[#43C47A] transition-colors duration-300"
              >
                Visit Website
              </a>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
