import type { Metadata } from "next"
import { ReactNode } from "react"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Main from "@/components/Main"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Main>
          {children}
        </Main>
      </body>
    </html>
  );
}
