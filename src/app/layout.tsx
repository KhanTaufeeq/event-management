import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Grandeur Gatherings",
  description: "We are an experienced event management company that organizes weddings, parties, corporate events, and special occasions. From planning to execution, we handle everything with creativity and precision — turning your vision into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
