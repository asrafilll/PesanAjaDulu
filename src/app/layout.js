import "@/styles/globals.css";
import { Inter } from "next/font/google";
import RootProvider from "./provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TinggalPesan",
  description: "Pre-Order Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider>
          <ToastContainer />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
