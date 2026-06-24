import { Cormorant_Garamond, Jost } from "next/font/google";
import "../styles/main.scss";
import { SITE } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default:
      "YNAD Mount Resort | Best Resort in Wayanad — Mist, Tea Gardens & Vintage Stays",
    template: "%s | YNAD Mount Resort, Wayanad",
  },
  description:
    "YNAD Mount Resort is a hillside sanctuary in Rippon, Meppadi — among the best resorts in Wayanad for couples and families. Vintage homes, premium mist-view rooms and Wayanad's moody climate. Book on WhatsApp.",
  keywords: [
    "best resorts in wayanad",
    "wayanad resorts",
    "resorts in meppadi",
    "ynad mount resort",
    "wayanad resort for couples",
    "family resorts wayanad",
    "misty resorts wayanad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    title: "YNAD Mount Resort | A Sanctuary Above the Mist in Wayanad",
    description:
      "Vintage homes and premium mist-view rooms in the tea country of Rippon, Meppadi. One of Wayanad's most loved hillside stays.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Misty mountains of Wayanad at YNAD Mount Resort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YNAD Mount Resort | Wayanad",
    description:
      "A sanctuary above the mist — vintage homes & premium suites in Meppadi, Wayanad.",
  },
  robots: { index: true, follow: true },
};

const resortJsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: SITE.name,
  description:
    "A hillside resort in the tea country of Rippon, Meppadi, Wayanad — vintage homes, premium suites and junior suites wrapped in mist.",
  url: SITE.baseUrl,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: SITE.geoArea,
  hasMap: SITE.mapsQuery,
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  image:
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  priceRange: "₹₹",
  checkinTime: "13:00",
  checkoutTime: "11:00",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Infinity pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Gym", value: true },
    { "@type": "LocationFeatureSpecification", name: "Jeep safari", value: true },
    { "@type": "LocationFeatureSpecification", name: "Tea plantation tour", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mist-view balconies", value: true },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(resortJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
