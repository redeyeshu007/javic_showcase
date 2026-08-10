import { motion } from 'framer-motion';

/**
 * Section heading pattern: eyebrow + heading + optional subtext
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = 'left',
  light = false,
  animate = true,
  className = '',
}) {
  const alignClass = {
    left:   'text-left',
    center: 'text-center mx-auto',
    right:  'text-right ml-auto',
  }[align] || 'text-left';

  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? {
        initial:   { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport:  { once: true, margin: '-60px' },
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
      }
    : {};

  return (
    <Wrapper className={`max-w-2xl ${alignClass} ${className}`} {...wrapperProps}>
      {eyebrow && (
        <span className="eyebrow mb-3 block text-[#43C47A]">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-[32px] sm:text-[44px] font-['Outfit'] font-medium leading-[1.1] tracking-tight ${light ? 'text-white' : 'text-[#0A0F0D]'}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-gray-400' : 'text-[#53615A]'}`}>
          {subtext}
        </p>
      )}
    </Wrapper>
  );
}
