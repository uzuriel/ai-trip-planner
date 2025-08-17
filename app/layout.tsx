import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "AI Trip Planner",
  description: "Plan your trips with AI assistance",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
