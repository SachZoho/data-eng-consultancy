'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from './container';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary dark:text-white">
            <span className="h-8 w-8 rounded bg-accent flex items-center justify-center text-white">DE</span>
            <span>DataEng<span className="text-accent">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-accent transition-colors dark:text-slate-400 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-accent hover:bg-blue-600 rounded-lg transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-secondary hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center px-4 py-3 text-base font-semibold text-white bg-accent rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
