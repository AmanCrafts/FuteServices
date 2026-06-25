import { useState } from 'react';

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=900&fit=crop',
    alt: 'Luxury apartment exterior view',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop',
    alt: 'Modern living room interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=900&fit=crop',
    alt: 'Pool and outdoor area',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=900&fit=crop',
    alt: 'Elegant bedroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop',
    alt: 'Kitchen and dining space',
  },
];

const FEATURES = [
  '2, 3 BHK & Duplex',
  'Premium Vitrified Flooring',
  'Vaastu Compliant Homes',
  'RERA Approved Project',
  'Panoramic City Views',
  'Possession March 2028',
  'Clubhouse & Infinity Pool',
  'Move-in Ready Finishes',
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  const goTo = (index) => {
    setActiveIndex((index + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section className="bg-white pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — property info */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Small thumbnail */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-sm">
              <img
                src={GALLERY_IMAGES[0].src}
                alt="Property preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.15] font-semibold text-brand-dark mb-4">
              Luxury{' '}
              <span className="inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-lime-500 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                Home
              </span>{' '}
              in{' '}
              <span className="text-brand-muted font-medium">Sarjapur Road</span>
            </h1>

            {/* Address line */}
            <p className="text-sm text-brand-muted mb-8">
              Sarjapur Road | Bangalore, KA 560035 | RERA #PRM/KA/RERA/1251/446/PR/171020/000123
            </p>

            {/* Feature list */}
            <ul className="space-y-2.5 mb-10">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-brand-dark/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-dark/30 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-5 mt-auto">
              <a
                href="#booking-section"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-brand-dark bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-colors"
              >
                Contact Us
              </a>
              <span className="text-2xl sm:text-3xl font-semibold text-brand-dark tracking-tight">
                ₹82 Lakhs*
              </span>
            </div>
          </div>

          {/* Right — image gallery */}
          <div className="lg:col-span-7 relative">
            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={GALLERY_IMAGES[activeIndex].src}
                alt={GALLERY_IMAGES[activeIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Share & Save */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  type="button"
                  aria-label="Share property"
                  className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4.5 h-4.5 text-brand-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label={saved ? 'Remove from saved' : 'Save property'}
                  onClick={() => setSaved((s) => !s)}
                  className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={saved ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className={`w-4.5 h-4.5 ${saved ? 'text-red-500' : 'text-brand-dark'}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  {GALLERY_IMAGES.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        i === activeIndex
                          ? 'border-white shadow-lg scale-105'
                          : 'border-transparent opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img src={img.src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* Gallery arrows */}
                <div className="flex gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    aria-label="Previous image"
                    className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-dark">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    aria-label="Next image"
                    className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-dark">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
