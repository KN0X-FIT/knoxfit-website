import { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export function FreePlan() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    // Must be exactly 10-15 digits
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setError('Full name is required');
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid phone number (10-15 digits only)');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwgeSwQ6Yvz3tDeH2NAiVAUxeiJ9TpYpGixn1V2cwCzwOVgzNROR2yleQ89yNhE2VUn_Q/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script CORS
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.replace(/\D/g, '') // Keep only digits
        })
      });

      // With no-cors mode, we can't check response.ok, so we assume success
      setIsSubmitted(true);
      
    } catch (err) {
      console.error('Submission error:', err);
      setError('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setError('');
    setIsSubmitted(false);
    setIsSubmitting(false);
    // Keep form data so user doesn't have to re-enter
  };

  return (
    <>
      <SEOHead
        title="Free 5-Day Fitness Plan | Get Started Today - KN0X-FIT"
        description="Download your free 5-day fitness plan and kickstart your transformation journey. No cost, no commitment - just proven results."
        keywords="free fitness plan, 5-day workout plan, free exercise program, beginner fitness guide, KN0X-FIT free plan"
        canonical="https://adorable-cat-5fe4ae.netlify.app/free-plan"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-knox-black via-gray-900 to-knox-red/20 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[500px] mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              {/* Brand Slogan */}
              <div className="text-knox-red font-knockout text-lg tracking-widest uppercase mb-4 animate-pulse">
                BUILT FOR CHANGE - DESIGNED FOR YOU
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-knockout text-white mb-4">
                Get Your <span className="text-knox-red">FREE</span> 5-Day Sample Plan
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Start your fitness journey with our proven 5-day starter plan. 
                No cost, no commitment - just results.
              </p>
            </div>

            {/* Form Section */}
            {!isSubmitted ? (
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden animate-fade-in">
                <CardHeader className="bg-gradient-to-r from-knox-red to-red-600 text-white text-center py-8">
                  <CardTitle className="text-2xl font-bold">
                    🎯 Claim Your Free Plan
                  </CardTitle>
                  <p className="text-red-100 mt-2">
                    Step into our proven program to create success stories
                  </p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="h-12 border-gray-300 focus:border-knox-red focus:ring-knox-red transition-all duration-200"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="h-12 border-gray-300 focus:border-knox-red focus:ring-knox-red transition-all duration-200"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number * (10-15 digits only)
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          // Allow only digits and limit to 15 characters
                          const value = e.target.value.replace(/\D/g, '').slice(0, 15);
                          setFormData(prev => ({ ...prev, phone: value }));
                          if (error) setError('');
                        }}
                        placeholder="Enter your phone number (digits only)"
                        className="h-12 border-gray-300 focus:border-knox-red focus:ring-knox-red transition-all duration-200"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg animate-shake">
                        <div className="flex items-center">
                          <div className="flex-1">
                            <p className="font-medium">{error}</p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          onClick={handleRetry}
                          variant="ghost"
                          className="mt-2 text-red-600 hover:text-red-800 p-0 h-auto font-medium"
                        >
                          🔄 Try Again
                        </Button>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-knox-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        <>
                          🚀 Get My Free Plan Now
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      No spam, no cost. Just your free 5-day fitness plan.
                    </p>
                  </form>
                </CardContent>
              </Card>
            ) : (
              /* Thank You Section */
              <Card className="bg-white border-0 shadow-2xl rounded-2xl overflow-hidden animate-fade-in">
                <CardContent className="text-center p-12">
                  {/* Success Animation */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-success-bounce">
                      <svg className="w-10 h-10 text-green-600 animate-check-mark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      ✅ Thanks for signing up!
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Your 5-Day Free Plan is ready and waiting for you.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <Button
                      onClick={() => {
                        try {
                          window.open('https://heyzine.com/flip-book/a4e410b551.html', '_blank', 'noopener,noreferrer');
                        } catch (error) {
                          console.error('Error opening flipbook:', error);
                          alert('Unable to open flipbook. Please try again or contact support.');
                        }
                      }}
                      className="w-full h-16 bg-gradient-to-r from-knox-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      <span className="mr-3">📖</span>
                      View Online Flipbook
                      <span className="ml-2 text-sm opacity-75">(Opens in new tab)</span>
                    </Button>
                    
                    <Button
                      onClick={() => {
                        try {
                          const link = document.createElement('a');
                          link.href = '/files/5-day-plan.pdf';
                          link.download = 'KN0X-FIT-5-Day-Free-Plan.pdf';
                          link.target = '_blank';
                          link.rel = 'noopener noreferrer';
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                          
                          // Show download confirmation
                          setTimeout(() => {
                            alert('Download started! Check your downloads folder for "KN0X-FIT-5-Day-Free-Plan.pdf"');
                          }, 500);
                        } catch (error) {
                          console.error('Error downloading PDF:', error);
                          // Fallback: try opening in new tab for viewing
                          window.open('/files/5-day-plan.pdf', '_blank', 'noopener,noreferrer');
                        }
                      }}
                      variant="outline"
                      className="w-full h-16 border-2 border-knox-red text-knox-red hover:bg-knox-red hover:text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      <span className="mr-3">⬇️</span>
                      Download PDF
                      <span className="ml-2 text-sm opacity-75">(5-Day Plan)</span>
                    </Button>
                  </div>

                  {/* Additional Options */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">📱 Access Your Plan Anywhere</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2">💻</span>
                        <span>Online flipbook for easy reading</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2">📄</span>
                        <span>Downloadable PDF for offline use</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2">📱</span>
                        <span>Mobile-friendly format</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2">🖨️</span>
                        <span>Print-ready for gym use</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 mt-8">
                    Check your email for additional resources and tips!
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Bottom Info */}
            <div className="text-center mt-8">
              <p className="text-gray-400">
                🔒 Your information is secure and will never be shared
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}