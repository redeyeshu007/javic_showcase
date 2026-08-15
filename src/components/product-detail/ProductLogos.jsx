import { motion } from 'framer-motion';

export default function ProductLogos({ product }) {
  if (!product.logos || product.logos.length === 0) return null;

  return (
    <section className="bg-white pb-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {product.logos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center aspect-square"
            >
              <img 
                src={logo.image} 
                alt={`${product.name} Logo Variation ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
