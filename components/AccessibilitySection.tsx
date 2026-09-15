import React from 'react';
import {
  Accessibility,
  CheckCircle2,
  Car,
  DoorOpen,
  Armchair,
  Wifi,
  Baby,
  Users,
  Zap,
  MapPin,
} from 'lucide-react';

const accessibilityFeatures = [
  {
    id: 'wheelchair-car-park',
    label: 'Wheelchair-accessible car park',
    category: 'Accessibility',
    icon: Car,
  },
  {
    id: 'wheelchair-entrance',
    label: 'Wheelchair-accessible entrance',
    category: 'Accessibility',
    icon: DoorOpen,
  },
  {
    id: 'wheelchair-seating',
    label: 'Wheelchair-accessible seating',
    category: 'Accessibility',
    icon: Armchair,
  },
  {
    id: 'wheelchair-toilet',
    label: 'Wheelchair-accessible toilet',
    category: 'Accessibility',
    icon: Accessibility,
  },
  {
    id: 'free-parking',
    label: 'Free parking options',
    category: 'Parking',
    icon: Car,
  },
  {
    id: 'free-wifi',
    label: 'Free Wi-Fi',
    category: 'Amenity',
    icon: Wifi,
  },
  {
    id: 'nursing-room',
    label: 'Nursing room',
    category: 'Family',
    icon: Baby,
  },
  {
    id: 'gender-neutral-toilets',
    label: 'Gender-neutral toilets',
    category: 'Amenity',
    icon: Users,
  },
  {
    id: 'quick-visit-option',
    label: 'Quick visit option',
    category: 'Convenience',
    icon: Zap,
  },
  {
    id: 'convenient-jail-road',
    label: 'Convenient Jail Road location',
    category: 'Location',
    icon: MapPin,
  },
];

export function AccessibilitySection() {
  return (
    <section
      id="accessibility"
      data-testid="accessibility-section"
      className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Inclusive Facilities
          </span>
          <h2
            data-testid="accessibility-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Accessibility &amp; Convenience
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            We are committed to making our premises comfortable and easily accessible for every member of the community.
          </p>
        </div>

        {/* Feature Grid with explicit text labels */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {accessibilityFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                data-testid={`accessibility-item-${item.id}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-teal-300 hover:shadow-xs"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    {item.label}
                  </span>
                  <span className="text-xs font-medium text-teal-700 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    Available on-site
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative note */}
        <div className="mt-10 rounded-xl bg-teal-50/70 border border-teal-200/70 p-4 sm:p-5 flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white text-xs font-bold">
            i
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Need special assistance or have an accessibility enquiry before your arrival? Call us directly at{' '}
            <a
              href="tel:+919853608262"
              className="font-bold text-teal-800 underline hover:text-teal-950 focus-visible:outline-none"
            >
              098536 08262
            </a>{' '}
            and our team will be glad to assist you.
          </p>
        </div>
      </div>
    </section>
  );
}
