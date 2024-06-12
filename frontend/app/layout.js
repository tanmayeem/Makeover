import { Italiana } from "next/font/google";
// @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const inter = Italiana({ subsets: ["latin"],weight:"400" });


export const metadata = {
  
  title: "TMK Beauty",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
