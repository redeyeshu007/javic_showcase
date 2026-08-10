import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/hero/HeroSection';
import ProductFilter from '../components/products/ProductFilter';
import ProductGrid from '../components/products/ProductGrid';
import Capabilities from '../components/sections/Capabilities';

import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/ui/SectionHeading';
import { useProductFilter } from '../hooks/useProductFilter';

export default function ProductShowcase() {
  const { activeCategory, categories, filteredProducts, handleCategoryChange } =
    useProductFilter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — white */}
      <HeroSection />

      {/* ── Products Section ── */}
      <section
        id="products"
        className="pb-20 lg:pb-28 bg-white"
        aria-label="Product Showcase"
      >
        <PageContainer>
          
          {/* Filter — Centered below hero */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="flex justify-center mb-12"
          >
            <ProductFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </motion.div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} />
        </PageContainer>
      </section>

      <Capabilities />

      <Footer />
    </div>
  );
}
