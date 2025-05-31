import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Section from '../components/shared/Section';
import AnimatedElement from '../components/shared/AnimatedElement';

const Blog = () => {
  return (
    <>
      {/* Page Header */}
      {/* <div className="bg-gradient-to-br from-secondary-700 to-secondary-900 text-white py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-300">
              Insights, tips, and updates from our team of experts.
            </p>
          </div>
        </div>
      </div> */}

      {/* Coming Soon Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="fade-in">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="h-12 w-12 text-primary-500" />
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-6">
              Coming Soon
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={400}>
            <p className="text-xl text-gray-600 mb-10">
              We're working on valuable content for you. Our blog will feature insights, tips, and industry trends to help your business succeed in the digital landscape.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={600}>
            <div className="card p-8 md:p-10 max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-secondary-700 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to be notified when we launch our blog and to receive our latest updates.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Future Topics */}
      <Section title="Topics We'll Cover" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedElement className="card p-6 hover:shadow-lg transition-shadow" delay={100}>
            <h3 className="text-xl font-bold text-secondary-700 mb-3">
              Web Development Trends
            </h3>
            <p className="text-gray-600">
              Insights on the latest web development technologies, frameworks, and best practices to help you build modern, high-performing websites.
            </p>
          </AnimatedElement>
          
          <AnimatedElement className="card p-6 hover:shadow-lg transition-shadow" delay={200}>
            <h3 className="text-xl font-bold text-secondary-700 mb-3">
              UI/UX Design Tips
            </h3>
            <p className="text-gray-600">
              Learn about user interface and experience design principles that can enhance user engagement and satisfaction with your digital products.
            </p>
          </AnimatedElement>
          
          <AnimatedElement className="card p-6 hover:shadow-lg transition-shadow" delay={300}>
            <h3 className="text-xl font-bold text-secondary-700 mb-3">
              Digital Marketing Strategies
            </h3>
            <p className="text-gray-600">
              Effective digital marketing approaches to help your business reach its target audience and achieve marketing goals.
            </p>
          </AnimatedElement>
          
          <AnimatedElement className="card p-6 hover:shadow-lg transition-shadow" delay={400}>
            <h3 className="text-xl font-bold text-secondary-700 mb-3">
              SEO Best Practices
            </h3>
            <p className="text-gray-600">
              Tips and techniques to improve your website's search engine rankings and drive organic traffic.
            </p>
          </AnimatedElement>
          
          <AnimatedElement className="card p-6 hover:shadow-lg transition-shadow" delay={500}>
            <h3 className="text-xl font-bold text-secondary-700 mb-3">
              Mobile App Development
            </h3>
            <p className="text-gray-600">
              Insights on building successful mobile applications that provide value to users and achieve business objectives.
            </p>
          </AnimatedElement>
          
          <AnimatedElement className="card p-6 hover:shadow-lg transition-shadow" delay={600}>
            <h3 className="text-xl font-bold text-secondary-700 mb-3">
              Business Growth through Technology
            </h3>
            <p className="text-gray-600">
              How businesses can leverage technology to streamline operations, enhance customer experiences, and drive growth.
            </p>
          </AnimatedElement>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="text-center">
          <AnimatedElement animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Digital Solutions Now?
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait for our blog! Contact us today to discuss how we can help your business thrive in the digital landscape.
            </p>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <Link 
              to="/contact" 
              className="btn bg-white text-secondary-700 hover:bg-gray-100 hover:text-secondary-800 shadow-lg"
            >
              Contact Us
            </Link>
          </AnimatedElement>
        </div>
      </Section>
    </>
  );
};

export default Blog;