import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { QuickActionBar } from '@/components/QuickActionBar';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { AccessibilitySection } from '@/components/AccessibilitySection';
import { HoursSection } from '@/components/HoursSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { LocationSection } from '@/components/LocationSection';
import { ContactCta } from '@/components/ContactCta';
import { Footer } from '@/components/Footer';
import { StickyMobileBar } from '@/components/StickyMobileBar';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header & Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quick Action Bar */}
        <QuickActionBar />

        {/* 3. Convenient Pharmacy Services */}
        <ServicesSection />

        {/* 4. Why People Choose Maa Vaishnobi */}
        <WhyChooseUsSection />

        {/* 5. Accessibility & Convenience */}
        <AccessibilitySection />

        {/* 6. Hours Status Card */}
        <HoursSection />

        {/* 7. Reviews (Customer feedback from Google Maps) */}
        <ReviewsSection />

        {/* 8. Location & Lazy Interactive Map */}
        <LocationSection />

        {/* 9. Contact / Help Finding Us CTA */}
        <ContactCta />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Sticky Mobile Action Bar */}
      <StickyMobileBar />
    </div>
  );
}
