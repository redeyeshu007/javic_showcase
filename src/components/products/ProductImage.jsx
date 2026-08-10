/**
 * ProductImage – optimized image container with hover scale and glow.
 */
export default function ProductImage({ src, alt, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] aspect-[4/3] bg-[#F4F6F8] group-hover:bg-[#EFF1F4] transition-colors duration-500 ease-[0.25,1,0.5,1] flex items-center justify-center p-12 md:p-16 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-contain transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-[1.08] mix-blend-multiply"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
