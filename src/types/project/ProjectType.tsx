type ScreenshotType = {
  dark: string;
  light: string;
};

export type ProjectType = {
  id: string;
  name: string;
  year: number;
  github_link: string[];
  live_link: string;
  description: string;
  techStack: string[];
  screenshots: ScreenshotType[];
};
