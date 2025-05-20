'use client';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white glow-bg"
    >
      {/* blurred animated blobs behind everything */}
      <div className="pointer-events-none absolute inset-0 -z-10 animate-glow bg-gradient-to-tr from-fuchsia-500/30 via-cyan-400/30 to-yellow-300/30" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 max-w-5xl">
        {/* PHOTO */}
        <div className="shrink-0">
          <div className="w-48 h-48 md:w-130 md:h-130 rounded-full overflow-hidden ring-4 ring-cyan-400/50">
            <img
              src="/assets/profile.jpg"
              alt="Portrait of Danush wearing a Real Madrid jersey"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span aria-hidden="true" role="img">Hello 👋</span>
            <br />
            I’m&nbsp;
            <span className="highlight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent">
              Danush
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Computer-science grad student at Northeastern, passionate about
            full-stack product development and solving real-world problems
            with&nbsp;AI&nbsp;/&nbsp;ML.
          </p>

          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-full font-semibold bg-cyan-500 hover:bg-cyan-600 transition-shadow shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Explore My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
