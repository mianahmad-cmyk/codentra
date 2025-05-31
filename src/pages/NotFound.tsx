import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import AnimatedElement from '../components/shared/AnimatedElement';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-lg w-full text-center">
        <AnimatedElement animation="fade-in">
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" delay={200}>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-6">
            Page Not Found
          </h2>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" delay={300}>
          <p className="text-xl text-gray-600 mb-10">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="btn-primary flex items-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default NotFound;