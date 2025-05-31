import { useRef, useEffect } from 'react';
import Section from '../shared/Section';
import AnimatedElement from '../shared/AnimatedElement';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alice Johnson',
    company: 'TechCorp',
    quote:
      'Working with this team has been a transformative experience. Their attention to detail and dedication made all the difference in our project’s success.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Bob Smith',
    company: 'Innovate Ltd',
    quote:
      'The level of professionalism and expertise demonstrated exceeded all our expectations. Communication was clear and the results outstanding.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    name: 'Carol White',
    company: 'DesignCo',
    quote:
      'We are thrilled with the creative solutions provided. Their work helped us achieve our goals faster and with much better quality than anticipated.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    name: 'David Brown',
    company: 'BuildIt',
    quote:
      'Support was amazing throughout. Their prompt responses and willingness to go the extra mile impressed us.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 5,
    name: 'Eva Green',
    company: 'MarketPro',
    quote:
      'Exceeded our expectations in every way. Their strategic approach helped us grow significantly in a short time.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: 6,
    name: 'Frank Miller',
    company: 'DevWorks',
    quote:
      'Solid work and communication. They kept us informed every step of the way and delivered on time.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: 7,
    name: 'Grace Lee',
    company: 'Bright Ideas',
    quote:
      'Innovative and efficient solutions that fit perfectly with our vision. Highly recommended.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: 8,
    name: 'Henry Adams',
    company: 'NextGen',
    quote:
      'Reliable and professional team. Delivered high-quality results on time and within budget.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: 9,
    name: 'Isabel Clark',
    company: 'Creative Minds',
    quote:
      'Delivered exactly what we needed. Their creativity and professionalism stood out.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: 10,
    name: 'Jack Wilson',
    company: 'TechFlow',
    quote:
      'Always available and helpful, making the entire process smooth and stress-free.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: 11,
    name: 'Karen Martinez',
    company: 'PixelPerfect',
    quote:
      'Quality design and great communication throughout the project. Would work with them again.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    id: 12,
    name: 'Liam Davis',
    company: 'CodeCraft',
    quote:
      'Fantastic work ethic and attention to detail. Our project was handled with utmost care.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 13,
    name: 'Mia Scott',
    company: 'BrandWorks',
    quote:
      'Creative, professional, and timely. Helped us build our brand identity seamlessly.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    let position = 0;

    const scroll = () => {
      position += 0.5;

      if (position >= (scrollContainer.firstElementChild?.clientWidth || 0)) {
        position = 0;

        // Move first testimonial to the end for infinite loop effect
        const firstItem = scrollContainer.firstElementChild;
        if (firstItem) {
          scrollContainer.appendChild(firstItem.cloneNode(true));
          scrollContainer.removeChild(firstItem);
        }
      }

      scrollContainer.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => (animationId = requestAnimationFrame(scroll));

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
      title="Client Testimonials"
      subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
      className="py-16"
    >
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-6 py-6"
            style={{ willChange: 'transform' }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-80 flex-shrink-0 h-[420px]"
              >
                <AnimatedElement className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow mb-4"
                  />
                  <div className="flex mb-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < testimonial.rating ? '' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="italic text-gray-700 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="font-bold text-secondary-700">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </AnimatedElement>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
