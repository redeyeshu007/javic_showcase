import { motion } from 'framer-motion';

export default function ProductVision({ product }) {
  if (!product.visionImages || product.visionImages.length === 0) return null;

  return (
    <section className="pb-20 lg:pb-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header: Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-2xl lg:text-[28px] font-bold text-[#1a1a1a]">
            {product.visionTitle || 'Aligning Logo Design with Stakeholder and Brand Vision'}
          </h2>
        </motion.div>

        {/* 2x2 Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
        >
          {product.visionImages.slice(0, 4).map((img, i) => (
            <div key={i} className="w-full aspect-[4/3] bg-gray-50 overflow-hidden rounded-sm">
              <img
                src={img}
                alt={`${product.name} vision presentation ${i + 1}`}
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
