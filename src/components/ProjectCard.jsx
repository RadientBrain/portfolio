const ProjectCard = ({ project, featured = false }) => {
  return (
    <article
      className={`glass flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-glow ${
        featured ? "relative overflow-hidden" : ""
      }`}
    >
      {featured && (
        <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-brand-500/10 blur-[30px]" />
      )}
      <div className="flex-1">
        <h3
          className={`font-semibold text-ink-900 ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {project.name}
        </h3>
        <p className={`mt-3 text-sm text-slate-600 ${featured ? "max-w-xl" : ""}`}>
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-canvas-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-500">
        Case study available on request
      </div>
    </article>
  );
};

export default ProjectCard;
