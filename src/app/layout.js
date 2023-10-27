import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ScreenSize } from "./landingpage/components/screensize";
import { DefaultLayout } from "./template/default.layout";

const inter = Inter ({ subsets: ["latin"] });

export const metadata = {
  title: "TinggalPesan",
  description: "Pre-Order Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultLayout>
          {children}
        </DefaultLayout>
        </body>
    </html>
  );
}
