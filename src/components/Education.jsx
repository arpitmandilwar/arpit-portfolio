import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import { education } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Badge from "./ui/Badge";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-t border-white/5 bg-ink-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          id="education-heading"
          eyebrow="Education"
          title="My academic background"
        />

        <Reveal>
          <article className="rounded-2xl border border-white/10 bg-ink-900/70 p-6 transition duration-300 hover:border-cyan-400/40 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-violet-500/25 text-cyan-300"
                >
                  <FiBookOpen className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{education.degree}</h3>
                  <p className="gradient-text mt-1 text-lg font-semibold">{education.university}</p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                      {education.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                      {education.duration}
                    </span>
                  </p>
                </div>
              </div>

              <div className="shrink-0 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">GPA</p>
                <p className="text-3xl font-bold text-white">{education.gpa}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Relevant coursework
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li key={course}>
                    <Badge>{course}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}