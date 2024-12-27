import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";

import ClientProviders from "@/components/client-provider";

import Head from "next/head";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["100", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokémon Finder - D.Natchanon",
  description: "Find and explore your favorite Pokémon with ease!",
  keywords: "Pokémon, Finder, Search, Explore, Pokémon Finder",
  author: "Your Name",
  openGraph: {
    title: "Pokémon Finder - D.Natchanon",
    description: "Search and explore the world of Pokémon effortlessly.",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pokémon Finder Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Finder - D.Natchanon",
    description: "Search and explore your favorite Pokémon effortlessly.",
    image: "/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100%" }} suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Pokémon Finder",
              description: "Find and explore your favorite Pokémon with ease!",
              url: "https://yourwebsite.com",
            }),
          }}
        />
      </Head>
      <body
        className={`${robotoSans.variable} ${jetBrainsMono.variable} antialiased h-full`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
