import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-knox-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
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
              <a href="https://www.instagram.com/kn0x_fit/profilecard/?igsh=bWFiMzlkanppYTh1" className="text-gray-300 hover:text-knox-red" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06... (truncated for brevity)" clipRule="evenodd" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 01-8 0 4 4 0 018 0zm2 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1" />
                </svg>
                <a href="mailto:info@kn0x-fit.com" className="hover:underline">info@kn0x-fit.com</a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-knox-red">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-knox-red">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-knox-red">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-knox-red">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-300 hover:text-knox-red">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
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

