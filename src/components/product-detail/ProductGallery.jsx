import { motion } from 'framer-motion';

export default function ProductGallery({ product }) {
  // Use up to 3 images, no deduplication so we can repeat the logo
  const images = (product.gallery || [product.image]).slice(0, 3);
  
  // Background colors: Grey, Yellow, and Green
  const bgColors = [
    'bg-gray-100', // Grey
    'bg-yellow-100', // Yellow
    'bg-green-100'  // Green
  ];

  return (
    <section className="pb-20 lg:pb-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
              className={`aspect-square flex items-center justify-center p-12 lg:p-20 ${bgColors[i % 3]}`}
            >
              <img
                src={img}
                alt={`${product.name} gallery image ${i + 1}`}
                className="w-full h-full object-contain mix-blend-multiply hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
