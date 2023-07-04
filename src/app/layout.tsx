import './globals.css'
import { Nunito } from 'next/font/google';
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Model from '@/components/Models/Model';
import { TailwindIndicator } from '@/components/TailwindIndicator/TailwindIndicator';

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Navbar/>
      <Model isOpen title='Hello world'/>
      {children}
      <TailwindIndicator/>
      </body>
    </html>
  )
}
