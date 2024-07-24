import type { Metadata } from "next";
import { Ysabeau, Ysabeau_Office } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

 const ysabeau = Ysabeau_Office({ subsets : ["latin"],
  variable : "--font-ysabeau",
  weight: "500",
 })

export const metadata: Metadata = {
  title: "Ebenezer's Portfolio",
  description: "A Modern Portfolio - Next JS, Tailwind and React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ysabeau.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
