import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import { TransitionProvider } from "@/context/TransitionalContext";

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
        <TransitionProvider>
          <Header />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
