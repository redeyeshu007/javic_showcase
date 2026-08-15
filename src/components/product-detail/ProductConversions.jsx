import { motion } from 'framer-motion';

export default function ProductConversions({ product }) {
  if (!product.conversionsTitle || !product.conversionsDescription) return null;

  return (
    <section className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24 items-start">
          
          {/* Left: Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a1a1a] leading-tight tracking-tight whitespace-pre-line">
              {product.conversionsTitle}
            </h2>
            {product.conversionsSubtitle && (
              <a 
                href={product.websiteUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-widest text-[#43C47A] hover:text-[#2fa861] transition-colors duration-300 w-fit"
              >
                {product.conversionsSubtitle} &rarr;
              </a>
            )}
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
              {product.conversionsDescription}
            </p>
          </motion.div>
          
        </div>

        {/* Bottom: Image (if provided) */}
        {product.conversionsImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="mt-16 w-full max-w-3xl mx-auto"
          >
            <img 
              src={product.conversionsImage} 
              alt="Conversions Tactics Showcase" 
              className="w-full h-auto object-cover" 
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
