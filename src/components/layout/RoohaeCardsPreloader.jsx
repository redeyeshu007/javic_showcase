import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import roohaeCardsLogo from '../../assets/products/roohae-cards-logo.png';

export default function RoohaeCardsPreloader() {
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
          key="roohae-cards-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Roohae Cards Logo */}
            <div className="w-full flex justify-center mb-2">
              <img
                src={roohaeCardsLogo}
                alt="Roohae Cards"
                className="h-10 md:h-14 w-auto block mx-auto object-contain mix-blend-multiply contrast-[1.25] brightness-[1.1]"
                style={{ clipPath: 'inset(1.5% 0 0 0)' }}
              />
            </div>

            {/* "by Javix" Section */}
            <div className="flex flex-col items-center justify-center mt-2">
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
