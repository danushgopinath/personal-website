'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Experience = {
  company: string;
  logo?: string;
  location: string;
  role: string;
  date: string;
  details: string[];
};

const experiences: Experience[] = [
  {
    company: 'ThoughtData',
    // logo: '/assets/company/toughtdata.png',
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
    // logo: '/assets/company/fidelity.svg',
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
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 100 });
  }, []);

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="w-full max-w-7xl mx-auto px-6" data-aos="fade-up">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <div className="flex items-center w-full justify-center gap-4">
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500" />
            </div>
            <h2 className="text-4xl font-bold whitespace-nowrap">Experience</h2>
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-500" />
            </div>
          </div>
          <div className="flex gap-2 mt-4" data-aos="fade-up">
            <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto" data-aos="fade-up">
          {/* Vertical gradient line */}
          <div
            className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-500 z-0"
          />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={exp.company}
                className="mb-12 md:grid md:grid-cols-9 md:items-start relative z-10"
                data-aos="fade-up"
              >
                {/* Left Card */}
                <div
                  className={`md:col-span-4 ${
                    isLeft
                      ? 'md:col-start-1 md:text-right md:pr-8'
                      : 'md:col-start-6 md:pl-8'
                  }`}
                >
                  {isLeft && (
                    <div
                      className="inline-block p-[1px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 rounded-lg"
                      data-aos="fade-up"
                    >
                      <div className="bg-[#050505] text-[var(--foreground)] rounded-lg p-6">
                        {exp.logo && (
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-50 h-auto mb-4 center mx-auto"
                          />
                        )}
                        <h3 className="text-2xl font-semibold mb-1">{exp.company}</h3>
                        <p className="text-sm text-gray-600">{exp.location}</p>
                        <p className="italic font-medium">{exp.role}</p>
                        <p className="text-sm text-gray-600 mb-4">{exp.date}</p>
                        <ul className="list-disc list-inside space-y-2 text-left text-[1.125rem]">
                          {exp.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Marker */}
                <div className="md:col-span-1 md:col-start-5 flex justify-center items-start" data-aos="fade-up">
                  <div className="inline-block p-[1px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 rounded-full">
                    <div className="w-6 h-6 bg-[var(--background)] rounded-full" />
                  </div>
                </div>

                {/* Right Card */}
                <div
                  className={`md:col-span-4 ${
                    !isLeft
                      ? 'md:col-start-6 md:text-left md:pl-8'
                      : 'md:col-start-1 md:pr-8'
                  }`}
                >
                  {!isLeft && (
                    <div
                      className="inline-block p-[1px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 rounded-lg"
                      data-aos="fade-up"
                    >
                      <div className="bg-[#050505] text-[var(--foreground)] rounded-lg p-6">
                        {exp.logo && (
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-75 h-auto mb-4 center mx-auto"
                          />
                        )}
                        <h3 className="text-2xl font-semibold mb-1">{exp.company}</h3>
                        <p className="text-sm text-gray-600">{exp.location}</p>
                        <p className="italic font-medium">{exp.role}</p>
                        <p className="text-sm text-gray-600 mb-4">{exp.date}</p>
                        <ul className="list-disc list-inside space-y-2 text-left text-[1.125rem]">
                          {exp.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
