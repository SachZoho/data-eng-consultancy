'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/container';
import { submitContactForm } from '@/app/actions/contact';

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus('success');
      setMessage(result.message);
    } else {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary dark:text-white mb-6">
              Let's build something <span className="text-accent">scalable</span>.
            </h1>
            <p className="text-lg text-secondary dark:text-slate-400 mb-12 leading-relaxed">
              Whether you have a clear project scope or just a few messy spreadsheets and a dream, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">✉️</div>
                <div>
                  <div className="font-bold text-primary dark:text-white">Email us directly</div>
                  <div className="text-secondary dark:text-slate-400">sachm1995@zohomail.in</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">📅</div>
                <div>
                  <div className="font-bold text-primary dark:text-white">Schedule a Call</div>
                  <div className="text-secondary dark:text-slate-400">Direct booking via Calendly</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Message Sent!</h3>
                <p className="text-secondary dark:text-slate-400 mb-8">{message}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 text-sm font-semibold text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary dark:text-slate-400">Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface dark:bg-slate-800 text-primary dark:text-white focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary dark:text-slate-400">Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface dark:bg-slate-800 text-primary dark:text-white focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary dark:text-slate-400">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your data challenges..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface dark:bg-slate-800 text-primary dark:text-white focus:ring-2 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <button
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="text-center text-red-500 text-sm font-medium">{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Calendly Placeholder Section */}
        <div className="mt-24 py-16 bg-surface dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 text-center">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Fast-track your discovery</h2>
          <p className="text-secondary dark:text-slate-400 mb-12 max-w-xl mx-auto">
            Skip the back-and-forth emails and pick a time that works for you.
          </p>
          <div className="aspect-video w-full max-w-4xl mx-auto bg-slate-200 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-slate-500 italic">
            Calendly Widget Integration Area
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
