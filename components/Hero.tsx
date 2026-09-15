import React from 'react';
import { Phone, Navigation, Clock, CheckCircle2, ShieldCheck, ShoppingBag, Truck, Store, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            {/* Status & Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div
                data-testid="hero-status-pill"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span>Open 24 Hours</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/60 border border-teal-200 px-3 py-1 rounded-full">
                YOUR LOCAL MEDICINE STORE &amp; CLINIC
              </span>
            </div>

            {/* Primary Headline */}
            <h1
              data-testid="hero-headline"
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.18]"
            >
              Medicines &amp; Healthcare Support, Close to You
            </h1>

            {/* Supporting Copy */}
            <p
              data-testid="hero-supporting-copy"
              className="mt-5 text-lg text-slate-600 sm:text-xl leading-relaxed max-w-2xl"
            >
              Convenient local pharmacy services in Gopalgoan, Balasore, with in-store shopping, pickup and delivery options.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:+919853608262"
                data-testid="hero-call-btn"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-teal-700 px-7 text-base font-semibold text-white shadow-md shadow-teal-900/10 transition-all hover:bg-teal-800 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
                aria-label="Call Maa Vaishnobi Medicine Store at 098536 08262"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>Call Now</span>
                <span className="text-teal-200 font-normal text-sm hidden sm:inline">· 098536 08262</span>
              </a>

              <a
                href="https://maps.app.goo.gl/5L1xcDKgr8ukzr746"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-directions-btn"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-7 text-base font-semibold text-slate-800 shadow-sm transition-all hover:border-teal-300 hover:bg-teal-50/50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                aria-label="Get Google Maps directions to Maa Vaishnobi Medicine Store on Jail Road"
              >
                <Navigation className="h-5 w-5 text-teal-700" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Approved Service Row Pills */}
            <div className="mt-10 pt-8 border-t border-slate-200/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                Approved Service Options
              </span>
              <div
                data-testid="hero-services-row"
                className="flex flex-wrap gap-2.5 sm:gap-3"
              >
                <div
                  data-testid="hero-service-pill-instore"
                  className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-slate-700 border border-slate-200/80 shadow-xs"
                >
                  <Store className="h-4 w-4 text-teal-700 shrink-0" aria-hidden="true" />
                  <span>In-store Shopping</span>
                </div>
                <div
                  data-testid="hero-service-pill-pickup"
                  className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-slate-700 border border-slate-200/80 shadow-xs"
                >
                  <ShoppingBag className="h-4 w-4 text-teal-700 shrink-0" aria-hidden="true" />
                  <span>In-store Pickup</span>
                </div>
                <div
                  data-testid="hero-service-pill-delivery"
                  className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-slate-700 border border-slate-200/80 shadow-xs"
                >
                  <Truck className="h-4 w-4 text-teal-700 shrink-0" aria-hidden="true" />
                  <span>Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Healthcare / Pharmacy Visual */}
          <div className="lg:col-span-5">
            <div
              data-testid="hero-abstract-visual"
              className="relative mx-auto max-w-md rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/50 p-6 sm:p-8 shadow-xl shadow-teal-900/5"
            >
              {/* Background ambient accents */}
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-teal-200/40 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-emerald-200/40 blur-2xl pointer-events-none" />

              {/* Graphic container */}
              <div className="relative flex flex-col items-center justify-center rounded-2xl bg-white p-6 sm:p-8 border border-slate-100 shadow-sm text-center">
                {/* Abstract Pharmacy Emblem */}
                <div className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-800 text-white shadow-lg shadow-teal-900/20">
                  <svg
                    className="h-12 w-12 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Pharmacy Cross Logo"
                  >
                    <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
                  </svg>
                  <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md border-2 border-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Maa Vaishnobi
                </h3>
                <p className="text-sm font-semibold text-teal-700">
                  Medicine Store &amp; Clinic
                </p>
                <p className="mt-1 text-xs text-slate-500 flex items-center justify-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-teal-700" />
                  Jail Rd, Manikhamb, Balasore
                </p>

                {/* Information cards inside visual */}
                <div className="mt-6 grid w-full grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-left">
                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-200/60">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase block">
                      Operating Hours
                    </span>
                    <span className="text-sm font-bold text-emerald-800 flex items-center gap-1 mt-0.5">
                      <Clock className="h-3.5 w-3.5" />
                      Open 24 Hours
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-200/60">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase block">
                      Direct Support
                    </span>
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                      <Phone className="h-3.5 w-3.5 text-teal-700" />
                      098536 08262
                    </span>
                  </div>
                </div>

                {/* Approved Convenience highlight badges */}
                <div className="mt-4 flex w-full flex-wrap justify-center gap-2 text-xs font-medium text-slate-600">
                  <span className="rounded-full bg-teal-50 px-2.5 py-1 text-teal-800 border border-teal-100">
                    Free Parking
                  </span>
                  <span className="rounded-full bg-teal-50 px-2.5 py-1 text-teal-800 border border-teal-100">
                    Wheelchair Accessible
                  </span>
                  <span className="rounded-full bg-teal-50 px-2.5 py-1 text-teal-800 border border-teal-100">
                    Free Wi-Fi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
