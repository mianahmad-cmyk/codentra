import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChoose from '../components/home/WhyChoose';
// import Portfolio from '../components/home/Portfolio';
import Clients from '../components/home/Clients';
import TechStack from '../components/home/TechStack';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      {/* <Portfolio /> */}
      <Testimonials />
      <TechStack />
      <Clients />
      <CTA />
    </>
  );
};

export default Home;