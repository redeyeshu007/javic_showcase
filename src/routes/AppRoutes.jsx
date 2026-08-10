import { Routes, Route } from 'react-router-dom';
import ProductShowcase from '../pages/ProductShowcase';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"                  element={<ProductShowcase />} />
      <Route path="/products/:slug"    element={<ProductDetails />} />
      <Route path="/not-found"         element={<NotFound />} />
      <Route path="*"                  element={<NotFound />} />
    </Routes>
  );
}
