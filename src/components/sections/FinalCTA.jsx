import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PageContainer from '../layout/PageContainer';

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F0FAF4] border-t border-[#DCE8E1]">
      {/* Light subtle green glow instead of dark orb */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(67,196,122,0.12) 0%, rgba(67,196,122,0.03) 45%, transparent 72%)',
        }}
      />

      <PageContainer className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="eyebrow mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(67,196,122,0.25)] bg-[rgba(67,196,122,0.08)] text-[#43C47A]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#43C47A] animate-pulse" />
          Let&apos;s Work Together
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="text-[clamp(40px,6vw,80px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-[#0A0F0D] max-w-3xl"
        >
          Have something that doesn&rsquo;t{' '}
          <span className="text-[#43C47A]">exist yet?</span>
          <br />
          Let&rsquo;s build it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.22 }}
          className="mt-6 text-lg text-[#53615A] max-w-lg leading-relaxed"
        >
          Tell us what you&rsquo;re imagining. We&rsquo;ll help turn it into something real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.36 }}
          className="mt-10"
        >
          <a
            href="mailto:hello@javix.io"
            id="final-cta-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#43C47A] text-white text-base font-bold transition-all duration-300 hover:bg-[#35B96D] hover:shadow-[0_4px_20px_rgba(67,196,122,0.35)] active:scale-[0.97]"
          >
            Start a Conversation
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </a>
        </motion.div>
      </PageContainer>
    </section>
  );
}
