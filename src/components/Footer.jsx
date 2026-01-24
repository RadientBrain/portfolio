import { profile, socialLinks } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:px-10 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-ink-900"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
