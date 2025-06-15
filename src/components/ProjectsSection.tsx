'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

type Project = {
  title: string;
  image: string;
  url: string;
  live?: string;
  tags: string[];
  description: string;
};

const projects: Project[] = [
  {
    title: 'AI Trading Bot',
    image: '/assets/projects/ai.jpg',
    url: 'https://github.com/danushgopinath/ai-trading-bot',
    tags: ['Python', 'Machine Learning'],
    description:
      'An AI-powered trading bot that uses machine learning to analyze market trends and make trades.',
  },
  {
    title: 'Image Processing Application',
    image: '/assets/projects/image.jpg',
    url: 'https://github.com/danushgopinath/image-processing-application',
    tags: ['Java', 'Java Swing'],
    description:
      'A desktop application for image processing tasks like filtering, resizing, and format conversion.',
  },
  {
    title: 'WeatherWhisper',
    image: '/assets/projects/weather.jpg',
    url: 'https://github.com/danushgopinath/weatherwhisper',
    tags: ['Python'],
    description:
      'A python package that provides weather data and forecasts using various APIs.',
  },
  {
    title: "Let's Beano",
    image: '/assets/projects/beano.png',
    url: 'https://github.com/danushgopinath/lets-beano',
    tags: ['Angular', 'HTML', 'CSS'],
    description: 'An event management platform for organizing and attending events.',
  },
  {
    title: 'Drum Kit',
    image: '/assets/projects/drum.png',
    url: 'https://github.com/danushgopinath/drumkit',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'A simple drum kit web application that plays sounds on key presses.',
  },
  {
    title: 'TinDog',
    image: '/assets/projects/tindog.png',
    url: 'https://github.com/danushgopinath/tindog',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'A Tinder-like web application for dogs to find playmates.',
  },
  {
    title: "Alzheimer's Disease Detection",
    image: '/assets/projects/alzheimers.jpg',
    url: 'https://github.com/danushgopinath/research-alzheimers',
    tags: ['Python', 'Machine Learning', 'Computer Vision'],
    description:
      "A machine learning model to detect Alzheimer's disease using brain scans.",
  },
  {
    title: 'Water Analysis',
    image: '/assets/projects/water.jpg',
    url: 'https://github.com/danushgopinath/research-waterAnalysis',
    tags: ['Python', 'Machine Learning'],
    description:
      'A machine learning model to analyze water quality based on various parameters.',
  },
  {
    title: 'Yoga pose estimation',
    image: '/assets/projects/yoga.jpg',
    url: 'https://github.com/danushgopinath/research-yogaPose',
    tags: ['Python', 'Machine Learning'],
    description: 'A machine learning model to estimate yoga poses from images.',
  },
];

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState('All');

  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 100 });
  }, []);

  const filteredProjects =
    activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)]"
      data-aos="fade-up"
    >
      <div className="w-full max-w-[90rem] mx-auto px-6">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center mb-12"
          data-aos="fade-up"
        >
          <div className="flex items-center w-full justify-center gap-4">
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500 relative" />
            </div>
            <h2 className="text-4xl font-bold whitespace-nowrap">Projects</h2>
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-500 relative" />
            </div>
          </div>
          <div className="flex gap-2 mt-4" data-aos="fade-up">
            <span className="w-3 h-3 bg-pink-400 rounded-full" />
            <span className="w-3 h-3 bg-purple-500 rounded-full" />
            <span className="w-3 h-3 bg-indigo-500 rounded-full" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-aos="fade-up"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-lg md:text-xl text-black hover:opacity-90 transition-shadow shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                activeTag === tag ? '' : 'brightness-45 hover:brightness-80'
              }`}
              data-aos="fade-up"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" data-aos="fade-up">
          {filteredProjects.map((proj) => (
            <Link
              key={proj.title}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              className="transform transition-transform hover:scale-105"
            >
              <div className="rounded-lg border border-black overflow-hidden shadow-lg bg-[var(--background)] aspect-[4/3] relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center px-4 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{proj.description}</p>
                  <div className="flex gap-4">
                    <span className="w-6 h-6 text-white hover:text-cyan-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 3.75h2.25A2.25 2.25 0 0121 6v12a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75H8.25"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 3.75L8.25 12M8.25 12h7.5"
                        />
                      </svg>
                    </span>
                    {proj.live && (
                      <span className="w-6 h-6 text-white hover:text-cyan-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
