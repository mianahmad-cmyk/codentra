import { TECH_STACK } from '../../utils/constants';
import Section from '../shared/Section';
import AnimatedElement from '../shared/AnimatedElement';
import { FileSymlink as Html, FileJson as FileJs, FileType, FileCode, FileJson, Database, GitGraph, Cloud, Container, Figma } from 'lucide-react';

const TechStack = () => {
  // Map tech icons to Lucide components
  const getIcon = (iconName: string) => {
    const iconProps = { size: 40, className: "mb-2 text-gray-700" };
    
    switch (iconName) {
      case 'Html':
        return <Html {...iconProps} />;
      case 'Css':
        return <FileCode {...iconProps} />;
      case 'FileJs':
        return <FileJs {...iconProps} />;
      case 'FileType':
        return <FileType {...iconProps} />;
      case 'FileCode':
        return <FileCode {...iconProps} />;
      case 'FileJson':
        return <FileJson {...iconProps} />;
      case 'Database':
        return <Database {...iconProps} />;
      case 'GitGraph':
        return <GitGraph {...iconProps} />;
      case 'Cloud':
        return <Cloud {...iconProps} />;
      case 'Container':
        return <Container {...iconProps} />;
      case 'Figma':
        return <Figma {...iconProps} />;
      default:
        return <FileCode {...iconProps} />;
    }
  };

  return (
    <Section
      title="Our Tech Stack"
      subtitle="We use cutting-edge technologies to build modern, scalable, and maintainable applications."
      className="bg-gray-50"
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {TECH_STACK.map((tech, index) => (
          <AnimatedElement
            key={tech.name}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow text-center group"
            delay={50 * index}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors mb-3">
              {getIcon(tech.icon)}
            </div>
            <span className="font-medium text-gray-800">{tech.name}</span>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;