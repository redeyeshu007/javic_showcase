import { motion } from 'framer-motion';

export default function ProductMoodboard({ product }) {
  if (!product.moodboards || product.moodboards.length === 0) return null;

  // Cool, professional background colors for the moodboard boxes
  const boxColors = [
    'bg-[#F0F4F8]', // soft cool blue-gray
    'bg-[#E2E8F0]', // slightly deeper slate
    'bg-[#CBD5E1]'  // deeper cool steel
  ];

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
            <p className="text-[#4b5563] text-[15px] leading-relaxed text-justify">
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
          className="bg-[#F8FAFC] pt-12 pb-16 px-6 sm:px-12 rounded-2xl border border-slate-100" 
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {product.moodboards.map((board, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-full aspect-square shadow-sm mb-6 p-6 lg:p-10 flex items-center justify-center rounded-xl overflow-hidden ${boxColors[i % boxColors.length]}`}>
                  <img
                    src={board.image}
                    alt={board.title}
                    className="w-full h-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">
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
