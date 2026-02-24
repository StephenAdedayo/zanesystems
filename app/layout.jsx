import { Nunito, Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const nunito = Outfit({
  subsets: ["latin"], weight : ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight : ["400"]
});

export const metadata = {
  title: "Zane Systems | Aircraft Procurement & Aviation Solutions",
  description: "Global aircraft sales, parts sourcing, and strategic aviation solutions specializing in precision and excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.className} ${ovo.className} antialiased leading-8`}>
          <Toaster />
                <Navbar />
         <main className="min-h-screen">
          {children}
         </main>
        <Footer />
      </body>
    </html>
  );
}
