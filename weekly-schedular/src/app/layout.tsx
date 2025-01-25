import type { Metadata } from "next";
import Navbar from "../components/navbar/page"
import Footer from "../components/footer/page"
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PlanPro Weekly Scheduler",
  description: "Weekly Scheduler Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Navbar />
         {children}
        </main>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
