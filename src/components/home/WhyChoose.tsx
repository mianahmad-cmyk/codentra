import { useInView } from 'react-intersection-observer';
import { REASONS } from '../../utils/constants';
import Section from '../shared/Section';
import AnimatedElement from '../shared/AnimatedElement';
import { Users, Zap, HeartHandshake, Award } from 'lucide-react';

const WhyChoose = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Map reason icons to Lucide components
  const getIcon = (iconName: string) => {
    const iconProps = { size: 48, className: "text-primary-500 mb-4" };
    
    switch (iconName) {
      case 'Users':
        return <Users {...iconProps} />;
      case 'Zap':
        return <Zap {...iconProps} />;
      case 'HeartHandshake':
        return <HeartHandshake {...iconProps} />;
      case 'Award':
        return <Award {...iconProps} />;
      default:
        return <Award {...iconProps} />;
    }
  };

  return (
    <Section 
      title="Why Choose CODENTRA"
      subtitle="We combine technical expertise with creative innovation to deliver exceptional digital solutions."
      className="bg-gray-50"
    >
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {REASONS.map((reason, index) => (
          <AnimatedElement
            key={reason.title}
            className="text-center p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all"
            delay={150 * index}
          >
            <div className="inline-flex items-center justify-center">
              {getIcon(reason.icon)}
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary-700">
              {reason.title}
            </h3>
            <p className="text-gray-600">
              {reason.description}
            </p>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
};

export default WhyChoose;