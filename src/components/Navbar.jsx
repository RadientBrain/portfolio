import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navigation, profile } from "../data/portfolioData";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-ink-900">
          {profile.name}
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-ink-700 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#projects"
            className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-700"
          >
            View work
          </a>
        </div>
        <button
          type="button"
          className="rounded-full p-2 text-ink-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <HiXMark className="h-6 w-6" />
          ) : (
            <HiBars3 className="h-6 w-6" />
          )}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200/80 bg-white/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-ink-700">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-ink-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#projects"
              className="rounded-full bg-ink-900 px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              View work
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
