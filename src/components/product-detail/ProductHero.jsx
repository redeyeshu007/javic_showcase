import { motion } from 'framer-motion';
import PageContainer from '../layout/PageContainer';
import printrickLogo from '../../assets/products/printrick-logo.png';

export default function ProductHero({ product }) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050908]">
      {/* Full Bleed Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={printrickLogo} 
          alt="Printrick Logo" 
          className="w-full h-full object-cover" 
        />
      </motion.div>
    </section>
  );
}
