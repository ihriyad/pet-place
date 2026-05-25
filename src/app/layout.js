const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/theme/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetPlace -Pet Adoption Platform",
  description: "Find your perfect pet companion",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-7xl mx-auto">
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
