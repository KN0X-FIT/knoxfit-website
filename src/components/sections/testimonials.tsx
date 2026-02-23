import React from 'react';
import { Card, CardContent } from '../ui/card';
import { LazyImage } from '../LazyImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  beforeImage?: string;
  afterImage?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kartik Hegde",
    role: "",
    content: "KN0X-FIT helped me transform completely! In just 6 months, I went from 70 kg to 81 kg and built nearly 7 kg of solid lean muscle. The personalized workouts and diet plans gave me strength, size, and the confidence I always wanted!",
    avatar: "/images/sucess stories/Kartik Hegde.jpg"
  },
  {
    id: 2,
    name: "Nikhil H S",
    role: "",
    content: "KN0X-FIT completely changed my fitness game! In just over 6 months I went from 57 to 64 kg, building nearly 5 kg of lean muscle and getting visibly stronger. The coaches made every session count with personalized plans. I feel more confident, energetic, and motivated to push for even bigger milestones!",
    avatar: "/images/sucess stories/Nikhil H S.jpg"
  },
  {
    id: 3,
    name: "Rohit R Parser",
    role: "",
    content: "I've always been skinny, but KN0X-FIT changed that fast! In 3 months I went from 51 to 56 kg and built muscle I never thought I could. The customized guidance and support were incredible. I finally feel confident in my own body and motivated to keep going!",
    avatar: "/images/sucess stories/Rohit R Parser.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="testimonials">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-knox-red font-knockout text-sm tracking-widest uppercase mb-4">
            SUCCESS STORIES
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-knox-black mb-4">
            Real People, Real Results
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Hear from our clients who transformed their lives with KN0X-FIT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-effect h-full">
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <LazyImage
                      src={testimonial.avatar}
                      alt={`${testimonial.name} - Success Story`}
                      className="w-16 h-16 rounded-xl object-cover"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm sm:text-base italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <a 
            href="/testimonials" 
            className="inline-block bg-knox-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
          >
            See More Success Stories
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <div className="flex items-center">
              <span className="text-3xl sm:text-4xl font-bold font-knockout text-knox-red mr-2">100%</span>
              <span className="text-gray-600 text-sm sm:text-base">Satisfaction Rate</span>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden sm:block" />
            <div className="flex items-center">
              <span className="text-3xl sm:text-4xl font-bold font-knockout text-knox-red mr-2">4.9/5</span>
              <span className="text-gray-600 text-sm sm:text-base">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}