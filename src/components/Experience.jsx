import { FiBriefcase, FiCalendar, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { experience } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where I've worked"
          description="Hands-on training and practical development work."
        />

        {/* Vertical timeline */}
        <ol className="relative space-y-10 border-l border-white/15 pl-6 sm:pl-10">
          {experience.map((job) => (
            <Reveal as="li" key={`${job.organization}-${job.role}`} className="relative">
              {/* timeline dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[2.1rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/50 bg-ink-950 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] sm:-left-[3.1rem]"
              >
                <FiBriefcase className="h-4 w-4" />
              </span>

              <article className="rounded-2xl border border-white/10 bg-ink-900/70 p-6 transition duration-300 hover:border-cyan-400/40 sm:p-8">
                <header>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{job.role}</h3>
                  <p className="gradient-text mt-1 text-lg font-semibold">{job.organization}</p>

                  <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                      {job.duration}
                    </span>
                  </p>
                </header>

                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-300">
                      <FiCheckCircle
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-emerald-400"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}