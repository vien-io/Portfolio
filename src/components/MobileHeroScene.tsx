/** Lightweight static space background — no WebGL on mobile. */
export const MobileHeroScene = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-zinc-950">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 50% 35%, rgba(30, 58, 138, 0.22) 0%, transparent 62%),
            radial-gradient(ellipse 70% 45% at 85% 75%, rgba(88, 28, 135, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse 50% 35% at 15% 65%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 42%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 42% 8%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 58% 28%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 72% 52%, rgba(255,255,255,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 88% 18%, rgba(255,255,255,0.65) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 72%, rgba(255,255,255,0.55) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 88%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 68%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 78% 82%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 58%, rgba(255,255,255,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 48% 92%, rgba(255,255,255,0.55) 0%, transparent 100%)
          `,
        }}
      />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950/80 to-transparent" />
    </div>
  );
};
