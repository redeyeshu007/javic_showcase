import { motion } from 'framer-motion';

export default function ProductDesignRequirements({ product }) {
  if (!product.designRequirementsImages || product.designRequirementsImages.length === 0) return null;

  return (
    <section className="bg-white pt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
            Design Requirements
          </h2>
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-center">
        {product.designRequirementsImages.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="w-full m-0 p-0"
          >
            <img 
              src={imgSrc} 
              alt={`${product.name} Design Requirement ${idx + 1}`} 
              className="w-full h-auto block m-0 p-0"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
