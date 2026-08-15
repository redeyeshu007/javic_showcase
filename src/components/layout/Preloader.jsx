import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import javixLogo from '../../assets/logo/javix-logo-final.png';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2.2 seconds for the assembly animation to play out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  
  // Do not show the global preloader on the printrick page 
  // because it has its own dedicated preloader
  if (location.pathname === '/products/printrick') {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white border-b border-[#43C47A]/20 shadow-2xl"
        >
          <div className="relative flex items-center justify-center">
            {/* Invisible ghost image to establish the container's width/height naturally */}
            <img 
              src={javixLogo} 
              alt="JAVIX" 
              className="h-12 w-auto opacity-0 pointer-events-none" 
            />

            {/* Top-Left Quadrant */}
            <motion.img 
              src={javixLogo} 
              alt=""
              initial={{ x: -80, y: -80, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-0 left-0 h-12 w-auto drop-shadow-md" 
              style={{ clipPath: 'inset(0 50% 50% 0)' }}
              draggable={false}
            />

            {/* Top-Right Quadrant */}
            <motion.img 
              src={javixLogo} 
              alt=""
              initial={{ x: 80, y: -80, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-0 left-0 h-12 w-auto drop-shadow-md" 
              style={{ clipPath: 'inset(0 0 50% 50%)' }}
              draggable={false}
            />

            {/* Bottom-Left Quadrant */}
            <motion.img 
              src={javixLogo} 
              alt=""
              initial={{ x: -80, y: 80, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-0 left-0 h-12 w-auto drop-shadow-md" 
              style={{ clipPath: 'inset(50% 50% 0 0)' }}
              draggable={false}
            />

            {/* Bottom-Right Quadrant */}
            <motion.img 
              src={javixLogo} 
              alt=""
              initial={{ x: 80, y: 80, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-0 left-0 h-12 w-auto drop-shadow-md" 
              style={{ clipPath: 'inset(50% 0 0 50%)' }}
              draggable={false}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
