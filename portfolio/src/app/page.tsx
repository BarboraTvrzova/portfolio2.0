import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const aboutDescription =
  "My full name is Barbora, but since childhood, everybody just calls me Bara. I'm a front-end web developer looking for a new role in an exciting company. I mostly use React/Next, but I can adapt to whatever tools are required. I'm currently based in London, UK, but I'm also happy working remotely. I'd love for you to check out my work.";

export default function Home() {
  return (
    <>
      <div className="px-[8%] pt-8 md:px-[5%] lg:px-[11%] lg:pt-16">
        <HeroSection />
        <About description={aboutDescription} />
      </div>
      <Footer />
    </>
  );
}
