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
        <div className="text-knox-red font-knockout text-sm tracking-widest uppercase animate-blink">
          BUILT FOR CHANGE - DESIGNED FOR YOU
        </div>
      </div>
      
      {/* Hero Section */}
        <section className="bg-gradient-to-br from-knox-black via-knox-gray to-knox-black text-white py-12 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute right-[10%] top-[20%] w-40 h-40 bg-knox-red rounded-full blur-3xl opacity-20 animate-pulse-slow" />
            <div className="absolute left-[15%] bottom-[20%] w-60 h-60 bg-knox-red rounded-full blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: "2s" }} />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-knox-red/20 border border-knox-red/30 rounded-full px-6 py-2 mb-8">
                <svg className="w-5 h-5 text-knox-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-knox-red font-bold text-sm">PREMIUM PROGRAM</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-knockout tracking-tight mb-6 animate-float">
                <span className="block">TOTAL</span>
                <span className="block text-knox-red">TRANSFORMATION</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-4">KN0X-ELITE Program</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Complete diet and workout plan with weekly trainer consultation and daily follow-ups. 
                The most comprehensive fitness transformation program designed for serious results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button 
                  onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I'm%20interested%20in%20the%20KN0X%20Elite%20Program%20for%20₹3499.%20Could%20you%20explain%20more%20about%20the%20complete%20transformation%20program,%20weekly%20consultations,%20and%20what%20makes%20it%20different%20from%20other%20programs?"}
                  className="btn-primary text-xl py-8 px-12 text-white bg-knox-red hover:bg-knox-darkred transform hover:scale-105 transition-all duration-300 shadow-2xl"
                  size="lg"
                >
                  Join Elite Program Now
                </Button>
                <div className="text-center">
                  <div className="text-4xl font-bold font-knockout text-white">₹3499</div>
                  <div className="text-gray-400">Complete Program</div>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Result Oriented
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Weekly Expert Consultation
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Daily Follow-up Support
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
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold font-knockout mb-6">What Makes Elite Program <span className="text-knox-red">Different</span></h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the most comprehensive fitness transformation with personalized coaching, 
                  daily support, and proven results that last.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <Card className="relative overflow-hidden border-2 border-transparent hover:border-knox-red/30 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold">Personalized Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Complete diet & workout combined plan tailored specifically to your goals, 
                      body type, and lifestyle preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden border-2 border-transparent hover:border-knox-red/30 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold">Weekly Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Regular one-on-one trainer sessions to monitor progress, adjust plans, 
                      and keep you motivated throughout your journey.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden border-2 border-transparent hover:border-knox-red/30 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold">Daily Follow-ups</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      Continuous support with daily check-ins, progress tracking, 
                      and immediate guidance to ensure consistent results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden border-2 border-transparent hover:border-knox-red/30 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold">Elite Access</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
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
        <section className="py-24 bg-gradient-to-br from-knox-red/5 to-knox-darkred/5">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-knox-black to-knox-gray text-white p-12 rounded-3xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-knox-red rounded-full blur-2xl" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-knox-red rounded-full blur-2xl" />
                </div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center bg-knox-red/20 border border-knox-red/30 rounded-full px-4 py-2 mb-6">
                      <svg className="w-4 h-4 text-knox-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-knox-red font-bold text-sm">EXCLUSIVE BONUS</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold font-knockout mb-6">
                      Get an <span className="text-knox-red">Extra Month FREE</span>
                    </h3>
                    
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      When you consistently follow your plan and share daily updates, you'll be rewarded 
                      with an additional month completely free. This exclusive offer is only available 
                      with our Elite Program.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-knox-red mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-lg">Complete consistency for 30 days</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-knox-red mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-lg">Daily progress updates and photos</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-knox-red mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-lg">Follow your personalized plan exactly</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-knox-red to-knox-darkred p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-2xl">
                      <div className="text-white">
                        <div className="text-6xl font-bold font-knockout mb-4">1 MONTH</div>
                        <div className="text-3xl font-bold mb-4">FREE</div>
                        <div className="text-lg opacity-90">Complete daily check-ins</div>
                        <div className="text-lg opacity-90">for 30 days</div>
                        <div className="mt-6 text-sm bg-white/20 rounded-full px-4 py-2">
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
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold font-knockout mb-6">How the <span className="text-knox-red">Elite Program</span> Works</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A simple, proven process that delivers extraordinary results through consistency, 
                  expert guidance, and daily accountability.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-knox-red/20 hidden md:block transform translate-x-1/2 z-0"></div>
                  <h3 className="text-2xl font-bold mb-4">Send Daily Updates</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Share your daily progress, meals, workouts, and photos with your dedicated trainer. 
                    Consistency is key - don't miss any day for maximum results.
                  </p>
                </div>
                
                <div className="text-center relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-knox-red/20 hidden md:block transform translate-x-1/2 z-0"></div>
                  <h3 className="text-2xl font-bold mb-4">Follow Your Plan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stick to your personalized diet and workout plan consistently. Your trainer will 
                    adjust and optimize based on your progress and feedback.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Get Rewarded</h3>
                  <p className="text-gray-600 leading-relaxed">
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
        <section className="py-16 bg-gradient-to-br from-knox-black to-knox-gray text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold font-knockout mb-6">
                Ready to Start Your <span className="text-knox-red">Elite Transformation?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands who have already transformed their lives with the KN0X Elite Program. 
                Get personalized coaching, daily support, and proven results that last a lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I%20want%20to%20join%20the%20KN0X%20Elite%20Program%20today%20for%20₹3499.%20I'm%20committed%20to%20my%20total%20transformation%20and%20ready%20to%20start%20with%20the%20premium%20coaching.%20What's%20the%20enrollment%20process?"}
                  className="btn-primary text-xl py-6 px-10 text-white bg-knox-red hover:bg-knox-darkred transform hover:scale-105 transition-all duration-300 shadow-2xl"
                  size="lg"
                >
                  Join Elite Program Now - ₹3499
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-knox-red mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-knox-red mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Expert Trainers</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-knox-red mb-2" fill="currentColor" viewBox="0 0 20 20">
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