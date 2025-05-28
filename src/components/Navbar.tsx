'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export function Navbar() {
  const [show, setShow] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(!(y > prevScrollY.current && y > 50)); // hide on down-scroll past 50 px
      prevScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav
        className={`fixed inset-x-0 top-0 z-30 bg-opacity-90 backdrop-blur-sm shadow-lg 
                    transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}
    >    
      <ul className="flex justify-center gap-6 md:gap-10 py-4 md:py-5">
        {items.map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-lg md:text-2xl text-white hover:text-cyan-400 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
