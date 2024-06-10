import type { Metadata } from "next";
import "./globals.css";
import { cabinetFont } from "./_components/fonts/font";

export const metadata: Metadata = {
  title: "Terraphatix",
  description: "Terrahaptix-  Revolutionizing mobile robots to automate core industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${cabinetFont.className} bg-[#D7D9D6]`}>
        {children}
      </body>
    </html>
  );
}
