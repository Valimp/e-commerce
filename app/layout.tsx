import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "valimp - Votre site e-commerce sur mesure",
  description: "valimp - Votre site e-commerce eco-responsable sur mesure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="fr">
      <body className={righteous.className}>
        <Nav />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
