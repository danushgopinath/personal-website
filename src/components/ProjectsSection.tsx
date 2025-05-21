'use client';

import Link from 'next/link';

type Project = {
  title: string;
  image: string; 
  url: string;   
};

const projects: Project[] = [
  {
    title: 'Burrow House',
    image: '/assets/projects/burrow-house.jpg',
    url: 'https://github.com/yourusername/burrow-house',
  },
  {
    title: 'Old East',
    image: '/assets/projects/old-east.jpg',
    url: 'https://github.com/yourusername/old-east',
  },
  {
    title: 'Lightbourne',
    image: '/assets/projects/lightbourne.jpg',
    url: 'https://github.com/yourusername/lightbourne',
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Projects</h2>
        <div className="h-1 w-24 bg-cyan-500 mb-12 rounded" />
      </div>

      {/* Grid of project cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="border-4 border-white bg-white shadow-lg overflow-hidden"
          >
            <Link
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              {/* Project image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-100 object-cover"
              />

              {/* Overlay (hidden until hover) */}
              <div className="
                absolute inset-0
                bg-black bg-opacity-60
                flex flex-col items-center justify-center
                opacity-0 group-hover:opacity-70
                transition-opacity duration-300
              ">
                <h3 className="text-xl font-semibold text-white">
                  {proj.title}
                </h3>
                <span className="mt-2 text-4xl text-white">→</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
