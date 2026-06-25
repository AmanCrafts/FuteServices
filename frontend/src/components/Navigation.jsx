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
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-blue text-brand-blue-dark font-bold text-lg leading-none">
            S
          </span>
          <span className="text-xl font-semibold tracking-tight text-brand-dark">
            Sky Heights
          </span>
        </a>

        {/* Center nav — hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brand-dark/70 hover:text-brand-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:+919876543210"
            className="hidden sm:inline text-sm font-medium text-brand-dark/70 hover:text-brand-dark transition-colors"
          >
            Call Us
          </a>
          <a
            href="#booking-section"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-brand-dark bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-colors"
          >
            Book Visit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
