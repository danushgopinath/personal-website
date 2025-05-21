'use client';

type Skill = { name: string; icon: string };

/* ─────── Your data ─────── */
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

/* ─────── Card ─────── */
function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        w-32 h-32 rounded-xl
        border border-cyan-500/40
        bg-[var(--background)]
      "
    >
      <img
        src={`/assets/skills/${skill.icon}`}
        alt={skill.name}
        className="w-12 h-12 mb-2 object-contain"
      />
      <span className="text-sm font-medium text-center">
        {skill.name}
      </span>
    </div>
  );
}

/* ─────── Scrolling row ─────── */
function MarqueeRow({
  items,
  dir,
}: {
  items: Skill[];
  dir: 'left' | 'right';
}) {
  // duplicate the list so head meets tail → seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`
          flex w-max gap-12
          ${dir === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}
        `}
      >
        {doubled.map((s, i) => (
          <SkillCard skill={s} key={`${s.name}-${i}`} />
        ))}
      </div>
    </div>
  );
}

/* ─────── Main section ─────── */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 flex justify-center bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="w-[80vw] px-6">
        <h2 className="text-4xl font-bold mb-2">Skills</h2>
        <div className="h-1 w-24 bg-cyan-500 mb-10 rounded" />

        <MarqueeRow items={languages}  dir="left"  />
        <MarqueeRow items={frameworks} dir="right" />
        <MarqueeRow items={tools}      dir="left"  />
      </div>
    </section>
  );
}
