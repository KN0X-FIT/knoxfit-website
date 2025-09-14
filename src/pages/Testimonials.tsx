import { useState, useEffect } from 'react';
import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// Sample testimonials data with before & after format
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 28,
    category: "Weight Loss",
    duration: "4 months",
    message: "KN0X-FIT changed my life completely! The personalized diet and workout plan helped me lose 15kg in just 4 months. I went from feeling tired and unmotivated to being energetic and confident. The Expert Trainers supported me every step of the way.",
    achievement: "Lost 15kg",
    metrics: {
      weight: "15kg lost",
      bodyFat: "8% reduced",
      confidence: "200% increased"
    }
  },
  {
    id: 2,
    name: "Rahul Patel",
    age: 32,
    category: "Muscle Gain",
    duration: "6 months",
    message: "I was skinny and weak before joining KN0X-FIT's Elite Program. The transformation has been incredible! I gained 8kg of pure muscle mass and my strength has doubled. The customized workout plans and nutrition guidance were perfect for my body type.",
    achievement: "Gained 8kg muscle",
    metrics: {
      muscle: "8kg gained",
      strength: "100% increased",
      confidence: "300% boosted"
    }
  },
  {
    id: 3,
    name: "Anjali Singh",
    age: 25,
    category: "Body Transformation",
    duration: "5 months",
    message: "My transformation journey with KN0X-FIT has been absolutely amazing! I didn't just lose weight, I completely changed my lifestyle. The balanced approach helped me develop healthy habits that I'll maintain forever.",
    achievement: "Complete transformation",
    metrics: {
      weight: "12kg lost",
      muscle: "3kg gained",
      energy: "Unlimited"
    }
  }
];

export function Testimonials() {
  const [email, setEmail] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll through testimonials
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3000); // 3 seconds per testimonial
      
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  // Pause auto-scroll when user hovers over testimonials
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Manual navigation
  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleEmailSubmit = () => {
    if (email) {
      alert(`Thank you! We'll send your FREE transformation plan to ${email}`);
      setEmail('');
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <>
      <SEOHead
        title="Real Client Transformations – KN0X-FIT Testimonials"
        description="Read inspiring before and after success stories from real KN0X-FIT clients. See how our personalized fitness programs change lives and start your journey today!"
        keywords="knoxfit before after, real transformations, client success stories, weight loss before after, muscle gain results, fitness transformation testimonials"
        canonical="https://knoxfit.com/testimonials"
      />
      <StructuredData
        type="website"
        data={{
          title: "Real Client Transformations – KN0X-FIT Testimonials",
          description: "Read inspiring before and after success stories from real KN0X-FIT clients. See how our personalized fitness programs change lives and start your journey today!",
          url: "https://knoxfit.com/testimonials",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15"
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-knox-black via-knox-darkred to-knox-red text-white py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-knockout mb-6">
                What Our <span className="text-yellow-400">Clients Say</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed max-w-3xl mx-auto">
                These are real transformations from real clients who trusted KN0X-FIT with their fitness journey. Their success stories speak louder than any promise we could make.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20">
                <p className="text-lg font-semibold text-yellow-400 mb-2">✨ 100% Authentic Transformations ✨</p>
                <p className="text-gray-200">Real people, real results, real stories</p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-knox-red/5 to-knox-darkred/5 rounded-2xl p-8 border border-knox-red/10">
                <h2 className="text-3xl md:text-4xl font-bold text-knox-black mb-6">
                  🎯 Before & After Transformations
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Every transformation you see here represents months of dedication, expert guidance, and personalized programming. 
                  These aren't just photos – they're proof that with the right plan and support, your goals are absolutely achievable.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No fake results
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Real people like you
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sustainable results
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Testimonials Carousel */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              {/* Progress Indicators */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index 
                          ? 'bg-knox-red scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Display */}
              <div 
                className="relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <Card className="transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border-2 border-transparent hover:border-knox-red/30 bg-white overflow-hidden group max-w-4xl mx-auto">
                        <CardContent className="p-0">
                          {/* Before & After Images */}
                          <div className="relative overflow-hidden">
                            <div className="flex">
                              {/* Before Image */}
                              <div className="w-1/2 relative">
                                <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative overflow-hidden">
                                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <div className="text-center text-white">
                                      <p className="text-2xl font-bold mb-2">BEFORE</p>
                                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span className="text-xl font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                                      </div>
                                      <p className="text-sm opacity-90">Starting Point</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                  Day 1
                                </div>
                              </div>
                              
                              {/* After Image */}
                              <div className="w-1/2 relative">
                                <div className="aspect-square bg-gradient-to-br from-green-300 to-green-400 flex items-center justify-center relative overflow-hidden">
                                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <div className="text-center text-white">
                                      <p className="text-2xl font-bold mb-2">AFTER</p>
                                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span className="text-xl font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                                      </div>
                                      <p className="text-sm opacity-90">Transformation</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                  {testimonial.duration}
                                </div>
                              </div>
                            </div>
                            
                            {/* Transformation Arrow */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                              <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-8">
                            {/* Client Info */}
                            <div className="flex items-center justify-between mb-6">
                              <div>
                                <h3 className="text-2xl font-bold text-knox-black">{testimonial.name}</h3>
                                <p className="text-knox-red font-semibold">{testimonial.age} years old • {testimonial.category}</p>
                              </div>
                              <div className="text-right">
                                <div className="bg-gradient-to-r from-knox-red to-knox-darkred text-white px-4 py-2 rounded-full text-sm font-bold">
                                  {testimonial.achievement}
                                </div>
                              </div>
                            </div>
                            
                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                              {Object.entries(testimonial.metrics).map(([key, value]) => (
                                <div key={key} className="text-center bg-gray-50 rounded-lg p-3">
                                  <p className="text-sm text-gray-600 capitalize">{key}</p>
                                  <p className="font-bold text-knox-black text-sm">{value}</p>
                                </div>
                              ))}
                            </div>
                            
                            {/* Testimonial Message */}
                            <blockquote className="text-gray-600 italic leading-relaxed border-l-4 border-knox-red pl-4">
                              "{testimonial.message}"
                            </blockquote>
                            
                            {/* Duration & Rating */}
                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-knox-red" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-semibold text-gray-700">Time: {testimonial.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-knox-red hover:text-white transition-all duration-300 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-knox-red hover:text-white transition-all duration-300 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Auto-scroll Info */}
              <div className="flex justify-center mt-8">
                <div className="bg-white rounded-full shadow-lg px-6 py-3 text-center">
                  <span className="text-sm text-gray-600">
                    💡 Hover over testimonials to pause • Auto-advances every 3 seconds
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Generation Section */}
        <section className="py-20 bg-gradient-to-br from-knox-black to-knox-darkred text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-knockout mb-6">
                  Ready to Transform Your Body Like Them?
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                  Your transformation story is waiting to be written. Join thousands who've already changed their lives with KN0X-FIT.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Email Capture */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">🎯 Get Your FREE Transformation Plan</h3>
                  <p className="text-gray-200 mb-6">Enter your email to receive a personalized fitness assessment and program recommendation absolutely free!</p>
                  
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-knox-red focus:outline-none"
                    />
                    <Button
                      className="w-full bg-knox-red hover:bg-knox-darkred text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300"
                      onClick={handleEmailSubmit}
                    >
                      Get My FREE Plan Now 🚀
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No spam, unsubscribe anytime</span>
                  </div>
                </div>
                
                {/* Right: Direct Action */}
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-6">🏆 Ready to Start Today?</h3>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Don't wait for tomorrow. These transformations happened because people took action TODAY.
                  </p>
                  
                  <div className="space-y-4">
                    <Button
                      onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSete64Jstrmxzhc05D3BYd0g45XGHrYo52EIfaViQhBelxezg/viewform?usp=sharing&ouid=108526694639854025705", "_blank")}
                      className="w-full lg:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
                      size="lg"
                    >
                      🎯 Start Your Transformation
                    </Button>
                    
                    <Button
                      onClick={() => window.location.href = "/contact"}
                      className="w-full lg:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-knox-black font-bold text-lg py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300"
                      size="lg"
                    >
                      💬 Get In Touch First
                    </Button>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="font-bold text-yellow-400">FREE</p>
                      <p className="text-gray-300">Consultation</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="font-bold text-yellow-400">24/7</p>
                      <p className="text-gray-300">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators & Statistics */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
                <div className="group transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-knox-red mb-2">95%</div>
                  <p className="text-gray-600 font-semibold">Client Success Rate</p>
                </div>
                <div className="group transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-knox-red mb-2">4.9</div>
                  <p className="text-gray-600 font-semibold">Average Rating ⭐</p>
                </div>
                <div className="group transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-knox-red mb-2">24/7</div>
                  <p className="text-gray-600 font-semibold">Expert Support</p>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-4 p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-700 mb-2">100% Authentic Results</h4>
                    <p className="text-green-600 text-sm">Real transformations from real people</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-700 mb-2">Expert Trainers</h4>
                    <p className="text-blue-600 text-sm">Professional guidance you can trust</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-700 mb-2">5-Star Rated Service</h4>
                    <p className="text-yellow-600 text-sm">Consistently excellent results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}