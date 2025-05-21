// components/AboutSection.tsx
'use client';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading + underline */}
        <h2 className="text-4xl font-bold mb-2">About Me</h2>
        <div className="h-1 w-24 bg-cyan-500 mb-8 rounded"></div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: paragraph from resume */}
          <div>
            <p className="text-lg leading-relaxed">
              I’m currently pursuing a Master of Science in Computer Science at
              Northeastern University in Boston, where I’m diving deep into
              algorithms, databases and AI foundations. I graduated with a
              Bachelor of Technology in Information Technology from SSN College
              of Engineering (Chennai) with an 8.83 GPA, building solid
              fundamentals in data structures, networks and machine learning.
              Through both academic projects and industry internships, I’ve
              developed a knack for architecting scalable full-stack
              applications and solving real-world problems with AI/ML.
            </p>
          </div>

          {/* Right: personal bullet-points */}
          <div>
            <ul className="list-disc list-inside space-y-2 marker:text-cyan-900">
              <li>🎸 Music lover (80’s rock through today’s pop)</li>
              <li>🍔 Certified foodie—always up for new flavors</li>
              <li>⚽ Massive Real Madrid fan</li>
              <li>🏎️ Motorsports enthusiast</li>
              <li>🎥 Avid rom-com aficionado</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

