import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShoppingCart from "@/components/ui/ShoppingCart";
import NavMobile from "@/components/ui/NavMobile";
import ScrollToTop from "@/components/layout/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Furniro Ecommerce",
  description: "Furniro Ecommerce Website",
  icons: {
    icon: '/icons/logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable}  antialiased relative`}
      >
        <Header />
        <ShoppingCart />
        <ScrollToTop />
        <NavMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
