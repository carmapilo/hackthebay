import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Hack The Bay",
  description:
    "Hack the Bay: Launch starts April 11, 2026. A 12-hour hackathon for student developers in Tampa, Florida.",
  icons: {
    icon: "earth.svg",
    shortcut: "earth.svg",
    apple: "earth.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
