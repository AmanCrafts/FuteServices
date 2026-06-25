import { useState } from 'react';

const LocationMap = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const landmarks = [
    { name: 'Wipro Technology Campus', type: 'hub', distance: '0.8 km', time: '2 mins', x: '45%', y: '35%' },
    { name: 'RMZ Ecoworld Tech Park', type: 'hub', distance: '6.5 km', time: '12 mins', x: '25%', y: '70%' },
    { name: 'The International School Bangalore (TISB)', type: 'school', distance: '8.0 km', time: '15 mins', x: '75%', y: '25%' },
    { name: 'Greenwood High School', type: 'school', distance: '7.5 km', time: '14 mins', x: '70%', y: '40%' },
    { name: 'Manipal Hospital Sarjapur', type: 'hospital', distance: '4.2 km', time: '8 mins', x: '35%', y: '50%' },
    { name: 'Motherhood Hospital', type: 'hospital', distance: '5.0 km', time: '10 mins', x: '50%', y: '65%' },
  ];

  const filteredLandmarks = activeCategory === 'all'
    ? landmarks
    : landmarks.filter(item => item.type === activeCategory);

  return (
    <section id="location-map" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-2">
            Connectivity
          </h2>
          <p className="text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            Strategic Location & Proximity
          </p>
          <div className="h-1 w-12 bg-brand-green mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Layout matching Nestico Inspiration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left card: Connectivity & Landmarks List */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-outfit mb-3">
                See It in Person
              </h3>
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed mb-6">
                Sky Heights Avenue is situated at the epicentre of Bangalore's key IT corridor on Sarjapur Road. Enjoy seamless daily commutes, top-tier educational facilities, and premium healthcare right at your doorstep.
              </p>

              {/* Interactive Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['all', 'hub', 'school', 'hospital'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-brand-green text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {cat === 'all' ? 'All Nearby' : cat === 'hub' ? 'Tech Hubs' : cat === 'school' ? 'Schools' : 'Hospitals'}
                  </button>
                ))}
              </div>

              {/* Dynamic Landmark Distances list */}
              <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                {filteredLandmarks.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-850 hover:border-brand-green/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      {/* Category Icon */}
                      <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                        item.type === 'hub' ? 'bg-indigo-500' : item.type === 'school' ? 'bg-amber-500' : 'bg-rose-500'
                      }`} />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[180px] sm:max-w-[240px]">
                        {item.name}
                      </span>
                    </div>
                    <div className="text-right text-xs font-medium text-slate-550 dark:text-slate-400 flex-shrink-0 pl-2">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{item.time}</span> ({item.distance})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick map action buttons */}
            <div className="pt-6 border-t border-slate-150 dark:border-slate-800 mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Sarjapur+Road+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-900 bg-slate-100 dark:bg-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all duration-300 cursor-pointer"
              >
                Open Google Maps
              </a>
              <a
                href="#booking-section"
                className="flex-1 inline-flex items-center justify-center py-3 px-4 text-xs font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-xl shadow-md hover:shadow-brand-green/20 transition-all duration-300 cursor-pointer"
              >
                Schedule Tour Now
              </a>
            </div>
          </div>

          {/* Right card: Styled Vector Map visualization matching template color style */}
          <div className="lg:col-span-7 bg-[#d9e5db] dark:bg-[#202923] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm relative min-h-[380px] flex items-center justify-center p-4">
            
            {/* Custom styled vector roadmap */}
            <div className="absolute inset-0 opacity-80 dark:opacity-60">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Rivers / Lakes */}
                <path d="M 0 100 Q 150 120 200 250 T 400 380" fill="none" stroke="#b2cad6" strokeWidth="24" className="dark:stroke-[#1d2b33]" />
                <path d="M 300 0 Q 380 180 500 200" fill="none" stroke="#b2cad6" strokeWidth="16" className="dark:stroke-[#1d2b33]" />

                {/* Major Highway (Sarjapur Road) */}
                <path d="M -20 180 Q 200 190 350 210 T 800 230" fill="none" stroke="#fdfbf7" strokeWidth="10" className="dark:stroke-[#3b473f]" />
                <path d="M -20 180 Q 200 190 350 210 T 800 230" fill="none" stroke="#e6cfab" strokeWidth="6" className="dark:stroke-[#c2af91]" />

                {/* Secondary Roads */}
                <line x1="200" y1="0" x2="250" y2="400" stroke="#fdfbf7" strokeWidth="4" className="dark:stroke-[#2f3b33]" />
                <line x1="500" y1="0" x2="420" y2="400" stroke="#fdfbf7" strokeWidth="4" className="dark:stroke-[#2f3b33]" />
                <line x1="0" y1="300" x2="600" y2="280" stroke="#fdfbf7" strokeWidth="4" className="dark:stroke-[#2f3b33]" />
                <line x1="0" y1="80" x2="600" y2="120" stroke="#fdfbf7" strokeWidth="4" className="dark:stroke-[#2f3b33]" />
              </svg>
            </div>

            {/* Landmark Markers on Map */}
            {filteredLandmarks.map((item, idx) => (
              <div
                key={idx}
                className="absolute flex flex-col items-center group transition-all duration-300 z-20"
                style={{ left: item.x, top: item.y }}
              >
                {/* Marker Dot */}
                <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-125 ${
                  item.type === 'hub' ? 'bg-indigo-500' : item.type === 'school' ? 'bg-amber-500' : 'bg-rose-500'
                }`} />

                {/* Label popup on hover */}
                <div className="absolute bottom-full mb-1.5 hidden group-hover:flex flex-col items-center pointer-events-none">
                  <div className="bg-slate-900 text-white text-[10px] font-semibold py-1 px-2 rounded shadow-lg whitespace-nowrap border border-slate-750">
                    {item.name} <span className="text-gold-500">({item.time})</span>
                  </div>
                  <div className="w-1.5 h-1.5 bg-slate-900 rotate-45 -mt-1" />
                </div>
              </div>
            ))}

            {/* MAIN PROJECT SITE VISIT PIN */}
            <div className="absolute top-[48%] left-[55%] flex flex-col items-center z-35 animate-bounce">
              {/* Custom Pin Icon */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-green border-4 border-white flex items-center justify-center shadow-2xl relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                {/* Ripple Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-green/20 rounded-full animate-ping z-0" />
              </div>
              
              {/* Standalone Project Info Card on Map (matches Nestico template popup card) */}
              <div className="mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xl max-w-[190px] text-center border-t-4 border-t-brand-green">
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest block leading-none">Sky Heights</span>
                <span className="text-xs font-black text-slate-800 dark:text-white block font-outfit mt-0.5 leading-tight">Avenue Project Site</span>
                <span className="text-[9px] text-slate-500 block mt-1">Sarjapur Road, Bangalore</span>
              </div>
            </div>

            {/* Custom map control helpers */}
            <div className="absolute bottom-3 right-3 flex flex-col gap-1.5 bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-800/50 p-1.5 rounded-xl shadow-md text-[9px] font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Corporates
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> Schools
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Hospitals
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationMap;
