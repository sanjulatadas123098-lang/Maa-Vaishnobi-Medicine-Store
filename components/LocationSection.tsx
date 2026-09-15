'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, RefreshCw } from 'lucide-react';

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7424.84604697911!2d86.91734319263658!3d21.491144342210735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf5a7e7adb8df%3A0x99b38f67b63fb9a4!2sMaa%20Vaishnobi%20Medicine%20Store%20%26%20Clinic!5e0!3m2!1sen!2sin!4v1789474292632!5m2!1sen!2sin';

const MAPS_SHORT_URL = 'https://maps.app.goo.gl/5L1xcDKgr8ukzr746';

export function LocationSection() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || shouldLoadMap) return;

    // Use IntersectionObserver to lazy load the map only when section is approaching viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '250px', // trigger slightly before it scrolls into view
        threshold: 0.01,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadMap]);

  return (
    <section
      id="location"
      data-testid="location-section"
      className="py-16 sm:py-24 bg-white border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Visit Our Store
          </span>
          <h2
            data-testid="location-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Find Us in Balasore
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Located conveniently on Jail Road in Manikhamb, Gopalgoan, with on-site parking and 24/7 accessibility.
          </p>
        </div>

        {/* Address and Map Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Address Card and Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              data-testid="location-details-card"
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full w-fit">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Open 24 Hours
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Maa Vaishnobi Medicine Store &amp; Clinic
              </h3>

              {/* Exact Address formatted as requested */}
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                <address
                  data-testid="location-address"
                  className="not-italic text-sm sm:text-base text-slate-700 font-medium leading-relaxed"
                >
                  Jail Rd, Manikhamb,<br />
                  Balasore, Gopalgoan,<br />
                  Odisha 756001, India
                </address>
              </div>

              {/* Operating Hours Note */}
              <div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
                <Clock className="h-5 w-5 text-teal-700 shrink-0" aria-hidden="true" />
                <span>
                  Hours: <strong className="text-slate-900">Open 24 Hours</strong> (Every day)
                </span>
              </div>

              {/* Phone Line */}
              <div className="mt-4 flex items-center gap-3 text-sm text-slate-700">
                <Phone className="h-5 w-5 text-teal-700 shrink-0" aria-hidden="true" />
                <span>
                  Phone:{' '}
                  <a
                    href="tel:+919853608262"
                    data-testid="location-phone-link"
                    className="font-bold text-teal-800 hover:text-teal-950 underline"
                  >
                    098536 08262
                  </a>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={MAPS_SHORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="location-directions-btn"
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-800 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="tel:+919853608262"
                  data-testid="location-call-btn"
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 shadow-xs transition-all hover:bg-slate-50 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <Phone className="h-4 w-4 text-teal-700" aria-hidden="true" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>

            {/* Direct Google Maps Link Backup Card */}
            <div className="rounded-xl border border-teal-100 bg-teal-50/50 p-4 sm:p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-teal-900">
                  Prefer opening Google Maps app?
                </p>
                <p className="text-xs text-teal-700">
                  Launch directions directly on your device
                </p>
              </div>
              <a
                href={MAPS_SHORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="location-open-maps-link"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-bold text-teal-800 border border-teal-200 shadow-2xs hover:bg-teal-50"
              >
                <span>Open in Maps</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map with Lazy Loading and Placeholder */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              data-testid="map-container"
              className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm min-h-[380px] sm:min-h-[450px]"
            >
              {shouldLoadMap ? (
                <iframe
                  data-testid="map-iframe"
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Maa Vaishnobi Medicine Store & Clinic location"
                  className="w-full h-[400px] sm:h-[450px]"
                />
              ) : (
                /* Map Placeholder */
                <div
                  data-testid="map-placeholder"
                  className="flex h-[400px] sm:h-[450px] w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-teal-50/30 p-6 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 mb-4 shadow-xs">
                    <MapPin className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800">
                    Interactive Map of Jail Road, Balasore
                  </h4>
                  <p className="mt-1.5 max-w-sm text-xs sm:text-sm text-slate-500">
                    Interactive map loads automatically as you scroll, saving data and ensuring fast performance.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      data-testid="map-load-btn"
                      onClick={() => setShouldLoadMap(true)}
                      className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-teal-800 transition-colors"
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span>Load interactive map</span>
                    </button>

                    <a
                      href={MAPS_SHORT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs"
                    >
                      <ExternalLink className="h-4 w-4 text-teal-700" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
