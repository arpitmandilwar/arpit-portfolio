import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navLinks, personal } from "../data/portfolioData";

function SocialIcon({ icon: Icon, label, href, external }) {
  const base =
    "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10";

  if (href) {
    return (
      <a
        href={href}
        aria-label={label}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${base} text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300`}
      >
        <Icon aria-hidden="true" className="h-5 w-5" />
      </a>
    );
  }

  // No URL added yet: shown muted and not clickable.
  return (
    <span
      role="img"
      aria-label={`${label} link not added yet`}
      title={`${label} link not added yet`}
      className={`${base} cursor-not-allowed text-slate-600`}
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="text-lg font-bold tracking-tight text-white">
              <span className="gradient-text">Arpit</span> Mandilwar
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-400">{personal.tagline}</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Quick links
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-1 text-sm text-slate-300 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Connect</h2>
            <div className="mt-4 flex gap-3">
              <SocialIcon icon={FiGithub} label="GitHub" href={personal.github} external />
              <SocialIcon icon={FiLinkedin} label="LinkedIn" href={personal.linkedin} external />
              <SocialIcon icon={FiMail} label="Email" href={`mailto:${personal.email}`} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>
            &copy; {year} {personal.name}. All rights reserved.
          </p>
          <a href="#home" className="py-1 transition-colors hover:text-cyan-300">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}