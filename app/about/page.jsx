import { CustomScrollbar } from "@/components/CustomScrollbar/CustomScrollbar";
import PageContainer from "@/components/PageContainer/PageContainer";
import React from "react";

const page = () => {
  return (
    <PageContainer>
      <main className="page-wrapper">
        <CustomScrollbar />
        <section className="h-screen grid place-content-center">
          <h1 className="text-h1 text-neutral-800">About</h1>
        </section>
      </main>
    </PageContainer>
  );
};

export default page;
