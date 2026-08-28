import { motion } from 'framer-motion';

export default function ProductChallenge({ product }) {
  if (!product.challenge) return null;

  return (
    <section className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-24 items-start">
          
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
              {product.challengeTitle || "The Challenge"}
            </h2>
            {product.challengeSubtitle && (
              <p className="mt-2 text-lg text-[#6B7280]">
                {product.challengeSubtitle}
              </p>
            )}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="flex flex-col gap-6 pt-2"
          >
            {product.challengesList ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-4">
                {product.challengesList.map((item, idx) => (
                  <div key={idx} className="relative pt-8 pl-6">
                    <div className="absolute top-0 left-0 text-[100px] leading-none font-bold text-[#F3F4F6] z-0 select-none tracking-tighter">
                      0{idx + 1}
                    </div>
                    <p className="relative z-10 text-[#374151] text-[17px] sm:text-[18px] leading-[1.6] font-medium pt-4 pr-4">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ) : Array.isArray(product.challenge) ? (
              product.challenge.map((paragraph, idx) => (
                <p key={idx} className="text-[#6B7280] text-[16px] sm:text-[17px] leading-[1.8] text-justify" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))
            ) : (
              <p className="text-[#6B7280] text-[16px] sm:text-[17px] leading-[1.8] text-justify">
                {product.challenge}
              </p>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
