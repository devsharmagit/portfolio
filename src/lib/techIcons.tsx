import type { ReactElement } from "react";

import { skills } from "@/lib/skillsData";

type SkillWithIcon = {
  name: string;
  icon: ReactElement | null;
};

const TECH_NAME_ALIASES: Record<string, string> = {
  React: "ReactJS",
  "Next.js": "NextJS",
  "Node.js": "NodeJS",
  Express: "ExpressJS",
};

const iconMap: Record<string, ReactElement> = (skills as SkillWithIcon[]).reduce(
  (acc, skill) => {
    if (skill.icon) {
      acc[skill.name] = skill.icon;
    }
    return acc;
  },
  {} as Record<string, ReactElement>,
);

export function getTechIcon(name: string): ReactElement | null {
  const resolvedName = TECH_NAME_ALIASES[name] ?? name;
  return iconMap[resolvedName] ?? null;
}
