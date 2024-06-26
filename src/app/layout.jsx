import { RegularFont } from "@/utils/fonts";
import "./globals.css";
import LgNavbar from "@/components/Navbar/LgNavbar";
import MobileMenu from "@/components/Navbar/MobileMenu";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={RegularFont.className}>
        <div className="z-50">
          <div className="block md:hidden">
            <MobileMenu />
          </div>
          <LgNavbar />
        </div>
        <div className="z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
