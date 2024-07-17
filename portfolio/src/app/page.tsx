import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";

const aboutDescription =
  "I am a dynamic and solution-oriented frontend developer with over two years of commercial experience in high-paced digital agencies. I am proficient in leading front-end frameworks like React and Next.js, focusing on efficient design implementation and creating seamless and responsive web applications. I'm currently based in London, UK, but I'm also happy working remotely. I'd love for you to check out my work.";

export const metadata: Metadata = {
  title: "Barbora Torres | Home",
  description: "Frontend developer portfolio",
};

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
