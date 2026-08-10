/**
 * PageContainer – consistent max-width wrapper with horizontal padding.
 */
export default function PageContainer({ children, className = '' }) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
