import React from 'react';
import { Container } from '@/components/layout/container';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary dark:text-white mb-6">
              Pragmatism over Hype.
            </h1>
            <p className="text-lg text-secondary dark:text-slate-400 leading-relaxed mb-6">
              In an industry filled with buzzwords and "silver bullet" tools, we take a different approach. We believe that the best data architecture is the simplest one that solves the problem reliably.
            </p>
            <p className="text-lg text-secondary dark:text-slate-400 leading-relaxed">
              We don't sell specific tools; we sell outcomes. Whether that means a complex Lakehouse or a simple SQL script, our goal is to provide the most efficient path to reliable business intelligence.
            </p>
          </div>
          <div className="bg-surface dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Our Core Philosophy</h3>
            <ul className="space-y-6">
              {[
                { title: "Reliability First", desc: "A fast pipeline that is occasionally wrong is a liability, not an asset." },
                { title: "Simplicity by Design", desc: "Avoid over-engineering. Build for today, but architect for tomorrow." },
                { title: "Business-Centric", desc: "Technical excellence is meaningless if it doesn't drive business value." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-accent font-bold">0{i+1}.</span>
                  <div>
                    <div className="font-bold text-primary dark:text-white">{item.title}</div>
                    <div className="text-sm text-secondary dark:text-slate-400">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Meet the Team</h2>
          <p className="text-secondary dark:text-slate-400">Specialists in distributed systems, cloud architecture, and data modeling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { name: "Alex Rivera", role: "Founder & Principal Architect", bio: "15+ years experience in high-throughput data systems." },
            { name: "Jamie Lee", role: "Senior Data Engineer", bio: "Expert in Spark optimization and Cloud Migrations." },
            { name: "Jordan Smith", role: "Data Governance Lead", bio: "Specialist in compliance and data quality frameworks." },
          ].map((member, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
              <div className="h-24 w-24 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary dark:text-white">
                {member.name[0]}
              </div>
              <h3 className="font-bold text-primary dark:text-white">{member.name}</h3>
              <p className="text-sm text-accent mb-3">{member.role}</p>
              <p className="text-xs text-secondary dark:text-slate-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="p-12 bg-primary text-white rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to modernize your data?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-blue-600 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
