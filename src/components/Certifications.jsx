import { FiAward, FiExternalLink } from "react-icons/fi";
import { certifications } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="border-t border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="certifications-heading"
          eyebrow="Certifications"
          title="Courses I've completed"
          description="Learning that supports my development work."
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const meta = [cert.issuer, cert.year].filter(Boolean).join(" · ");
            return (
              <Reveal as="li" key={cert.title} delay={i * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_20px_50px_-25px_rgba(139,92,246,0.6)]">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-violet-500/25 text-cyan-300"
                  >
                    <FiAward className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{cert.title}</h3>
                  {meta && <p className="mt-1 text-sm text-slate-400">{meta}</p>}

                  {/* Appears only after you add a verifyUrl in portfolioData.js */}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline mt-5 self-start"
                      aria-label={`Verify ${cert.title} certificate (opens in a new tab)`}
                    >
                      <FiExternalLink aria-hidden="true" className="h-4 w-4" />
                      Verify
                    </a>
                  )}
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}