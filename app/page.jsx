import { CustomScrollbar } from "@/components/CustomScrollbar/CustomScrollbar";
import PageContainer from "@/components/PageContainer/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <main>
        <CustomScrollbar />
        <section className="h-screen grid place-content-center">
          <h1 className="text-h1 font-semibold text-neutral-800">UI Designer</h1>
        </section>
        <section className="h-screen grid place-content-center">
          <h1 className="text-h1 text-neutral-800">Frontend Developer</h1>
        </section>
      </main>
    </PageContainer>
  );
}
