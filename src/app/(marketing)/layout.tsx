
import Header from "@/components/navigation/Header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}