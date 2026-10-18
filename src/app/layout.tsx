import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// หัวข้อใช้ตัวมีเชิง ให้ความรู้สึกร้านเบเกอรี่
const serifThai = Noto_Serif_Thai({
  variable: "--font-serif-thai",
  subsets: ["thai", "latin"],
  weight: ["700"],
  display: "swap",
});

// เว็บตัวอย่าง: บอกในชื่อหน้าด้วย จะได้ไม่สับสนกับร้านจริงที่ชื่อคล้ายกันเวลาเจอใน Google
const title = `${site.name} (${site.demo.label}) · ${site.tagline}`;
const description = `${site.description} ${site.demo.note} ${site.demo.by}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.hero.alt }],
    locale: "th_TH",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" style={{ "--brand": site.accent, "--brand-dark": site.accentDark } as React.CSSProperties}>
      <body className={`${plexThai.variable} ${serifThai.variable} antialiased`}>{children}</body>
    </html>
  );
}
