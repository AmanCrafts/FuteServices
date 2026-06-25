const ProjectInfo = () => {
  const specs = [
    {
      id: 'price',
      label: 'Starting Price',
      value: '₹82 Lakhs*',
      subtext: 'Exclusive Launch Value',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      id: 'config',
      label: 'Property Type',
      value: '2, 3 BHK & Duplex',
      subtext: 'Premium Living Spaces',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      id: 'possession',
      label: 'Timeline',
      value: 'March 2028',
      subtext: 'Possession Date',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
        </svg>
      )
    },
    {
      id: 'developer',
      label: 'Developer Partner',
      value: 'Sky Heights Devs',
      subtext: 'Calm & Trustworthy',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296" />
        </svg>
      )
    }
  ];

  return (
    <section id="project-details" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-2">
            Overview
          </h2>
          <p className="text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            Project Specifications
          </p>
          <div className="h-1 w-12 bg-brand-green mx-auto mt-4 rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-150 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-800/20 hover:border-brand-green/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-brand-green shadow-sm">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-slate-400 dark:text-slate-550 font-bold uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-base font-bold text-slate-800 dark:text-slate-205 mt-0.5 font-outfit truncate">
                  {item.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-450 mt-0.5 truncate">
                  {item.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectInfo;
