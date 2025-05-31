import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../utils/constants';
import Section from '../shared/Section';
import AnimatedElement from '../shared/AnimatedElement';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);

  const openModal = (item: (typeof PORTFOLIO_ITEMS)[0]) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <Section
      title="Our Portfolio"
      subtitle="Explore some of our recent projects and see how we've helped businesses transform their digital presence."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <AnimatedElement
            key={item.id}
            className="group cursor-pointer"
            delay={100 * index}
          >
            <div 
              className="relative overflow-hidden rounded-lg shadow-md"
              onClick={() => openModal(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-secondary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm font-medium text-primary-300 mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center text-white text-sm font-medium">
                  <span>View Project</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 text-gray-900 hover:bg-white"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="h-80 sm:h-96 overflow-hidden">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-3">
                {selectedItem.category}
              </span>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">
                {selectedItem.title}
              </h2>
              <p className="text-gray-600 mb-6">
                This is a detailed description of the project. We worked closely with the client to understand their needs and created a custom solution that exceeded their expectations. The project included design, development, and deployment phases.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-secondary-700 mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-700 mb-2">Project Scope:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>User interface design</li>
                    <li>Front-end development</li>
                    <li>Back-end API development</li>
                    <li>Database design and implementation</li>
                    <li>Deployment and maintenance</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Portfolio;