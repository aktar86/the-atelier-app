import type { Metadata } from "next";
import { Noto_Serif, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar/Navbar";
import NextThemeProvider from "../components/NextThemeProvider/NextThemeProvider";
import NextAuthProvider from "../components/AuthPage/NextAuthProvider";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// font
const notoFont = Noto_Serif({
  subsets: ["latin"], // Adding subsets is mandatory in some Next.js versions
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const poppins = Poppins({
  subsets: ["latin"], // Adding subsets is mandatory in some Next.js versions
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// meta data for SEO

export const metadata: Metadata = {
  title: {
    default: "The Atelier | Curated Architectural Living & Furniture",
    template: "%s | The Atelier",
  },
  description:
    "Explore a curated selection of archival furniture pieces redefined for contemporary living. High-end craftsmanship, timeless modern interiors, and sculptural forms.",
  keywords: [
    "Architectural Living",
    "Handcrafted Furniture",
    "Modern Interiors",
    "The Atelier",
    "Luxury Furniture Milan",
    "Sculptural Form Collection",
  ],
  authors: [{ name: "The Atelier Team" }],
  creator: "The Atelier",
  publisher: "The Atelier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Atelier | Curated Architectural Living",
    description: "Discover handcrafted furniture where form meets heritage.",
    url: "https://your-domain.com", // আপনার আসল ডোমেইন দিন
    siteName: "The Atelier",
    images: [
      {
        url: "/og-image.jpg", // public ফোল্ডারে একটি ইমেজ রাখুন
        width: 1200,
        height: 630,
        alt: "The Atelier Furniture Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Atelier | Sculptural Furniture",
    description: "Refined ergonomic pieces for luxury use since 1954.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(" h-full antialiased", "font-sans", inter.variable)}
      >
        <body className={`${notoFont.className} min-h-full flex flex-col`}>
          <NextThemeProvider>
            <div className="w-full">
              <Navbar></Navbar>
              <main className="w-full px-4 md:px-0 lg:px-20 mt-30 ">
                {children}
              </main>
              <Footer></Footer>
            </div>
          </NextThemeProvider>
        </body>
      </html>
    </NextAuthProvider>
  );
}
