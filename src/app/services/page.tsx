import React from 'react';
import { Container } from '@/components/layout/container';
import services from '@/content/services.json';

const ServicesPage = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary dark:text-white mb-6">
            Our Expertise
          </h1>
          <p className="text-lg text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            We provide the technical depth and strategic vision needed to build a world-class data platform.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <div className="text-4xl">{service.icon}</div>
                <h2 className="text-3xl font-bold text-primary dark:text-white">
                  {service.title}
                </h2>
                <p className="text-xl font-semibold text-accent">
                  {service.subtitle}
                </p>
                <p className="text-secondary dark:text-slate-400 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-success font-bold">✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 p-8 bg-surface dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
                  Our Approach
                </h3>
                <p className="text-secondary dark:text-slate-400 leading-relaxed">
                  {service.approach}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-accent text-white rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            Every data environment is unique. Let's discuss your specific challenges and how we can solve them.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-accent font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Book a Call
          </Link>
        </div>
      </Container>
    </div>
  );
};

import Link from 'next/link';

export default ServicesPage;
