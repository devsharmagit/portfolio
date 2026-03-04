import "@/app/globals.css";
import Providers from "@/app/providers";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Dev Sharma — Full Stack Developer",
  description: "I design & build clean, fast web apps — turning ideas into polished digital products.",
  icons: {
    icon: "/image.png",
    apple: "/image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/image.png" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png" />
      </head>
      <body className="bg-background ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
