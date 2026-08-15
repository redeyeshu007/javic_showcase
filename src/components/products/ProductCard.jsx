import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductImage from './ProductImage';
import Badge from '../ui/Badge';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{
        duration: 0.55,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.07,
      }}
      className="group flex flex-col gap-3 w-full"
    >
      {/* ── Image ── */}
      <Link
        to={product.route}
        aria-label={`View ${product.name} case study`}
        className="block"
        id={`product-card-img-${product.slug}`}
      >
        <ProductImage src={product.thumbnail || product.image} alt={product.name} />
      </Link>

      {/* ── Content below image ── */}
      <div className="flex flex-col gap-3 pt-2 px-1">
        
        {/* Metadata pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {product.categories.map((cat) => (
            <span key={cat} className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-white text-gray-500 border border-gray-200 shadow-sm">
              {cat}
            </span>
          ))}
          {product.year && (
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-gray-50 text-gray-400 border border-gray-200 shadow-sm">
              {product.year}
            </span>
          )}
        </div>

        {/* Descriptive Title */}
        <Link to={product.route} className="mt-2 group/title w-fit">
          <h3 className="text-xl sm:text-[24px] font-bold text-gray-900 leading-[1.2] tracking-[-0.02em] group-hover/title:text-[#43C47A] transition-colors duration-300">
            {product.tagline || product.name}
          </h3>
        </Link>

        {/* Short description */}
        <p className="text-gray-500 text-[15px] sm:text-[16px] leading-[1.7] max-w-[96%]">
          {product.shortDescription}
        </p>

        {/* Explore Link */}
        <Link
          to={product.route}
          className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#43C47A] transition-colors duration-300 mt-4 group/link w-fit"
        >
          Explore Case Study
          <ArrowRight
            size={16}
            className="text-gray-900 group-hover/link:text-[#43C47A] transition-transform duration-300 ease-out group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}
