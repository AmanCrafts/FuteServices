import { useRef, useState } from 'react';

const GALLERY = {
  interior: [
    {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=800&fit=crop',
      alt: 'Modern living room interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop',
      alt: 'Bright bedroom with natural light',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=800&fit=crop',
      alt: 'Open kitchen and dining area',
    },
    {
      src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=800&fit=crop',
      alt: 'Minimalist lounge space',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=800&fit=crop',
      alt: 'Elegant master bedroom',
    },
    {
      src: 'https://images.unsplash.com/photo-1600573472592-401b049aee81?w=600&h=800&fit=crop',
      alt: 'Contemporary bathroom',
    },
    {
      src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=800&fit=crop',
      alt: 'Spacious dining room',
    },
    {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=800&fit=crop',
      alt: 'Cozy reading nook',
    },
  ],
  exterior: [
    {
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=800&fit=crop',
      alt: 'Apartment building exterior',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop',
      alt: 'Modern villa facade',
    },
    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=800&fit=crop',
      alt: 'Swimming pool and outdoor area',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop',
      alt: 'Landscaped garden view',
    },
    {
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=800&fit=crop',
      alt: 'Building entrance and driveway',
    },
    {
      src: 'https://images.unsplash.com/photo-1605276374101-de4c782250f0?w=600&h=800&fit=crop',
      alt: 'Clubhouse exterior',
    },
    {
      src: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&h=800&fit=crop',
      alt: 'Evening building view',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=800&fit=crop',
      alt: 'Aerial view of the property',
    },
  ],
};

const GalleryImage = ({ src, alt }) => (
  <div className="gallery-image-shell shrink-0 w-[220px] sm:w-[260px] lg:w-[280px]">
    <div className="relative rounded-[1.25rem] overflow-hidden aspect-[3/4] bg-slate-100">
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="flex justify-center -mt-px">
      <div className="w-10 h-3 bg-white rounded-b-lg border-x border-b border-slate-100" aria-hidden="true" />
    </div>
  </div>
);

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('interior');
  const scrollRef = useRef(null);

  const images = GALLERY[activeTab];
  const countLabel = String(images.length).padStart(2, '0');

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 296;
    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'instant' });
    }
  };

  return (
    <section id="gallery" className="bg-white pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16">
          {/* Section label */}
          <div className="lg:col-span-3">
            <p className="section-label">
              (05) Gallery Of The Apartment
            </p>
          </div>

          {/* Gallery content */}
          <div className="lg:col-span-9">
            {/* Tab bar + count */}
            <div className="flex items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-6 sm:gap-10">
                {['interior', 'exterior'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabChange(tab)}
                    className={`text-base sm:text-lg font-semibold capitalize transition-colors cursor-pointer tracking-tight ${
                      activeTab === tab
                        ? 'text-brand-dark'
                        : 'text-brand-muted hover:text-brand-dark/60'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <span className="text-2xl sm:text-3xl font-semibold text-brand-dark tabular-nums tracking-tight">
                {countLabel}
              </span>
            </div>

            {/* Carousel */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none pb-2 -mx-1 px-1 snap-x snap-mandatory"
            >
              {images.map((img) => (
                <div key={img.src} className="snap-start">
                  <GalleryImage {...img} />
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => scroll('prev')}
                aria-label="Previous images"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-brand-dark hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll('next')}
                aria-label="Next images"
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:border-brand-dark hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
