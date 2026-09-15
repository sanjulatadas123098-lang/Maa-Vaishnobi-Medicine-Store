import React from 'react';
import { Clock, Phone, CheckCircle2, ShieldAlert } from 'lucide-react';

export function HoursSection() {
  return (
    <section
      id="hours"
      data-testid="hours-section"
      className="py-14 bg-white border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-testid="hours-status-card"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 p-8 sm:p-12 text-white shadow-xl"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span>Active 24/7 Service</span>
              </div>

              <h2
                data-testid="hours-heading"
                className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
              >
                Open 24 Hours
              </h2>

              <p className="mt-4 text-base sm:text-lg text-teal-100/90 leading-relaxed">
                Maa Vaishnobi Medicine Store &amp; Clinic operates round the clock. Whether you need urgent medicines in the middle of the night or daytime healthcare essentials in Balasore, our store is ready to serve you.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-teal-100/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Monday through Sunday
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Nighttime &amp; Emergency Access
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Phone Line Active 24 Hours
                </span>
              </div>
            </div>

            {/* Quick Action inside Hours */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="tel:+919853608262"
                data-testid="hours-call-btn"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-white px-7 text-base font-bold text-teal-900 shadow-md transition-all hover:bg-teal-50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="h-5 w-5 text-teal-700" aria-hidden="true" />
                <span>Call 098536 08262</span>
              </a>
              <span className="text-xs text-center text-teal-200/80">
                Available 24 Hours a day
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
