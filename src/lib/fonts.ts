import { Noto_Serif, Inter, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const notoFont = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
