import { AnimatePresence, motion } from 'framer-motion';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="col-span-2 flex flex-col items-center justify-center py-24 text-center"
      >
        <p className="text-[#68756F] text-lg">
          No products found in this category.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[30px]"
    >
      <AnimatePresence mode="popLayout">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
