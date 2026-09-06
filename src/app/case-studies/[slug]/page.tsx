import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Container } from '@/components/layout/container';
import { getCaseStudyBySlug } from '@/lib/content-parser';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = await getCaseStudyBySlug(params.slug);
  if (!study) return { title: 'Case Study Not Found' };
  return {
    title: `${study.title} | DataEng.`,
    description: study.challenge,
  };
}

export async function generateStaticParams() {
  return [];
}

const CaseStudyDetail = async ({ params }: { params: { slug: string } }) => {
  const study = await getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const content = await serialize(study.content);

  return (
    <div className="py-20">
      <Container>
        <Link
          href="/case-studies"
          className="text-accent font-semibold text-sm mb-12 inline-block hover:underline"
        >
          &larr; Back to all studies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary dark:text-white mb-6">
              {study.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-secondary dark:text-slate-400">
                {study.industry}
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                {study.client}
              </span>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none mb-20">
              <MDXRemote {...content} />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="p-8 bg-surface dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Key Result</h3>
              <div className="text-4xl font-extrabold text-success mb-2">
                {study.kpi}
              </div>
              <p className="text-secondary dark:text-slate-400 text-sm">
                {study.result}
              </p>
            </div>

            <div className="p-8 bg-surface dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {study.tech_stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono text-secondary dark:text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 bg-accent text-white rounded-3xl text-center">
              <h3 className="text-xl font-bold mb-4">Want similar results?</h3>
              <Link
                href="/contact"
                className="block w-full py-3 bg-white text-accent font-bold rounded-xl hover:bg-blue-50 transition-all"
              >
                Book a Call
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudyDetail;
