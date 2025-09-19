import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { TestimonialStrip } from '../components/TestimonialStrip';

export function DietGuide() {
  return (
    <>
      <SEOHead
        title="Sustainable Diet Guide Without Supplements | Weight Loss Diet Plan - KN0X-FIT"
        description="Get a sustainable diet plan for weight loss without supplements. Personalized nutrition guide with FFMI and BMI analysis. Affordable diet coaching starting at ₹799."
        keywords="sustainable diet without supplements, weight loss diet plan, personalized nutrition guide, FFMI BMI analysis, affordable diet coaching"
        canonical="https://knoxfit.com/diet-guide"
      />
      <div className="min-h-screen bg-white">
      {/* Slogan Section */}
      <div className="text-center py-4 bg-knox-black">
        <div className="text-knox-red font-knockout text-sm tracking-widest uppercase animate-blink">
          BUILT FOR CHANGE - DESIGNED FOR YOU
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-knox-black text-white py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-knockout mb-6">
              Sustainable Diet Guide <span className="text-knox-red">Without Supplements</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your eating habits with our personalized diet plans. No expensive supplements, 
              no crash diets - just sustainable nutrition that fits your lifestyle and delivers real results.
            </p>
            <Button 
              onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I'm%20interested%20in%20your%20sustainable%20diet%20plan%20for%20₹799.%20Could%20you%20provide%20more%20details%20about%20the%20nutrition%20plan,%20meal%20guidance,%20and%20how%20it%20works%20without%20supplements?"}
              className="btn-primary text-lg py-6 px-8"
              size="lg"
            >
              Get Your Diet Plan - ₹799
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">What Makes Our Diet Plans Different</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    No Supplements Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our diet plans focus on whole foods and natural nutrition - no expensive supplements needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    FFMI & BMI Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Detailed body composition analysis to create the most effective diet plan for your goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    Budget-Friendly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Meal plans designed with common, affordable ingredients available in any Indian kitchen.
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
                    Expert Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    One session with Expert Nutritionist to review your plan and answer questions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Diet Approaches */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">Our Proven Diet Approaches</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Weight Loss Diet Plan</h4>
                  <p className="text-gray-600">
                    Sustainable calorie deficit approach that helps you lose weight without feeling deprived.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Muscle Building Nutrition</h4>
                  <p className="text-gray-600">
                    High-protein meal plans designed to support muscle growth and recovery.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Maintenance Diet</h4>
                  <p className="text-gray-600">
                    Balanced nutrition plans to maintain your ideal weight and energy levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">Real Results from Real People</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent>
                    <p className="text-gray-600 italic mb-4">
                      "Lost 8 kg in 3 months without any supplements. The diet plan was so easy to follow 
                      and didn't feel restrictive at all. Best investment for my health!"
                    </p>
                    <p className="font-bold">- Priya S., Mumbai</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent>
                    <p className="text-gray-600 italic mb-4">
                      "Finally found a diet plan that works with my busy schedule. Lost 12 kg and 
                      maintained it for over 6 months now. Highly recommended!"
                    </p>
                    <p className="font-bold">- Rahul K., Delhi</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="text-3xl font-bold mb-4">Start Your Transformation Today</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get your personalized diet plan and start seeing results in just 2-3 weeks. 
                No supplements, no crash diets - just sustainable nutrition that works.
              </p>
              <Button 
                onClick={() => window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I%20want%20to%20get%20started%20with%20your%20sustainable%20diet%20plan%20for%20₹799.%20I'm%20ready%20to%20transform%20my%20eating%20habits%20and%20achieve%20my%20health%20goals.%20How%20can%20I%20begin?"}
                className="btn-primary text-lg py-6 px-8"
                size="lg"
              >
                Get Your Diet Plan - ₹799
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