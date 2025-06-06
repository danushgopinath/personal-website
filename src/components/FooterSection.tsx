'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

// Particle Component (hydration-safe)
const Particle = ({ index }: { index: number }) => {
  const [styleProps, setStyleProps] = useState<{
    size: number;
    duration: number;
    delay: number;
    initialX: number;
    initialY: number;
    finalY: number;
  } | null>(null);

  useEffect(() => {
    const size = Math.random() * 2 + 1;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const finalY = initialY - (Math.random() * 50 + 20);

    setStyleProps({ size, duration, delay, initialX, initialY, finalY });
  }, []);

  if (!styleProps) return null;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: styleProps.size,
        height: styleProps.size,
        background:
          index % 3 === 0
            ? '#ec4899'
            : index % 3 === 1
            ? '#a855f7'
            : '#6366f1',
        left: `${styleProps.initialX}%`,
        bottom: `${styleProps.initialY}%`,
        opacity: 0,
      }}
      animate={{
        y: styleProps.finalY,
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: styleProps.duration,
        repeat: Infinity,
        delay: styleProps.delay,
        ease: 'easeInOut',
      }}
    />
  );
};

// Social Link Component
const SocialLink = ({
  href,
  label,
  icon,
  index,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2 hover:text-pink-400 transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.span
          className="text-2xl"
          animate={{
            rotate: isHovered ? [0, -10, 10, -5, 0] : 0,
            scale: isHovered ? 1.2 : 1,
            color: isHovered ? '#ec4899' : '#ffffff',
          }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.span>
        <span className="text-lg md:text-xl relative">
          {label}
          <motion.span
            className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0 }}
          />
        </span>
        <AnimatePresence>
          {isHovered &&
            [...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-pink-400"
                initial={{
                  width: 5 + Math.random() * 6,
                  height: 5 + Math.random() * 6,
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: (Math.random() - 0.5) * 100,
                  y: (Math.random() - 0.5) * 100,
                  opacity: [0, 0.8, 0],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1 + Math.random() * 0.7,
                  ease: 'easeOut',
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  zIndex: -1,
                }}
              />
            ))}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
};

export function FooterSection() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const socialLinks = [
    {
      href: 'https://instagram.com/danushgopinath',
      label: 'Instagram',
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">...</svg>,
    },
    {
      href: 'https://linkedin.com/in/danushgopinath',
      label: 'LinkedIn',
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">...</svg>,
    },
    {
      href: 'https://github.com/danushgopinath',
      label: 'GitHub',
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">...</svg>,
    },
    {
      href: 'mailto:danushgopinath8502@gmail.com',
      label: 'Email',
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">...</svg>,
    },
  ];

  return (
    <footer ref={footerRef} className="relative bg-black text-white py-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a] to-transparent opacity-80"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Social Links */}
      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {socialLinks.map((social, index) => (
            <SocialLink key={social.label} {...social} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Footer Bottom */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl">
            © {year}{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">
              Danush Gopinath
            </span>. All rights reserved.
          </p>
          <motion.a
            href="#home"
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full mt-4 text-black"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
