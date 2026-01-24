const ExperienceCard = ({ role, company, period, impact, index }) => {
  return (
    <article className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500/60 via-accent-500/60 to-transparent" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/10 text-sm font-semibold text-brand-500">
            {String(index).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-ink-900">{role}</h3>
            <p className="text-sm text-slate-500">{company}</p>
          </div>
        </div>
        <span className="rounded-full bg-canvas-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {period}
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {impact.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCard;
