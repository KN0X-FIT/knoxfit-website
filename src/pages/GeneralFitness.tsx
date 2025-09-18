import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';
import { Button } from '../components/ui/button';
import { TestimonialStrip } from '../components/TestimonialStrip';

export function GeneralFitness() {
  return (
    <>
      <SEOHead
        title="General Fitness – Balanced Diet & Workout Plan | Beginner Fitness Program | KN0X-FIT"
        description="Start your fitness journey with our beginner fitness plan featuring balanced diet for health, one trainer consultation, and sustainable workout plan. Perfect for home or gym workouts at ₹999/month."
        keywords="beginner fitness plan, balanced diet for health, one trainer consultation, sustainable workout plan, general fitness program, home workout plan, gym routine for beginners"
        canonical="https://knoxfit.com/general-fitness"
        ogImage="https://knoxfit.com/general-fitness-hero.jpg"
      />
      <StructuredData
        type="service"
        data={{
          name: "General Fitness Program",
          description: "Balanced diet and workout plan with one trainer session for beginners and anyone looking to build sustainable fitness habits",
          provider: {
            "@type": "Organization",
            "name": "KN0X-FIT",
            "url": "https://knoxfit.com"
          },
          offers: {
            "@type": "Offer",
            "price": "999",
            "priceCurrency": "INR",
            "description": "General fitness program with balanced diet plan, basic workout routine, and one trainer consultation"
          },
          category: "Fitness Program",
          audience: {
            "@type": "Audience",
            "audienceType": "Beginners"
          }
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-knox-red via-knox-darkred to-knox-black text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="h1 mb-6 text-white">
                General Fitness – Balanced Diet & Workout Plan
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Kickstart your fitness journey with a sustainable approach designed for beginners and health-conscious individuals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                  <span className="text-3xl font-bold">₹999</span>
                  <span className="text-lg ml-2">/ month</span>
                </div>
                <Button 
                  onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I'm%20interested%20in%20the%20General%20Fitness%20Plan%20at%20₹999/month.%20Could%20you%20provide%20more%20details%20about%20the%20balanced%20diet%20plan,%20beginner%20workout%20routine,%20and%20the%20one%20trainer%20consultation%20included?"}
                  size="lg" 
                  className="bg-white text-knox-red hover:bg-gray-100 font-bold text-lg px-8 py-4"
                >
                  Join General Fitness Plan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="h2 mb-6 text-knox-black">
                  Your Complete Beginner Fitness Solution
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A balanced diet and workout plan with one trainer session to kickstart your fitness journey. 
                  Designed for beginners and anyone looking to build sustainable habits without supplements.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <img 
                    src="/gen-fitness.webp" 
                    alt="General fitness program overview showing balanced diet and workout plan for beginners" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                <div>
                  <h3 className="h3 mb-6 text-knox-red">Why Choose General Fitness?</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-knox-red mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Beginner-Friendly:</strong> Perfect starting point for fitness newcomers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-knox-red mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>No Supplements Required:</strong> Focus on natural, healthy habits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-knox-red mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Affordable:</strong> Quality fitness guidance at just ₹999/month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-knox-red mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Flexible:</strong> Suitable for both home and gym workouts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="h2 mb-6 text-knox-black">What's Included in Your Plan</h2>
                <p className="text-lg text-gray-600">Everything you need to start your sustainable fitness journey</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Balanced Diet Plan */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-knox-red/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">Balanced Diet Plan</h3>
                  <p className="text-gray-600 mb-4">Tailored to your preferences and goals</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Personalized meal recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Nutritional balance for health
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Easy-to-follow meal plans
                    </li>
                  </ul>
                </div>

                {/* Basic Workout Routine */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-knox-red/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">Basic Workout Routine</h3>
                  <p className="text-gray-600 mb-4">Suitable for home or gym</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Beginner-friendly exercises
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Progressive difficulty levels
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Flexible scheduling options
                    </li>
                  </ul>
                </div>

                {/* One Trainer Consultation */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-knox-red/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">One Trainer Consultation</h3>
                  <p className="text-gray-600 mb-4">Create your starting plan</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Personal fitness assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Goal setting and planning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Exercise form guidance
                    </li>
                  </ul>
                </div>

                {/* FFMI and BMI Report */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-knox-red/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">FFMI and BMI Report</h3>
                  <p className="text-gray-600 mb-4">Track your progress comprehensively</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Initial body composition analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Progress tracking tools
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Health risk assessment
                    </li>
                  </ul>
                </div>

                {/* Sustainable Approach */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-knox-red/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">Sustainable Approach</h3>
                  <p className="text-gray-600 mb-4">Promoting long-term fitness</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Habit-building focus
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Realistic goal setting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Long-term lifestyle changes
                    </li>
                  </ul>
                </div>

                {/* No Supplements */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-knox-red/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">Natural Approach</h3>
                  <p className="text-gray-600 mb-4">No supplements required</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Whole food nutrition focus
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Body's natural capabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-knox-red rounded-full"></span>
                      Cost-effective approach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="h2 mb-6 text-knox-black">Simple, Affordable Pricing</h2>
              <p className="text-lg text-gray-600 mb-12">
                Get started with professional fitness guidance at an unbeatable price
              </p>
              
              <div className="bg-gradient-to-br from-knox-red/5 to-knox-red/10 rounded-2xl p-8 md:p-12 border border-knox-red/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-knox-red text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Most Popular for Beginners
                  </div>
                  <div className="text-6xl font-bold text-knox-black mb-2">₹999</div>
                  <div className="text-xl text-gray-600">per month</div>
                </div>
                
                <Button 
                  onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I'm%20interested%20in%20the%20General%20Fitness%20Plan%20at%20₹999/month.%20Could%20you%20provide%20more%20details%20about%20the%20balanced%20diet%20plan,%20beginner%20workout%20routine,%20and%20the%20one%20trainer%20consultation%20included?"}
                  size="lg" 
                  className="w-full bg-knox-red hover:bg-knox-darkred text-white font-bold text-xl py-4"
                >
                  Join General Fitness Plan
                </Button>
                
                <p className="text-sm text-gray-600 mt-4">
                  Start your transformation today • Cancel anytime • No hidden fees
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="h2 mb-6 text-knox-black">Explore Other Programs</h2>
                <p className="text-lg text-gray-600">
                  Take your fitness journey to the next level with our specialized programs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="h-40 rounded-lg mb-6 overflow-hidden">
                    <img 
                      src="/total-transformation.webp" 
                      alt="Elite Program - Premium fitness coaching"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">Elite Program</h3>
                  <p className="text-gray-600 mb-4">Premium 1-on-1 coaching for advanced results</p>
                  <a href="/elite-program" className="text-knox-red hover:text-knox-darkred font-semibold">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="h-40 rounded-lg mb-6 overflow-hidden">
                    <img 
                      src="/workout-plan.avif" 
                      alt="Custom Workout Plans - Tailored exercise routines"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">Custom Workout Plans</h3>
                  <p className="text-gray-600 mb-4">Tailored exercise routines for specific goals</p>
                  <a href="/custom-workout-plan" className="text-knox-red hover:text-knox-darkred font-semibold">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="h-40 rounded-lg mb-6 overflow-hidden">
                    <img 
                      src="/diet-plan.jpeg" 
                      alt="Personalized Diet Plans - Nutrition guidance"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="h4 mb-4 text-knox-black">Personalized Diet Plans</h3>
                  <p className="text-gray-600 mb-4">Nutrition guidance for optimal health</p>
                  <a href="/diet-guide" className="text-knox-red hover:text-knox-darkred font-semibold">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-knox-black text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="h2 mb-6">Ready to Start Your Fitness Journey?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Join thousands of satisfied members who've transformed their lives with our General Fitness program
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I'm%20interested%20in%20the%20General%20Fitness%20Plan%20at%20₹999/month.%20Could%20you%20provide%20more%20details%20about%20the%20balanced%20diet%20plan,%20beginner%20workout%20routine,%20and%20the%20one%20trainer%20consultation%20included?"}
                  size="lg" 
                  className="bg-knox-red hover:bg-knox-darkred text-white font-bold text-lg px-8 py-4"
                >
                  Join General Fitness Plan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Strip */}
        <TestimonialStrip />
      </div>
    </>
  );
}