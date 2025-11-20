import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ifterious Store",
  description: "Ecommerce Store to buy tech products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.className} min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-gray-50 dark:bg-gray-950">
            <div className="mx-auto max-w-6xl px-4 py-6">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
