import React, { useState, useEffect, useRef } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/ui/button';

interface Testimonial {
  id: string;
  name: string;
  age: number;
  program: string;
  quote: string;
  achievement: string;
  beforeImage: string;
  afterImage: string;
}

// Real client testimonial data
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Kartik Hegde',
    age: 22,
    program: 'KN0X-FIT Total Transformation Program',
    quote: 'KN0X-FIT helped me transform completely! In just 6 months, I went from 70 kg to 81 kg and built nearly 7 kg of solid lean muscle. The personalized workouts and diet plans gave me strength, size, and the confidence I always wanted!',
    achievement: 'Gained 11 kg & 6.9 kg lean mass',
    beforeImage: '/testimonials/before/kartik-hegde-before.jpg',
    afterImage: '/testimonials/after/kartik-hegde-after.jpg'
  },
  {
    id: '2',
    name: 'Rohit R Parser',
    age: 22,
    program: 'KN0X-FIT Total Transformation Program',
    quote: 'I\'ve always been skinny, but KN0X-FIT changed that fast! In 3 months I went from 51 to 56 kg and built muscle I never thought I could. The customized guidance and support were incredible. I finally feel confident in my own body and motivated to keep going!',
    achievement: 'Gained 5 kg & 3.7 kg lean mass',
    beforeImage: '/testimonials/before/rohit-r-parser-before.jpg',
    afterImage: '/testimonials/after/rohit-r-parser-after.jpg'
  },
  {
    id: '3',
    name: 'Prajwal Kakandaki',
    age: 26,
    program: 'KN0X-FIT Fat Loss Total Transformation Program',
    quote: 'KN0X-FIT completely transformed my lifestyle! I dropped from 85 to 65 kg in 7 months and got rid of stubborn fat. I feel lighter, faster, and healthier than ever thanks to their expert coaching and constant motivation. This journey has not only changed my body but also my mindset towards fitness!',
    achievement: 'Lost 20 kg & 15.8 kg fat',
    beforeImage: '/testimonials/before/prajwal-kakandaki-before.jpg',
    afterImage: '/testimonials/after/prajwal-kakandaki-after.jpg'
  },
  {
    id: '4',
    name: 'Pavan Kumar Shetty',
    age: 25,
    program: 'KN0X-FIT Total Transformation Program',
    quote: 'KN0X-FIT has been a game changer! Over 8 months I went from 75 to 88 kg, building nearly 9 kg of lean muscle and transforming my strength. The trainers pushed me to my limits and tailored every workout perfectly. I feel powerful, confident, and ready to chase bigger goals — this is just the beginning of my fitness journey!',
    achievement: 'Gained 13 kg & 8.9 kg lean mass',
    beforeImage: '/testimonials/before/pavan-kumar-shetty-before.jpg',
    afterImage: '/testimonials/after/pavan-kumar-shetty-after.jpg'
  },
  {
    id: '5',
    name: 'Vignesh Hulekal',
    age: 24,
    program: 'KN0X-FIT Fat Loss Total Transformation Program',
    quote: 'I shed 15 kg in 7 months with KN0X-FIT and completely reshaped my body! The workouts were intense yet fun, and the diet plan was spot on. I feel lighter, healthier, and more energetic than I have in years. This transformation gave me my confidence and self-belief back!',
    achievement: 'Lost 15 kg & 16.1 kg fat',
    beforeImage: '/testimonials/before/vignesh-hulekal-before.jpg',
    afterImage: '/testimonials/after/vignesh-hulekal-after.jpg'
  },
  {
    id: '6',
    name: 'Arya',
    age: 20,
    program: 'KN0X-FIT Fat Loss Total Transformation Program',
    quote: 'KN0X-FIT helped me drop from 97 to 91 kg in just 5 months while gaining muscle at the same time! I\'ve become fitter, leaner, and far more active than before. This journey has completely changed my outlook on fitness and health. I feel like a better version of myself every single day!',
    achievement: 'Lost 6 kg & 8.4 kg fat',
    beforeImage: '/testimonials/before/arya-before.jpg',
    afterImage: '/testimonials/after/arya-after.jpg'
  },
  {
    id: '7',
    name: 'Nikhil H S',
    age: 24,
    program: 'KN0X-FIT Total Transformation Program',
    quote: 'KN0X-FIT completely changed my fitness game! In just over 6 months I went from 57 to 64 kg, building nearly 5 kg of lean muscle and getting visibly stronger. The coaches made every session count with personalized plans. I feel more confident, energetic, and motivated to push for even bigger milestones!',
    achievement: 'Gained 7 kg & 4.8 kg lean mass',
    beforeImage: '/testimonials/before/nikhil-h-s-before.jpg',
    afterImage: '/testimonials/after/nikhil-h-s-after.jpg'
  },
  {
    id: '8',
    name: 'Rohit S Shet',
    age: 21,
    program: 'KN0X-FIT Total Transformation Muscle Gain Program',
    quote: 'Joining KN0X-FIT was the best decision I\'ve made! In just 6 months I went from 60 to 68 kg, adding solid muscle and strength. The expert trainers kept me motivated and the tailored plan made all the difference. I now feel stronger, more confident, and ready to take on any challenge!',
    achievement: 'Gained 8 kg & 5.4 kg lean mass',
    beforeImage: '/testimonials/before/rohit-s-shet-before.jpg',
    afterImage: '/testimonials/after/rohit-s-shet-after.jpg'
  },
  {
    id: '9',
    name: 'Anush Suresh Jingade',
    age: 24,
    program: 'KN0X-FIT Muscle Gain Total Transformation Program',
    quote: 'KN0X-FIT has been a life-changing experience! In just 9.5 months, I went from 57 to 68 kg, building over 8 kg of lean muscle. The customized training plans and continuous guidance from the coaches kept me motivated and consistent.',
    achievement: 'Gained 11 kg & 8.1 kg lean mass',
    beforeImage: '/testimonials/before/anush-suresh-jingade-before.jpg',
    afterImage: '/testimonials/after/anush-suresh-jingade-after.jpg'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-rotation effect
  useEffect(() => {
    // Start the interval
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex(prevIndex => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 3000); // 3 seconds interval
    };

    // Clear any existing interval and start a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startInterval();

    // Cleanup on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEOHead
        title="Real Client Transformations – KN0X-FIT Testimonials"
        description="Read inspiring before and after success stories from real KN0X-FIT clients. See how our personalized fitness programs change lives and start your journey today!"
        keywords="fitness transformation, before and after, weight loss success, muscle gain results, KN0X-FIT testimonials, real client results, body transformation"
        canonical="https://knoxfit.com/testimonials"
      />
      
      {/* Fixed button removed as requested */}
      
      <main className="flex-1">
        {/* Page Title & Introduction */}
        <section className="bg-knox-black text-white relative overflow-hidden">
          {/* 3D Effect Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute right-[20%] top-[25%] w-36 h-36 bg-knox-red rounded-full blur-3xl opacity-20 animate-pulse-slow" />
            <div className="absolute left-[10%] bottom-[20%] w-32 h-32 bg-knox-red rounded-full blur-3xl opacity-15 animate-pulse-slow" />
          </div>
          <div className="container mx-auto px-4 relative z-10 py-16 sm:py-20">
            <div className="text-center max-w-3xl mx-auto">
              {/* Brand Slogan */}
              <div className="text-knox-red font-knockout text-lg tracking-widest uppercase mb-4 animate-pulse">
                BUILT FOR CHANGE - DESIGNED FOR YOU
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-knockout text-white mb-4">What Our Clients Say</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to our transformation gallery! These are real success stories from real clients who used KN0X-FIT's personalized programs to achieve their fitness goals.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel Section */}
        <section className="py-8 sm:py-12 bg-knox-black text-white relative overflow-hidden">
          {/* 3D Effect Background Elements - Similar to home page */}
          <div className="absolute inset-0 z-0">
            <div className="absolute right-[10%] top-[15%] w-32 h-32 bg-knox-red rounded-full blur-3xl opacity-20 animate-pulse-slow" />
            <div className="absolute left-[15%] top-[35%] w-48 h-48 bg-knox-red rounded-full blur-3xl opacity-10 animate-pulse-slow" />
            <div className="absolute right-[15%] bottom-[20%] w-40 h-40 bg-knox-red blob-shape blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            {/* Auto-rotating testimonial carousel */}
            <div 
              className="relative max-w-4xl mx-auto" 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Current testimonial card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02]">
                {/* Before & After Images - Improved for mobile */}
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="absolute left-0 top-0 h-full w-1/2" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#000" fillOpacity="0.05" />
                      <circle cx="30" cy="30" r="20" fill="#000" fillOpacity="0.1" />
                      <circle cx="70" cy="70" r="30" fill="#000" fillOpacity="0.1" />
                    </svg>
                    <svg className="absolute right-0 top-0 h-full w-1/2" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#e11d48" fillOpacity="0.05" />
                      <circle cx="30" cy="70" r="25" fill="#e11d48" fillOpacity="0.1" />
                      <circle cx="70" cy="30" r="15" fill="#e11d48" fillOpacity="0.1" />
                    </svg>
                  </div>
                  
                  {/* Before Side */}
                  <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden rounded-tr-3xl">
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-knox-black text-white text-xs sm:text-sm py-1 px-2 sm:px-4 rounded-full z-10 shadow-lg flex items-center space-x-1">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Before</span>
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200">
                      <img 
                        src={testimonials[currentIndex].beforeImage} 
                        alt={`${testimonials[currentIndex].name} before transformation`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* After Side */}
                  <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden rounded-tl-3xl">
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-knox-red text-white text-xs sm:text-sm py-1 px-2 sm:px-4 rounded-full z-10 shadow-lg flex items-center space-x-1">
                      <span>After</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div className="w-full h-full bg-gradient-to-bl from-knox-red/10 to-gray-200">
                      <img 
                        src={testimonials[currentIndex].afterImage} 
                        alt={`${testimonials[currentIndex].name} after transformation`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Divider with Animation */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-0.5 sm:w-1 h-full bg-white shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-knox-red/30 via-white to-knox-red/30 animate-pulse-slow"></div>
                    </div>
                    <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-knox-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content - Improved for mobile */}
                <div className="p-4 sm:p-8 bg-white">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="flex space-x-1">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-knox-red scale-125' : 'bg-gray-600'}`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-800 text-base sm:text-xl italic mb-4 sm:mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2">
                      <h3 className="font-bold text-xl sm:text-2xl text-knox-red">{testimonials[currentIndex].name}</h3>
                      <span className="text-gray-600 text-xs sm:text-sm">{testimonials[currentIndex].age} years old</span>
                    </div>
                    <p className="text-knox-red font-semibold text-base sm:text-lg mb-1">{testimonials[currentIndex].achievement}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{testimonials[currentIndex].program}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation arrows - Improved for mobile */}
              <button 
                onClick={() => setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="absolute left-0 sm:-left-5 top-1/2 transform -translate-y-1/2 sm:-translate-x-5 bg-knox-red text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all duration-300 z-10"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="absolute right-0 sm:-right-5 top-1/2 transform -translate-y-1/2 sm:translate-x-5 bg-knox-red text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all duration-300 z-10"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Lead Generation Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-knox-red to-knox-darkred">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold font-knockout mb-6">
                Ready to Transform Your Body Like Them?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Start your journey today and become our next success story!
              </p>
              
              {/* Contact Button */}
              <div className="flex justify-center mb-8">
                <Button 
                  asChild
                  className="bg-knox-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap flex items-center gap-2 shadow-lg"
                >
                  <a href="/contact">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Get Started Today</span>
                  </a>
                </Button>
              </div>
              
              {/* Main CTA Buttons - Improved for mobile */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                <Button 
                  asChild
                  className="bg-white text-knox-red hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors duration-200 shadow-lg w-full sm:w-auto"
                >
                  <a href="/contact">Start Your Transformation</a>
                </Button>
                <Button 
                  asChild
                  className="bg-knox-red text-white hover:bg-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors duration-200 shadow-lg border-2 border-white w-full sm:w-auto"
                >
                  <a href="/free-plan">Get Free Plan</a>
                </Button>
              </div>
              
              <p className="text-sm opacity-75 mt-6">
                Join our growing community of successful transformations
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Testimonials;