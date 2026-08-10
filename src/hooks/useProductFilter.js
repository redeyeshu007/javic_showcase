import { useState, useMemo } from 'react';
import { getProductsByCategory, getAllCategories } from '../utils/productUtils';

/**
 * Custom hook that manages product category filtering state.
 * Returns filtered products, active category, and setter.
 */
export function useProductFilter() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => getAllCategories(), []);

  const filteredProducts = useMemo(
    () => getProductsByCategory(activeCategory),
    [activeCategory]
  );

  function handleCategoryChange(category) {
    setActiveCategory(category);
  }

  return {
    activeCategory,
    categories,
    filteredProducts,
    handleCategoryChange,
  };
}
