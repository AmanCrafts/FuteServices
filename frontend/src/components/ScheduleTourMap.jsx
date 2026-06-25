import { useMemo, useState } from 'react';

const PROPERTY = {
  name: 'Sky Heights Avenue',
  address: 'Sarjapur Road, Bangalore, KA 560035',
  reference: 'RERA #PRM/KA/RERA/1251/446/PR/171020/000123',
  image:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=120&fit=crop',
};

const MAP_LINK = 'https://maps.app.goo.gl/Fd8rACpTxoGR99kr9';
const MAP_CENTER = { lat: 12.9361112, lng: 77.6254224 };
const MIN_ZOOM = 14;
const MAX_ZOOM = 19;
const DEFAULT_ZOOM = 16;

const buildEmbedUrl = (zoom) =>
  `https://maps.google.com/maps?q=${MAP_CENTER.lat},${MAP_CENTER.lng}&z=${zoom}&output=embed&hl=en`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const ScheduleTourMap = () => {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  const embedUrl = useMemo(() => buildEmbedUrl(zoom), [zoom]);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${MAP_CENTER.lat},${MAP_CENTER.lng}`;
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${MAP_CENTER.lat},${MAP_CENTER.lng}`;

  const zoomIn = () => setZoom((z) => Math.min(z + 1, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => Math.max(z - 1, MIN_ZOOM));

  return (
    <section id="location" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
          {/* Left — tour info */}
          <div className="flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12 bg-slate-100">
            <div>
              <p className="section-label mb-4">
                Schedule a Tour
              </p>
              <h2 className="font-serif font-semibold text-brand-dark leading-tight tracking-tight mb-5"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}>
                See It in Person or From the Comfort of Home
              </h2>
              <p className="text-sm sm:text-[0.9375rem] text-brand-dark/60 leading-relaxed max-w-md">
                Whether you prefer an in-person walk-through of Sky Heights Avenue or a guided
                virtual tour with our sales team, we make it easy to explore the project on your
                terms. Tours are free and no-obligation.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-brand-dark/70">Have a question before booking?</p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-dark bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-colors shrink-0"
                >
                  Talk To An Agent
                  <ArrowIcon />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm text-brand-dark/70">Ready to go?</p>
                <a
                  href="#booking-section"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue-dark hover:bg-brand-blue-dark/90 rounded-full transition-colors shrink-0 shadow-sm"
                >
                  Book Your Tour Now
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[520px] bg-slate-200">
            <iframe
              title="Sky Heights Avenue location on Google Maps"
              src={embedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlays — pointer-events-none except interactive controls */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Property card + pin */}
              <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <div className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-white p-2.5 pr-4 shadow-lg border border-slate-100 max-w-[280px] sm:max-w-none">
                  <img
                    src={PROPERTY.image}
                    alt={PROPERTY.name}
                    className="h-14 w-20 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-brand-dark truncate">
                      {PROPERTY.name}
                    </p>
                    <p className="text-xs text-brand-dark/60 truncate">{PROPERTY.address}</p>
                    <p className="text-[10px] text-brand-muted mt-0.5 truncate">
                      {PROPERTY.reference}
                    </p>
                  </div>
                </div>
                <div className="mt-1 flex flex-col items-center" aria-hidden="true">
                  <div className="h-3 w-3 rotate-45 bg-white border-r border-b border-slate-100 -mt-1.5" />
                  <div className="h-9 w-9 rounded-full bg-brand-blue-dark border-4 border-white shadow-md flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              {/* Map controls */}
              <div className="absolute bottom-5 right-5 flex items-end gap-2 pointer-events-auto">
                <div className="flex rounded-full bg-white shadow-md border border-slate-100 overflow-hidden">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-brand-dark hover:bg-slate-50 transition-colors border-r border-slate-100"
                  >
                    Direction
                  </a>
                  <a
                    href={streetViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-brand-dark hover:bg-slate-50 transition-colors"
                  >
                    Street View
                  </a>
                </div>

                <div className="flex flex-col rounded-full bg-white shadow-md border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={zoomIn}
                    disabled={zoom >= MAX_ZOOM}
                    aria-label="Zoom in"
                    className="px-2.5 py-2 text-brand-dark hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors border-b border-slate-100 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={zoomOut}
                    disabled={zoom <= MIN_ZOOM}
                    aria-label="Zoom out"
                    className="px-2.5 py-2 text-brand-dark hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Open in Google Maps */}
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-dark shadow-md border border-slate-100 hover:bg-slate-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-brand-blue-dark">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTourMap;
