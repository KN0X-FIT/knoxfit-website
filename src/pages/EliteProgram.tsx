import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { TestimonialStrip } from '../components/TestimonialStrip';

export function EliteProgram() {
  return (
    <>
      <SEOHead
        title="KN0X Elite Program – Complete Personalized Fitness Plan for Total Transformation"
        description="Join the KN0X Elite Program for a personalized diet & workout plan, weekly trainer support, daily follow-ups, and an extra month free. Transform your body today!"
        keywords="elite fitness program, personalized workout plan, body recomposition, weekly trainer consultation, daily follow-ups, fitness transformation plan, premium fitness coaching"
        canonical="https://knoxfit.com/elite-program"
      />
      <StructuredData
        type="service"
        data={{
          name: "KN0X Elite Program",
          description: "Complete personalized fitness transformation program with weekly trainer consultation and daily follow-ups",
          provider: {
            "@type": "Organization",
            "name": "KN0X-FIT"
          },
          offers: {
            "@type": "Offer",
            "price": "2999",
            "priceCurrency": "INR",
            "description": "Elite fitness program with personalized diet & workout plan, weekly trainer sessions, and daily follow-up support"
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Slogan Section */}
      <div className="text-center py-1 bg-knox-black">
        <div className="text-knox-red font-knockout text-sm tracking-widest uppercase animate-blink px-2">
          BUILT FOR CHANGE - DESIGNED FOR YOU
        </div>
      </div>
      
      {/* Hero Section */}
        <section className="bg-gradient-to-br from-knox-black via-knox-gray to-knox-black text-white py-10 sm:py-12 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute right-[10%] top-[20%] w-24 h-24 sm:w-40 sm:h-40 bg-knox-red rounded-full blur-3xl opacity-20 animate-pulse-slow" />
            <div className="absolute left-[15%] bottom-[20%] w-32 h-32 sm:w-60 sm:h-60 bg-knox-red rounded-full blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="container relative z-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-knox-red/20 border border-knox-red/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-knox-red mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-knox-red font-bold text-xs sm:text-sm">PREMIUM PROGRAM</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-knockout tracking-tight mb-3 sm:mb-4 animate-float elite-mobile-heading-1">
                <span className="block">TOTAL</span>
                <span className="block text-knox-red">TRANSFORMATION</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-1 sm:mt-2 elite-mobile-heading-3">KN0X-ELITE Program</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-5 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-2 elite-mobile-body-text">
                Complete diet and workout plan with weekly trainer consultation and daily follow-ups. 
                The most comprehensive fitness transformation program designed for serious results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
                <a 
                  href="https://wa.me/919380422603?text=Hi%21%20I%20want%20to%20join%20the%20KN0X%20Elite%20Program%20for%20%E2%82%B93499.%20I%27m%20committed%20to%20my%20transformation%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="elite-mobile-button elite-mobile-button-primary text-sm sm:text-base py-3 px-5 sm:py-4 sm:px-8 text-white bg-knox-red hover:bg-knox-darkred transform hover:scale-105 transition-all duration-300 shadow-2xl block text-center w-full sm:w-auto min-h-[44px] touch-manipulation"
                >
                  Join Elite Program Now - ₹3499
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-2">
                <div className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Result Oriented</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Weekly Expert Consultation</span>
                </div>
              </div>
              <div className="flex justify-center items-center text-xs sm:text-sm text-gray-400">
                <div className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 sm:mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Daily Follow-up Support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Wave */}
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path
              d="M0,0 C240,40 480,60 720,60 C960,60 1200,40 1440,0 L1440,60 L0,60 Z"
              fill="white"
            />
          </svg>
        </section>

        {/* Features Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-white elite-mobile-section-padding">
          <div className="container px-4 sm:px-6 elite-mobile-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-knockout mb-3 sm:mb-4 elite-mobile-heading-2">What Makes Elite Program <span className="text-knox-red">Different</span></h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2 sm:px-4 elite-mobile-body-text">
                  Experience the most comprehensive fitness transformation with personalized coaching, 
                  daily support, and proven results that last.
                </p>
              </div>
              
              <div className="elite-mobile-grid mb-6 sm:mb-8 md:mb-12">
                <Card className="elite-mobile-card relative overflow-hidden border-2 border-transparent hover:border-knox-red/30 transition-all duration-300 transform hover:scale-105 touch-manipulation">
                  <CardHeader className="text-center pb-2 sm:pb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                      </svg>
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold elite-mobile-heading-4">Personalized Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-3 sm:px-4">
                    <p className="text-gray-600 text-xs sm:text-sm elite-mobile-body-text">
                      Complete diet & workout combined plan tailored specifically to your goals, 
                      body type, and lifestyle preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="elite-mobile-card relative overflow-hidden border-2 border-transparent hover:border-knox-red/30 transition-all duration-300 transform hover:scale-105 touch-manipulation">
                  <CardHeader className="text-center pb-2 sm:pb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold elite-mobile-heading-4">Weekly Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-3 sm:px-4">
                    <p className="text-gray-600 text-xs sm:text-sm elite-mobile-body-text">
                      Regular one-on-one trainer sessions to monitor progress, adjust plans, 
                      and keep you motivated throughout your journey.
                    </p>
                  </CardContent>
                </Card>

                <Card className="elite-mobile-card relative overflow-hidden border-2 border-transparent hover:border-knox-red/30 transition-all duration-300 transform hover:scale-105 touch-manipulation">
                  <CardHeader className="text-center pb-2 sm:pb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold elite-mobile-heading-4">Daily Follow-ups</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-3 sm:px-4">
                    <p className="text-gray-600 text-xs sm:text-sm elite-mobile-body-text">
                      Continuous support with daily check-ins, progress tracking, 
                      and immediate guidance to ensure consistent results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="elite-mobile-card relative overflow-hidden border-2 border-transparent hover:border-knox-red/30 transition-all duration-300 transform hover:scale-105 touch-manipulation">
                  <CardHeader className="text-center pb-2 sm:pb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold elite-mobile-heading-4">Elite Access</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-3 sm:px-4">
                    <p className="text-gray-600 text-xs sm:text-sm elite-mobile-body-text">
                      Exclusive access to premium resources, advanced techniques, 
                      and elite-level coaching for maximum transformation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Free Month Highlight Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-knox-red/5 to-knox-darkred/5 elite-mobile-section-padding">
          <div className="container px-4 sm:px-6 elite-mobile-container">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-knox-black to-knox-gray text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-knox-red rounded-full blur-2xl" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-knox-red rounded-full blur-2xl" />
                </div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center bg-knox-red/20 border border-knox-red/30 rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 mb-3 sm:mb-4">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-knox-red mr-1 sm:mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-knox-red font-bold text-xs">EXCLUSIVE BONUS</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-knockout mb-3 sm:mb-4 elite-mobile-heading-2">
                      Get an <span className="text-knox-red">Extra Month FREE</span>
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed elite-mobile-body-text">
                      When you consistently follow your plan and share daily updates, you'll be rewarded 
                      with an additional month completely free. This exclusive offer is only available 
                      with our Elite Program.
                    </p>
                    
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 elite-mobile-list">
                      <li className="elite-mobile-list-item">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-knox-red mt-0.5 mr-1.5 sm:mr-2 flex-shrink-0 elite-mobile-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base elite-mobile-body-text">Complete consistency for 30 days</span>
                      </li>
                      <li className="elite-mobile-list-item">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-knox-red mt-0.5 mr-1.5 sm:mr-2 flex-shrink-0 elite-mobile-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base elite-mobile-body-text">Daily progress updates and photos</span>
                      </li>
                      <li className="elite-mobile-list-item">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-knox-red mt-0.5 mr-1.5 sm:mr-2 flex-shrink-0 elite-mobile-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base elite-mobile-body-text">Follow your personalized plan exactly</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-knox-red to-knox-darkred p-4 sm:p-6 rounded-lg sm:rounded-xl transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl">
                      <div className="text-white">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-knockout mb-2 sm:mb-3">1 MONTH</div>
                        <div className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">FREE</div>
                        <div className="text-xs sm:text-sm opacity-90">Complete daily check-ins</div>
                        <div className="text-xs sm:text-sm opacity-90">for 30 days</div>
                        <div className="mt-3 sm:mt-4 text-xs bg-white/20 rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 inline-block">
                          ₹3499 Value
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-white elite-mobile-section-padding">
          <div className="container px-4 sm:px-6 elite-mobile-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-knockout mb-3 sm:mb-4 elite-mobile-heading-2">How the <span className="text-knox-red">Elite Program</span> Works</h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2 sm:px-4 elite-mobile-body-text">
                  A simple, proven process that delivers extraordinary results through consistency, 
                  expert guidance, and daily accountability.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-12">
                <div className="text-center relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 relative z-10">
                    <span className="text-lg sm:text-xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-knox-red/20 hidden md:block transform translate-x-1/2 z-0"></div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 elite-mobile-heading-4">Send Daily Updates</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 elite-mobile-body-text">
                    Share your daily progress, meals, workouts, and photos with your dedicated trainer. 
                    Consistency is key - don't miss any day for maximum results.
                  </p>
                </div>
                
                <div className="text-center relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 relative z-10">
                    <span className="text-lg sm:text-xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-knox-red/20 hidden md:block transform translate-x-1/2 z-0"></div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 elite-mobile-heading-4">Follow Your Plan</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 elite-mobile-body-text">
                    Stick to your personalized diet and workout plan consistently. Your trainer will 
                    adjust and optimize based on your progress and feedback.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 elite-mobile-heading-4">Get Rewarded</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 elite-mobile-body-text">
                    Complete 30 days of consistent daily check-ins and plan adherence to earn 
                    an additional month of elite coaching absolutely free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Strip */}
        <TestimonialStrip />

        {/* Final CTA Section */}
        <section className="py-8 sm:py-12 bg-gradient-to-br from-knox-black to-knox-gray text-white elite-mobile-section-padding">
          <div className="container px-4 sm:px-6 elite-mobile-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-knockout mb-3 sm:mb-4 elite-mobile-heading-2">
                Ready to Start Your <span className="text-knox-red">Elite Transformation?</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 elite-mobile-body-text">
                Join thousands who have already transformed their lives with the KN0X Elite Program. 
                Get personalized coaching, daily support, and proven results that last a lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-5 sm:mb-6">
                <a 
                  href="https://wa.me/919380422603?text=Hi%21%20I%20want%20to%20join%20the%20KN0X%20Elite%20Program%20for%20%E2%82%B93499.%20I%27m%20committed%20to%20my%20transformation%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="elite-mobile-button elite-mobile-button-primary text-sm sm:text-base py-3 px-5 sm:py-4 sm:px-8 text-white bg-knox-red hover:bg-knox-darkred transform hover:scale-105 transition-all duration-300 shadow-2xl block text-center w-full sm:w-auto min-h-[44px] touch-manipulation"
                >
                  Join Elite Program Now - ₹3499
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex flex-col items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-knox-red mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-knox-red mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Expert Trainers</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-knox-red mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H7a1 1 0 01-.707-1.707l.804-.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                  <span>Daily Progress Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}