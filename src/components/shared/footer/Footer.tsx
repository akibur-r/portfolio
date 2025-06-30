import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[45rem]">
      <Separator />
      <div className="text-sm flex gap-1 items-center justify-center md:justify-start py-1">
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
      </div>
    </footer>
  );
};

export default Footer;
