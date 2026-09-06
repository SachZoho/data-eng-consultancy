import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';

const services = [
  {
    title: 'Automated Data Integration',
    description: 'End-to-end ETL/ELT pipelines that replace manual exports with real-time, reliable data flows.',
    icon: '🔄',
  },
  {
    title: 'Lakehouse Architecture',
    description: 'Combine the performance of a warehouse with the flexibility of a lake for a single source of truth.',
    icon: '🏠',
  },
  {
    title: 'Data Governance & Quality',
    description: 'Implement rigorous monitoring and validation to ensure your data is trustworthy and compliant.',
    icon: '🛡️',
  },
  {
    title: 'Cloud Migration',
    description: 'Seamlessly transition your legacy data infrastructure to modern cloud environments like Snowflake or Databricks.',
    icon: '☁️',
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-surface dark:bg-slate-800/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            How we help you scale
          </h2>
          <p className="text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            We solve the complex plumbing of data engineering so your analysts and executives can focus on the insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-accent transition-colors group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary dark:text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold text-accent hover:underline"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
