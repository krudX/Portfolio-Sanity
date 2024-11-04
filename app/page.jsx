import Paragraph from "@/components/AnimatedParagraph/Paragraph";
import { CustomScrollbar } from "@/components/CustomScrollbar/CustomScrollbar";
import PageContainer from "@/components/PageContainer/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <CustomScrollbar />
      <section className="h-screen flex flex-col items-center justify-center p-11">
        <h1 className="text-h1 text-neutral-800 inline-block text-center" data-enlarge-cursor>
          UI Designer & Frontend Developer
        </h1>
        <div className="dummy h-[400px] w-container-xs bg-neutral-500 rounded-3xl mt-11" data-hover-text="Play Video"></div>
      </section>
      <section className="h-screen flex flex-col justify-center p-11">
        <div className="w-full">
          {/* <h1 className="text-h1 text-neutral-800">Myself</h1> */}

          <Paragraph maxWidth="w-container-xs" fontSize="text-h1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
        </div>
      </section>
      <section className="h-screen grid place-content-center w-container-xl mx-auto">
        <h1 className="text-h1 text-neutral-800">Work</h1>
      </section>
    </PageContainer>
  );
}
