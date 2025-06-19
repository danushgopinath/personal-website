'use client';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 animate-glow bg-gradient-to-tr from-fuchsia-500/30 via-cyan-400/30 to-yellow-300/30" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 w-full max-w-7xl mx-auto">
        {/* PHOTO with pink→purple→indigo ring */}
        <div className="shrink-0">
          <div
            className="p-[3px] bg-gradient-to-tr from-pink-400/40 via-purple-500 to-indigo-500 rounded-full inline-block"
          >
            <div
              className="w-48 h-48 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden bg-black"
            >
              <img
                src="/assets/profile.jpg"
                alt="Portrait of Danush"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left space-y-6 max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            <span aria-hidden="true" role="img">
              Hello 👋
            </span>
            <br />
            I&apos;m&nbsp;
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Danush
            </span>
          </h1>

          <p className="text-xl md:text-2xl">
            Computer-science grad student at Northeastern, passionate about
            full-stack product development and solving real-world problems
            with&nbsp;AI&nbsp;/&nbsp;ML.
          </p>

          <a
            href="#projects"
            className="
              inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-lg md:text-xl
              text-black hover:opacity-90 transition-shadow shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
            "
          >
            Explore My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
