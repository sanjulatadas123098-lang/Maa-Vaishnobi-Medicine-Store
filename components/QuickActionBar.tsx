import React from 'react';
import { Phone, Navigation, MessageSquare, ArrowRight } from 'lucide-react';

export function QuickActionBar() {
  return (
    <section
      id="quick-actions"
      data-testid="quick-action-bar-section"
      className="relative z-10 -mt-6 sm:-mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-label="Quick Actions"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* 1. Call Us */}
        <a
          href="tel:+919853608262"
          data-testid="quick-action-call"
          className="group relative flex items-center justify-between rounded-2xl border border-teal-100 bg-white p-5 sm:p-6 shadow-md shadow-teal-900/5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          aria-label="Call Us at 098536 08262"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Direct Phone
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                Call Us
              </h3>
              <p className="text-sm font-semibold text-teal-800">
                098536 08262
              </p>
            </div>
          </div>
          <span className="text-slate-300 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </a>

        {/* 2. Get Directions */}
        <a
          href="https://maps.app.goo.gl/5L1xcDKgr8ukzr746"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="quick-action-directions"
          className="group relative flex items-center justify-between rounded-2xl border border-teal-100 bg-white p-5 sm:p-6 shadow-md shadow-teal-900/5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          aria-label="Get Directions to Jail Rd, Manikhamb, Balasore on Google Maps"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors">
              <Navigation className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Map Navigation
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                Get Directions
              </h3>
              <p className="text-sm font-medium text-slate-600 truncate max-w-[170px] sm:max-w-[200px]">
                Jail Rd, Manikhamb, Balasore
              </p>
            </div>
          </div>
          <span className="text-slate-300 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </a>

        {/* 3. Order / Enquire */}
        <a
          href="tel:+919853608262"
          data-testid="quick-action-enquire"
          className="group relative flex items-center justify-between rounded-2xl border border-teal-100 bg-white p-5 sm:p-6 shadow-md shadow-teal-900/5 transition-all duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          aria-label="Order or Enquire by phone at 098536 08262"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors">
              <MessageSquare className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Pickup &amp; Delivery
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                Order / Enquire
              </h3>
              <p className="text-sm font-medium text-slate-600">
                Call to enquire
              </p>
            </div>
          </div>
          <span className="text-slate-300 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-all">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
