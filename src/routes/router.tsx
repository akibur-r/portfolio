import RootLayout from "@/layouts/root/RootLayout";
import HomePage from "@/pages/homepage/HomePage";
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
    ],
  },
]);
