import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down';
  delay?: number;
  threshold?: number;
  duration?: number;
}

const AnimatedElement = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  duration = 500,
}: AnimatedElementProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-up':
        return 'animate-slide-up';
      case 'slide-down':
        return 'animate-slide-down';
      case 'fade-in':
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-${duration} ${inView ? getAnimationClass() : 'opacity-0'}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView 
          ? 'translate3d(0, 0, 0)' 
          : animation === 'slide-up' 
            ? 'translate3d(0, 20px, 0)' 
            : animation === 'slide-down' 
              ? 'translate3d(0, -20px, 0)' 
              : 'translate3d(0, 0, 0)',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;