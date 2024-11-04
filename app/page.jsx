import { CustomScrollbar } from "@/components/CustomScrollbar/CustomScrollbar";
import PageContainer from "@/components/PageContainer/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <main>
        <CustomScrollbar />
        <section className="h-screen flex flex-col items-center justify-center ">
          <h1 className="text-h1 text-neutral-800 inline-block text-center" data-enlarge-cursor>
            UI Designer
          </h1>
          <div className="dummy h-[400px] w-[80vw] bg-neutral-500 rounded-3xl mt-11" data-hover-text="Play Video"></div>
        </section>
        <section className="h-screen grid place-content-center">
          <h1 className="text-h1 text-neutral-800 inline-block text-center" data-enlarge-cursor>
            Frontend Developer
          </h1>
        </section>
      </main>
    </PageContainer>
  );
}
