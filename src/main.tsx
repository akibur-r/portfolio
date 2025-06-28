import RootLayout from "@/layouts/root/RootLayout";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RootLayout />
    </ThemeProvider>
  </StrictMode>
);
