import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce SaaS built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={righteous.className}>
        <Nav />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
