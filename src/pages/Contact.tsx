import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY } from '../utils/constants';
import Section from '../components/shared/Section';
import AnimatedElement from '../components/shared/AnimatedElement';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  

  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Page Header
      <div className="bg-gradient-to-br from-secondary-700 to-secondary-900 text-white py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Have a question or ready to start your project? Get in touch with our team.
            </p>
          </div>
        </div>
      </div> */}

      {/* Contact Form and Info */}
      <Section>
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
    {/* Contact Form */}
    <AnimatedElement className="lg:col-span-3 card p-6 md:p-8" animation="slide-up">
      <h2 className="text-2xl font-bold text-secondary-700 mb-6">Send Us a Message</h2>

      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
          <p className="font-medium">Thank you for your message!</p>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
          <p className="font-medium">Error</p>
          <p>{error}</p>
        </div>
      )}

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          setError(null);

          try {
            const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:Lgx0vdaV/contact_messages', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message.');

            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
          } catch (err) {
            setError(err.message);
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="(123) 456-7890"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            >
              <option value="">Select a service</option>
              <option value="web-development">Website Development</option>
              <option value="web-design">Website Design</option>
              <option value="app-development">App Development</option>
              <option value="saas-development">SaaS Development</option>
              <option value="seo">SEO</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="design-services">Design Services</option>
              <option value="social-media">Social Media Marketing</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="Tell us about your project or inquiry..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full sm:w-auto"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </span>
          )}
        </button>
      </form>
    </AnimatedElement>

    {/* Contact Info */}
    <AnimatedElement className="lg:col-span-2" animation="slide-up" delay={200}>
      <div className="card p-6 md:p-8 bg-secondary-700 text-white mb-8">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <ul className="space-y-6">
          <li className="flex">
            <MapPin className="w-6 h-6 text-primary-300 flex-shrink-0 mr-4" />
            <div>
              <h3 className="font-semibold text-white mb-1">Our Location</h3>
              <p className="text-gray-300">{COMPANY.address}</p>
            </div>
          </li>
          <li className="flex">
            <Phone className="w-6 h-6 text-primary-300 flex-shrink-0 mr-4" />
            <div>
              <h3 className="font-semibold text-white mb-1">Phone Number</h3>
              <p className="text-gray-300">
                <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </p>
            </div>
          </li>
          <li className="flex">
            <Mail className="w-6 h-6 text-primary-300 flex-shrink-0 mr-4" />
            <div>
              <h3 className="font-semibold text-white mb-1">Email Address</h3>
              <p className="text-gray-300">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </li>
          <li className="flex">
            <Clock className="w-6 h-6 text-primary-300 flex-shrink-0 mr-4" />
            <div>
              <h3 className="font-semibold text-white mb-1">Business Hours</h3>
              <p className="text-gray-300">Monday - Friday: 9AM - 6PM</p>
              <p className="text-gray-300">Saturday - Sunday: Closed</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="card p-6 md:p-8">
        <h2 className="text-2xl font-bold text-secondary-700 mb-4">Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest updates, insights, and offers.
        </p>
        
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value;

            try {
              const res = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:q0RRCSR7/newsletter_subscribers', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
              });

              if (!res.ok) throw new Error('Subscription failed.');
              alert('Subscribed successfully!');
              e.target.reset();
            } catch (err) {
              alert('Error: ' + err.message);
            }
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </AnimatedElement>
  </div>
</Section>


      {/* Map Section (placeholder)
      <Section className="bg-gray-50 py-12" fullWidth>
        <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">Interactive Map would be embedded here</p>
          </div>
        </div>
      </Section> */}

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary-700 mb-2">How long does it take to complete a website?</h3>
              <p className="text-gray-600">
                The timeline varies depending on the project complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary-700 mb-2">What is your pricing structure?</h3>
              <p className="text-gray-600">
                Our pricing is based on the scope and requirements of your project. We offer transparent pricing with no hidden fees. Contact us for a customized quote based on your specific needs.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary-700 mb-2">Do you provide ongoing support after project completion?</h3>
              <p className="text-gray-600">
                Yes, we offer various maintenance and support packages to ensure your digital solution continues to perform optimally. We can discuss these options during our consultation.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary-700 mb-2">What is your process for starting a new project?</h3>
              <p className="text-gray-600">
                We begin with an initial consultation to understand your requirements, followed by a proposal with scope, timeline, and pricing. Once approved, we move to the discovery phase, design, development, and finally launch and support.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  );
};

export default Contact;