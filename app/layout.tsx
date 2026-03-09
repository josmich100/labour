import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import ClientLayout from "@/components/layout/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Labour Party of Kenya — Building a Better Kenya",
    template: "%s | Labour Party of Kenya",
  },
  description:
    "The Labour Party of Kenya (LPK) is Kenya's progressive social democratic party, championing workers' rights, gender equity, and social justice for all Kenyans since 1998. Join the movement.",
  keywords:
    "Labour Party of Kenya, LPK, political party Kenya, workers rights, social democracy, social justice, gender equity, Haki na Usawa, Julia Ojiambo, Kenya politics, 47 counties, progressive party",
  authors: [{ name: "Labour Party of Kenya" }],
  metadataBase: new URL("https://www.labourparty.ke"),
  openGraph: {
    title: "Labour Party of Kenya — Haki na Usawa",
    description:
      "Join LPK — Kenya's progressive social democratic party founded in 1998. Championing workers' rights, gender equity, and social justice for every Kenyan.",
    type: "website",
    locale: "en_KE",
    siteName: "Labour Party of Kenya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labour Party of Kenya — Haki na Usawa",
    description:
      "Join LPK — Kenya's progressive social democratic party founded in 1998. Championing workers' rights, gender equity, and social justice for every Kenyan.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dc2626",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'var(--font-satoshi, sans-serif)' }}>
        <ClientLayout>{children}</ClientLayout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#1f2937",
              color: "#fff",
              borderRadius: "8px",
              fontFamily: "var(--font-inter)",
            },
            success: { iconTheme: { primary: "#16a34a", secondary: "#fff" } },
            error: { iconTheme: { primary: "#dc2626", secondary: "#fff" } },
          }}
        />
      </body>
    </html>
  );
}
