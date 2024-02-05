import type { Metadata } from "next";
import "./tema/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "AeroDesign ITA",
  description: "Equipe de aerodesign do ITA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
