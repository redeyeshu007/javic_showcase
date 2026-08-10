import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getProductBySlug, getAdjacentProducts } from '../utils/productUtils';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductHero from '../components/product-detail/ProductHero';
import ProductMetrics from '../components/product-detail/ProductMetrics';
import ProductOverview from '../components/product-detail/ProductOverview';
import ProductGallery from '../components/product-detail/ProductGallery';
import ProductMoodboard from '../components/product-detail/ProductMoodboard';
import ProductIdea from '../components/product-detail/ProductIdea';
import ProductVision from '../components/product-detail/ProductVision';
import ProductOutcome from '../components/product-detail/ProductOutcome';
import PrintrickPreloader from '../components/layout/PrintrickPreloader';


export default function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/not-found" replace />;
  }

  const { prev, next } = getAdjacentProducts(slug);

  return (
    <div className="min-h-screen bg-white">
      {slug === 'printrick' && <PrintrickPreloader />}
      <Navbar />



      {/* Dark hero section for visual contrast */}
      <ProductHero product={product} />

      {/* White content sections */}
      <div className="bg-white">
        <ProductOverview product={product} />
        <ProductGallery product={product} />
        <ProductMoodboard product={product} />
        <ProductIdea product={product} />
        <ProductVision product={product} />
        <ProductOutcome product={product} />
      </div>

      {/* Final CTA and Footer — now light themed */}

      <Footer />
    </div>
  );
}
