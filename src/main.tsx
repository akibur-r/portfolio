import RootLayout from "@/layouts/root/RootLayout";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LanguageProvider from "./providers/languageProvider/LanguageProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RootLayout />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
