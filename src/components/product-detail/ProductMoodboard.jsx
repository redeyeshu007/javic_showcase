import { motion } from 'framer-motion';

export default function ProductMoodboard({ product }) {
  if (!product.moodboards || product.moodboards.length === 0) return null;

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
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#1a1a1a] leading-tight">
              Mood boards for<br />the Brand
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[#4b5563] text-[15px] leading-relaxed">
              {product.moodboardDescription}
            </p>
          </motion.div>
        </div>

        {/* Moodboards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="bg-[#FEFBE1] pt-12 pb-16 px-6 sm:px-12 rounded-sm" 
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {product.moodboards.map((board, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full aspect-square bg-white shadow-sm mb-6 p-2 lg:p-3">
                  <img
                    src={board.image}
                    alt={board.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">
                  {board.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
