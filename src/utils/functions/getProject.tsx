import { projects } from "@/assets/docs/projectsList";

export const getProjectById = (id: string) => {
  return (
    projects.find((project) => project.id === id) || {
      id: "empty",
    }
  );
};
