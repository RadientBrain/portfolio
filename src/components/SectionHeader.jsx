const SectionHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-10 max-w-2xl reveal" data-reveal>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
