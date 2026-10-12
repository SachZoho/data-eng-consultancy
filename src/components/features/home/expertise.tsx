import React from 'react';
import { Container } from '@/components/layout/container';

const expertise = [
  {
    icon: '⚡',
    title: 'Real-Time Data Streaming',
    description:
      'Build event-driven architectures that process millions of events per second. From Kafka and Flink to Spark Streaming and Microsoft Fabric Eventstreams, we design streaming systems that deliver data with sub-second latency — so your dashboards and alerts reflect what is happening right now, not what happened yesterday.',
    skills: ['Apache Kafka', 'Apache Flink', 'Spark Streaming', 'Fabric Eventstreams'],
  },
  {
    icon: '🔗',
    title: 'Scalable Data Pipelines',
    description:
      'Replace fragile scripts and manual CSV uploads with robust, automated ETL/ELT pipelines. We orchestrate reliable data flows from source to destination — whether that is a data warehouse, a data lake, or both — with built-in retry logic, monitoring, and zero manual intervention.',
    skills: ['ETL / ELT', 'Airflow', 'dbt', 'Delta Lake', 'Terraform'],
  },
  {
    icon: '📊',
    title: 'Analytics & Business Intelligence',
    description:
      'Turn raw data into decisions. We build real-time analytics on Apache Druid and Fabric Eventhouse, design semantic layers, and implement the data models behind self-service dashboards — so your analysts and executives get accurate, fast answers without waiting on engineering.',
    skills: ['Apache Druid', 'Fabric Eventhouse', 'Power BI', 'Tableau', 'Looker'],
  },
];

const Expertise = () => {
  return (
    <section className="py-20 bg-surface dark:bg-slate-800/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            Deep hands-on experience across the entire data lifecycle — from
            ingestion to insight. Here is what we bring to every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-accent transition-colors group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-secondary dark:text-slate-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                  >
                    {skill}
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

export default Expertise;
