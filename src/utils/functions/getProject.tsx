import { projects } from "@/assets/docs/projectsList";

export const getProjectById = (id: string) => {
  return (
    projects.find((project) => project.id === id) || {
      id: "",
      name: "",
      year: 0,
      github_link: [""],
      live_link: "",
      description: "",
      techStack: [""],
      screenshots: [{dark: "", light: ""}],
    }
  );
};
