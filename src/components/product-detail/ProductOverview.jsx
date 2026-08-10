import { motion } from 'framer-motion';

export default function ProductOverview({ product }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Title & Overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] tracking-tight">
              {product.name}
            </h2>
            <div className="flex flex-col gap-4 text-[#4b5563] text-base lg:text-lg leading-relaxed">
              {Array.isArray(product.overview) ? (
                product.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <p>{product.overview}</p>
              )}
            </div>
          </motion.div>

          {/* Right Column: Objective, Scope, Duration, Client */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.12 }}
            className="flex flex-col"
          >
            {/* Objective */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">Objective</h3>
              <p className="text-[#4b5563] text-base leading-relaxed">
                {product.objective}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full mb-10" />

            {/* Grid for Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Scope of Work */}
              <div>
                <h4 className="text-lg font-semibold text-[#1a1a1a] mb-4">Scope of Work</h4>
                <ul className="flex flex-col gap-3">
                  {product.scopeOfWork?.map((item, idx) => (
                    <li key={idx} className="text-[#4b5563] text-sm">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Duration */}
              <div>
                <h4 className="text-lg font-semibold text-[#1a1a1a] mb-4">Duration</h4>
                <ul className="flex flex-col gap-3">
                  {product.duration?.map((item, idx) => (
                    <li key={idx} className="text-[#4b5563] text-sm">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Client */}
              <div>
                <h4 className="text-lg font-semibold text-[#1a1a1a] mb-4">Client</h4>
                <p className="text-[#4b5563] text-sm">{product.client}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
