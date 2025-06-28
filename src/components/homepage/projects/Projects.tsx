import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import ProjectCard from "./projectCard/ProjectCard";
import projects from '@/assets/docs/projects.json'

const Projects = () => {
  return (
    <section className="text-sm text-neutral-700 dark:text-neutral-300">
      <SectionHeading name="My Projects" />
      <main className="grid grid-cols-1 gap-3">
        {projects.map((project)=> <ProjectCard project={project}/>)}
      </main>
    </section>
  );
};

export default Projects;
