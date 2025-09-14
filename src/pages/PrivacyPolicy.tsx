import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="KN0X-FIT Privacy Policy – Safe and Confidential Coaching"
        description="Learn how KN0X-FIT keeps your data private and secure while delivering personalized fitness coaching."
        canonical="https://knoxfit.com/privacy-policy"
      />
      <StructuredData
        type="website"
        data={{
          title: "Privacy Policy - KN0X-FIT",
          description: "Learn how KN0X-FIT keeps your data private and secure while delivering personalized fitness coaching.",
          url: "https://knoxfit.com/privacy-policy",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15"
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-knox-black text-white">
          <div className="container py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Your privacy and data security are our top priorities. Learn how we protect your personal information while delivering exceptional fitness coaching.
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
                  <strong>Effective Date:</strong> January 15, 2024 | <strong>Last Updated:</strong> January 15, 2024
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">Our Commitment to Your Privacy</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At KN0X-FIT, we understand that your personal health and fitness information is sensitive and private. 
                  This Privacy Policy explains how we collect, use, protect, and handle your personal data when you use our services.
                </p>
                <p className="text-gray-700">
                  We are committed to maintaining the highest standards of data protection and ensuring your information 
                  remains confidential while we help you achieve your fitness goals.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">Information We Collect</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li>• <strong>Contact Details:</strong> Name, email address, phone number, and WhatsApp contact</li>
                  <li>• <strong>Health Information:</strong> Age, weight, height, medical conditions, allergies, and fitness goals</li>
                  <li>• <strong>Lifestyle Data:</strong> Activity level, dietary preferences, budget constraints, and daily schedule</li>
                  <li>• <strong>Progress Photos:</strong> Before/after images for tracking transformation (with your consent)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Coaching Data</h3>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li>• <strong>Daily Updates:</strong> Meal photos, workout summaries, water intake, and step counts</li>
                  <li>• <strong>Communication Records:</strong> Messages, feedback, and consultation notes</li>
                  <li>• <strong>Progress Metrics:</strong> Weight changes, measurements, and performance improvements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">How We Use Your Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">✅ We Use Your Data To:</h3>
                    <ul className="text-green-700 space-y-2">
                      <li>• Create personalized diet and workout plans</li>
                      <li>• Monitor your progress and adjust programs</li>
                      <li>• Provide daily coaching and support</li>
                      <li>• Communicate about your fitness journey</li>
                      <li>• Track compliance with program requirements</li>
                      <li>• Improve our coaching methodologies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-800 mb-3">❌ We Never Use Your Data To:</h3>
                    <ul className="text-red-700 space-y-2">
                      <li>• Share with third parties without consent</li>
                      <li>• Sell to marketing companies</li>
                      <li>• Post publicly without permission</li>
                      <li>• Use for purposes beyond coaching</li>
                      <li>• Store longer than necessary</li>
                      <li>• Access without legitimate coaching needs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">Data Security & Storage</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security Measures</h3>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li>• <strong>Encrypted Communication:</strong> All data transmission is secured using industry-standard encryption</li>
                  <li>• <strong>Secure Storage:</strong> Personal data is stored on protected servers with restricted access</li>
                  <li>• <strong>Limited Access:</strong> Only authorized coaching staff can access your information</li>
                  <li>• <strong>Regular Backups:</strong> Data is backed up securely to prevent loss</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h3>
                <p className="text-gray-700 mb-4">
                  We retain your personal data only for as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li>• <strong>Active Clients:</strong> Data retained during program duration plus 90 days</li>
                  <li>• <strong>Transformation Photos:</strong> Kept only with explicit written consent</li>
                  <li>• <strong>Communication Records:</strong> Retained for 1 year for quality and support purposes</li>
                  <li>• <strong>Financial Records:</strong> Kept for 3 years as required by law</li>
                </ul>
              </CardContent>
            </Card>

            {/* Image Usage */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">Use of Images & Transformation Photos</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">📸 Photo Usage Policy</h3>
                  <p className="text-blue-700">
                    Your transformation photos are your property. We will never use them publicly without your explicit written consent.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consent Requirements</h3>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li>• <strong>Progress Tracking:</strong> Photos used internally for coaching purposes only</li>
                  <li>• <strong>Marketing Usage:</strong> Requires separate written permission with specific terms</li>
                  <li>• <strong>Social Media:</strong> Posted only with your approval and credit</li>
                  <li>• <strong>Right to Withdraw:</strong> You can revoke consent at any time</li>
                </ul>
              </CardContent>
            </Card>

            {/* Communication Channels */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">Communication Channels & Data Protection</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secure Communication</h3>
                <ul className="mb-6 text-gray-700 space-y-2">
                  <li>• <strong>WhatsApp:</strong> End-to-end encrypted messaging for daily updates</li>
                  <li>• <strong>Email:</strong> Secure email servers for formal communications</li>
                  <li>• <strong>Video Calls:</strong> Encrypted platforms for consultations</li>
                  <li>• <strong>File Sharing:</strong> Secure methods for plan delivery</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Important Note</h3>
                  <p className="text-yellow-700">
                    While we use secure communication channels, please be mindful of what you share. 
                    Avoid sending sensitive non-health related personal information through messaging platforms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-knox-black mb-6">Your Privacy Rights</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">You Have the Right To:</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Access:</strong> Request copies of your personal data</li>
                      <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                      <li>• <strong>Deletion:</strong> Request removal of your data</li>
                      <li>• <strong>Portability:</strong> Receive your data in a portable format</li>
                      <li>• <strong>Withdrawal:</strong> Revoke consent for data processing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Exercise Your Rights:</h3>
                    <p className="text-gray-700 mb-4">
                      Contact us through any of the methods below with your request. 
                      We will respond within 30 days and verify your identity for security purposes.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> Some data may be retained for legal compliance even after deletion requests.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8 bg-knox-black text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Contact Us About Privacy</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">For Privacy Concerns or Questions:</h3>
                    <div className="space-y-3">
                      <p className="flex items-center">
                        <span className="font-semibold mr-2">📧 Email:</span>
                        <a href="mailto:info@kn0x-fit.com" className="text-knox-red hover:underline">
                          info@kn0x-fit.com
                        </a>
                      </p>
                      <p className="flex items-center">
                        <span className="font-semibold mr-2">💬 WhatsApp:</span>
                        <span className="text-gray-300">Direct message for immediate assistance</span>
                      </p>
                      <p className="flex items-center">
                        <span className="font-semibold mr-2">⏰ Response Time:</span>
                        <span className="text-gray-300">Within 24-48 hours</span>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Our Promise to You:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Transparent communication about data usage</li>
                      <li>• Quick response to privacy concerns</li>
                      <li>• Respect for your privacy choices</li>
                      <li>• Continuous improvement of data protection</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                  <p className="text-gray-300 mb-4">
                    Your trust is essential to our coaching relationship. We're committed to earning and maintaining it every day.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="btn-primary"
                  >
                    Contact Us About Privacy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Footer Note */}
            <div className="text-center text-gray-600 mt-8">
              <p className="mb-2">
                <strong>Team KN0X-FIT</strong> | Built for Change | Designed for You
              </p>
              <p className="text-sm">
                This Privacy Policy is part of our Terms of Service and governs your use of KN0X-FIT coaching services.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}