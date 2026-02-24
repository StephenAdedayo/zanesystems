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

// export const metadata = {
//   title: "Zane Systems | Aircraft Procurement & Aviation Solutions",
//   description: "Global aircraft sales, parts sourcing, and strategic aviation solutions specializing in precision and excellence.",
// };

export const metadata = {
  metadataBase: new URL("https://zanesystemsgs.com"),
  title: {
    default: "Zane Systems | Aircraft Procurement & Aviation Solutions",
    template: "%s | Zane Systems",
  },
  description: "Zane Systems Limited is a strategic aviation procurement partner specializing in aircraft sales, certified parts sourcing, and global supply chain logistics.",
  keywords: ["Aviation", "Aircraft Procurement", "Parts Sourcing", "Zane Systems", "Aircraft Sales"],
  openGraph: {
    title: "Zane Systems | Global Aviation Solutions",
    description: "Strategic aircraft procurement and meticulous supply chain coordination.",
    url: "https://zanesystemsgs.com",
    siteName: "Zane Systems",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
