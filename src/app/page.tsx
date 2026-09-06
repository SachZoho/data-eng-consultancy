import Hero from '@/components/features/home/hero';
import ServicesPreview from '@/components/features/home/services-preview';
import Expertise from '@/components/features/home/expertise';
import { Container } from '@/components/layout/container';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Expertise />

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent opacity-20 blur-[100px] rounded-full"></div>
        <Container>
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to build your modern data stack?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Whether you're starting from scratch or optimizing a complex legacy environment, we can help you get there faster.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-accent/25"
            >
              Book Your Free Discovery Call
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
