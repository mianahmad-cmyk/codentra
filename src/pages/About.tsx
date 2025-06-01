import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { COMPANY } from '../utils/constants';
import Section from '../components/shared/Section';
import AnimatedElement from '../components/shared/AnimatedElement';
import { Calendar, Users, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <>
  <div className="relative min-h-[75vh] flex items-center bg-gradient-to-br from-secondary-700 via-secondary-800 to-secondary-900 text-white overflow-hidden py-20 md:py-20">
  {/* Blurred Background Circles */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-primary-500 blur-3xl opacity-20"></div>
    <div className="absolute -left-20 top-1/4 w-72 h-72 rounded-full bg-secondary-300 blur-3xl opacity-20"></div>
    <div className="absolute right-1/4 bottom-10 w-80 h-80 rounded-full bg-accent-500 blur-3xl opacity-20"></div>
  </div>

  {/* Main Content */}
  <div className="container relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT SIDE TEXT */}
      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
          Our Expertise
        </span>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Powerful Services. <br />
          <span className="text-primary-300">Tailored For You.</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
          From website development to app creation, branding, SEO, and digital marketing — 
          we deliver results that drive your business forward.
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="/contact" 
            className="bg-white text-secondary-800 font-semibold py-3 px-6 rounded-md hover:bg-white/90 shadow-lg shadow-white/20 transition"
          >
            Start a Project
          </a>
          <a 
            href="/services" 
            className="border-2 border-white text-white py-3 px-6 rounded-md hover:bg-white/10 transition"
          >
            View All Services →
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE - UPDATED */}
      <div className="relative">
        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Coding Services" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="absolute top-1/4 -right-10 md:-right-20 w-40 h-40 md:w-60 md:h-60 bg-primary-500 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-secondary-500 rounded-full blur-3xl opacity-20 z-0"></div>
      </div>
    </div>
  </div>
</div>



      {/* Our Mission */}
     <Section title="Our Mission" className="bg-white overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <AnimatedElement animation="slide-up">
        <div>
          <h3 className="text-2xl font-bold text-secondary-700 mb-4">
            Smart Software. Stunning Design.
          </h3>
          <p className="text-gray-700 mb-6">
            At CODENTRA, our mission is to empower businesses through innovative digital solutions. We believe that powerful software combined with beautiful design creates transformative experiences that drive business growth.
          </p>
          <p className="text-gray-700 mb-6">
            We are passionate about leveraging cutting-edge technologies to solve complex business challenges and create digital products that users love. Our team of experts works collaboratively to deliver solutions that are not just functional but also visually stunning and user-friendly.
          </p>
          <p className="text-gray-700">
            Whether you're a startup looking to build your first product or an established enterprise aiming to innovate, CODENTRA is your trusted partner in the digital journey.
          </p>
        </div>
      </AnimatedElement>
      
      <AnimatedElement animation="fade-in" delay={300}>
        <div className="relative max-w-full">
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Team collaboration" 
            className="rounded-lg shadow-xl w-full"
          />
          {/* Responsive position fix */}
          <div className="absolute bottom-0 left-0 translate-x-[-1.5rem] translate-y-[1.5rem] w-32 h-32 md:w-40 md:h-40 bg-primary-500 opacity-10 rounded-full z-0"></div>
          <div className="absolute top-0 right-0 translate-x-[1.5rem] translate-y-[-1.5rem] w-32 h-32 md:w-40 md:h-40 bg-secondary-500 opacity-10 rounded-full z-0"></div>
        </div>
      </AnimatedElement>

    </div>
  </div>
</Section>


     {/* Company Facts */}
<Section className="bg-gray-50">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <AnimatedElement className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
        <Calendar className="h-8 w-8 text-primary-500" />
      </div>
      <h3 className="text-3xl font-bold text-secondary-700 mb-2">2025</h3> {/* Founded year */}
      <p className="text-gray-600">Founded</p>
    </AnimatedElement>

    <AnimatedElement className="bg-white p-6 rounded-lg shadow-md text-center" delay={150}>
      <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
        <Users className="h-8 w-8 text-primary-500" />
      </div>
      <h3 className="text-3xl font-bold text-secondary-700 mb-2">10+</h3>
      <p className="text-gray-600">Team Members</p>
    </AnimatedElement>

    <AnimatedElement className="bg-white p-6 rounded-lg shadow-md text-center" delay={300}>
      <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
        <Briefcase className="h-8 w-8 text-primary-500" />
      </div>
      <h3 className="text-3xl font-bold text-secondary-700 mb-2">20+</h3> {/* Projects Completed */}
      <p className="text-gray-600">Projects Completed</p>
    </AnimatedElement>

    <AnimatedElement className="bg-white p-6 rounded-lg shadow-md text-center" delay={450}>
      <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
        <Award className="h-8 w-8 text-primary-500" />
      </div>
      <h3 className="text-3xl font-bold text-secondary-700 mb-2">5+</h3> {/* Awards Won */}
      <p className="text-gray-600">Awards Won</p>
    </AnimatedElement>
  </div>
</Section>


      {/* CEO Section */}
      <Section title="Meet Our Leadership">
  <AnimatedElement animation="fade-in">
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="text-primary-500 font-medium mb-2">Founder & CEO</span>
          <h3 className="text-2xl font-bold text-secondary-700 mb-4">Ahmad Fiaz</h3>
          <p className="text-gray-700 mb-6">
            With over 2 years of experience in the tech industry, Ahmad founded CODENTRA with a vision to create digital solutions that combine technical excellence with stunning design.
          </p>
          <p className="text-gray-700 mb-6">
            Although new to the industry, Ahmad is passionate and eager to learn, bringing fresh perspectives and innovative ideas to CODENTRA. His dedication to quality and creativity drives the company forward every day.
          </p>
          <p className="text-gray-700 mb-6">
            Ahmad believes in continuous growth and collaboration, fostering an environment where ideas flourish and the best solutions are developed to meet clients' unique needs.
          </p>
        </div>
        <div className="h-full">
          <img 
            src="ceo.webp" 
            alt="Ahmad Fiaz - CEO"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </AnimatedElement>
</Section>


      {/* Timeline/Journey */}
    <Section title="Our Journey" subtitle="The milestones that shaped CODENTRA" className="bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-16 top-0 bottom-0 w-1 bg-primary-200 hidden md:block"></div>

      {/* Journey steps */}
      <div className="space-y-12">
        <AnimatedElement className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 flex md:block">
            <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg z-10">1</div>
            <div className="block md:hidden h-1 w-12 bg-primary-200 self-center"></div>
          </div>
          <div className="ml-6 md:ml-12 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-secondary-700 mb-3">Vision Ignited</h3>
            <p className="text-gray-600">
              CODENTRA was born with a mission to blend creativity and smart software solutions to help businesses succeed in the digital age.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement className="flex flex-col md:flex-row" delay={200}>
          <div className="flex-shrink-0 flex md:block">
            <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg z-10">2</div>
            <div className="block md:hidden h-1 w-12 bg-primary-200 self-center"></div>
          </div>
          <div className="ml-6 md:ml-12 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-secondary-700 mb-3">Team Formation</h3>
            <p className="text-gray-600">
              We gathered a team of passionate developers, designers, and marketers committed to delivering excellence.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement className="flex flex-col md:flex-row" delay={400}>
          <div className="flex-shrink-0 flex md:block">
            <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg z-10">3</div>
            <div className="block md:hidden h-1 w-12 bg-primary-200 self-center"></div>
          </div>
          <div className="ml-6 md:ml-12 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-secondary-700 mb-3">Scaling Up</h3>
            <p className="text-gray-600">
              Our portfolio expanded rapidly with successful client projects in development, branding, and digital strategy.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement className="flex flex-col md:flex-row" delay={600}>
          <div className="flex-shrink-0 flex md:block">
            <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg z-10">4</div>
            <div className="block md:hidden h-1 w-12 bg-primary-200 self-center"></div>
          </div>
          <div className="ml-6 md:ml-12 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-secondary-700 mb-3">Global Presence</h3>
            <p className="text-gray-600">
              CODENTRA now works with international clients, bringing innovative solutions across industries with lasting impact.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </div>
  </div>
</Section>


      {/* CTA Banner */}
      <Section className="bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="text-center">
          <AnimatedElement animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to work with us?
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how we can help bring your vision to life.
            </p>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <Link 
              to="/contact" 
              className="btn bg-white text-secondary-700 hover:bg-gray-100 hover:text-secondary-800 shadow-lg"
            >
              Get in Touch
            </Link>
          </AnimatedElement>
        </div>
      </Section>
    </>
  );
};

export default About;