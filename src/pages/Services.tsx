import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES } from '../utils/constants';
import Section from '../components/shared/Section';
import AnimatedElement from '../components/shared/AnimatedElement';
import { ArrowRight, CheckCircle, Code2, Palette, Smartphone, Cloud, Search, TrendingUp, FileImage, Share2 } from 'lucide-react';

const Services = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');
  
  // Scroll to service section if hash is present
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [hash]);

  // Map service icons to Lucide components
  const getIcon = (iconName: string, size = 24) => {
    const iconProps = { size, className: "text-primary-500" };
    
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
    <>
      {/* Page Header */}
 <div className="bg-gradient-to-br from-secondary-700 to-secondary-900 text-white py-20 md:py-20 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT SIDE TEXT */}
      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
          Our Expertise
        </span>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Full-Service Digital <br />
          <span className="text-primary-300">Solutions for Growth</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
          From stunning website development and custom app design to strategic digital marketing, branding, and SaaS development — we build solutions that elevate your brand and drive results.
        </p>

        <div className="flex flex-nowrap gap-3">
          <a 
            href="/contact" 
            className="bg-white text-secondary-800 font-semibold py-2 px-4 rounded-md hover:bg-white/90 shadow-lg shadow-white/20 transition whitespace-nowrap text-sm md:text-base"
          >
            Get Started
          </a>
          <a 
            href="/services" 
            className="border-2 border-white text-white py-2 px-4 rounded-md hover:bg-white/10 transition whitespace-nowrap text-sm md:text-base"
          >
            View All Services →
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative">
        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Digital Services" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="absolute top-1/4 right-0 w-40 h-40 md:w-60 md:h-60 bg-primary-500 rounded-full blur-3xl opacity-20 z-0 translate-x-1/2 md:translate-x-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-secondary-500 rounded-full blur-3xl opacity-20 z-0"></div>
      </div>
    </div>
  </div>
</div>



      {/* Services Overview */}
      <Section title="What We Offer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <AnimatedElement
              key={service.id}
              className="card group hover:shadow-xl hover:-translate-y-2 p-6"
              delay={100 * index}
            >
              <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                {getIcon(service.icon, 32)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-700 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a 
                href={`#${service.id}`}
                className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
              >
                Learn More 
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Our Process */}
      <Section title="Our Process" subtitle="How we deliver exceptional results for every project" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Process line */}
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-primary-200 hidden md:block"></div>
            
            {/* Process steps */}
            <div className="space-y-12">
              <AnimatedElement className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex md:block">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg z-10">1</div>
                  <div className="block md:hidden h-1 w-12 bg-primary-200 self-center"></div>
                </div>
                <div className="ml-6 md:ml-12 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-secondary-700 mb-3">Discovery & Planning</h3>
                  <p className="text-gray-600 mb-4">
                    We start by understanding your business objectives, target audience, and project requirements. This phase involves detailed discussions, research, and planning to define the project scope and roadmap.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Requirements gathering and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Competitive analysis and market research</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Project scope definition and planning</span>
                    </li>
                  </ul>
                </div>
              </AnimatedElement>
              
              <AnimatedElement className="flex flex-col md:flex-row" delay={200}>
                <div className="flex-shrink-0 flex md:block">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg z-10">2</div>
                  <div className="block md:hidden h-1 w-12 bg-primary-200 self-center"></div>
                </div>
                <div className="ml-6 md:ml-12 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-secondary-700 mb-3">Design & Prototype</h3>
                  <p className="text-gray-600 mb-4">
                    Our design team creates wireframes and visual designs based on your requirements. We develop interactive prototypes to visualize the user experience before moving to development.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Wireframing and UX design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Visual design and branding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Interactive prototyping and user testing</span>
                    </li>
                  </ul>
                </div>
              </AnimatedElement>
              
              <AnimatedElement className="flex flex-col md:flex-row" delay={400}>
                <div className="flex-shrink-0 flex md:block">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg z-10">3</div>
                  <div className="block md:hidden h-1 w-12 bg-primary-200 self-center"></div>
                </div>
                <div className="ml-6 md:ml-12 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-secondary-700 mb-3">Development & Testing</h3>
                  <p className="text-gray-600 mb-4">
                    Our development team brings the designs to life using the latest technologies and best practices. We conduct thorough testing to ensure quality, performance, and security.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Front-end and back-end development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Quality assurance and testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Performance optimization and security</span>
                    </li>
                  </ul>
                </div>
              </AnimatedElement>
              
              <AnimatedElement className="flex flex-col md:flex-row" delay={600}>
                <div className="flex-shrink-0 flex md:block">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg z-10">4</div>
                  <div className="block md:hidden h-1 w-12 bg-primary-200 self-center"></div>
                </div>
                <div className="ml-6 md:ml-12 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-secondary-700 mb-3">Launch & Support</h3>
                  <p className="text-gray-600 mb-4">
                    We handle the deployment process and provide ongoing support and maintenance to ensure your digital solution continues to perform optimally.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Deployment and launch</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Training and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                      <span>Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Section>

      {/* Detailed Service Sections */}
     {SERVICES.map((service, index) => (
  <Section 
    key={service.id}
    id={service.id}
    title={service.title}
    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <AnimatedElement animation="slide-up">
        <div>
          <div className="w-16 h-16 rounded-lg bg-primary-100 flex items-center justify-center mb-6">
            {getIcon(service.icon, 40)}
          </div>
          <p className="text-gray-700 mb-6">
            {service.description}
          </p>
          <p className="text-gray-700 mb-6">
            Our {service.title.toLowerCase()} services are designed to help businesses establish a strong online presence, engage with their target audience, and achieve their business goals. We combine technical expertise with creative innovation to deliver exceptional results.
          </p>
          <h3 className="text-xl font-bold text-secondary-700 mb-4">What We Offer:</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
              <span>Custom {service.title.toLowerCase()} solutions tailored to your specific needs</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
              <span>Experienced team of {service.title.toLowerCase()} specialists</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
              <span>Latest technologies and best practices</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
              <span>Ongoing support and maintenance</span>
            </li>
          </ul>
          <a 
            href="/contact" 
            className="btn-primary"
          >
            Get Started
          </a>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="fade-in" delay={300}>
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent flex items-end">
            <div className="p-6">
              <h4 className="text-white font-bold text-xl">
                Transform Your Business with {service.title}
              </h4>
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  </Section>
))}


      {/* CTA Section */}
      <Section 
        className="bg-gradient-to-br from-primary-600 to-secondary-700 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your project requirements and how we can help you achieve your business goals.
            </p>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <a 
              href="/contact" 
              className="btn bg-white text-secondary-700 hover:bg-gray-100 hover:text-secondary-800 shadow-lg"
            >
              Get a Free Consultation
            </a>
          </AnimatedElement>
        </div>
      </Section>
    </>
  );
};

export default Services;