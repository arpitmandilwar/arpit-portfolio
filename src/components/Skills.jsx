import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLayerGroup } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FiCode,
  FiLayers,
  FiBox,
  FiDatabase,
  FiTool,
  FiUsers,
  FiTarget,
  FiMessageCircle,
} from "react-icons/fi";
import { skills } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

// Icon for each individual skill (text must match portfolioData.js)
const skillIcons = {
  Java: FaJava,
  Python: FaPython,
  SQL: FiDatabase,
  "MERN Stack": FaLayerGroup,
  "Tailwind CSS": SiTailwindcss,
  "React.js": FaReact,
  "Express.js": SiExpress,
  "Node.js": FaNodeJs,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: FaGitAlt,
  GitHub: FaGithub,
  "VS Code": VscVscode,
  Postman: SiPostman,
  "Problem Solving": FiTarget,
  Communication: FiMessageCircle,
  "Team Collaboration": FiUsers,
};

// Icon for each category card
const categoryIcons = {
  "Programming Languages": FiCode,
  Development: FiLayers,
  "Frameworks and Libraries": FiBox,
  Databases: FiDatabase,
  Tools: FiTool,
  "Soft Skills": FiUsers,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-white/5 bg-ink-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="skills-heading"
          eyebrow="Technical Skills"
          title="Technologies I work with"
          description="The languages, frameworks, databases and tools I use to build web applications."
        />

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, i) => {
            const CategoryIcon = categoryIcons[group.category] || FiCode;
            return (
              <Reveal as="li" key={group.category} delay={(i % 3) * 90}>
                <article className="group h-full rounded-2xl border border-white/10 bg-ink-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_20px_50px_-25px_rgba(139,92,246,0.6)]">
                  <header className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-violet-500/25 text-cyan-300"
                    >
                      <CategoryIcon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                  </header>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const Icon = skillIcons[item] || FiCode;
                      return (
                        <li
                          key={item}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors group-hover:border-white/20"
                        >
                          <Icon aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}