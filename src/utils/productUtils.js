import { products, CATEGORIES } from '../data/products';

/**
 * Get a product by its URL slug.
 */
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

/**
 * Get products filtered by category.
 * 'All' returns all products.
 */
export function getProductsByCategory(category) {
  if (!category || category === 'All') return products;
  return products.filter((p) => p.categories.includes(category));
}

/**
 * Get all unique categories derived from product data.
 */
export function getAllCategories() {
  return CATEGORIES;
}

/**
 * Get the previous and next products relative to a given slug.
 * Wraps around (circular).
 */
export function getAdjacentProducts(currentSlug) {
  const idx = products.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return { prev: null, next: null };
  const prev = products[(idx - 1 + products.length) % products.length];
  const next = products[(idx + 1) % products.length];
  return { prev, next };
}

/**
 * Get featured products only.
 */
export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}
