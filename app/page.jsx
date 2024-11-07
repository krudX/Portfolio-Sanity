import Paragraph from "@/components/AnimatedParagraph/Paragraph";
import PageContainer from "@/components/PageContainer/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <section className="h-screen w-[100vw] flex flex-col items-center justify-center p-11">
        <h1 className="text-h1 text-neutral-800 inline-block text-center py-16" data-enlarge-cursor>
          UI Designer & Frontend Developer
        </h1>
        <div className="w-full h-[200px] md:h-[250px] lg:h-[700px] bg-neutral-500 rounded-3xl mt-11" data-hover-text="Play Video"></div>
      </section>
      <section className="h-screen flex flex-col justify-center p-11">
        <div className="">
          {/* <h1 className="text-h1 text-neutral-800">Myself</h1> */}

          <Paragraph classes="lg:w-container-xs text-h2-mobile md:text-h2-tablet lg:texth2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
        </div>
      </section>
      <section className="h-screen w-full grid place-content-center md:w-container-xl mx-auto">
        <h1 className="text-h1 text-neutral-800">Work</h1>
      </section>
    </PageContainer>
  );
}
