import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactLenis } from "lenis/dist/lenis-react";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import PageTransitionEffect from "@/components/PageTransitionEffect/PageTransitionEffect";

const apfelGrotezk = localFont({
  src: [
    {
      path: "./fonts/ApfelGrotezk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ApfelGrotezk-Mittel.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ApfelGrotezk-Fett.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Prathamesh Bankar",
  description: "UI Designer and Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`bg-neutral-300 antialiased ${apfelGrotezk.className}`}>
          <CustomCursor />
          {/* <Navbar /> */}
          <Header />
          <PageTransitionEffect>{children}</PageTransitionEffect>
          <SpeedInsights />
        </body>
      </ReactLenis>
    </html>
  );
}
