import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageContainer from '../layout/PageContainer';

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay },
  }),
};

export default function HeroSection() {
  const words = ["Yesterday", "Last Year", "Before"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-white">


      <PageContainer className="relative z-10 flex flex-col items-center text-center w-full h-full flex-grow pt-8">
        <div className="max-w-6xl relative z-10 px-4">

          <motion.h1 
            custom={0.1} initial="hidden" animate="visible" variants={fadeUp}
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-['Outfit'] font-light text-[#0A0F0D] leading-[1.0] tracking-tight mb-8 w-full"
          >
            Things That Didn't Exist<br />
            <span className="text-[#43C47A] font-medium relative inline-block mt-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          
          <motion.p 
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="text-lg md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed animate-pulse"
          >
            From intelligent platforms to digital experiences, we transform ambitious ideas into products built for the real world.
          </motion.p>
        </div>
      </PageContainer>
    </section>
  );
}
