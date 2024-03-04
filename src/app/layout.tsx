import type { Metadata } from "next";
import { NextAuthProvider } from "./providers";
import { Inter } from "next/font/google";
import { App } from "@/containers/App";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Göttingen",
  description: "The best chess app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,-25" />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          <App />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
