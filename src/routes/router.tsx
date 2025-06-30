import RootLayout from "@/layouts/root/RootLayout";
import BlogsPage from "@/pages/blogspage/BlogsPage";
import ErrorPage from "@/pages/errorpage/ErrorPage";
import HomePage from "@/pages/homepage/HomePage";
import ProjectDetailsPage from "@/pages/projectdetailspage/ProjectDetailsPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/blogs",
        Component: BlogsPage,
      },
      {
        path: "/project/:id",
        Component: ProjectDetailsPage,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
