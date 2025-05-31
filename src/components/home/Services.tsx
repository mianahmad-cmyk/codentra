import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '../../utils/constants';
import Section from '../shared/Section';
import AnimatedElement from '../shared/AnimatedElement';
import { Code2, Palette, Smartphone, Cloud, Search, TrendingUp, FileImage, Share2 } from 'lucide-react';

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Map service icons to Lucide components
  const getIcon = (iconName: string) => {
    const iconProps = { size: 40, className: "text-primary-500 mb-4" };
    
    switch (iconName) {
      case 'Code2':
        return <Code2 {...iconProps} />;
      case 'Palette':
        return <Palette {...iconProps} />;
      case 'Smartphone':
        return <Smartphone {...iconProps} />;
      case 'Cloud':
        return <Cloud {...iconProps} />;
      case 'Search':
        return <Search {...iconProps} />;
      case 'TrendingUp':
        return <TrendingUp {...iconProps} />;
      case 'FileImage':
        return <FileImage {...iconProps} />;
      case 'Share2':
        return <Share2 {...iconProps} />;
      default:
        return <Code2 {...iconProps} />;
    }
  };

  return (
    <Section 
      id="services"
      title="Our Services"
      subtitle="We offer a comprehensive range of digital solutions to help your business grow and succeed in the digital landscape."
    >
      <div 
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SERVICES.map((service, index) => (
          <AnimatedElement
            key={service.id}
            className="card group hover:shadow-xl hover:-translate-y-2 p-6"
            delay={100 * index}
          >
            {getIcon(service.icon)}
            <h3 className="text-xl font-bold mb-3 text-secondary-700 group-hover:text-primary-500 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {service.description}
            </p>
            <Link 
              to={`/services#${service.id}`}
              className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              Learn More 
              <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedElement>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    </Section>
  );
};

export default Services;