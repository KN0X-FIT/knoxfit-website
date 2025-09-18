
import * as React from "react";

export function Contact() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[15%] w-32 h-32 bg-knox-red rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div className="absolute right-[10%] bottom-[15%] w-48 h-48 bg-knox-red rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Brand Slogan */}
          <div className="text-knox-red font-knockout text-sm tracking-widest uppercase mb-4">
            BUILT FOR CHANGE - DESIGNED FOR YOU
          </div>
          
          <h2 className="h2 mb-4">Start Your Fitness Transformation Today</h2>
          <p className="text-gray-600 text-lg">
            Have questions about our custom workout plans for beginners or sustainable diet guides?
            Reach out to us and we'll help you find the right program for your fitness goals.
          </p>
        </div>

        <div className="space-y-8 max-w-xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Connect With KN0X-FIT</h3>
            <p className="text-gray-600">
              Join KN0X-FIT today and start your transformation journey with our Expert Trainers
              and proven programs. Custom workout plans for beginners and sustainable diet plans without supplements.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-knox-red text-white p-3 rounded-lg mr-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">
                  <a href="tel:+919380422603" className="hover:underline">
                    +91 9380422603
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start">
  <div className="bg-knox-red text-white p-3 rounded-lg mr-4">
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </div>
  <div>
    <h4 className="text-lg font-semibold">Email</h4>
    <p className="text-gray-600">
      <a href="mailto:info@kn0x-fit.com" className="hover:underline">
        info@kn0x-fit.com
      </a>
    </p>
  </div>
</div>
</div>

          <div className="space-y-4 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/15qEQspHDS/" className="bg-knox-black hover:bg-knox-red text-white p-3 rounded-full transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/kn0x_fit/profilecard/?igsh=bWFiMzlkanppYTh1" className="bg-knox-black hover:bg-knox-red text-white p-3 rounded-full transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/KN0X_FIT?t=_QbuKou5leooKjU6snZTGA&s=09" className="bg-knox-black hover:bg-knox-red text-white p-3 rounded-full transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
              </a>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}