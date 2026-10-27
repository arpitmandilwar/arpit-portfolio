import { FiTarget } from "react-icons/fi";
import { achievements } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="border-t border-white/5 bg-ink-900/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          id="achievements-heading"
          eyebrow="Achievements"
          title="Competitions & assessments"
        />

        <ul className="space-y-4">
          {achievements.map((text, i) => (
            <Reveal as="li" key={text} delay={i * 90}>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-ink-900/70 p-5 transition duration-300 hover:border-cyan-400/40 sm:p-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-violet-500/25 text-cyan-300"
                >
                  <FiTarget className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Participation
                  </p>
                  <p className="mt-1 text-slate-200">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}