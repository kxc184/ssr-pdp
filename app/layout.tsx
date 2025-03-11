import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "PDP",
  description: "Product Display Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
