import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050908] flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(67,196,122,0.08) 0%, transparent 70%)',
          }}
        />

        <span className="eyebrow mb-6">404</span>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-[#F7FAF8] leading-tight tracking-tight mb-4">
          Page not found.
        </h1>
        <p className="text-[#A7B3AD] text-lg max-w-md mb-10">
          This page doesn&apos;t exist yet. Maybe that&apos;s your next idea.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#43C47A] text-[#050908] text-sm font-bold hover:bg-[#65D99A] hover:shadow-[0_0_24px_rgba(67,196,122,0.4)] transition-all duration-300"
        >
          <ArrowLeft size={15} />
          Back to Showcase
        </Link>
      </main>

      <Footer />
    </div>
  );
}
