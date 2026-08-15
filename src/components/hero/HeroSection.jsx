import { motion } from 'framer-motion';
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
  return (
    <section className="relative flex flex-col justify-center pt-12 pb-4 overflow-hidden bg-white">


      <PageContainer className="relative z-10 flex flex-col items-center text-center w-full h-full flex-grow pt-8">
        <div className="max-w-6xl relative z-10 px-4">

          <motion.h1 
            custom={0.1} initial="hidden" animate="visible" variants={fadeUp}
            className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-sans font-normal text-[#0A0F0D] leading-[1.1] tracking-tight mb-0 w-full"
          >
            Our nicest work<br />
            <span className="text-[#43C47A]">in front of you</span>
          </motion.h1>
          

        </div>
      </PageContainer>
    </section>
  );
}
