import SectionBlock from './SectionBlock';

const Overview = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBlock number="01" title="Overview" id="overview">
          <div className="max-w-3xl space-y-4 text-[0.9375rem] sm:text-base leading-relaxed text-brand-dark/70">
            <p>
              Sky Heights Avenue is a premium residential project{' '}
              <strong className="font-semibold text-brand-dark/90">
                located on Sarjapur Road, Bangalore.
              </strong>{' '}
              The project offers spacious apartments, modern lifestyle amenities, excellent road
              connectivity, and a peaceful living environment for families and working professionals.
            </p>
          </div>
        </SectionBlock>
      </div>
    </section>
  );
};

export default Overview;
