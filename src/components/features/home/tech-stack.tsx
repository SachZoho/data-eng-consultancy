import React from 'react';
import { Container } from '@/components/layout/container';

const groups = [
  {
    title: 'Streaming & Ingestion',
    tools: ['Apache Flink', 'Apache Kafka', 'Spark Streaming', 'Fabric Eventstreams'],
  },
  {
    title: 'Real-Time Analytics',
    tools: ['Apache Druid', 'Fabric Eventhouse'],
  },
  {
    title: 'Lake & Query',
    tools: ['Delta Lake', 'Apache Iceberg', 'Amazon Athena', 'Fabric Lakehouse'],
  },
  {
    title: 'Cloud Platforms',
    tools: ['AWS', 'Azure', 'Snowflake', 'Databricks'],
  },
  {
    title: 'Pipelines & Infrastructure',
    tools: ['Apache Airflow', 'dbt', 'Terraform'],
  },
  {
    title: 'Analytics & BI',
    tools: ['Power BI', 'Tableau', 'Looker'],
  },
];

const TechStack = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            Platforms &amp; Tools We Work In
          </h2>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            From real-time ingestion to the dashboard, we work across the modern data stack on both AWS and Azure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
