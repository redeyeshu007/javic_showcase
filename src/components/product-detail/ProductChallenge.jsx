import { motion } from 'framer-motion';

export default function ProductChallenge({ product }) {
  if (!product.challenge) return null;

  return (
    <section className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24 items-start">
          
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
              The Challenge
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
            {Array.isArray(product.challenge) ? (
              product.challenge.map((paragraph, idx) => (
                <p key={idx} className="text-[#6B7280] text-[16px] sm:text-[17px] leading-[1.8]" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))
            ) : (
              <p className="text-[#6B7280] text-[16px] sm:text-[17px] leading-[1.8]">
                {product.challenge}
              </p>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
