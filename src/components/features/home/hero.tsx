import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[300px] w-[300px] rounded-full bg-accent opacity-20 blur-[120px]"></div>
      </div>

      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new partnerships
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-primary dark:text-white mb-6">
            We build the <span className="text-accent">data foundations</span> that power critical decisions.
          </h1>

          <p className="text-lg lg:text-xl text-secondary dark:text-slate-400 mb-10 leading-relaxed">
            Stop struggling with fragmented data. We design and implement scalable, reliable data pipelines and lakehouse architectures that turn raw information into strategic assets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-accent/25"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-primary dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
