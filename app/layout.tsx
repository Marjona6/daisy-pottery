import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daisy Haynes Pottery",
  description: "Artisanal hand-thrown pottery made in Yorkshire.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
