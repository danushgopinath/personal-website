'use client';

import Link from 'next/link';

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-[var(--foreground)] py-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Social links */}
        <div className="flex justify-center space-x-8 mb-4">
          <Link
            href="https://instagram.com/danushgopinath"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </Link>
          <Link
            href="https://linkedin.com/in/danushgopinath"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/danushgopinath"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm">
          © {year} Danush Gopinath. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
