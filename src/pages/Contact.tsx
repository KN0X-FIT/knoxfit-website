import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function Contact() {
  return (
    <>
      <SEOHead
        title="Contact KN0X-FIT – Get in Touch for Your Fitness Journey"
        description="Connect with KN0X-FIT via WhatsApp, email, or Instagram. Get started now by filling out our fitness form!"
        keywords="contact knoxfit, fitness coaching contact, workout plan inquiry, diet plan consultation, personal trainer contact"
        canonical="https://knoxfit.com/contact"
      />
      <StructuredData
        type="website"
        data={{
          title: "Contact KN0X-FIT",
          description: "Connect with KN0X-FIT via WhatsApp, email, or Instagram. Get started now by filling out our fitness form!",
          url: "https://knoxfit.com/contact",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15"
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-knox-black via-knox-darkred to-knox-red text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-knockout mb-6">
                Contact <span className="text-white">Us</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Ready to start your fitness transformation? Get in touch with our Expert Trainers and begin your journey today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-knox-black mb-6">Let's Connect</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose your preferred way to reach out. Our team is ready to help you achieve your fitness goals.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* WhatsApp Contact */}
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-knox-red/20">
                  <CardContent className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-knox-black mb-4">WhatsApp</h3>
                      <p className="text-gray-600 mb-6">Quick responses and instant support</p>
                      <Button
                        onClick={() => window.location.href = "https://wa.me/919148898988?text=Hi%20KN0X-FIT,%20I'm%20interested%20in%20learning%20more%20about%20your%20fitness%20programs."}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-3 w-full"
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Contact */}
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-knox-red/20">
                  <CardContent className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-knox-red to-knox-darkred rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-knox-black mb-4">Email</h3>
                      <p className="text-gray-600 mb-4">Send us detailed inquiries</p>
                      <p className="text-knox-red font-semibold mb-6">info@kn0x-fit.com</p>
                      <Button
                        onClick={() => window.location.href = "mailto:info@kn0x-fit.com?subject=Fitness%20Program%20Inquiry&body=Hi%20KN0X-FIT,%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20fitness%20programs.%20Please%20provide%20me%20with%20more%20details.%0A%0AThank%20you!"}
                        className="bg-knox-red hover:bg-knox-darkred text-white font-bold text-lg px-8 py-3 w-full"
                      >
                        Send Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram Contact */}
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-knox-red/20">
                  <CardContent className="space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-knox-black mb-4">Instagram</h3>
                      <p className="text-gray-600 mb-6">Follow our fitness journey & tips</p>
                      <Button
                        onClick={() => window.open("https://www.instagram.com/kn0x_fit/profilecard/?igsh=bWFiMzlkanppYTh1", "_blank")}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-3 w-full"
                      >
                        Follow on Instagram
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-br from-knox-black to-knox-darkred text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-knockout mb-6">
                Ready to Transform Your Life?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
                Take the first step towards your fitness goals. Fill out our comprehensive form to get a personalized plan designed just for you.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">Personalized Assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">Custom Plan Creation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-knox-red rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold">Expert Guidance</span>
                  </div>
                </div>

                <Button
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSete64Jstrmxzhc05D3BYd0g45XGHrYo52EIfaViQhBelxezg/viewform?usp=sharing&ouid=108526694639854025705", "_blank")}
                  className="bg-knox-red hover:bg-knox-darkred text-white font-bold text-2xl py-6 px-12 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
                  size="lg"
                >
                  Start Now - Fill Our Fitness Form
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-300">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-knox-red mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Personalized Plans</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-knox-red mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Expert Trainers</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-knox-red mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <CardContent>
                  <h3 className="text-3xl font-bold text-knox-black mb-6 text-center">Why Choose KN0X-FIT?</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-knox-red mb-4">🎯 Personalized Approach</h4>
                      <p className="text-gray-600 mb-6">
                        Every fitness journey is unique. Our Expert Trainers create customized plans based on your goals, fitness level, and lifestyle.
                      </p>
                      
                      <h4 className="text-xl font-semibold text-knox-red mb-4">💰 Affordable Programs</h4>
                      <p className="text-gray-600">
                        Quality fitness coaching shouldn't break the bank. Our programs start from just ₹499 with proven results.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-knox-red mb-4">🏆 Proven Results</h4>
                      <p className="text-gray-600 mb-6">
                        Join thousands of satisfied clients who have transformed their lives with our science-backed fitness programs.
                      </p>
                      
                      <h4 className="text-xl font-semibold text-knox-red mb-4">🤝 Ongoing Support</h4>
                      <p className="text-gray-600">
                        We're with you every step of the way with regular check-ins, plan adjustments, and motivational support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}