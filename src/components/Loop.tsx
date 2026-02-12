const values = ["User-Centered", "Performance", "Security", "Scalability", "Reliability", "Accessibility", "Clean Architecture", "Maintainability"];

const Loop = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative z-30 my-28 w-full overflow-hidden -rotate-1">
        <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
          <div className="h-[360px] w-[1000px] rounded-full bg-white/10 blur-[180px]" />
        </div>

        <div className="relative scale-105 border-y border-white/15 bg-gradient-to-r from-white/[0.02] via-white/[0.08] to-white/[0.02] py-10 shadow-2xl shadow-black/40 backdrop-blur-md">
          <div className="flex overflow-x-hidden [--duration:30s] [--gap:4rem] [gap:var(--gap)]">
            <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center justify-around [gap:var(--gap)]">
              {values.map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="cursor-default text-xl font-black uppercase italic tracking-tighter text-white/65 transition-all duration-300 hover:scale-105 hover:text-white/95 sm:text-2xl md:text-3xl">
                    {text}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-white/65 shadow-[0_0_10px_rgba(255,255,255,0.55)]" />
                </div>
              ))}
            </div>

            <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center justify-around [gap:var(--gap)]" aria-hidden="true">
              {values.map((text, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-4">
                  <span className="cursor-default text-xl font-black uppercase italic tracking-tighter text-white/65 transition-all duration-300 hover:scale-105 hover:text-white/95 sm:text-2xl md:text-3xl">
                    {text}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-white/65 shadow-[0_0_10px_rgba(255,255,255,0.55)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loop;
