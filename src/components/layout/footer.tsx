import React from 'react';
import Link from 'next/link';
import { Container } from './container';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <span className="h-8 w-8 rounded bg-accent flex items-center justify-center text-white text-sm">DE</span>
              <span>DataEng<span className="text-accent">.</span></span>
            </Link>
            <p className="text-slate-400 max-w-xs">
              Building scalable, reliable data foundations for modern enterprises. We turn raw data into strategic assets.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Book a Call</Link></li>
              <li>hello@dataeng.example.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} DataEng Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">Twitter/X</Link>
            <Link href="#" className="hover:text-white">GitHub</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
