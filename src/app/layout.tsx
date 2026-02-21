import "@/app/globals.css";
import Providers from "@/app/providers";
import type { ReactNode } from "react";

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
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/image.png" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#090909]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
