import React from 'react';
import { MapPin, Layers, Truck, Zap, Check } from 'lucide-react';

const reasons = [
  {
    id: 'jail-road-location',
    title: 'Jail Road Location',
    description:
      'Centrally located on Jail Road in Manikhamb, Gopalgoan, offering easy access for residents and visitors across Balasore.',
    icon: MapPin,
    badge: 'Convenient Spot',
  },
  {
    id: 'flexible-collection',
    title: 'Flexible Collection',
    description:
      'Choose the method that fits your day: browse in-store, pick up ready orders quickly, or use our convenient drive-through.',
    icon: Layers,
    badge: 'In-Store & Drive-Through',
  },
  {
    id: 'local-delivery',
    title: 'Local Delivery',
    description:
      'We offer convenient medicine delivery in the local area so you can receive your essential medicines directly in Gopalgoan and Balasore.',
    icon: Truck,
    badge: 'Local Area Coverage',
  },
  {
    id: 'quick-visits',
    title: 'Quick Visits',
    description:
      'Designed for swift and seamless visits with free parking, prompt service, and convenient entry when time is important.',
    icon: Zap,
    badge: 'Fast & Accessible',
  },
];

const availableOptions = [
  'In-store shopping option',
  'In-store pickup service',
  'Local area medicine delivery',
  'Drive-through convenience',
  'On-site services availability',
  'Open 24 Hours round the clock',
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      data-testid="why-choose-us-section"
      className="py-16 sm:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Local Commitment
          </span>
          <h2
            data-testid="why-choose-us-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Why People Choose Maa Vaishnobi
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Accessible healthcare support, round-the-clock availability, and flexible collection options right here in Balasore.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                data-testid={`why-us-card-${reason.id}`}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/40 p-6 sm:p-7 transition-all duration-200 hover:border-teal-300 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold text-teal-800 bg-teal-100/60 px-2.5 py-1 rounded-full border border-teal-200/50">
                      {reason.badge}
                    </span>
                  </div>
                  <h3
                    data-testid={`why-us-title-${reason.id}`}
                    className="mt-5 text-lg font-bold text-slate-900"
                  >
                    {reason.title}
                  </h3>
                  <p
                    data-testid={`why-us-desc-${reason.id}`}
                    className="mt-2 text-sm text-slate-600 leading-relaxed"
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comprehensive Options Banner */}
        <div
          data-testid="options-overview-banner"
          className="mt-12 rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50/60 via-slate-50 to-teal-50/60 p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Convenient Service &amp; Collection Highlights
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Multiple convenient ways to fulfill your medicine needs without complications.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
              {availableOptions.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
