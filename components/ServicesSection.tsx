import React from 'react';
import { Store, ShoppingBag, Truck, Car, Activity, ArrowUpRight, Phone } from 'lucide-react';

const services = [
  {
    id: 'in-store-shopping',
    name: 'In-Store Shopping',
    description: 'Visit us at our store for your medicine and healthcare needs.',
    icon: Store,
  },
  {
    id: 'in-store-pickup',
    name: 'In-Store Pickup',
    description: 'Choose convenient pickup when you prefer to collect your order from the store.',
    icon: ShoppingBag,
  },
  {
    id: 'delivery',
    name: 'Delivery',
    description: 'Get medicines delivered conveniently in the local area.',
    icon: Truck,
  },
  {
    id: 'drive-through',
    name: 'Drive-Through',
    description: 'Quick and convenient drive-through service.',
    icon: Car,
  },
  {
    id: 'on-site-services',
    name: 'On-Site Services',
    description: 'Access available on-site services at the store.',
    icon: Activity,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Our Offerings
          </span>
          <h2
            data-testid="services-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Convenient Pharmacy Services
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Dedicated pharmacy and clinic support providing multiple ways to access your medicines in Balasore.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                data-testid={`service-card-${service.id}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3
                    data-testid={`service-title-${service.id}`}
                    className="mt-5 text-xl font-bold text-slate-900"
                  >
                    {service.name}
                  </h3>
                  <p
                    data-testid={`service-desc-${service.id}`}
                    className="mt-2.5 text-slate-600 text-sm leading-relaxed"
                  >
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    Service 0{index + 1}
                  </span>
                  <a
                    href="tel:+919853608262"
                    data-testid={`service-enquire-btn-${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900 focus-visible:outline-none focus-visible:underline"
                    aria-label={`Call to enquire about ${service.name}`}
                  >
                    <span>Call to enquire</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Quick Contact Highlight Card inside Services */}
          <div
            data-testid="services-summary-card"
            className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-teal-800 to-teal-950 p-6 sm:p-7 text-white shadow-md"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-700/60 px-3 py-1 text-xs font-semibold text-teal-200 border border-teal-600/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                24/7 Support
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">
                Questions About Our Services?
              </h3>
              <p className="mt-2 text-sm text-teal-100/90 leading-relaxed">
                Reach out by telephone anytime. We are open 24 hours to assist with your medicine collection and enquiries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-700/50">
              <a
                href="tel:+919853608262"
                data-testid="services-summary-call-btn"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-teal-900 shadow-sm transition-all hover:bg-teal-50 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call 098536 08262</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
