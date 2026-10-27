import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { personal, heroBadges } from "../data/portfolioData";
import Reveal from "./ui/Reveal";
import Badge from "./ui/Badge";
import ResumeButton from "./ui/ResumeButton";

// Maps badge text from the data file to an icon
const badgeIcons = {
  "React.js": FaReact,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  JavaScript: FaJs,
  "Tailwind CSS": SiTailwindcss,
};

// ----- Code window content (decorative) -----
const kw = (t) => ({ t, c: "text-violet-400" });
const prop = (t) => ({ t, c: "text-sky-300" });
const str = (t) => ({ t, c: "text-emerald-300" });
const bool = (t) => ({ t, c: "text-amber-300" });
const punc = (t) => ({ t, c: "text-slate-400" });
const com = (t) => ({ t, c: "text-slate-500 italic" });

const codeLines = [
  [kw("const "), prop("developer "), punc("= {")],
  [punc("  "), prop("name"), punc(": "), str('"Arpit Mandilwar"'), punc(",")],
  [punc("  "), prop("role"), punc(": "), str('"Full Stack Developer"'), punc(",")],
  [punc("  "), prop("stack"), punc(": ["), str('"MERN"'), punc("],")],
  [punc("  "), prop("focus"), punc(": ["), str('"REST APIs"'), punc(", "), str('"Auth"'), punc("],")],
  [punc("  "), prop("openToWork"), punc(": "), bool("true"), punc(",")],
  [punc("};")],
  [],
  [com("// Let's build something great.")],
];

function CodeWindow() {
  return (
    <div
      role="img"
      aria-label="Decorative code editor window showing a short JavaScript object that describes Arpit Mandilwar as a full stack developer"
      className="relative mx-auto w-full max-w-md lg:max-w-lg"
    >
      {/* soft glow behind the window */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-blue-600/30 via-violet-600/20 to-cyan-400/30 blur-2xl"
      />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-2xl backdrop-blur">
        {/* title bar */}
        <div aria-hidden="true" className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-400">developer.js</span>
        </div>

        {/* code */}
        <div aria-hidden="true" className="p-4 font-mono text-[12px] leading-7 sm:text-sm">
          {codeLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 shrink-0 select-none pr-4 text-right text-slate-600">{i + 1}</span>
              <span className="whitespace-pre">
                {line.length
                  ? line.map((token, j) => (
                      <span key={j} className={token.c}>
                        {token.t}
                      </span>
                    ))
                  : "\u00A0"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* floating chips (hidden on very small screens) */}
      <div
        aria-hidden="true"
        className="animate-float absolute -right-2 -top-5 hidden rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 font-mono text-xs text-cyan-300 shadow-lg sm:block"
      >
        REST APIs
      </div>
      <div
        aria-hidden="true"
        className="animate-float absolute -bottom-5 -left-2 hidden rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 font-mono text-xs text-violet-300 shadow-lg [animation-delay:-3s] sm:block"
      >
        JWT Auth
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      {/* background effects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-2 lg:py-24">
        {/* Left: text */}
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Open to opportunities
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              <span className="block">Hi, I&apos;m</span>
              <span className="gradient-text block pb-1">{personal.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">{personal.title}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {personal.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">
                View My Projects
                <FiArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn btn-outline">
                <FiMail aria-hidden="true" className="h-4 w-4" />
                Contact Me
              </a>
               <ResumeButton />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
              {heroBadges.map((name) => (
                <li key={name}>
                  <Badge icon={badgeIcons[name]}>{name}</Badge>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right: code editor illustration */}
        <Reveal delay={200}>
          <CodeWindow />
        </Reveal>
      </div>
    </section>
  );
}