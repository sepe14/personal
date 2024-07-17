import type { Metadata } from "next";
import { Inter, Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const inknutAntiqua = Inknut_Antiqua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inknut-antiqua",
});

export const metadata: Metadata = {
  title: "Sélley Péter honlapja",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${inknutAntiqua.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
