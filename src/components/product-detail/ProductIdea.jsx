import { motion } from 'framer-motion';

export default function ProductIdea({ product }) {
  if (!product.ideaImages || product.ideaImages.length === 0) return null;

  return (
    <section className="pb-20 lg:pb-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header: Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-24 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#1a1a1a] leading-tight pr-4">
              {product.ideaTitle || 'Idea presented to Stakeholders'}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[#4b5563] text-[15px] leading-relaxed text-justify">
              {product.ideaDescription}
            </p>
          </motion.div>
        </div>

        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          {product.ideaImages.map((img, i) => (
            <div key={i} className="w-full aspect-[16/10] bg-gray-100 overflow-hidden">
              <img
                src={img}
                alt={`${product.name} idea presentation ${i + 1}`}
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
