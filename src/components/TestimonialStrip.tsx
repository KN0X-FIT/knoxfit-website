import { useState, useEffect } from 'react';

// Testimonial images data with actual image paths
const testimonialImages = [
  {
    id: 1,
    name: "Kartik Hegde",
    image: "/testimonials/profile/kartik-hegde.jpg",
    type: "Muscle Gain"
  },
  {
    id: 2,
    name: "Rohit S Shet",
    image: "/testimonials/profile/rohit-s-shet.jpg",
    type: "Muscle Gain"
  },
  {
    id: 3,
    name: "Rohit R Parser",
    image: "/testimonials/profile/rohit-r-parser.jpg",
    type: "Muscle Gain"
  },
  {
    id: 4,
    name: "Prajwal Kakandaki",
    image: "/testimonials/profile/prajwal-kakandaki.jpg",
    type: "Fat Loss"
  },
  {
    id: 5,
    name: "Vignesh Hulekal",
    image: "/testimonials/profile/vignesh-hulekal.jpg",
    type: "Fat Loss"
  },
  {
    id: 6,
    name: "Arya",
    image: "/testimonials/profile/arya.jpg",
    type: "Body Recomp"
  },
  {
    id: 7,
    name: "Pavan Kumar Shetty",
    image: "/testimonials/profile/pavan-kumar-shetty.jpg",
    type: "Body Recomp"
  },
  {
    id: 8,
    name: "Nikhil H S",
    image: "/testimonials/profile/nikhil-h-s.jpg",
    type: "Muscle Gain"
  },
  {
    id: 9,
    name: "Anush Suresh Jingade",
    image: "/testimonials/profile/anush-suresh-jingade.jpg",
    type: "Muscle Gain"
  }
];

export function TestimonialStrip() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Double the array for seamless loop
  const doubledImages = [...testimonialImages, ...testimonialImages];
  const itemWidth = isMobile ? 100 : 120;

  return (
    <section className="py-4 sm:py-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-4 sm:mb-6 px-4">
          <h3 className="text-lg sm:text-xl font-bold text-knox-black mb-2">
            Real Transformations from Our Clients
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Step into our proven program to create success stories — only at KN0X-FIT.
          </p>
        </div>

        {/* Auto-scrolling Image Strip - Mobile optimized */}
        <div className="relative overflow-hidden">
          <div
            className={`flex gap-4 sm:gap-6 ${
              isPaused ? '' : 'animate-scroll-left'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              width: `${doubledImages.length * itemWidth}px`,
            }}
          >
            {doubledImages.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 text-center group"
              >
                {/* Image Container - Mobile responsive */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-knox-red/20 to-knox-darkred/20 flex items-center justify-center border-2 border-knox-red/30 group-hover:border-knox-red transition-all duration-300">
                    {/* Image or Placeholder */}
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} transformation`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
                        <span className="text-xs font-bold text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                        {/* Coming Soon Indicator */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-knox-red rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">📷</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Success indicator - Mobile responsive */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Client Info - Mobile optimized */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-knox-black truncate max-w-[80px] sm:max-w-none">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text - Mobile optimized */}
        <div className="text-center mt-2 sm:mt-3 px-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="hidden sm:inline">Hover to pause • </span>These are real results from real people
          </p>
        </div>
      </div>
    </section>
  );
}