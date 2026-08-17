import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import adhenFoodsLogo from '../../assets/products/adhen-foods-logo.png';

export default function AdhenFoodsPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total display time is 1.5s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="adhen-foods-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Adhen Foods Logo */}
            <div className="w-full flex justify-center">
              <img
                src={adhenFoodsLogo}
                alt="Adhen Foods"
                className="h-32 md:h-48 w-auto block mx-auto object-contain mix-blend-screen"
              />
            </div>

            {/* "by Javix" Section */}
            <div className="flex flex-col items-center justify-center -mt-8 md:-mt-12">
              <motion.span 
                className="text-[#9CA3AF] font-medium tracking-[0.3em] uppercase text-[11px] flex"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04, delayChildren: 0.2 }
                  }
                }}
              >
                {"by Javix".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
