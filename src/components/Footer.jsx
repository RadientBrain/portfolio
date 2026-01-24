import { profile, socialLinks } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-ink-900/10 bg-canvas-50/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink-700/80 sm:px-10 md:flex-row">
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
