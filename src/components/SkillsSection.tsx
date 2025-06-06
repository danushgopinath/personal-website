'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type Skill = { name: string; icon: string };

const languages: Skill[] = [
  { name: 'Python',       icon: 'python.svg' },
  { name: 'C++',          icon: 'cpp.svg'    },
  { name: 'Java',         icon: 'java.svg'   },
  { name: 'HTML',         icon: 'html5.svg'  },
  { name: 'CSS',          icon: 'css3.svg'   },
  { name: 'JavaScript',   icon: 'javascript.svg' },
  { name: 'SQL',          icon: 'sql.svg'    },
  { name: 'Swing',        icon: 'swing.svg'  },
  { name: 'React Native', icon: 'react-native.svg' },
];

const frameworks: Skill[] = [
  { name: 'React',        icon: 'react.svg'      },
  { name: 'Angular',      icon: 'angular.svg'    },
  { name: 'NodeJS',       icon: 'nodejs.svg'     },
  { name: 'Express',      icon: 'express.svg'    },
  { name: 'Keras',        icon: 'keras.svg'      },
  { name: 'TensorFlow',   icon: 'tensorflow.svg' },
  { name: 'Scikit-Learn', icon: 'scikitlearn.svg'},
  { name: 'Pandas',       icon: 'pandas.svg'     },
  { name: 'NumPy',        icon: 'numpy.svg'      },
];

const tools: Skill[] = [
  { name: 'GIT',      icon: 'git.svg'       },
  { name: 'MySQL',    icon: 'mysql.svg'     },
  { name: 'MongoDB',  icon: 'mongodb.svg'   },
  { name: 'Figma',    icon: 'figma.svg'     },
  { name: 'Azure',    icon: 'azure.svg'     },
  { name: 'Docker',   icon: 'docker.svg'    },
  { name: 'Firebase', icon: 'firebase.svg'  },
  { name: 'AWS',      icon: 'aws.svg'       },
];

// Simplified SkillCard: only entry animation, no hover logic
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      className="skill-card-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="p-[2px] rounded-xl bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500">
        <div className="w-30 h-30 bg-[var(--background)] rounded-xl flex flex-col items-center justify-center text-center">
          <img
            src={`/assets/skills/${skill.icon}`}
            alt={skill.name}
            className="w-18 h-18 object-contain mb-2"
          />
          <span className="text-base font-semibold">{skill.name}</span>
        </div>
      </div>
    </motion.div>
  );
}

// MarqueeRow without any pause or restart logic
function MarqueeRow({
  items,
  dir,
  speed = 1,
}: {
  items: Skill[];
  dir: 'left' | 'right';
  speed?: number;
}) {
  const doubled = [...items, ...items];
  const duration = 30 / speed;

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion.div
        className="flex w-max gap-12"
        animate={{
          x: dir === 'left'
            ? [0, -50 * items.length]
            : [-50 * items.length, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          },
        }}
      >
        {doubled.map((s, i) => (
          <SkillCard
            skill={s}
            key={`${s.name}-${i}`}
            index={i}
          />
        ))}
      </motion.div>

      {/* Fade overlays on edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
    </div>
  );
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isHeadingInView) controls.start('visible');
  }, [isHeadingInView, controls]);

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const dotsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const dotVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 flex justify-center bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <motion.div
        className="absolute top-40 left-20 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-pink-400/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className="w-[85vw] px-6 relative z-10">
        {/* Centered Heading with animated lines and dots */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            ref={headingRef}
            className="flex items-center w-full justify-center gap-4"
            initial="hidden"
            animate={controls}
            variants={headingVariants}
          >
            <div className="flex items-center w-full max-w-md">
              <motion.div
                className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500"
                variants={lineVariants}
                initial="hidden"
                animate={controls}
                style={{ originX: 0 }}
              />
            </div>

            <h2 className="text-4xl font-bold whitespace-nowrap">Skills</h2>

            <div className="flex items-center w-full max-w-md">
              <motion.div
                className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-pink-500"
                variants={lineVariants}
                initial="hidden"
                animate={controls}
                style={{ originX: 1 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="flex gap-2 mt-4"
            variants={dotsVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.span variants={dotVariant} className="w-3 h-3 bg-pink-400 rounded-full" />
            <motion.span variants={dotVariant} className="w-3 h-3 bg-purple-500 rounded-full" />
            <motion.span variants={dotVariant} className="w-3 h-3 bg-indigo-500 rounded-full" />
          </motion.div>
        </div>

        {/* Animated Skill Rows (all always-moving) */}
        <div className="space-y-4">
          <MarqueeRow items={languages} dir="left" speed={1.2} />
          <MarqueeRow items={frameworks} dir="right" speed={0.8} />
          <MarqueeRow items={tools} dir="left" speed={1} />
        </div>

        {/* Proficiency Bars (no subtitle line) */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Proficiency Levels
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Frontend Development', level: 90 },
              { name: 'Backend Development', level: 85 },
              { name: 'Machine Learning', level: 80 },
              { name: 'Cloud Services', level: 75 },
              { name: 'DevOps', level: 70 },
              { name: 'UI/UX Design', level: 65 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-700/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
