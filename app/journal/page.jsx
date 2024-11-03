import { CustomScrollbar } from "@/components/CustomScrollbar/CustomScrollbar";
import React from "react";

const page = () => {
  return (
    <main className="page-wrapper">
      <CustomScrollbar />
      <section className="h-screen grid place-content-center">
        <h1 className="text-h1 text-neutral-800">Journal</h1>
      </section>
    </main>
  );
};

export default page;
