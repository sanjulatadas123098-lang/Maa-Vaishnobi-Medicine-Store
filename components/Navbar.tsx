'use client';

import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      data-testid="main-header"
      className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          data-testid="brand-logo-link"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-lg p-1"
          aria-label="Maa Vaishnobi Medicine Store & Clinic Home"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 text-white shadow-sm ring-1 ring-teal-800/20 transition-transform group-hover:scale-105">
            {/* Clean Medical Cross Symbol */}
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 leading-tight">
              Maa Vaishnobi
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Medicine Store & Clinic
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          data-testid="desktop-navigation"
          className="hidden md:flex md:items-center md:gap-7"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-testid={`desktop-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-md px-1.5 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 border border-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Open 24 Hours
            </span>
          </div>

          <a
            href="tel:+919853608262"
            data-testid="header-call-btn"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-800 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            aria-label="Call Maa Vaishnobi Medicine Store at 098536 08262"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+919853608262"
            data-testid="header-mobile-quick-call"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-700 text-white shadow-sm hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
            aria-label="Call 098536 08262"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          data-testid="mobile-navigation-menu"
          className="border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="mb-4 flex items-center justify-between rounded-lg bg-slate-50 p-3 border border-slate-200/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800">
                Open 24 Hours
              </span>
            </div>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-teal-700" />
              Jail Rd, Balasore
            </span>
          </div>

          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:+919853608262"
              data-testid="mobile-menu-call-btn"
              onClick={handleLinkClick}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 text-base font-semibold text-white shadow-sm hover:bg-teal-800 active:scale-98"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>Call 098536 08262</span>
            </a>
            <a
              href="https://maps.app.goo.gl/5L1xcDKgr8ukzr746"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-menu-directions-btn"
              onClick={handleLinkClick}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-teal-200 bg-teal-50/50 px-4 text-base font-semibold text-teal-800 hover:bg-teal-100/70 active:scale-98"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
