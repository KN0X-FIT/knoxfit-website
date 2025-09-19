import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function TermsOfService() {
  return (
    <>
      <SEOHead
        title="KN0X-FIT Terms of Service – Clear Guidelines for Coaching Programs"
        description="Read KN0X-FIT's terms of service including program details, refund policy, and client responsibilities for our personalized fitness coaching."
        canonical="https://knoxfit.com/terms-of-service"
      />
      <StructuredData
        type="website"
        data={{
          title: "Terms of Service - KN0X-FIT",
          description: "Read KN0X-FIT's terms of service including program details, refund policy, and client responsibilities for our personalized fitness coaching.",
          url: "https://knoxfit.com/terms-of-service",
          datePublished: "2025-01-15",
          dateModified: "2025-01-15"
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-knox-black text-white">
          <div className="container py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Clear guidelines and terms for our personalized fitness coaching programs. 
              By enrolling, you agree to follow these terms to ensure smooth communication and progress tracking.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Effective Date */}
            <Card className="mb-8 bg-knox-red/10 border-knox-red/20">
              <CardContent className="p-6">
                <p className="text-knox-red font-semibold">
                  <strong>Effective Date:</strong> January 15, 2025 | <strong>Last Updated:</strong> January 15, 2025
                </p>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✅ By enrolling in any KN0X-FIT program, you agree to follow these terms fully, 
                    ensuring smooth communication and progress tracking.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Program Inclusions */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">1. Program Inclusions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Depending on the package you choose, the following services are provided:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-800 mb-3">🍽️ Diet Plan</h3>
                      <p className="text-blue-700">
                        Customized weekly diet plan based on your preferences, goals, and budget constraints.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-800 mb-3">💪 Workout Plan</h3>
                      <p className="text-green-700">
                        Progressive gym/home workout routines tailored to your fitness level and equipment availability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-purple-800 mb-3">🔥 Combo Plan</h3>
                      <p className="text-purple-700">
                        Complete package including both personalized diet and workout plans for comprehensive results.
                      </p>
                    </div>
                    
                    <div className="bg-knox-red/10 p-6 rounded-lg border border-knox-red/20">
                      <h3 className="text-xl font-semibold text-knox-red mb-3">👑 Elite Program</h3>
                      <p className="text-knox-red">
                        Premium coaching with daily follow-up and weekly trainer consultation for maximum results.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">🎁 Elite Program Bonus</h3>
                  <p className="text-yellow-700">
                    <strong>1 extra month FREE</strong> if all terms and daily update requirements are met throughout your program.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Focus on Experience & Results */}
            <Card className="mb-8 bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">Focus on Experience & Results</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Backed by years of practical experience and real client transformations, we specialize in proven training methods that deliver results.
                </p>
                <p className="text-lg text-gray-700">
                  Our expertise comes from hands-on coaching and helping clients achieve lasting change.
                </p>
              </CardContent>
            </Card>

            {/* Duration */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">2. Duration</h2>
                <ul className="text-lg text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-knox-red font-bold mr-3">•</span>
                    <span><strong>All standard plans are valid for 1 month (30 days)</strong> from the date of plan delivery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-knox-red font-bold mr-3">•</span>
                    <span><strong>Free month in Elite Plan</strong> applies only if all daily updates are submitted as per requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-knox-red font-bold mr-3">•</span>
                    <span>Program extensions may be granted in case of technical issues or delays on our side.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Daily Follow-up */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">3. Daily Follow-up & Check-in (Elite Clients Only)</h2>
                
                <div className="bg-knox-red/10 border border-knox-red/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-knox-red mb-3">📱 Required Daily Updates</h3>
                  <p className="text-knox-red mb-4">
                    Elite clients are required to send daily updates including the following:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">📸 Visual Updates:</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Meal Photos:</strong> All major meals and snacks</li>
                      <li>• <strong>Workout Summary:</strong> Exercises completed and duration</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Tracking Data:</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Steps or Activity Level:</strong> Daily movement tracking</li>
                      <li>• <strong>Water Intake:</strong> Hydration monitoring</li>
                      <li>• <strong>Issues or Feedback:</strong> Any concerns or questions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">⏰ Timing Requirements</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Updates must be sent <strong>once every 24 hours</strong></li>
                    <li>• Preferably submitted <strong>before 11 PM daily</strong></li>
                    <li>• Consistent timing helps maintain coaching momentum</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 3-Strike Policy */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">4. 3-Strike Policy</h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">⚠️ Important Compliance Rule</h3>
                  <p className="text-red-700">
                    This policy ensures program effectiveness and qualifies you for the FREE Elite month bonus.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-yellow-50 rounded-lg">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Allowed Missed Days</h3>
                    <p className="text-yellow-700 text-sm">
                      You are allowed 3 days of missed updates during the entire program duration.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="text-4xl font-bold text-red-600 mb-2">4th</div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Strike = Penalty</h3>
                    <p className="text-red-700 text-sm">
                      Missing the 4th day revokes your eligibility for the 1-month FREE Elite Program.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-4xl font-bold text-gray-600 mb-2">0</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Warnings Sent</h3>
                    <p className="text-gray-700 text-sm">
                      No warnings will be sent—this is tracked automatically by our system.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Policy */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">5. Refund Policy</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">❌ No Refunds After:</h3>
                    <ul className="text-red-700 space-y-2">
                      <li>• Plan is purchased and payment is processed</li>
                      <li>• Personalized details and questionnaire are shared</li>
                      <li>• Custom plans are created and delivered</li>
                    </ul>
                    <div className="mt-4 p-4 bg-red-100 rounded">
                      <p className="text-red-800 text-sm font-semibold">
                        Plans are created manually and personalized, making the process non-reversible.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Exceptions & Extensions:</h3>
                    <ul className="text-green-700 space-y-2">
                      <li>• Technical issues on our platform</li>
                      <li>• Significant delays in plan delivery</li>
                      <li>• Errors or mistakes on our side</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-100 rounded">
                      <p className="text-green-800 text-sm font-semibold">
                        In these cases, appropriate extensions or adjustments may be granted.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Plan Delivery */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">6. Plan Delivery</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">📅 Timeline</h3>
                    <ul className="text-gray-700 space-y-3">
                      <li className="flex items-start">
                        <span className="text-knox-red font-bold mr-3">•</span>
                        <span><strong>First plan delivery:</strong> Within 24–48 hours of payment and questionnaire completion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-knox-red font-bold mr-3">•</span>
                        <span><strong>Plan updates:</strong> Weekly revisions as included in your package</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">💬 Communication</h3>
                    <ul className="text-gray-700 space-y-3">
                      <li className="flex items-start">
                        <span className="text-knox-red font-bold mr-3">•</span>
                        <span><strong>Primary channels:</strong> WhatsApp and email</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-knox-red font-bold mr-3">•</span>
                        <span><strong>Response time:</strong> Within 24 hours during business days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support & Revisions */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">7. Support & Revisions</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">🔄 Regular Revisions</h3>
                    <ul className="text-blue-700 space-y-2">
                      <li>• <strong>Weekly revision included</strong> (only one per week)</li>
                      <li>• Plan adjustments based on progress</li>
                      <li>• Modifications for better adherence</li>
                      <li>• Goal reassessment and updates</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">🚨 Emergency Adjustments</h3>
                    <ul className="text-orange-700 space-y-2">
                      <li>• Allergy discoveries or reactions</li>
                      <li>• Illness or injury modifications</li>
                      <li>• Urgent health-related changes</li>
                      <li>• Subject to trainer's discretion</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality & Data */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">8. Confidentiality & Data</h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">🔒 Your Data is Protected</h3>
                  <p className="text-green-700">
                    All client data is kept strictly confidential and only used for internal coaching purposes.
                  </p>
                </div>
                
                <ul className="text-gray-700 space-y-3">
                  <li>• <strong>Privacy First:</strong> Personal information never shared with third parties</li>
                  <li>• <strong>Secure Storage:</strong> Data protected with industry-standard security measures</li>
                  <li>• <strong>Photo Protection:</strong> Progress photos will not be shared publicly without written consent</li>
                  <li>• <strong>Communication Security:</strong> All interactions through encrypted channels</li>
                </ul>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention Policy</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">📅 How Long We Keep Your Data:</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• <strong>Active Clients:</strong> Data retained during program duration plus 2 weeks</li>
                      <li>• <strong>Communication Records:</strong> Retained for 5 months for quality and support purposes</li>
                      <li>• <strong>Transformation Photos:</strong> Kept only with explicit written consent</li>
                      <li>• <strong>Financial Records:</strong> Kept for 3 years as required by law</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transformation Use */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">9. Transformation Use</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">📸 Success Stories</h3>
                    <p className="text-gray-700 mb-4">
                      If you complete the program successfully, you may be asked to share transformation photos for:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Inspiring other clients</li>
                      <li>• Marketing and testimonials</li>
                      <li>• Social media features</li>
                      <li>• Success story documentation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">✋ Your Choice</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 font-semibold">✅ You have the absolute right to decline</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800 font-semibold">📝 If agreed, your progress will be featured with proper credit</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-purple-800 font-semibold">🔄 Consent can be withdrawn at any time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Disclaimer */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">10. Results Disclaimer</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">⚖️ Important Understanding</h3>
                  <p className="text-yellow-700">
                    Results vary per individual based on commitment, lifestyle, and health conditions.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🛠️ We Provide:</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Scientifically-backed meal plans</li>
                      <li>• Progressive workout routines</li>
                      <li>• Expert coaching and guidance</li>
                      <li>• Continuous support and motivation</li>
                      <li>• Tools for sustainable results</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">💪 Success Depends On:</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Your consistency and commitment</li>
                      <li>• Following the prescribed plans</li>
                      <li>• Regular communication and updates</li>
                      <li>• Individual metabolism and genetics</li>
                      <li>• Lifestyle and stress management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8 bg-knox-black text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Questions or Concerns?</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">📞 Get in Touch:</h3>
                    <div className="space-y-4">
                      <p className="flex items-center">
                        <span className="font-semibold mr-3">💬 WhatsApp:</span>
                        <a href="https://wa.me/919380422603" className="text-knox-red hover:underline">
                          +91 9380422603
                        </a>
                      </p>
                      <p className="flex items-center">
                        <span className="font-semibold mr-3">📧 Email:</span>
                        <a href="mailto:info@kn0x-fit.com" className="text-knox-red hover:underline">
                          info@kn0x-fit.com
                        </a>
                      </p>
                      <p className="flex items-center">
                        <span className="font-semibold mr-3">⏰ Response:</span>
                        <span className="text-gray-300">Within 24 hours</span>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">🤝 Our Commitment:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Clear communication about all terms</li>
                      <li>• Fair and transparent policies</li>
                      <li>• Support throughout your journey</li>
                      <li>• Continuous service improvement</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                  <p className="text-gray-300 mb-4">
                    <strong>Team KN0X-FIT</strong> | Built for Change | Designed for You
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="btn-primary mr-4"
                  >
                    Contact Support
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/privacy-policy'}
                    className="btn-outline border-white text-white hover:bg-white hover:text-knox-black"
                  >
                    View Privacy Policy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agreement Confirmation */}
            <Card className="mb-8 bg-green-50 border-green-200">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-green-800 mb-6">✅ Terms Agreement</h2>
                <p className="text-lg text-green-700 mb-6">
                  By enrolling in any KN0X-FIT program, you confirm that you have read, understood, 
                  and agree to follow these terms fully.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-green-600">
                  <div className="flex items-center justify-center">
                    <span className="mr-2">✓</span>
                    <span>Program Guidelines</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="mr-2">✓</span>
                    <span>Communication Requirements</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="mr-2">✓</span>
                    <span>Progress Tracking Responsibilities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </>
  );
}