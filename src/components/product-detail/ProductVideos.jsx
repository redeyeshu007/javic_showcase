import { motion } from 'framer-motion';

export default function ProductVideos({ product }) {
  if (!product.videos || product.videos.length === 0) return null;

  return (
    <section className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 text-center relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a1a1a] tracking-tight max-w-4xl mx-auto">
            {product.videosTitle || "Aligning Design with Stakeholder and Brand Vision"}
          </h2>
        </motion.div>

        {product.preVideoImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="-mt-8 lg:-mt-16 -mb-6 lg:-mb-12 w-full flex justify-center relative z-0"
          >
            <img 
              src={product.preVideoImage} 
              alt="Pre Video Showcase" 
              className="w-full h-auto object-cover block" 
            />
          </motion.div>
        )}

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16">
          
          {/* Left Vertical Text */}
          {product.slug === 'east-gold' && (
            <div 
              className="hidden lg:block text-[100px] lg:text-[130px] font-sans font-extrabold text-[#D4AF37] tracking-[0.2em] opacity-90 uppercase leading-none"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              East
            </div>
          )}

          <div className={
            product.videos.length > 2 
              ? "grid grid-cols-2 lg:grid-cols-4 gap-0 w-full max-w-6xl relative z-10" 
              : "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-2xl w-full relative z-10"
          }>
            {product.videos.map((videoSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full h-full flex justify-center"
              >
                <video 
                  src={videoSrc} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Vertical Text */}
          {product.slug === 'east-gold' && (
            <div 
              className="hidden lg:block text-[100px] lg:text-[130px] font-sans font-extrabold text-[#1a1a1a] tracking-[0.1em] opacity-90 uppercase leading-none"
              style={{ writingMode: 'vertical-rl' }}
            >
              Gold
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
