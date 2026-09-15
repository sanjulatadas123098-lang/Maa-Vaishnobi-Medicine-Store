import React from 'react';
import { Phone, Navigation, Clock, MapPin } from 'lucide-react';

export function ContactCta() {
  return (
    <section
      id="contact"
      data-testid="contact-cta-section"
      className="py-16 sm:py-20 bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-700/60 px-3.5 py-1 text-xs font-semibold text-teal-200 border border-teal-600/40">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Open 24 Hours · Balasore, Odisha
          </span>

          <h2
            data-testid="contact-cta-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Need Help Finding Us?
          </h2>

          <p
            data-testid="contact-cta-copy"
            className="mt-4 text-base sm:text-xl text-teal-100/90 max-w-xl mx-auto leading-relaxed"
          >
            Call us or get directions to Maa Vaishnobi Medicine Store &amp; Clinic.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919853608262"
              data-testid="contact-cta-call-btn"
              className="inline-flex h-13 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-white px-8 text-base font-bold text-teal-950 shadow-md transition-all hover:bg-teal-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Call 098536 08262"
            >
              <Phone className="h-5 w-5 text-teal-700" aria-hidden="true" />
              <span>Call 098536 08262</span>
            </a>

            <a
              href="https://maps.app.goo.gl/5L1xcDKgr8ukzr746"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-cta-directions-btn"
              className="inline-flex h-13 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-teal-400/40 bg-teal-800/60 px-8 text-base font-semibold text-white shadow-sm transition-all hover:bg-teal-700/80 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Get Directions to Maa Vaishnobi Medicine Store"
            >
              <Navigation className="h-5 w-5 text-teal-300" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-teal-200/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-teal-300" />
              Jail Rd, Manikhamb, Balasore, Gopalgoan
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-emerald-300" />
              Open 24 Hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
