import type { Metadata } from "next";
import { Inter, Chivo_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vex — Private by Design. Powerful by Default.",
  description: "End-to-end encrypted, open-source messaging built for real conversations. From private chats to global communities.",
  icons: {
    icon: "/vex_favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${chivoMono.variable} antialiased`}>
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
