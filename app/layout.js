import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Prathamesh Bankar",
  description: "UI Designer and Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-neutral-400 antialiased`}>
        {/* <Navbar /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
