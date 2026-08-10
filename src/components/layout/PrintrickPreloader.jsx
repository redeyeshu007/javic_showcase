import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import printrickLogo from '../../assets/products/logo-text.png';
import javixLogo from '../../assets/logo/javix-logo-final.png';

export default function PrintrickPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total animation time is around 3.5s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="printrick-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-10%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative z-10 flex flex-col items-center justify-center gap-6">
            {/* Printrick Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center"
            >
              <img
                src={printrickLogo}
                alt="Printrick"
                className="h-24 md:h-32 w-auto block mx-auto object-contain pr-4"
              />
            </motion.div>

            {/* "by" Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 w-full justify-center"
            >
              <span className="text-black font-extrabold tracking-[0.2em] uppercase text-sm drop-shadow-md">
                By
              </span>
            </motion.div>

            {/* Javix Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 w-full flex justify-center"
            >
              <img
                src={javixLogo}
                alt="JAVIX"
                className="h-12 md:h-14 w-auto block mx-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
