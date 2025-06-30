import project_2_responsive_0_dark from "@/assets/images/project_screenshots/mern-project-2/0_d.jpg";
import project_2_responsive_0_light from "@/assets/images/project_screenshots/mern-project-2/0_l.jpg";
import project_2_responsive_1_dark from "@/assets/images/project_screenshots/mern-project-2/1_d.jpg";
import project_2_responsive_1_light from "@/assets/images/project_screenshots/mern-project-2/1_l.jpg";
import project_2_responsive_2_dark from "@/assets/images/project_screenshots/mern-project-2/2_d.jpg";
import project_2_responsive_2_light from "@/assets/images/project_screenshots/mern-project-2/2_l.jpg";
import project_2_responsive_3_dark from "@/assets/images/project_screenshots/mern-project-2/3_d.jpg";
import project_2_responsive_3_light from "@/assets/images/project_screenshots/mern-project-2/3_l.jpg";
import project_2_responsive_4_dark from "@/assets/images/project_screenshots/mern-project-2/4_d.jpg";
import project_2_responsive_4_light from "@/assets/images/project_screenshots/mern-project-2/4_l.jpg";
export const projects = [
  {
    id: "mern-project-1",
    name: "Aquabloom - Plantcare Redefined",
    year: 2025,
    github_link: ["https://github.com/akibur-r/AQUABLOOM-plant-care-tracker"],
    live_link: "https://aquabloom-by-akib.web.app/",
    description:
      "Aquabloom is a mobile-responsive, full-stack web application for plant enthusiasts. In this app, users can manage and monitor the care of their indoor and outdoor plants. The app offers adding, updating and deleting a plant's care schedule. Also, the app allows users to see other users' plants.",
    techStack: [
      "react",
      "mongodb",
      "express",
      "node",
      "tailwindcss",
      "firebase",
    ],
    screenshots: [],
  },
  {
    id: "mern-project-2",
    name: "Heritra - Timeless Stories",
    year: 2025,
    github_link: [
      "https://github.com/akibur-r/HERITRA-artifact-sharing-client",
      "https://github.com/akibur-r/HERITRA-artifact-sharing-server",
    ],
    live_link: "https://heritra-by-akib.web.app/",
    description:
      "Heritra is a full-stack web application where people can explore and share information about historical artifacts. Users can view artifact details, add their own entries, like artifacts, and see what they’ve contributed.",
    techStack: [
      "react",
      "mongodb",
      "express",
      "node",
      "tailwindcss",
      "firebase",
    ],
    screenshots: [
      {
        dark: project_2_responsive_0_dark,
        light: project_2_responsive_0_light,
      },
      {
        dark: project_2_responsive_1_dark,
        light: project_2_responsive_1_light,
      },
      {
        dark: project_2_responsive_2_dark,
        light: project_2_responsive_2_light,
      },
      {
        dark: project_2_responsive_3_dark,
        light: project_2_responsive_3_light,
      },
      {
        dark: project_2_responsive_4_dark,
        light: project_2_responsive_4_light,
      },
    ],
  },
];
