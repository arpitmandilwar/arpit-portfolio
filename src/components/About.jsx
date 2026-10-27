import { FiAward, FiBookOpen, FiBriefcase, FiCode } from "react-icons/fi";
import { about, education, experience } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const latest = experience[0];

// Quick-fact cards built from the data file
const facts = [
  {
    icon: FiBookOpen,
    label: "Education",
    value: education.degree,
    sub: education.university,
  },
  {
    icon: FiAward,
    label: "GPA",
    value: education.gpa,
    sub: education.duration,
  },
  {
    icon: FiBriefcase,
    label: "Experience",
    value: latest.role,
    sub: `${latest.organization} · ${latest.duration}`,
  },
  {
    icon: FiCode,
    label: "Focus",
    value: "MERN stack, REST APIs, authentication",
    sub: "Database management and responsive interfaces",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="about-heading" eyebrow="About Me" title="A bit about me" />

        <div className="grid items-start gap-10 lg:grid-cols-5">
          {/* Introduction text */}
          <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg lg:col-span-3">
            {about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          {/* Quick facts */}
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {facts.map(({ icon: Icon, label, value, sub }, i) => (
              <Reveal as="li" key={label} delay={i * 90}>
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-ink-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-cyan-300"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {label}
                    </p>
                    <p className="mt-1 font-semibold text-white">{value}</p>
                    <p className="mt-0.5 text-sm text-slate-400">{sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}