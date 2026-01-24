const ChatDemo = ({ messages }) => {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-ink-900">AI Feature Sandbox</p>
          <p className="text-xs text-ink-700/70">
            Prototype assistant responses, refine prompts, and export insights.
          </p>
        </div>
        <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-500">
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
                  : "bg-canvas-100 text-ink-700"
              }`}
            >
              {item.message}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-ink-900/10 bg-canvas-50/80 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-700/70">Try it</p>
        <p className="mt-2 text-sm text-ink-700">
          Replace this chat feed with your own AI demo, widget, or embedded product.
        </p>
      </div>
    </div>
  );
};

export default ChatDemo;
