import { projects } from "@/assets/docs/projectsList";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import ProjectCard from "./projectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="text-sm text-neutral-800 dark:text-neutral-300 ">
      <SectionHeading name="My Projects" />
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
