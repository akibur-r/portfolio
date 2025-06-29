import { DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { SiExpress, SiTailwindcss } from "react-icons/si";

export const icons = {
  react: {
    icon: <DiReact className="size-4 md:size-5" />,
    classes: {
      ghost:
        "text-[#61DAFB] bg-[#e0f7ff20] border-[#61DAFB80] dark:border-[#61DAFB40]",
    },
  },
  mongodb: {
    icon: <DiMongodb className="size-4 md:size-5" />,
    classes: {
      ghost: "text-[#47A248] bg-[#e6f4ec20] border-[#47A24840]",
    },
  },
  express: {
    icon: <SiExpress className="size-4 md:size-5" />,
    classes: {
      ghost:
        "text-[#000000] dark:text-[#ffffff] bg-[#00000010]  border-[#00000020] dark:border-[#ffffff40]",
    },
  },
  node: {
    icon: <DiNodejsSmall className="size-4 md:size-5" />,
    classes: {
      ghost: "text-[#339933] bg-[#e5f4e020] border-[#33993340]",
    },
  },
  firebase: {
    icon: <IoLogoFirebase className="size-4 md:size-5" />,
    classes: {
      ghost: "text-[#FFCA28] bg-[#fff8e120] border-[#FFCA2840]",
    },
  },
  tailwindcss: {
    icon: <SiTailwindcss className="size-4 md:size-5" />,
    classes: {
      ghost: "text-[#38BDF8] bg-[#e0f2fe20] border-[#38BDF840]",
    },
  },
  default: {
    icon: <LiaToolsSolid className="size-4 md:size-5" />,
    classes: {
      ghost: "text-[#999999] bg-[#eeeeee20] border-[#99999940]",
    },
  },
};
