import React from 'react';
import { Container } from '@/components/layout/container';

const testimonials = [
  {
    quote: "The data architecture they implemented reduced our reporting latency from 24 hours to near real-time. A complete game-changer for our operations.",
    author: "Sarah Chen",
    role: "VP of Analytics, Fintech Corp",
  },
  {
    quote: "Finally, a team that understands both the technical complexity of Spark and the business need for reliable dashboards.",
    author: "Marcus Thorne",
    role: "CTO, HealthData AI",
  },
  {
    quote: "Their approach to data governance saved us months of manual cleanup and prepared us perfectly for our series B audit.",
    author: "Elena Rodriguez",
    role: "Head of Data, LogiScale",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            Trusted by data leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 relative"
            >
              <div className="text-accent text-5xl absolute -top-4 left-8 font-serif">“</div>
              <p className="text-secondary dark:text-slate-400 italic mb-6 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-primary dark:text-white">
                  {t.author[0]}
                </div}
                <div>
                  <div className="font-bold text-primary dark:text-white text-sm">{t.author}</div>
                  <div className="text-xs text-secondary dark:text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
