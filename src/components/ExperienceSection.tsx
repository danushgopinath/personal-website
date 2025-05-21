'use client';

type Experience = {
  company: string;
  location: string;
  role: string;
  date: string;
  details: string[];
};

const experiences: Experience[] = [
  {
    company: 'ThoughtData',
    location: 'Remote - Boston',
    role: 'AIOps Intern',
    date: 'March 2024 - July 2024',
    details: [
      'Led a team of 3 to enhance Enterprise360 by integrating advanced correlation analysis tools such as FastDTW, EDM, and Kernel Ridge Regression, significantly improving data correlation capabilities.',
      'Augmented platform performance by embedding direct Python code execution via webhooks, ensuring continuous 100% uptime and seamless UI integration.',
    ],
  },
  {
    company: 'Fidelity Investments',
    location: 'Remote - Bangalore',
    role: 'Software Developer Intern',
    date: 'June 2023 - August 2023',
    details: [
      'Orchestrated the development and deployment of a MEAN-stack web application for streamlining server monitoring processes, completing the project within 60 days.',
      'Enhanced operational efficiency by introducing measures that reduced monitoring time per team member by 90% and mitigated server-overload scenarios.',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Experience</h2>
        <div className="h-1 w-24 bg-cyan-500 mb-12 rounded" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* vertical line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-cyan-200 transform -translate-x-1/2" />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={exp.company}
              className="mb-12 md:grid md:grid-cols-9 md:items-start"
            >
              {/* left card */}
              <div
                className={`md:col-span-4 ${
                  isLeft
                    ? 'md:col-start-1 md:text-right md:pr-8'
                    : 'md:col-start-6 md:pl-8'
                }`}
              >
                {isLeft && (
                  <div className="inline-block bg-[var(--background)] border border-cyan-500 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-sm text-gray-500 mb-1">{exp.location}</p>
                    <p className="italic font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* center marker */}
              <div className="md:col-span-1 md:col-start-5 flex justify-center">
                <div className="w-8 h-8 rounded-full bg-[var(--background)] border-4 border-cyan-500" />
              </div>

              {/* right card */}
              <div
                className={`md:col-span-4 ${
                  !isLeft
                    ? 'md:col-start-6 md:text-left md:pl-8'
                    : 'md:col-start-1 md:pr-8'
                }`}
              >
                {!isLeft && (
                  <div className="inline-block bg-[var(--background)] border border-cyan-500 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-sm text-gray-500 mb-1">{exp.location}</p>
                    <p className="italic font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}