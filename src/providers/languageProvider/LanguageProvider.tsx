import type { ReactNode } from "react";
import { createContext, useState } from "react";

interface LanguageContextType {
  currentLanguage?: string;
  toggleLanguage?: () => void;
}

export const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleLanguage = () => {
    if (currentLanguage === "en") {
      setCurrentLanguage("bn");
    } else {
      setCurrentLanguage("en");
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        // context values
        currentLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
