import { DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import {
  SiAxios,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMarkdown,
  SiPython,
  SiSublimetext,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

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
 * git
 * github
 * vercel
 * vscode
 * sublime
 * axios
 * jsonwebtoken/jwt
 */

export const icons = {
  jwt: {
    icon: <SiJsonwebtokens className="size-4 md:size-5 text-[#E86800]" />,
    classes: {
      ghost: "bg-[#E8680010] border-[#E8680040] dark:border-[#E8680020]",
    },
  },
  axios: {
    icon: <SiAxios className="size-4 md:size-5 text-[#FF9800]" />,
    classes: {
      ghost: "bg-[#FF980010] border-[#FF980040] dark:border-[#FF980020]",
    },
  },
  sublimetext: {
    icon: <SiSublimetext className="size-4 md:size-5 text-[#FF9800]" />,
    classes: {
      ghost: "bg-[#FF980010] border-[#FF980040] dark:border-[#FF980020]",
    },
  },
  vscode: {
    icon: <VscVscode className="size-4 md:size-5 text-[#007ACC]" />,
    classes: {
      ghost: "bg-[#007ACC10] border-[#007ACC40] dark:border-[#007ACC20]",
    },
  },
  vercel: {
    icon: (
      <SiVercel className="size-4 md:size-5 text-[#000000] dark:text-neutral-300" />
    ),
    classes: {
      ghost: "bg-[#00000010] border-[#00000040] dark:border-[#00000020]",
    },
  },
  github: {
    icon: (
      <SiGithub className="size-4 md:size-5 text-[#181717] dark:text-neutral-300" />
    ),
    classes: {
      ghost: "bg-[#18171710] border-[#18171740] dark:border-[#18171720]",
    },
  },
  git: {
    icon: <SiGit className="size-4 md:size-5 text-[#F05032]" />,
    classes: {
      ghost: "bg-[#F0503210] border-[#F0503240] dark:border-[#F0503220]",
    },
  },

  markdown: {
    icon: (
      <SiMarkdown className="size-4 md:size-5 text-[#000000] dark:text-neutral-300" />
    ),
    classes: {
      ghost: "bg-[#00000010] border-[#00000040] dark:border-[#00000020]",
    },
  },
  css: {
    icon: <SiCss3 className="size-4 md:size-5 text-[#264DE4]" />,
    classes: {
      ghost: "bg-[#264DE410] border-[#264DE440] dark:border-[#264DE420]",
    },
  },
  html: {
    icon: <SiHtml5 className="size-4 md:size-5 text-[#E34F26]" />,
    classes: {
      ghost: "bg-[#E34F2610] border-[#E34F2640] dark:border-[#E34F2620]",
    },
  },
  python: {
    icon: <SiPython className="size-4 md:size-5 text-[#3776AB]" />,
    classes: {
      ghost: "bg-[#3776AB10] border-[#3776AB40] dark:border-[#3776AB20]",
    },
  },
  cplusplus: {
    icon: <SiCplusplus className="size-4 md:size-5 text-[#00599C]" />,
    classes: {
      ghost: "bg-[#00599C10] border-[#00599C40] dark:border-[#00599C20]",
    },
  },
  javascript: {
    icon: <SiJavascript className="size-4 md:size-5 text-[#F7DF1E]" />,
    classes: {
      ghost: "bg-[#F7DF1E10] border-[#F7DF1E40] dark:border-[#F7DF1E20]",
    },
  },
  react: {
    icon: <DiReact className="size-4 md:size-5 text-[#61DAFB]" />,
    classes: {
      ghost: "bg-[#e0f7ff20] border-[#61DAFB80] dark:border-[#61DAFB40]",
    },
  },
  mongodb: {
    icon: <DiMongodb className="size-4 md:size-5 text-[#47A248]" />,
    classes: {
      ghost: "bg-[#e6f4ec20] border-[#47A24840]",
    },
  },
  express: {
    icon: (
      <SiExpress className="size-4 md:size-5 text-[#000000] dark:text-[#ffffff]" />
    ),
    classes: {
      ghost: "bg-[#00000010] border-[#00000020] dark:border-[#ffffff40]",
    },
  },
  node: {
    icon: <DiNodejsSmall className="size-4 md:size-5 text-[#339933]" />,
    classes: {
      ghost: "bg-[#e5f4e020] border-[#33993340]",
    },
  },
  firebase: {
    icon: <IoLogoFirebase className="size-4 md:size-5 text-[#FFCA28]" />,
    classes: {
      ghost: "bg-[#fff8e120] border-[#FFCA2840]",
    },
  },
  tailwindcss: {
    icon: <SiTailwindcss className="size-4 md:size-5 text-[#38BDF8]" />,
    classes: {
      ghost: "bg-[#e0f2fe20] border-[#38BDF840]",
    },
  },
  default: {
    icon: <LiaToolsSolid className="size-4 md:size-5 text-[#999999]" />,
    classes: {
      ghost: "bg-[#eeeeee20] border-[#99999940]",
    },
  },
};
