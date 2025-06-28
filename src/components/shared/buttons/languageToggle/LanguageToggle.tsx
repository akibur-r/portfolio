import BangladeshFlag from "@/assets/vectors/bangladesh_flag.svg";
import UKFlag from "@/assets/vectors/uk_flag.svg";
import { Button } from "@/components/ui/button";
import useLanguage from "@/hooks/useLanguage/useLanguage";

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      onClick={() => toggleLanguage()}
      className="rounded-full overflow-hidden p-1.5 cursor-pointer group transition"
    >
      <img
        className="h-full w-full object-cover rounded-full group-hover:scale-105 transition-all"
        src={currentLanguage === "en" ? UKFlag : BangladeshFlag}
        alt={currentLanguage}
      />
    </Button>
  );
};

export default LanguageToggle;
