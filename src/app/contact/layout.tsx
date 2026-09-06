import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | DataEng.",
  description: "Book a discovery call with our data engineering experts to solve your infrastructure challenges.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
