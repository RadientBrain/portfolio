const ChatDemo = ({ messages }) => {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">AI Feature Sandbox</p>
          <p className="text-xs text-slate-400">
            Prototype assistant responses, refine prompts, and export insights.
          </p>
        </div>
        <span className="rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-500">
          Live demo
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {messages.map((item, index) => (
          <div
            key={item.message + index}
            className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                item.role === "user"
                  ? "bg-accent-500 text-ink-900"
                  : "bg-white/10 text-slate-100"
              }`}
            >
              {item.message}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Try it</p>
        <p className="mt-2 text-sm text-slate-200">
          Replace this chat feed with your own AI demo, widget, or embedded product.
        </p>
      </div>
    </div>
  );
};

export default ChatDemo;
