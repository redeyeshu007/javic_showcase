import { motion } from 'framer-motion';
import { Brain, Code2, Cloud, Zap, BarChart3, Palette } from 'lucide-react';
import PageContainer from '../layout/PageContainer';
import SectionHeading from '../ui/SectionHeading';

const capabilities = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Embedding intelligence into products — from natural language to predictive systems.',
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    description: 'Full-stack engineering that ships fast, scales cleanly, and lasts.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Architecting resilient, cost-efficient systems on AWS, GCP, and Azure.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Eliminating manual work at scale through intelligent process automation.',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Turning raw data into the strategic clarity that drives decisions.',
  },
  {
    icon: Palette,
    title: 'Experience Design',
    description: 'Crafting interfaces that feel as precise and intentional as the products behind them.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function Capabilities() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0F0D]">
      <PageContainer>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: heading */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Capabilities"
              heading="More than products."
              subtext="Every product starts with a problem worth solving. We build the full stack of what it takes to turn that problem into something people actually use."
              light={true}
            />
          </div>

          {/* Right: capability grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  variants={itemVariants}
                  className="flex flex-col p-8 bg-[#131B17] hover:bg-[#1A241F] rounded-[24px] hover:shadow-[0_8px_30px_rgba(67,196,122,0.06)] transition-all duration-300 group border border-[#1F2C25] hover:border-[#43C47A]/30"
                >
                  <div className="w-12 h-12 rounded-[16px] bg-[#0A0F0D] shadow-sm border border-[#1F2C25] flex items-center justify-center text-[#43C47A] group-hover:-translate-y-1 group-hover:bg-[#43C47A]/10 group-hover:border-[#43C47A]/40 transition-all duration-300 mb-6">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-white text-[18px] font-['Outfit'] font-medium leading-snug mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
