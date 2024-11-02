"use client";

import { CustomScrollbar } from "@/components/CustomScrollbar/CustomScrollbar";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="page-wrapper">
      <CustomScrollbar />
      <section className="h-screen grid place-content-center">
        <h1 className="text-h1 text-neutral-800">UI Designer</h1>
      </section>
      <section className="h-screen grid place-content-center">
        <h1 className="text-h1 text-neutral-800">Frontend Developer</h1>
      </section>
    </main>
  );
}
