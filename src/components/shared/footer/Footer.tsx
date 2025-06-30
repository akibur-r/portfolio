import { Separator } from "@/components/ui/separator";
import useLanguage from "@/hooks/useLanguage/useLanguage";
import { Link } from "react-router";

const Footer = () => {
  const { currentLanguage } = useLanguage();
  return (
    <footer>
      <Separator />
      <div className="text-sm flex gap-1 items-center justify-center md:justify-start py-1">
        {currentLanguage === "en" ? (
          <>
            <span>Crafted with ❤️ by</span>
            <span>
              <Link
                to={"https://akibur.web.app"}
                className="font-medium hover:underline"
              >
                Akib
              </Link>
              .
            </span>
          </>
        ) : (
          <>
            <span>ওয়েবসাইটটি যত্নসহকারে বানিয়েছেন ❤️</span>
            <span>
              <Link
                to={"https://akibur.web.app"}
                className="font-medium hover:underline"
              >
                আকিব
              </Link>
              .
            </span>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
