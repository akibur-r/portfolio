import { projects } from "@/assets/docs/projectsList";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import ProjectCard from "./projectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="text-sm">
      <SectionHeading name_en="My Projects" name_bn="আমার প্রজেক্টসমূহ" />
      <main className="grid grid-cols-1 gap-3">
        {projects
          .sort((a, b) => b.id.localeCompare(a.id))
          .map((project) => (
            <ProjectCard project={project} />
          ))}
      </main>
    </section>
  );
};

export default Projects;
