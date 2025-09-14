import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-knox-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <img src="/final_logo-removebg-preview.png" alt="KN0X-FIT" className="h-12 w-auto brightness-0 invert" />
            <p className="text-gray-300 mt-4">
              KN0X-FIT is dedicated to helping you achieve your fitness goals with custom workout
              and diet plans that are result-oriented and sustainable.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/share/15qEQspHDS/" className="text-gray-300 hover:text-knox-red" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
  href="https://www.instagram.com/kn0x_fit/profilecard/?igsh=bWFiMzlkanppYTh1"
  className="text-gray-300 hover:text-knox-red"
  aria-label="Instagram"
>
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.75-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
  </svg>
</a>
              <a href="https://x.com/KN0X_FIT?t=_QbuKou5leooKjU6snZTGA&s=09" className="text-gray-300 hover:text-knox-red" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start text-gray-300">
                <svg className="h-6 w-6 mr-2 text-knox-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m-6 8V4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" />
                </svg>
                <a href="mailto:info@kn0x-fit.com" className="hover:underline">info@kn0x-fit.com</a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-knox-red">Home</a></li>
              <li><a href="/elite-program" className="text-gray-300 hover:text-knox-red">Elite Program</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-knox-red">Blog</a></li>
              <li><a href="/custom-workout-plan" className="text-gray-300 hover:text-knox-red">Workout Plans</a></li>
              <li><a href="/diet-guide" className="text-gray-300 hover:text-knox-red">Diet Guide</a></li>
            </ul>
          </div>
        </div>
        
        {/* Legal Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <div className="flex justify-center space-x-8">
              <a href="/privacy-policy" className="text-gray-300 hover:text-knox-red transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="/terms-of-service" className="text-gray-300 hover:text-knox-red transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} KN0X-FIT. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              <span className="text-knox-red">BUILT FOR CHANGE</span> . DESIGNED FOR YOU
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

