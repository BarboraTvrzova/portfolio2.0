import Nav from "@/components/Nav";
import Project from "@/components/Project";

import { projects, commercial } from "../page";
import Footer from "@/components/Footer";

import Featured from "@/components/Featured";

const all = [...commercial, ...projects];
export async function generateStaticParams() {
  return all.map((project: any) => ({
    slug: project.name.toLowerCase(),
  }));
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const project = all.find((item) => item.name.toLowerCase() === params.slug);

  return (
    <>
      <div className="px-[8%] pb-4 pt-8 md:px-[5%] lg:px-[11%] lg:pt-16 md:pb-24 lg:pb-28">
        <Nav />
        {project && project.key === 99 ? <Featured /> : null}
        {project && project.key !== 99 ? (
          <Project activeProject={project} />
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
