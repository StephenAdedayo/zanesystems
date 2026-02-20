import { Nunito, Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Outfit({
  subsets: ["latin"], weight : ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight : ["400"]
});

export const metadata = {
  title: "Zane Systems",
  description: "Zane Systems limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.className} ${ovo.className} antialiased leading-8`}>
                <Navbar />
         <main className="min-h-screen">
          {children}
         </main>
        <Footer />
      </body>
    </html>
  );
}
