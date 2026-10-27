import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  // Add a stronger background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  const linkClass = (isActive) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-cyan-300" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-ink-950/85 backdrop-blur-lg"
          : "border-transparent bg-ink-950/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          <span className="gradient-text">Arpit</span> Mandilwar
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 xl:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass(active === link.href.slice(1))}
                  aria-current={active === link.href.slice(1) ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary ml-2">
            Let&apos;s Connect
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-200 hover:bg-white/5 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 xl:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block ${linkClass(active === link.href.slice(1))} py-3 text-base`}
                  aria-current={active === link.href.slice(1) ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-7xl px-5 pb-5 sm:px-8">
            <a href="#contact" onClick={closeMenu} className="btn btn-primary w-full">
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}