export default function AnimatedBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(24,24,27,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(24,24,27,0.06),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="pointer-events-none fixed -left-40 -top-40 z-0 h-[420px] w-[420px] rounded-full bg-black/[0.04] blur-[110px] dark:bg-white/[0.05]" />
      <div className="pointer-events-none fixed -bottom-40 -right-40 z-0 h-[360px] w-[360px] rounded-full bg-black/[0.03] blur-[95px] dark:bg-white/[0.04]" />
    </>
  );
}
