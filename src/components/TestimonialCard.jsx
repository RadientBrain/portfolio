const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="glass flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow">
      <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
      <div className="mt-6">
        <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
        <p className="text-xs text-slate-500">
          {testimonial.title} · {testimonial.company}
        </p>
        {testimonial.date && (
          <p className="mt-1 text-xs text-slate-400">{testimonial.date}</p>
        )}
      </div>
    </article>
  );
};

export default TestimonialCard;
