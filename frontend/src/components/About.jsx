const About = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main About block */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-2">
              The Residences
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-outfit mb-5">
              Welcome to Sky Heights Avenue
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Developed by the renowned <strong>Sky Heights Developers</strong>, Sky Heights Avenue stands as an architectural landmark on Sarjapur Road, Bangalore. Combining contemporary high-rise design with expansive green spaces, our residential enclave offers an elite lifestyle for discerning families.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Choose from meticulously crafted <strong>2 BHK, 3 BHK, and luxury Duplex apartments</strong> designed with premium specifications, spacious layouts, and oversized private balconies. Every home is fully Vaastu compliant and features maximum ventilation, premium finishes, and panoramic views of the city skyline.
            </p>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-outfit mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
              Project Parameters
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 dark:text-slate-500">Developer</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">Sky Heights Developers</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 dark:text-slate-500">Location</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">Sarjapur Road, Bangalore</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 dark:text-slate-500">Flooring</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">Premium Double Charged Vitrified</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 dark:text-slate-500">Possession</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">March 2028</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 dark:text-slate-500">Water Supply</span>
                <span className="font-bold text-slate-800 dark:text-slate-250">Dual Connection (Kaveri & Borewell)</span>
              </div>
            </div>

            <div className="mt-6 text-center bg-slate-50 dark:bg-slate-800/40 py-2.5 rounded-xl border border-slate-150 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 block leading-none font-bold uppercase tracking-wider">Starting Price</span>
              <span className="text-base font-extrabold text-brand-green font-outfit mt-1 block">₹82 Lakhs*</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
