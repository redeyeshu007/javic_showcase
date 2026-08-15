/**
 * ProductImage – optimized image container with hover scale and glow.
 */
export default function ProductImage({ src, alt, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-[#F8F9FA] group-hover:bg-[#F3F4F6] transition-colors duration-500 ease-[0.25,1,0.5,1] flex items-center justify-center aspect-video ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-cover block transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-[1.06]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
