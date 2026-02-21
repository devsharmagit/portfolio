import "@/app/globals.css";
import Providers from "@/app/providers";
import type { ReactNode } from "react";

export const metadata = {
  title: "Dev Sharma — Full Stack Developer",
  description: "Full-stack developer crafting minimal, performant web experiences with modern tools.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#090909]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
