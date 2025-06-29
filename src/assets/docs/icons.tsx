import { DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import {
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

// ICON LIST
/**
 * default
 * tailwindcss
 * firebase
 * node.js/node
 * express
 * mongodb
 * react
 * javascript
 * c++/cplusplus
 * python
 * html
 * css
 * markdown
 */

export const icons = {
  markdown: {
    icon: <SiMarkdown className="size-4 md:size-5 " />,
    classes: {
      ghost:
        "text-[#000000] bg-[#00000010] border-[#00000040] dark:border-[#00000020]",
    },
  },
  css: {
    icon: <SiCss3 className="size-4 md:size-5" />,
    classes: {
      ghost:
        "text-[#264DE4] bg-[#264DE410] border-[#264DE440] dark:border-[#264DE420]",
    },
  },
  html: {
    icon: <SiHtml5 className="size-4 md:size-5" />,
    classes: {
      ghost:
        "text-[#E34F26] bg-[#E34F2610] border-[#E34F2640] dark:border-[#E34F2620]",
    },
  },
  python: {
    icon: <SiPython className="size-4 md:size-5" />,
    classes: {
      ghost:
        "text-[#3776AB] bg-[#3776AB10] border-[#3776AB40] dark:border-[#3776AB20]",
    },
  },
  cplusplus: {
    icon: <SiCplusplus className="size-4 md:size-5" />,
    classes: {
      ghost:
        "text-[#00599C] bg-[#00599C10] border-[#00599C40] dark:border-[#00599C20]",
    },
  },
  javascript: {
    icon: <SiJavascript className="size-4 md:size-5" />,
    classes: {
      ghost:
        "text-[#F7DF1E] bg-[#F7DF1E10] border-[#F7DF1E40] dark:border-[#F7DF1E20]",
    },
  },
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
