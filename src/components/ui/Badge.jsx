/**
 * Badge / pill component for categories and tags.
 * Variants: 'category' | 'year' | 'tag' | 'green'
 */
export default function Badge({ children, variant = 'category', className = '' }) {
  const variants = {
    category:
      'inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium tracking-wide bg-gray-100 text-gray-700',
    year:
      'inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium tracking-wide bg-gray-100 text-gray-500',
    tag:
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F0FAF4] text-[#53615A]',
    green:
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[rgba(67,196,122,0.25)] bg-[rgba(67,196,122,0.08)] text-[#43C47A]',
    'green-dark':
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[rgba(67,196,122,0.30)] bg-[rgba(67,196,122,0.12)] text-[#2A7A4C]',
  };

  return (
    <span className={`${variants[variant] || variants.category} ${className}`}>
      {children}
    </span>
  );
}
