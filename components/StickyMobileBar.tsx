'use client';

import React from 'react';
import { Phone, Navigation, HelpCircle } from 'lucide-react';

export function StickyMobileBar() {
  return (
    <aside
      id="sticky-mobile-bar"
      data-testid="sticky-mobile-bar"
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur-lg shadow-[0_-4px_16px_rgba(0,0,0,0.06)] md:hidden"
    >
      <div className="mx-auto grid grid-cols-3 gap-2">
        {/* Call */}
        <a
          href="tel:+919853608262"
          data-testid="sticky-mobile-call"
          className="flex h-12 flex-col items-center justify-center rounded-xl bg-teal-700 text-white shadow-xs active:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          aria-label="Call Store"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="text-[11px] font-bold mt-0.5 leading-none">Call</span>
        </a>

        {/* Directions */}
        <a
          href="https://maps.app.goo.gl/5L1xcDKgr8ukzr746"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="sticky-mobile-directions"
          className="flex h-12 flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 shadow-2xs active:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          aria-label="Get Directions"
        >
          <Navigation className="h-4 w-4 text-teal-700 shrink-0" aria-hidden="true" />
          <span className="text-[11px] font-bold mt-0.5 leading-none">Directions</span>
        </a>

        {/* Enquire */}
        <a
          href="tel:+919853608262"
          data-testid="sticky-mobile-enquire"
          className="flex h-12 flex-col items-center justify-center rounded-xl border border-teal-200 bg-teal-50/70 text-teal-900 shadow-2xs active:bg-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          aria-label="Order or Enquire"
        >
          <HelpCircle className="h-4 w-4 text-teal-700 shrink-0" aria-hidden="true" />
          <span className="text-[11px] font-bold mt-0.5 leading-none">Enquire</span>
        </a>
      </div>
    </aside>
  );
}
