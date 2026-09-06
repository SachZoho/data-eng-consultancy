import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Case Studies | DataEng.",
  description: "Explore how we've helped companies scale their data infrastructure and drive business value.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
