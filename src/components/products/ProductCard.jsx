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
      className="group flex flex-col gap-6 p-4 sm:p-5 bg-white rounded-[32px] border border-gray-100/80 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] hover:border-gray-200/60 transition-all duration-500 ease-[0.25,1,0.5,1]"
    >
      {/* ── Image ── */}
      <Link
        to={product.route}
        aria-label={`View ${product.name} case study`}
        className="block"
        id={`product-card-img-${product.slug}`}
      >
        <ProductImage src={product.image} alt={product.name} />
      </Link>

      {/* ── Content below image ── */}
      <div className="flex flex-col gap-3 px-2 pt-1">
        
        {/* Metadata pills */}
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          {product.categories.map((cat) => (
            <Badge key={cat} variant="category">{cat}</Badge>
          ))}
          {product.year && (
            <Badge variant="year">{product.year}</Badge>
          )}
        </div>

        {/* Product name */}
        <Link to={product.route} id={`product-card-title-${product.slug}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0F0D] leading-none tracking-tight group-hover:text-[#43C47A] transition-colors duration-400">
            {product.name}
          </h3>
        </Link>

        {/* Short description */}
        <p className="text-[#6B7280] text-[15px] sm:text-[16px] leading-relaxed line-clamp-2 max-w-[95%]">
          {product.shortDescription}
        </p>

        {/* Explore Product link */}
        <Link
          to={product.route}
          id={`product-card-explore-${product.slug}`}
          className="inline-flex items-center gap-2 text-[15px] font-bold text-[#0A0F0D] hover:text-[#43C47A] transition-all duration-400 mt-2.5 group/link w-fit"
        >
          <span className="relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[1.5px] after:bg-[#43C47A] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300">Explore Product</span>
          <ArrowRight
            size={18}
            className="text-[#43C47A] transition-transform duration-400 ease-[0.25,1,0.5,1] group-hover/link:translate-x-[6px]"
          />
        </Link>
      </div>
    </motion.article>
  );
}
