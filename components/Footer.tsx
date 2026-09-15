import React from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer
      id="main-footer"
      data-testid="main-footer"
      className="border-t border-slate-200 bg-white pt-14 pb-28 md:pb-14 text-slate-600"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand & Summary */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white">
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900">
                Maa Vaishnobi Medicine Store &amp; Clinic
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-600 max-w-md leading-relaxed">
              Your trusted local medicine store and clinic in Gopalgoan, Balasore. Providing convenient in-store shopping, pickup, and delivery options with round-the-clock service.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open 24 Hours
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    data-testid={`footer-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm font-medium text-slate-600 hover:text-teal-800 transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Information */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Store &amp; Clinic Details
            </h3>

            <div className="mt-4 space-y-3.5 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic leading-relaxed text-slate-700">
                  Jail Rd, Manikhamb, Balasore, Gopalgoan, Odisha 756001, India
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-700 shrink-0" aria-hidden="true" />
                <span>Hours: <strong className="text-slate-900">Open 24 Hours</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-700 shrink-0" aria-hidden="true" />
                <span>
                  Phone:{' '}
                  <a
                    href="tel:+919853608262"
                    data-testid="footer-phone-link"
                    className="font-bold text-teal-800 underline hover:text-teal-950"
                  >
                    098536 08262
                  </a>
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://maps.app.goo.gl/5L1xcDKgr8ukzr746"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-directions-btn"
                className="inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-bold text-teal-800 hover:bg-teal-100 transition-colors"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Maa Vaishnobi Medicine Store &amp; Clinic. All rights reserved.
          </p>
          <p className="text-slate-400">
            Local pharmacy serving Gopalgoan, Manikhamb &amp; Balasore, Odisha.
          </p>
        </div>
      </div>
    </footer>
  );
}
