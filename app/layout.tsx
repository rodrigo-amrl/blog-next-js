import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePix from "./components/MyProfilePix";


export const metadata: Metadata = {
  title: "Rodrigo Amaral Blog",
  description: "Created By Rodrigo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePix />
        {children}
      </body>
    </html>
  );
}
