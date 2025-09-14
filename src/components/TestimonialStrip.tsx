import { useState } from 'react';

// Sample testimonial images data - these will be placeholders for now
const testimonialImages = [
  {
    id: 1,
    name: "Priya S.",
    image: "/api/placeholder/80/80",
    type: "Weight Loss"
  },
  {
    id: 2,
    name: "Rahul P.",
    image: "/api/placeholder/80/80",
    type: "Muscle Gain"
  },
  {
    id: 3,
    name: "Anjali M.",
    image: "/api/placeholder/80/80",
    type: "Body Transformation"
  },
  {
    id: 4,
    name: "Vikram K.",
    image: "/api/placeholder/80/80",
    type: "General Fitness"
  },
  {
    id: 5,
    name: "Kavya R.",
    image: "/api/placeholder/80/80",
    type: "Weight Loss"
  },
  {
    id: 6,
    name: "Arjun T.",
    image: "/api/placeholder/80/80",
    type: "Muscle Gain"
  },
  {
    id: 7,
    name: "Meera L.",
    image: "/api/placeholder/80/80",
    type: "Body Transformation"
  },
  {
    id: 8,
    name: "Rohit B.",
    image: "/api/placeholder/80/80",
    type: "General Fitness"
  }
];

export function TestimonialStrip() {
  const [isPaused, setIsPaused] = useState(false);

  // Double the array for seamless loop
  const doubledImages = [...testimonialImages, ...testimonialImages];

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-knox-black mb-2">
            Real Transformations from Our Clients
          </h3>
          <p className="text-sm text-gray-600">
            Join thousands who've already achieved their fitness goals with KN0X-FIT
          </p>
        </div>

        {/* Auto-scrolling Image Strip */}
        <div className="relative overflow-hidden">
          <div
            className={`flex gap-6 ${
              isPaused ? '' : 'animate-scroll-left'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              width: `${doubledImages.length * 120}px`,
            }}
          >
            {doubledImages.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 text-center group"
              >
                {/* Image Container */}
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-knox-red/20 to-knox-darkred/20 flex items-center justify-center border-2 border-knox-red/30 group-hover:border-knox-red transition-all duration-300">
                    {/* Placeholder for actual images */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Success indicator */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Client Info */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-knox-black">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            💡 Hover to pause • These are real results from real people
          </p>
        </div>
      </div>
    </section>
  );
}