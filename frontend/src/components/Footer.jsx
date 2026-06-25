const NAV_LINKS = [
  { label: 'Overview',    href: '#overview' },
  { label: 'Amenities',   href: '#amenities' },
  { label: 'Highlights',  href: '#nearby-highlights' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Location',    href: '#location' },
  { label: 'Book Visit',  href: '#booking-section' },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"
           className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"
           className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"
           className="w-4 h-4">
        <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
       className="w-4 h-4 shrink-0">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100">

      {/* ── Pre-footer CTA band ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-100">
          <div>
            <p className="section-label mb-2">Ready to take the next step?</p>
            <p className="font-serif font-semibold text-brand-dark leading-tight"
               style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)' }}>
              Your dream home is one visit away.
            </p>
          </div>
          <a
            href="#booking-section"
            className="inline-flex items-center gap-2.5 px-7 py-3 text-sm font-semibold text-brand-dark bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-colors duration-200 shrink-0"
          >
            Book a Site Visit
            <ArrowUpRight />
          </a>
        </div>
      </div>

      {/* ── Main footer grid ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block mb-5">
              <span className="font-serif font-semibold text-brand-dark"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.01em' }}>
                Sky Heights
              </span>
            </a>
            <p className="text-[0.875rem] text-brand-dark/55 leading-relaxed max-w-xs mb-6">
              Premium residences on Sarjapur Road, Bangalore. Thoughtfully designed for
              families and professionals who value quality living.
            </p>
            {/* Social row */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-brand-dark/50 hover:text-brand-dark hover:border-brand-dark/30 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <p className="section-label mb-5">Quick Links</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.875rem] text-brand-dark/60 hover:text-brand-dark transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3">
            <p className="section-label mb-5">Contact</p>
            <ul className="space-y-4">
              <li>
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-muted mb-0.5">
                  Phone
                </p>
                <a
                  href="tel:+919876543210"
                  className="text-[0.875rem] text-brand-dark/70 hover:text-brand-dark transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-muted mb-0.5">
                  Email
                </p>
                <a
                  href="mailto:hello@skyheightsavenue.com"
                  className="text-[0.875rem] text-brand-dark/70 hover:text-brand-dark transition-colors duration-200"
                >
                  hello@skyheightsavenue.com
                </a>
              </li>
              <li>
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-muted mb-0.5">
                  Sales Office Hours
                </p>
                <p className="text-[0.875rem] text-brand-dark/70 leading-snug">
                  Mon – Sat, 10 AM – 6 PM
                </p>
              </li>
            </ul>
          </div>

          {/* Address + RERA */}
          <div className="lg:col-span-3">
            <p className="section-label mb-5">Address</p>
            <address className="not-italic space-y-4">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-muted mb-0.5">
                  Project Site
                </p>
                <p className="text-[0.875rem] text-brand-dark/70 leading-relaxed">
                  Sky Heights Avenue<br />
                  Sarjapur Road<br />
                  Bangalore, KA 560035
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-muted mb-0.5">
                  RERA Registration
                </p>
                <p className="text-[0.75rem] text-brand-dark/50 leading-relaxed break-all">
                  #PRM/KA/RERA/1251/446/<br className="hidden sm:block" />PR/171020/000123
                </p>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────── */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[0.75rem] text-brand-muted">
            © {year} Sky Heights Avenue. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-brand-muted">
            Prices are indicative and subject to change without notice.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
