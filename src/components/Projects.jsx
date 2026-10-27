import { FiCalendar, FiCheckCircle, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Badge from "./ui/Badge";
import ProjectVisual from "./ui/ProjectVisual";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Things I've built"
          description="Full-stack applications that combine clean interfaces with practical functionality."
        />

        <div className="space-y-10">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article className="group grid overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 transition duration-300 hover:border-violet-400/40 hover:shadow-[0_30px_80px_-40px_rgba(139,92,246,0.65)] lg:grid-cols-2">
                {/* Visual */}
                <div className="relative h-56 overflow-hidden sm:h-72 lg:h-auto lg:min-h-[26rem]">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <ProjectVisual kind={project.visual} />
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col p-6 sm:p-8">
                  <p className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-300">
                    <FiCalendar aria-hidden="true" className="h-3.5 w-3.5" />
                    {project.date}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{project.description}</p>

                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Key features
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm text-slate-300">
                        <FiCheckCircle
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Technologies
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge>{tech}</Badge>
                      </li>
                    ))}
                  </ul>

                  {/* Links: only real URLs become buttons */}
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`View ${project.title} repository on GitHub (opens in a new tab)`}
                      >
                        <FiGithub aria-hidden="true" className="h-4 w-4" />
                        View Project
                      </a>
                    ) : (
                      <p className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-dashed border-white/20 px-4 text-sm text-slate-400">
                        <FiGithub aria-hidden="true" className="h-4 w-4" />
                        Repository link coming soon
                      </p>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        aria-label={`Open ${project.title} live demo (opens in a new tab)`}
                      >
                        <FiExternalLink aria-hidden="true" className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}