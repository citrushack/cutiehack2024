import {
  SiJavascript as Javascript,
  SiArduino as Arduino,
  SiNextdotjs as Nextjs,
  SiTailwindcss as Tailwind,
  SiFirebase as Firebase,
  SiCplusplus as CPlusPlus,
  SiMongodb as Mongodb,
  SiPython as Python,
  SiUnity as Unity,
  SiGithubactions as GithubActions,
  SiEslint as Eslint,
  SiPrettier as Prettier,
} from "@icons-pack/react-simple-icons";

export const TECHSTACKS: Record<string, React.ReactNode> = {
  Javascript: <Javascript />,
  "Next.js": <Nextjs />,
  Firebase: <Firebase />,
  Tailwind: <Tailwind />,
  MongoDB: <Mongodb />,
  Arduino: <Arduino />,
  Python: <Python />,
  Unity: <Unity />,
  "C++": <CPlusPlus />,
  GithubActions: <GithubActions/>, 
  Eslint: <Eslint/>,
  Prettier: <Prettier/>,
};
export const HACKPACKS = [
  {
    link: "https://github.com/acm-ucr/firebase-nextjs-hackpack",
    text: "Full Stack Web App",
    techs: ["Javascript", "Next.js", "Firebase", "Tailwind", "Prettier", "Eslint", "GithubActions"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/nextjs-hackpack",
    text: "Full Stack Web App",
    techs: ["Javascript", "Next.js", "Tailwind",  "Prettier", "Eslint", "GithubActions"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/arduino-hackpack",
    text: "Hardware",
    techs: ["Arduino", "C++"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/unity-hackpack",
    text: "Game Development",
    techs: ["Unity"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/discord_python_hackpack",
    text: "Discord Bot",
    techs: ["Python"],
    description: "A Firebase + Next.js Starter Pack",
  },
  {
    link: "https://github.com/acm-ucr/discord_python_hackpack",
    text: "Python Application",
    techs: ["Python"],
    description: "A Firebase + Next.js Starter Pack",
  },
];
