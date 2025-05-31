import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  dark?: boolean;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullWidth = false,
  dark = false,
}: SectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id={id}
      ref={ref}
      className={`section ${dark ? 'bg-secondary-700 text-white' : 'bg-white'} ${className}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'container'}`}>
        {(title || subtitle) && (
          <div className={`text-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            {title && <h2 className={`section-title ${dark ? 'text-white' : ''}`}>{title}</h2>}
            {subtitle && (
              <p className={`section-subtitle ${dark ? 'text-gray-300' : ''}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;