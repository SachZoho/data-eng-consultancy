import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { getAllCaseStudies } from '@/lib/content-parser';

const CaseStudiesPage = async () => {
  const studies = await getAllCaseStudies();

  return (
    <div className="py-20">
      <Container>
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary dark:text-white mb-6">
            Proof of Work
          </h1>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            Real-world challenges solved with engineering precision. See how we help companies turn data into a competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-accent transition-all transform hover:-translate-y-1 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-secondary dark:text-slate-400">
                  {study.industry}
                </span>
                <span className="text-success font-bold text-sm">{study.kpi}</span>
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                {study.title}
              </h3>
              <p className="text-secondary dark:text-slate-400 mb-6 line-clamp-2">
                {study.challenge}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary dark:text-white">
                  {study.client}
                </span>
                <span className="text-accent font-semibold text-sm">Read Study &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CaseStudiesPage;
