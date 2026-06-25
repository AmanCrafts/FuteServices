const SectionBlock = ({ number, title, id, children, showDivider = true }) => {
  return (
    <>
      <div id={id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16">
        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-brand-dark tracking-tight">
            ({number}) {title}
          </h2>
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
      {showDivider && <hr className="border-slate-200" />}
    </>
  );
};

export default SectionBlock;
