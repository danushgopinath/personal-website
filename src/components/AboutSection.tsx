'use client';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Centered Heading with arrows and dots */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center w-full justify-center gap-4">
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500 relative"></div>
            </div>

            <h2 className="text-4xl font-bold whitespace-nowrap">About Me</h2>

            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-500 relative"></div>
            </div>
          </div>

          {/* Three dots below */}
          <div className="flex gap-2 mt-4">
            <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12">
          {/* Left: paragraph from resume */}
          <div>
            <p className="text-[1.325rem] leading-relaxed text-justify">
              I am currently pursuing my Master of Science in Computer Science at Northeastern University, 
              with coursework in programming paradigms, algorithms, AI, and cloud computing. I hold a 
              B.Tech in Information Technology from Sri Sivasubramaniya Nadar College of Engineering, where 
              I graduated with a GPA of 3.8. Professionally, I've interned as an AIOps Engineer at 
              ThoughtData, where I led a team to integrate advanced time series correlation models like 
              FastDTW and EDM into an enterprise platform. Prior to that, I interned at Fidelity Investments, 
              where I developed and deployed a MEAN stack web application that streamlined server monitoring, 
              improving operational efficiency significantly. I have strong technical skills across Python, 
              C++, Java, React, Node.js, and cloud platforms such as AWS and Azure. I'm also passionate about 
              research—having worked on projects involving Alzheimer's classification from medical imaging and 
              real-time sign language translation systems for healthcare.
            </p>
          </div>

          {/* Right: personal bullet-points */}
          <div>
            <ul className="text-[1.325rem] list-disc list-outside pl-5 space-y-4 marker:text-pink-400 text-justify">
              <li><span className="text-[1.8rem]">⚽</span> Die-hard Real Madrid fan—Hala Madrid!</li>
              <li><span className="text-[1.8rem]">🏎️</span> Motorsport enthusiast—Formula 1, MotoGP, you name it</li>
              <li><span className="text-[1.8rem]">🍜</span> Certified foodie—on a mission to find the best street food</li>
              <li><span className="text-[1.8rem]">🎬</span> Crime & thriller movie buff—plot twists are my jam</li>
              <li><span className="text-[1.8rem]">🛣️</span> Road trip junkie—music on, map off</li>
              <li><span className="text-[1.8rem]">🧗</span> Always up for an adventure—cliff-jumping, trekking, or getting lost on purpose</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
