import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"], 
  variable: '--font-roboto' 
});

export const metadata: Metadata = {
  title: "Kenya Labour Party - Building a Better Kenya for All",
  description: "The Kenya Labour Party is committed to workers' rights, social justice, and economic empowerment. Join us in building a better Kenya for all citizens.",
  keywords: "Kenya Labour Party, political party Kenya, workers rights, social justice, economic empowerment, Kenya politics",
  authors: [{ name: "Kenya Labour Party" }],
  openGraph: {
    title: "Kenya Labour Party - Building a Better Kenya for All",
    description: "Join us in building a better Kenya through workers' rights, social justice, and economic empowerment.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Labour Party - Building a Better Kenya for All",
    description: "Join us in building a better Kenya through workers' rights, social justice, and economic empowerment.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#dc2626",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
