import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ProductNavigation({ prev, next }) {
  return (
    <section className="bg-[#f8faf9] border-t border-[rgba(0,0,0,0.06)] py-12">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          {/* Previous */}
          {prev ? (
            <Link
              to={prev.route}
              className="group flex items-center gap-3 text-left"
              id="product-nav-prev"
            >
              <span className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.10)] flex items-center justify-center text-[#4A6357] group-hover:border-[#43C47A] group-hover:text-[#43C47A] transition-all duration-200">
                <ArrowLeft size={16} />
              </span>
              <span className="hidden sm:block">
                <span className="block text-xs text-[#68756F] font-medium mb-0.5">Previous</span>
                <span className="block text-[#0D1A16] font-semibold text-sm group-hover:text-[#43C47A] transition-colors duration-200">
                  {prev.name}
                </span>
              </span>
            </Link>
          ) : (
            <div />
          )}

          {/* Back to all */}
          <Link
            to="/"
            id="product-nav-all"
            className="text-sm text-[#68756F] hover:text-[#43C47A] font-medium transition-colors duration-200"
          >
            All Products
          </Link>

          {/* Next */}
          {next ? (
            <Link
              to={next.route}
              className="group flex items-center gap-3 text-right"
              id="product-nav-next"
            >
              <span className="hidden sm:block">
                <span className="block text-xs text-[#68756F] font-medium mb-0.5">Next</span>
                <span className="block text-[#0D1A16] font-semibold text-sm group-hover:text-[#43C47A] transition-colors duration-200">
                  {next.name}
                </span>
              </span>
              <span className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.10)] flex items-center justify-center text-[#4A6357] group-hover:border-[#43C47A] group-hover:text-[#43C47A] transition-all duration-200">
                <ArrowRight size={16} />
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
