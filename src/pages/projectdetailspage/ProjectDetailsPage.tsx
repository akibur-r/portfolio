import ProjectScreenshotCard from "@/components/homepage/projects/projectCard/ProjectScreenshotCard";
import ProjectTechIcon from "@/components/homepage/projects/projectCard/ProjectTechIcon";
import type { ProjectType } from "@/types/project/ProjectType";
import { getProjectById } from "@/utils/functions/getProject";
import { IoMdLink } from "react-icons/io";
import { Link, useParams } from "react-router";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project: ProjectType = getProjectById(id || "");

  if (!project.id) {
    return (
      <span className="text-red-500/70 dark:text-red-300/70">
        Project Not Found
      </span>
    );
  }

  return (
    <div>
      {Object.keys(project).length > 0 ? (
        <div className="space-y-2.5">
          <h1 className="text-2xl font-medium">{project.name}</h1>
          <div className="space-x-2">
            <Link
              target={"_blank"}
              to={project.live_link || "/"}
              className="text-sm text-accent hover:text-neutral-700 dark:hover:text-neutral-400 hover:underline flex items-center gap-1"
            >
              <IoMdLink />
              View Live
            </Link>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {project.screenshots.length ? (
                project.screenshots.map((ss, idx) => (
                  <ProjectScreenshotCard key={idx} ss={ss} />
                ))
              ) : (
                <span className="text-destructive/80">
                  No screenshot available
                </span>
              )}
            </div>
          </div>

          <div>{project.description}</div>

          <div className="space-y-1">
            <h3 className="space-x-1 font-medium text-neutral-700 dark:text-neutral-300">
              <span>Tech Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <ProjectTechIcon key={tech} icon={tech} />
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="space-x-1 font-medium text-neutral-700 dark:text-neutral-300">
              <span>Future Scope</span>
            </h3>
            <div>...</div>
          </div>
        </div>
      ) : (
        <>project not found</>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
