import { motion } from 'framer-motion';

export default function ProductPlanOfAction({ product }) {
  if (!product.planOfAction) return null;

  return (
    <section className="pt-0 pb-0 lg:pt-0 lg:pb-0 bg-white relative z-10">
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
              Plan of Action
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
            {Array.isArray(product.planOfAction) ? (
              product.planOfAction.map((paragraph, idx) => (
                <p key={idx} className="text-[#6B7280] text-[16px] sm:text-[17px] leading-[1.8]" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))
            ) : (
              <p className="text-[#6B7280] text-[16px] sm:text-[17px] leading-[1.8]">
                {product.planOfAction}
              </p>
            )}
          </motion.div>
          
        </div>

        {/* Full-width Image below grid */}
        {product.planOfActionImage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="mt-16 w-full flex justify-center"
          >
            <img 
              src={product.planOfActionImage} 
              alt="Plan of Action Visual" 
              className="w-full h-auto max-w-5xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
