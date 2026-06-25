import SectionBlock from './SectionBlock';

const highlights = [
  {
    title: 'Top-Rated Schools',
    description: 'Greenwood High, TISB & Oakridge International within 15 mins',
  },
  {
    title: 'Grocery Stores',
    description: 'More Megastore, Reliance Fresh & local markets within 5 mins',
  },
  {
    title: 'Local Dining',
    description: 'Trendy cafés, multi-cuisine restaurants & family eateries nearby',
  },
  {
    title: 'Parks & Trails',
    description: 'Kaikondrahalli Lake, community parks & landscaped greenways',
  },
  {
    title: 'Fitness & Wellness',
    description: 'Nearby gyms, yoga studios & outdoor fitness zones',
  },
  {
    title: 'IT Corridor Access',
    description: 'Wipro Campus, RMZ Ecoworld & Outer Ring Road within 15 mins',
  },
];

const HighlightItem = ({ title, description }) => (
  <div className="py-5 border-b border-slate-100">
    <h3 className="text-[0.8125rem] font-semibold text-brand-dark/90 mb-1.5 tracking-wide">
      {title}
    </h3>
    <p className="text-[0.875rem] text-brand-dark/55 leading-relaxed">{description}</p>
  </div>
);

const NearbyHighlights = () => {
  const leftColumn = highlights.slice(0, 3);
  const rightColumn = highlights.slice(3, 6);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBlock number="04" title="Nearby Highlights" id="nearby-highlights">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
            <div>
              {leftColumn.map((item) => (
                <HighlightItem key={item.title} {...item} />
              ))}
            </div>
            <div>
              {rightColumn.map((item) => (
                <HighlightItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </SectionBlock>
      </div>
    </section>
  );
};

export default NearbyHighlights;
