'use client';

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

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="
      p-[2px]
      rounded-xl
      bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500
    ">
      <div className="
        w-32 h-32
        bg-[var(--background)]
        rounded-xl
        flex flex-col items-center justify-center
        text-center
      ">
        <img
          src={`/assets/skills/${skill.icon}`}
          alt={skill.name}
          className="w-18 h-18 mb-2 object-contain"
        />
        <span className="text-base font-semibold">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  dir,
}: {
  items: Skill[];
  dir: 'left' | 'right';
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden w-full">
      <div className={`
        flex w-max gap-12
        ${dir === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}
      `}>
        {doubled.map((s, i) => (
          <SkillCard skill={s} key={`${s.name}-${i}`} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 flex justify-center bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="w-[85vw] px-6">
        {/* Centered Heading with arrows and dots */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center w-full justify-center gap-4">
            <div className="flex items-center w-full max-w-md">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-pink-500 relative"></div>
            </div>

            <h2 className="text-4xl font-bold whitespace-nowrap">Skills</h2>

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

        {/* Animated Skill Rows */}
        <div className="space-y-10">
          <MarqueeRow items={languages}  dir="left"  />
          <MarqueeRow items={frameworks} dir="right" />
          <MarqueeRow items={tools}      dir="left"  />
        </div>
      </div>
    </section>
  );
}
