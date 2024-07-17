import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Barbora Torres",
  description: "Frontend developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/bara-logo.svg" sizes="any" />
        <meta name="theme-color" content="#fff" />
      </head>
      <body>
        <Header />
        <main className="container-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
