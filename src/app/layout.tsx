import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'MIROWIRO | Trusted 24/7 Electrician in Wythenshawe',
  description: 'Looking for a reliable electrician in Wythenshawe? Miro offers 24/7 emergency electrical services, landlord compliance testing, and expert home rewires with transparent pricing.',
  keywords: ["electrician Wythenshawe, emergency electrician Manchester, electrical compliance testing, landlord EICR Manchester, rewiring services south Manchester"],
  openGraph: {
    "title": "MIROWIRO Electrical Services",
    "description": "Professional and transparent electrical services in South Manchester.",
    "siteName": "MIROWIRO",
    "type": "website"
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
