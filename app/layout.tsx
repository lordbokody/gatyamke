import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gatya MKE",
  description: "Gatya MKE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased font-sans`}
      >
        <div className="mx-auto max-w-[1200px] px-5">
          <TopMenu />
          <div className="mt-[120px]">{children}</div>
        </div>
      </body>
    </html>
  );
}