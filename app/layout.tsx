import type { Metadata } from "next";
import { Merriweather_Sans
} from "next/font/google";
import "./globals.css";
import { MyContextProvider } from "@/context/ThemeContext";
// import { MyThemeContextProvider } from "@/context/ThemeContext";
// import ThemeProvider from "@/providers/ThemeProvider";

const merriweather_Sans = Merriweather_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Portfolio ni Rojan",
  description: "Showcasing my skills and progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={merriweather_Sans.className}>
        <MyContextProvider>
          <div className="dark:bg-[#1c1c1c] dark:text-[#ffffff] transition-all duration-100 ease-out">
            {children}
          </div>
        </MyContextProvider>
      </body>
    </html>
  );
}
