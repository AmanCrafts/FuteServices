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
  '2, 3 BHK & Duplex Apartments',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — property info */}
          <div className="lg:col-span-5 flex flex-col">
            <p className="section-label mb-5">
              Sarjapur Road · Bangalore
            </p>

            {/* Heading */}
            <h1 className="font-serif font-semibold text-brand-dark mb-3 leading-[1.08]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', letterSpacing: '-0.01em' }}>
              Sky Heights<br />
              <em className="not-italic text-brand-dark/40 font-normal">Avenue</em>
            </h1>

            {/* Tagline */}
            <p className="text-base text-brand-dark/55 mb-7 leading-relaxed max-w-sm">
              Premium residences on Sarjapur Road — where thoughtful design meets elevated living.
            </p>

            {/* Feature list */}
            <ul className="grid grid-cols-1 gap-2 mb-9">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[0.875rem] text-brand-dark/75 leading-snug"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-dark/30 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#booking-section"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-brand-dark bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-colors duration-200"
              >
                Book a Site Visit
              </a>
              <div className="flex flex-col">
                <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-muted leading-none mb-1">
                  Starting from
                </span>
                <span className="text-2xl font-semibold text-brand-dark tracking-tight leading-none">
                  ₹82 Lakhs<span className="text-sm font-normal text-brand-muted">*</span>
                </span>
              </div>
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
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-brand-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label={saved ? 'Remove from saved' : 'Save property'}
                  onClick={() => setSaved((s) => !s)}
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={saved ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className={`w-4 h-4 ${saved ? 'text-red-500' : 'text-brand-dark'}`}
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
                      className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        i === activeIndex
                          ? 'border-white shadow-lg scale-105'
                          : 'border-transparent opacity-70 hover:opacity-100'
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
                    className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-brand-dark">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    aria-label="Next image"
                    className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-brand-dark">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* RERA / address caption below image */}
            <p className="mt-3 text-[0.7rem] text-brand-muted tracking-wide px-1">
              RERA #PRM/KA/RERA/1251/446/PR/171020/000123 &nbsp;·&nbsp; Sarjapur Road, Bangalore KA 560035
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

