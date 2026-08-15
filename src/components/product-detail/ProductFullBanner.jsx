import { motion } from 'framer-motion';

export default function ProductFullBanner({ product }) {
  if (!product.fullBanner) return null;

  const customMarginTop = product.slug === 'east-gold' ? '-mt-8 lg:-mt-16' : '';
  const customMarginBottom = product.slug === 'east-gold' ? '-mb-16 lg:-mb-32 pb-0' : 'pb-20';

  return (
    <section className={`bg-white relative z-0 ${customMarginTop} ${customMarginBottom}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="w-full"
      >
        <img 
          src={product.fullBanner} 
          alt={`${product.name} Full Banner`} 
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
