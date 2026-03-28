"use client";
import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}
const NextThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
