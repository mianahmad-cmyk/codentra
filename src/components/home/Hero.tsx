import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import AnimatedElement from '../shared/AnimatedElement';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary-700 via-secondary-800 to-secondary-900 overflow-hidden">
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-primary-500 blur-3xl opacity-20"></div>
    <div className="absolute -left-20 top-1/4 w-72 h-72 rounded-full bg-secondary-300 blur-3xl opacity-20"></div>
    <div className="absolute right-1/4 bottom-10 w-80 h-80 rounded-full bg-accent-500 blur-3xl opacity-20"></div>
  </div>
  
  <div className="container mx-auto px-4 py-12 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <AnimatedElement animation="fade-in" duration={800}>
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
            Innovative Digital Solutions
          </span>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" delay={200} duration={800}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Smart Software. <br />
            <span className="text-primary-300">Stunning Design.</span>
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" delay={400} duration={800}>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            We create custom digital solutions that transform businesses. 
            From web development to digital marketing, we've got you covered.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" delay={600} duration={800}>
          <div className="flex flex-nowrap gap-4">
            <Link 
              to="/contact" 
              className="btn bg-white text-secondary-800 hover:bg-white/90 shadow-lg shadow-white/20 py-2 px-4 text-sm md:py-3 md:px-6 md:text-base"
            >
              Get a Quote
            </Link>
            <Link 
              to="/services" 
              className="btn border-2 border-white text-white hover:bg-white/10 group py-2 px-4 text-sm md:py-3 md:px-6 md:text-base"
            >
              Explore Services
              <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedElement>
      </div>
      
      <div className="relative">
        <AnimatedElement animation="fade-in" delay={500} duration={1000}>
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform md:translate-y-10">
            <img 
              src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Team collaboration" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-1/4 -right-10 md:-right-20 w-40 h-40 md:w-60 md:h-60 bg-primary-500 rounded-full blur-3xl opacity-20 z-0"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-secondary-500 rounded-full blur-3xl opacity-20 z-0"></div>
        </AnimatedElement>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;