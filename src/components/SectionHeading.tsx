import { ReactNode } from 'react';

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  className?: string;
}

const SectionHeading = ({ kicker, title, className = '' }: SectionHeadingProps) => (
  <header className={className}>
    <p className="kicker opacity-60 mb-5">{kicker}</p>
    <h2 className="display-title">{title}</h2>
  </header>
);

export default SectionHeading;
