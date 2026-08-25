import type { ReactNode } from "react";

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}