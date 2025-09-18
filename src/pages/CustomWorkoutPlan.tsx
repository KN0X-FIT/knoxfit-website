import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { TestimonialStrip } from '../components/TestimonialStrip';

export function CustomWorkoutPlan() {
  return (
    <>
      <SEOHead
        title="Custom Workout Plan for Beginners | Personalized Fitness Routine - KN0X-FIT"
        description="Get a personalized workout plan designed for beginners. Science-backed exercise routines that maximize results in minimal time, tailored to your fitness level. Starting at ₹799."
        keywords="custom workout plan for beginners, personalized fitness routine, home workout plan, beginner exercise program, strength training for beginners"
        canonical="https://knoxfit.com/custom-workout-plan"
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-knox-black text-white py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-knockout mb-6">
              Custom Workout Plan for <span className="text-knox-red">Beginners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a personalized workout plan designed specifically for your fitness level, goals, and lifestyle. 
              No generic routines - just science-backed exercises that deliver real results.
            </p>
            <Button 
              onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I'm%20interested%20in%20getting%20a%20custom%20workout%20plan%20for%20₹799.%20Could%20you%20tell%20me%20more%20about%20what's%20included,%20how%20the%20consultation%20works,%20and%20how%20to%20get%20started?"}
              className="btn-primary text-lg py-6 px-8"
              size="lg"
            >
              Get Your Custom Plan - ₹799
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">What's Included in Your Custom Workout Plan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Personalized Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complete fitness assessment based on your current level, goals, and available equipment.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Progressive Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Structured progression plan that grows with your strength and endurance improvements.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Flexible Scheduling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Workout plans that fit your schedule - whether you have 30 minutes or 2 hours per day.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    Expert Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    One session with Expert Trainer to review your plan and ensure proper form.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Workout Types */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">Workout Types We Specialize In</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Strength Training for Beginners</h4>
                  <p className="text-gray-600">
                    Build lean muscle mass with progressive resistance training designed for beginners.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Home Workout Routines</h4>
                  <p className="text-gray-600">
                    Effective bodyweight and minimal equipment workouts you can do from home.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Fat Loss Workouts</h4>
                  <p className="text-gray-600">
                    High-intensity interval training and cardio routines for maximum fat burn.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get your personalized workout plan today and start seeing results in just 2-3 weeks. 
                Our Expert Trainers will create a plan that's perfect for your fitness level and goals.
              </p>
              <Button 
                onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I%20want%20to%20get%20started%20with%20a%20custom%20workout%20plan%20for%20₹799.%20I'm%20ready%20to%20begin%20my%20fitness%20journey%20and%20would%20like%20to%20book%20my%20consultation.%20What%20are%20the%20next%20steps?"}
                className="btn-primary text-lg py-6 px-8"
                size="lg"
              >
                Get Started Now - ₹799
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