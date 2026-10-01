import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Soluções AgroPecuária | Cuidamos da terra, das plantas e dos animais",
  description:
    "Consultoria agrária, veterinária e nutrição animal, fitossanidade, construção de incubadoras, tanques e mangas de vacinação, e venda de material agropecuário na Huíla, Angola.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
