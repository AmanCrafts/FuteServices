const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Highlights', href: '#nearby-highlights' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#booking-section' },
];

const Navigation = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-brand-blue-dark font-bold text-base leading-none">
            S
          </span>
          <span className="text-[1.0625rem] font-semibold tracking-tight text-brand-dark leading-none">
            Sky Heights
          </span>
        </a>

        {/* Center nav — hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.8125rem] font-medium text-brand-dark/55 hover:text-brand-dark transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:+919876543210"
            className="hidden sm:inline text-[0.8125rem] font-medium text-brand-dark/55 hover:text-brand-dark transition-colors duration-200"
          >
            Call Us
          </a>
          <a
            href="#booking-section"
            className="inline-flex items-center justify-center px-5 py-2 text-[0.8125rem] font-semibold text-brand-dark bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-colors duration-200"
          >
            Book Visit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
