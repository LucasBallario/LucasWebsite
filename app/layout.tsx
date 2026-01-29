import type { Metadata } from "next";
import "./globals.css";
import { Space_Mono } from 'next/font/google'


const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-space-mono', 
})


export const metadata: Metadata = {
  title: "Lucas Ballario",
  description: "Lucas Ballario portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}
       
      >
        {children}
      </body>
    </html>
  );
}
