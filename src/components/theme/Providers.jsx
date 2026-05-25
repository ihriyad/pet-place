"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const Providers = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
};
