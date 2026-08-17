import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getProductBySlug, getAdjacentProducts } from '../utils/productUtils';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductHero from '../components/product-detail/ProductHero';
import ProductMetrics from '../components/product-detail/ProductMetrics';
import ProductOverview from '../components/product-detail/ProductOverview';
import ProductPlanOfAction from '../components/product-detail/ProductPlanOfAction';
import ProductGallery from '../components/product-detail/ProductGallery';
import ProductLogos from '../components/product-detail/ProductLogos';
import ProductChallenge from '../components/product-detail/ProductChallenge';
import ProductDesign from '../components/product-detail/ProductDesign';
import ProductConversions from '../components/product-detail/ProductConversions';
import ProductFullBanner from '../components/product-detail/ProductFullBanner';
import ProductOutcome from '../components/product-detail/ProductOutcome';
import ProductVideos from '../components/product-detail/ProductVideos';
import PrintrickPreloader from '../components/layout/PrintrickPreloader';
import EastGoldPreloader from '../components/layout/EastGoldPreloader';
import AdhenFoodsPreloader from '../components/layout/AdhenFoodsPreloader';
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
      {slug === 'east-gold' && <EastGoldPreloader />}
      {slug === 'adhen-foods' && <AdhenFoodsPreloader />}
      <Navbar />



      {/* Dark hero section for visual contrast */}
      <ProductHero product={product} />

      {/* White content sections */}
      <div className="bg-white">
        <ProductOverview product={product} />
        <ProductPlanOfAction product={product} />
        <ProductLogos product={product} />
        <ProductChallenge product={product} />
        <ProductFullBanner product={product} />
        <ProductDesign product={product} />
        <ProductVideos product={product} />
        <ProductConversions product={product} />
        <ProductOutcome product={product} />
      </div>

      {/* Final CTA and Footer — now light themed */}

      <Footer />
    </div>
  );
}
