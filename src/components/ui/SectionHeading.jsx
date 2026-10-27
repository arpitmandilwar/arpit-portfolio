import Reveal from "./Reveal";

// Eyebrow label + title + gradient underline + optional description.
// `id` is used by the parent <section aria-labelledby={id}>.
export default function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-cyan-300">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300"
      />
      {description && <p className="mt-4 text-slate-400">{description}</p>}
    </Reveal>
  );
}