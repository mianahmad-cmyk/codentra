import { useRef, useEffect } from 'react';
import { CLIENTS } from '../../utils/constants';
import Section from '../shared/Section';

const Clients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll the clients horizontally
  useEffect(() => {
    if (!scrollRef.current) return;
    
    const scrollContainer = scrollRef.current;
    let animationId: number;
    let position = 0;
    
    const scroll = () => {
      position += 0.5;
      
      // Reset position when we've scrolled the width of one logo
      if (position >= scrollContainer.firstElementChild?.clientWidth || 0) {
        position = 0;
        
        // Move first item to the end
        const firstItem = scrollContainer.firstElementChild;
        if (firstItem) {
          scrollContainer.appendChild(firstItem.cloneNode(true));
          scrollContainer.removeChild(firstItem);
        }
      }
      
      scrollContainer.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(scroll);
    
    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Section
      title="Trusted By"
      subtitle="We're proud to work with these amazing companies"
      className="py-12"
    >
      <div className="relative overflow-hidden">
        {/* Gradient mask for smooth scrolling effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent"></div>
        
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-12 py-6"
          >
            {/* Double the clients array for continuous scrolling */}
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center min-w-[150px] h-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;