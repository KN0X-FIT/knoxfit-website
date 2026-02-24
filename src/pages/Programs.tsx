import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/ui/button';

export function Programs() {
  return (
    <>
      <SEOHead
        title="Fitness Programs – Custom Workout & Diet Plans | KN0X-FIT"
        description="Explore our range of fitness programs including Elite Program, Custom Workout Plans, General Fitness, and Diet Guides. Personalized coaching for all fitness levels."
        keywords="fitness programs, workout plans, diet guides, personalized fitness, custom workout plans, elite fitness program, general fitness plan"
        canonical="https://knoxfit.com/programs"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Slogan Section */}
        <div className="text-center py-1 bg-knox-black">
          <div className="text-knox-red font-knockout text-sm tracking-widest uppercase animate-blink">
            BUILT FOR CHANGE - DESIGNED FOR YOU
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-knox-black via-gray-900 to-knox-red/20 text-white py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-knockout mb-6">
                Our <span className="text-knox-red">Fitness Programs</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect program tailored to your goals, fitness level, and lifestyle. 
                From beginner-friendly options to elite-level coaching.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-knox-black mb-4">Find Your Perfect Fit</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore our range of programs designed for different fitness goals and experience levels
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Elite Program */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-knox-black mb-4">Elite Program</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Premium 1-on-1 coaching with weekly consultations, daily follow-ups, and personalized plans
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-knox-red mb-2">₹2999</div>
                    <div className="text-sm text-gray-500 mb-4">Monthly</div>
                    <a 
                      href="https://wa.me/919380422603?text=Hi%21%20I%20want%20to%20join%20the%20KN0X%20Elite%20Program%20for%20%E2%82%B93499.%20I%27m%20committed%20to%20my%20transformation%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-knox-red hover:bg-knox-darkred text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* General Fitness */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-knox-black mb-4">General Fitness</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Balanced diet & workout plan with one trainer consultation. Perfect for beginners.
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-knox-red mb-2">₹999</div>
                    <div className="text-sm text-gray-500 mb-4">Monthly</div>
                    <a 
                      href="https://wa.me/919380422603?text=Hi%21%20I%27m%20interested%20in%20the%20General%20Fitness%20Plan%20at%20%E2%82%B9999%2Fmonth.%20What%27s%20included%20in%20the%20plan%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-knox-red hover:bg-knox-darkred text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Custom Workout Plan */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-knox-black mb-4">Custom Workout Plan</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Personalized workout routines tailored to your goals and fitness level
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-knox-red mb-2">₹799</div>
                    <div className="text-sm text-gray-500 mb-4">One Time</div>
                    <a 
                      href="https://wa.me/919380422603?text=Hi%21%20I%27m%20interested%20in%20the%20%E2%82%B9799%20custom%20workout%20plan.%20What%27s%20included%20and%20how%20does%20it%20work%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-knox-red hover:bg-knox-darkred text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Diet Guide */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-knox-black mb-4">Diet Guide</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Personalized nutrition guides without supplements for sustainable results
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-knox-red mb-2">₹499</div>
                    <div className="text-sm text-gray-500 mb-4">One Time</div>
                    <a 
                      href="https://wa.me/919380422603?text=Hi%21%20I%27m%20interested%20in%20the%20%E2%82%B9499%20diet%20guide.%20What%27s%20included%20and%20how%20does%20it%20work%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-knox-red hover:bg-knox-darkred text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Free Plan */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-knox-black mb-4">Free Plan</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Get started with our free 5-day sample plan to experience our methodology
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
                    <div className="text-sm text-gray-500 mb-4">One Time</div>
                    <a 
                      href="/free-plan"
                      className="inline-block bg-knox-red hover:bg-knox-darkred text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Get Free Plan
                    </a>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center text-knox-black mb-4">Success Stories</h3>
                  <p className="text-gray-600 text-center mb-6">
                    See real transformations from our community members
                  </p>
                  <div className="text-center">
                    <a 
                      href="/testimonials"
                      className="inline-block bg-knox-red hover:bg-knox-darkred text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      View Stories
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-knox-black to-knox-darkred text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of satisfied members who've achieved their fitness goals with our programs
              </p>
              <a 
                href="https://wa.me/919380422603?text=Hi%21%20I%27m%20interested%20in%20learning%20more%20about%20your%20fitness%20programs.%20Can%20you%20help%20me%20choose%20the%20right%20one%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-knox-red hover:bg-knox-darkred text-white font-bold text-xl py-4 px-8 rounded-lg inline-block transition-colors duration-300"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}