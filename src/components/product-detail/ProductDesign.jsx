import { motion } from 'framer-motion';

export default function ProductDesign({ product }) {
  if (!product.designTitle || !product.designDescription) return null;

  return (
    <section className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24 items-start">
          
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a1a1a] leading-tight tracking-tight whitespace-pre-line">
              {product.designTitle}
            </h2>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="flex flex-col gap-6 pt-2 text-justify"
          >
            <p className="text-[#6B7280] text-[16px] sm:text-[17px] leading-[1.8]">
              {product.designDescription}
            </p>
          </motion.div>
          
        </div>
        
        {/* Bottom: Images (if provided) */}
        {product.designImages && product.designImages.length > 0 && (
          <div className="mt-16 w-full flex flex-col gap-0">
            {product.designImages.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 + idx * 0.1 }}
                className="w-full flex"
              >
                <img 
                  src={imgSrc} 
                  alt={`Design Showcase ${idx + 1}`} 
                  className="w-full h-auto object-cover block" 
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom: Grid Images (if provided) */}
        {product.designGridImages && product.designGridImages.length > 0 && (
          <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-3 gap-0">
            {product.designGridImages.map((imgSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: idx * 0.05 }}
                className="w-full h-full"
              >
                <img 
                  src={imgSrc} 
                  alt={`Moodboard Image ${idx + 1}`} 
                  className="w-full h-full object-cover block" 
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      {/* Secondary Design Section */}
      {(product.secondaryDesignTitle || product.secondaryDesignDescription) && (
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mt-20 lg:mt-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-0">
            
            {/* Secondary Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a1a1a] leading-tight tracking-tight whitespace-pre-line">
                {product.secondaryDesignTitle}
              </h2>
            </motion.div>

            {/* Secondary Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              className="mt-6"
            >
              <p className="text-[#6B7280] text-[16px] sm:text-[17px] leading-[1.8]">
                {product.secondaryDesignDescription}
              </p>
            </motion.div>
            
          </div>
          
          {/* Secondary Images (if provided) */}
          {product.secondaryDesignImages && product.secondaryDesignImages.length > 0 && (
            <div className="mt-0 w-full flex flex-col gap-0 -mx-4">
              {product.secondaryDesignImages.map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 + idx * 0.1 }}
                  className="w-full flex"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Secondary Design Showcase ${idx + 1}`} 
                    className="w-full h-auto object-cover block mix-blend-multiply" 
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* Secondary Video (if provided) */}
          {product.secondaryDesignVideo && (
            <div className="mt-16 w-full flex flex-col gap-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                className="w-full flex"
              >
                <video 
                  src={product.secondaryDesignVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-cover block"
                />
              </motion.div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
