import { Link } from 'react-router-dom';
import Section from '../shared/Section';
import AnimatedElement from '../shared/AnimatedElement';

const CTA = () => {
  return (
    <Section
      className="bg-gradient-to-br from-secondary-700 via-secondary-800 to-secondary-900 text-white overflow-hidden relative"
      fullWidth
    >
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-10 w-80 h-80 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
        <div className="absolute -left-40 bottom-10 w-96 h-96 rounded-full bg-accent-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
              Ready to Get Started?
            </span>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              Transform your business with our innovative digital solutions. 
              Contact us today for a free consultation.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn bg-white text-secondary-800 hover:bg-gray-100 focus:ring-white"
              >
                Get in Touch
              </Link>
              <Link 
                to="/services" 
                className="btn border-2 border-white text-white hover:bg-white/10 focus:ring-white"
              >
                Explore Services
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Section>
  );
};

export default CTA;