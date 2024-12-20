import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import ThemeProvider from "./ThemeProvider";
import Header from "./components/Layout/HeaderMain";


const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next.js Coding Challenge",
  description: "John Ketterer's coding challenge with next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="relative">
            <Header />
            <div className='pt-52'>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
