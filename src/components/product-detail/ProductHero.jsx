import { motion } from 'framer-motion';
import PageContainer from '../layout/PageContainer';

export default function ProductHero({ product }) {
  // Extract key result from metrics if available
  const keyResult = product.metrics && product.metrics.length > 0 
    ? `${product.metrics[0].value} ${product.metrics[0].label}`
    : '';

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050908] flex flex-col justify-end">
      {/* Full Bleed Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={product.image} 
          alt={`${product.name} Logo`} 
          className="w-full h-full object-cover" 
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full pb-6 md:pb-8 pt-48">
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-5xl"
          >
            {/* Category Badge */}
            {product.categories && (
              <div className="inline-block bg-white text-black text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6">
                {product.categories.join(' / ')}
              </div>
            )}

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold text-white leading-tight tracking-tight mb-6">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mb-16 font-medium">
              {product.shortDescription || product.description}
            </p>

          </motion.div>

          {/* Bottom Grid (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-full mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-white/20">
              {/* Client */}
              {product.client && (
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-2">Client</h4>
                  <p className="text-white font-semibold text-sm md:text-base">{product.client}</p>
                </div>
              )}

              {/* Scope of Work */}
              {product.scopeOfWork && (
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-2">Scope of Work</h4>
                  <div className="text-white font-semibold text-sm md:text-base space-y-1">
                    {product.scopeOfWork.map((scope, idx) => (
                      <p key={idx}>{scope}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Duration */}
              {product.duration && (
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-2">Duration</h4>
                  <div className="text-white font-semibold text-sm md:text-base space-y-1">
                    {product.duration.map((dur, idx) => (
                      <p key={idx}>{dur}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Result */}
              {keyResult && (
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60 mb-2">Key Result</h4>
                  <p className="text-white font-semibold text-sm md:text-base">{keyResult}</p>
                </div>
              )}
            </div>
          </motion.div>
        </PageContainer>
      </div>
    </section>
  );
}
