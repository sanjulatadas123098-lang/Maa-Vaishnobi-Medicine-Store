import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maa Vaishnobi Medicine Store & Clinic | Balasore',
  description:
    'Maa Vaishnobi Medicine Store & Clinic in Manikhamb, Balasore. In-store shopping, pickup, delivery and convenient local pharmacy services.',
  openGraph: {
    title: 'Maa Vaishnobi Medicine Store & Clinic | Balasore',
    description:
      'Maa Vaishnobi Medicine Store & Clinic in Manikhamb, Balasore. In-store shopping, pickup, delivery and convenient local pharmacy services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maa Vaishnobi Medicine Store & Clinic | Balasore',
    description:
      'Maa Vaishnobi Medicine Store & Clinic in Manikhamb, Balasore. In-store shopping, pickup, delivery and convenient local pharmacy services.',
  },
};

const pharmacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Pharmacy',
  name: 'Maa Vaishnobi Medicine Store & Clinic',
  telephone: '+919853608262',
  url: 'https://maps.app.goo.gl/5L1xcDKgr8ukzr746',
  hasMap: 'https://maps.app.goo.gl/5L1xcDKgr8ukzr746',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jail Rd, Manikhamb',
    addressLocality: 'Balasore, Gopalgoan',
    addressRegion: 'Odisha',
    postalCode: '756001',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 00:00-23:59',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacyJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-teal-700 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

