const SkillCard = ({ icon: Icon, label }) => {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:-translate-y-1 hover:shadow-glow">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15">
        <Icon className="h-5 w-5 text-brand-500" aria-hidden="true" />
      </span>
      <p className="text-sm font-medium text-ink-900">{label}</p>
    </div>
  );
};

export default SkillCard;
