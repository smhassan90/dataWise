import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import { Providers } from "../../redux/provider";
import ChildrenWrapper from "@/src/utils/childrenWraper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex bg-primary p-3">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Navbar />
              <ChildrenWrapper>{children}</ChildrenWrapper>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
