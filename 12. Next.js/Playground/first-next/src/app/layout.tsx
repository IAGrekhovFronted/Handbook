import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        <div className="text-center text-3xl text-amber-300 mt-48">Жопа</div>
        {children}
      </body>
    </html>
  );
}
