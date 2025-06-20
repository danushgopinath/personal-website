//MAKING CHANGE IN ABOUT FOR AWS PROJECT

'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AboutSection() {
  // ------------------- Refs -------------------
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const dotsRef = useRef(null);

  // ------------------- In‑view flags -------------------
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const leftInView = useInView(leftColumnRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightColumnRef, { once: true, amount: 0.3 });
  const dotsInView = useInView(dotsRef, { once: true, amount: 0.5 });

  // ------------------- Animation controls -------------------
  const headingAnim = useAnimation();
  const leftAnim = useAnimation();
  const rightAnim = useAnimation();
  const dotsAnim = useAnimation();

  // ------------------- Effects -------------------
  useEffect(() => {
    // Framer Motion triggers
    if (headingInView) headingAnim.start('visible');
    if (leftInView) leftAnim.start('visible');
    if (rightInView) rightAnim.start('visible');
    if (dotsInView) dotsAnim.start('visible');
  }, [headingInView, leftInView, rightInView, dotsInView]);

  // AOS once per mount — keeps global fade‑up parity
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 100 });
  }, []);

  // ------------------- Variants -------------------
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;

  const headingLine = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  const dots = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1, duration: 0.4, ease: 'easeOut' },
    },
  } as const;

  const dot = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  } as const;

  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  } as const;

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  } as const;

  // ------------------- Data -------------------
  const paragraph =
    "I am currently pursuing my Master of Science in Computer Science at Northeastern University, with coursework in programming paradigms, algorithms, AI, and cloud computing. I hold a B.Tech in Information Technology from Sri Sivasubramaniya Nadar College of Engineering, where I graduated with a GPA of 3.8. Professionally, I've interned as an AIOps Engineer at ThoughtData, where I led a team to integrate advanced time series correlation models like FastDTW and EDM into an enterprise platform. Prior to that, I interned at Fidelity Investments, where I developed and deployed a MEAN stack web application that streamlined server monitoring, improving operational efficiency significantly. I have strong technical skills across Python, C++, Java, React, Node.js, and cloud platforms such as AWS and Azure. I'm also passionate about research—having worked on projects involving Alzheimer's classification from medical imaging and real-time sign language translation systems for healthcare.";

  const sentences = paragraph.split('. ').map((s) => s.trim() + '.');

  const interests = [
    { icon: '⚽', text: 'Die-hard Real Madrid fan—Hala Madrid!' },
    { icon: '🏎️', text: 'Motorsport enthusiast—Formula 1, MotoGP, you name it' },
    { icon: '🍜', text: 'Certified foodie—on a mission to find the best street food' },
    { icon: '🎬', text: 'Crime & thriller movie buff—plot twists are my jam' },
    { icon: '🛣️', text: 'Road trip junkie—music on, map off' },
    { icon: '🧗', text: 'Always up for an adventure—cliff-jumping, trekking, or getting lost on purpose' },
  ];

  // ------------------- JSX -------------------
  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-6 bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden"
      data-aos="fade-up" // global fade‑up entrance
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-400/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="w-full mx-auto px-6 md:px-40 relative z-10">
        {/* ---------------- Header --------------- */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <motion.div
            ref={headingRef}
            className="flex items-center w-full justify-center gap-4"
            initial="hidden"
            animate={headingAnim}
            variants={fadeUp}
          >
            <motion.div
              className="w-110 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500"
              variants={headingLine}
              initial="hidden"
              animate={headingAnim}
              style={{ originX: 0 }}
            />
            <h2 className="text-4xl font-bold whitespace-nowrap">About Me</h2>
            <motion.div
              className="w-110 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-500"
              variants={headingLine}
              initial="hidden"
              animate={headingAnim}
              style={{ originX: 1 }}
            />
          </motion.div>

          <motion.div
            ref={dotsRef}
            className="flex gap-2 mt-4"
            variants={dots}
            initial="hidden"
            animate={dotsAnim}
          >
            {['bg-pink-400', 'bg-purple-500', 'bg-indigo-500'].map((color, i) => (
              <motion.span key={i} variants={dot} className={`w-3 h-3 rounded-full ${color}`} />
            ))}
          </motion.div>
        </div>

        {/* ---------------- Content --------------- */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12">
          {/* Left Column */}
          <motion.div
            ref={leftColumnRef}
            initial="hidden"
            animate={leftAnim}
            variants={fadeUp}
            className="relative"
            data-aos="fade-up"
          >
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-purple-500/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="text-[1.325rem] leading-relaxed text-justify space-y-4">
              {sentences.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            ref={rightColumnRef}
            initial="hidden"
            animate={rightAnim}
            variants={list}
            className="perspective-1000"
            data-aos="fade-up"
          >
            <motion.ul className="text-[1.325rem] list-disc list-outside pl-5 space-y-4 marker:text-pink-400 text-justify">
              {interests.map(({ icon, text }, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="transform-gpu"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <motion.div
                    className="p-[1px] bg-gradient-to-r from-transparent via-pink-400/30 to-transparent rounded-lg"
                    whileHover={{ background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.5), transparent)' }}
                  >
                    <div className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <motion.span
                        className="text-[1.8rem] inline-block mr-2"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, -5, 0] }}
                      >
                        {icon}
                      </motion.span>
                      {text}
                    </div>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>

      {/* ---------------- Local CSS ---------------- */}
      <style jsx>{`
        @keyframes breathe {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        .animate-breathe {
          animation: breathe 8s ease-in-out infinite;
        }
        .animate-breathe-late {
          animation: breathe 10s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
