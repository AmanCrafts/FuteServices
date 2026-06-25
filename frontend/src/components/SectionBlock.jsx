const SectionBlock = ({ number, title, id, children, showDivider = true }) => {
  return (
    <>
      <div id={id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16">
        <div className="lg:col-span-3">
          <p className="section-label">
            ({number}) {title}
          </p>
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
      {showDivider && <hr className="border-slate-100" />}
    </>
  );
};

export default SectionBlock;
