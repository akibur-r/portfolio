import { LanguageContext } from "@/providers/languageProvider/LanguageProvider";
import { useContext } from "react";

const useLanguage = () => {
  return useContext(LanguageContext);
};

export default useLanguage;
