import { motion } from 'framer-motion';

export default function ProductFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="w-full flex justify-center mb-8 px-4 md:px-0" role="group" aria-label="Filter products by category">
      <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide max-w-full px-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`relative px-6 py-2.5 rounded-full text-[15px] font-['Outfit'] font-medium whitespace-nowrap transition-all duration-300 outline-none ${
                isActive
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-[#0A0F0D] rounded-full z-0 shadow-[0_4px_14px_0_rgb(0,0,0,0.15)]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
