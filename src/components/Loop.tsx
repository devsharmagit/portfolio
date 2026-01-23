const Loop = () => {
  return (
    <div className='overflow-hidden' >
   <section className="relative w-full z-30 my-32 overflow-x-clip -rotate-1">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[1000px] h-[400px] bg-orange-500/50 blur-[180px] rounded-full  " />
      </div>

      {/* Marquee Container */} 
      <div className="relative border-y border-white/10 bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] backdrop-blur-md py-12 scale-105 shadow-2xl shadow-orange-500/5">
        <div className="flex overflow-x-hidden [--gap:4rem] [--duration:30s] [gap:var(--gap)]">
          <div className="flex shrink-0 items-center justify-around [gap:var(--gap)] animate-[marquee_30s_linear_infinite]">
            {["User-Friendly", "Performance", "Security", "Scalability", "Reliability", "Innovation", "Design", "Accessibility"].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-white/60 uppercase italic transition-all duration-300 hover:text-orange-500/60 hover:scale-105 cursor-default">
                  {text}
                </span>
                <div className="w-2 h-2 rounded-full bg-orange-500/60 shadow-[0_0_15px_rgba(255,115,0,0.6)]  " />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center justify-around [gap:var(--gap)] animate-[marquee_30s_linear_infinite]" aria-hidden="true">
            {["User-Friendly", "Performance", "Security", "Scalability", "Reliability", "Innovation", "Design", "Accessibility"].map((text, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-4">
                <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-white/60 uppercase italic transition-all duration-300 hover:text-orange-500/60 hover:scale-105 cursor-default">
                  {text}
                </span>
                <div className="w-2 h-2 rounded-full bg-orange-500/60 shadow-[0_0_15px_rgba(255,115,0,0.6)]  " />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Marquee - Opposite Direction for visual complexity */}
      {/* <div className="relative border-b border-white/5 bg-white/[0.01] backdrop-blur-sm py-6 rotate-1 md:rotate-1 -mt-4 scale-105 overflow-hidden">
        <div className="flex overflow-hidden [--gap:4rem] [--duration:35s] [gap:var(--gap)] direction-reverse">
          <div className="flex shrink-0 items-center justify-around [gap:var(--gap)] animate-marquee [animation-direction:reverse]">
            {["Frontend", "Backend", "Fullstack", "Database", "Cloud", "DevOps", "Mobile", "UI/UX"].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-lg md:text-2xl font-bold tracking-tight text-white/50 uppercase cursor-default">
                  {text}
                </span>
                <span className="text-orange-500/30">✦</span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center justify-around [gap:var(--gap)] animate-marquee [animation-direction:reverse]" aria-hidden="true">
            {["Frontend", "Backend", "Fullstack", "Database", "Cloud", "DevOps", "Mobile", "UI/UX"].map((text, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-4">
                <span className="text-lg md:text-2xl font-bold tracking-tight text-white/50 uppercase cursor-default">
                  {text}
                </span>
                <span className="text-orange-500/30">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
    </div>
  )
}

export default Loop