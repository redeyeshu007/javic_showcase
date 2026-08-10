import { ArrowUpRight } from 'lucide-react';

/**
 * Reusable Button component
 * Variants: 'primary' | 'ghost' | 'outline'
 */
export default function Button({
  children,
  variant = 'primary',
  icon = true,
  href,
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-[#43C47A] text-[#050908] px-6 py-3 text-sm hover:bg-[#65D99A] hover:shadow-[0_0_24px_rgba(67,196,122,0.4)] active:scale-[0.97]',
    ghost:
      'text-[#F7FAF8] px-5 py-2.5 text-sm hover:text-[#43C47A] hover:bg-white/5 active:scale-[0.97]',
    outline:
      'border border-[rgba(255,255,255,0.12)] text-[#F7FAF8] px-6 py-3 text-sm hover:border-[rgba(67,196,122,0.4)] hover:text-[#43C47A] hover:bg-white/4 active:scale-[0.97]',
    'outline-dark':
      'border border-[rgba(0,0,0,0.15)] text-[#0D1A16] px-6 py-3 text-sm hover:border-[#43C47A] hover:text-[#43C47A] active:scale-[0.97]',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {icon && <ArrowUpRight size={16} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
      {icon && <ArrowUpRight size={16} />}
    </button>
  );
}
