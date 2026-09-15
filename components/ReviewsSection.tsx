import React from 'react';
import { Star, Quote } from 'lucide-react';

const approvedReviews = [
  {
    id: 1,
    quote:
      'Found exactly what I needed quickly. Helpful staff, decent prices, and convenient location near Jail Rd.',
  },
  {
    id: 2,
    quote: 'Good clinic and good medicine store.',
  },
  {
    id: 3,
    quote:
      'Found medicines at prices that didn’t break the bank! Super helpful staff too.',
  },
  {
    id: 4,
    quote: 'Fast online ordering & prompt delivery of medicines.',
  },
  {
    id: 5,
    quote: 'Quick online ordering & fast delivery to Gopalgoan.',
  },
  {
    id: 6,
    quote: 'Found affordable medicines here when I needed them most.',
  },
  {
    id: 7,
    quote: 'Found authentic medicines when other stores couldn’t help.',
  },
  {
    id: 8,
    quote:
      'Found exactly what I needed quickly. The staff was helpful in answering my questions.',
  },
  {
    id: 9,
    quote:
      'A busy medical store... They keep most of the variety of medicines and equipment.',
  },
];

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            Community Voices
          </span>
          <h2
            data-testid="reviews-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            What Our Customers Say
          </h2>
          <p
            data-testid="reviews-context-label"
            className="mt-2 text-sm sm:text-base font-medium text-teal-800"
          >
            Shared feedback from the Google Maps listing.
          </p>
        </div>

        {/* 9 Excerpts Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approvedReviews.map((item) => (
            <blockquote
              key={item.id}
              data-testid={`review-card-${item.id}`}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:border-teal-200 hover:shadow-xs"
            >
              <div>
                {/* Decorative 5-star visual */}
                <div
                  className="flex items-center gap-1 text-amber-400 mb-3"
                  aria-hidden="true"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <Quote className="h-5 w-5 text-teal-600/30 mb-2" aria-hidden="true" />
                <p
                  data-testid={`review-text-${item.id}`}
                  className="text-sm font-medium text-slate-700 leading-relaxed italic"
                >
                  “{item.quote.replace(/^[“"]|[”"]$/g, '')}”
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Google Maps Feedback</span>
                <span className="text-teal-700">Verified Listing</span>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
