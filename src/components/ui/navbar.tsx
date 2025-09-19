import { useState } from 'react';
import { Button } from './button';
import { Dialog, DialogContent, DialogTrigger } from './dialog';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePrograms = () => {
    setIsProgramsOpen(!isProgramsOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/final_logo-removebg-preview.png" alt="KN0X-FIT Logo - Custom Workout Plans and Diet Guides for Sustainable Fitness" className="h-12 sm:h-16 w-auto" />
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="/" className="header-nav-link text-sm lg:text-base">Home</a>
          
          {/* Programs Dropdown */}
          <div className="relative group">
            <button className="header-nav-link header-nav-link-programs flex items-center gap-1 text-sm lg:text-base">
              Programs
              <svg className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Desktop Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-3">
                {/* Diet Plans */}
                <a href="/diet-guide" className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 group-hover/item:text-knox-red text-sm">Diet Plans</div>
                      <p className="text-xs text-gray-600 mt-1">Personalized nutrition guides</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover/item:text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                
                {/* Elite Program - Highlighted */}
                <a href="/elite-program" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-knox-red/10 hover:to-knox-red/5 transition-all duration-200 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-knox-red group-hover/item:text-knox-darkred text-sm">Elite Program</span>
                        <span className="bg-knox-red text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">NEW</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Premium 1-on-1 coaching</p>
                    </div>
                    <svg className="w-4 h-4 text-knox-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
                
                {/* Workout Plans */}
                <a href="/custom-workout-plan" className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 group-hover/item:text-knox-red text-sm">Workout Plans</div>
                      <p className="text-xs text-gray-600 mt-1">Custom exercise routines</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover/item:text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                
                {/* General Fitness */}
                <a href="/general-fitness" className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 group-hover/item:text-knox-red text-sm">General Fitness</div>
                      <p className="text-xs text-gray-600 mt-1">Balanced diet & workout plan</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover/item:text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <a href="/testimonials" className="header-nav-link text-sm lg:text-base">Testimonials</a>
          <a href="/free-plan" className="header-nav-link text-knox-red font-semibold hover:text-red-600 transition-colors duration-200 text-sm lg:text-base">Free Plan</a>
          <a href="/blog" className="header-nav-link text-sm lg:text-base">Blog</a>
          <a href="/contact" className="header-nav-link text-sm lg:text-base">Contact</a>
        </nav>

        {/* Creative Mobile menu button */}
        <button
          onClick={toggleMenu}
          className={`flex md:hidden items-center justify-center p-2 rounded-lg transition-all duration-300 ${isMenuOpen ? 'bg-knox-red' : 'bg-knox-red/10 hover:bg-knox-red/20'}`}
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block absolute h-0.5 w-5 bg-knox-red rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`block absolute h-0.5 w-5 bg-knox-red rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-0.5 w-5 bg-knox-red rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
          </div>
        </button>
      </div>

      {/* Creative Mobile menu with animation */}
      <div className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container py-4 space-y-2 animate-fadeIn">
          <a href="/" className="block py-3 header-nav-link text-base font-medium rounded-lg px-4 transition-all duration-300 hover:bg-knox-red/10 active:scale-95">🏠 Home</a>
          
          {/* Mobile Programs Menu with creative styling */}
          <div className="border-b border-gray-100 pb-2">
            <button 
              onClick={togglePrograms}
              className={`flex items-center justify-between w-full py-3 header-nav-link header-nav-link-programs-mobile text-left text-base font-medium rounded-lg px-4 transition-all duration-300 ${isProgramsOpen ? 'bg-knox-red/10' : 'hover:bg-knox-red/10'}`}
            >
              <span>💪 Programs</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isProgramsOpen ? 'rotate-180 text-knox-red' : 'text-gray-500'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Programs Submenu with slide animation */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProgramsOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-2 bg-gray-50 rounded-xl p-3 mx-2">
                {/* Diet Plans */}
                <a href="/diet-guide" className="block py-3 px-4 rounded-lg hover:bg-white transition-all duration-300 text-sm active:scale-95 border-l-4 border-transparent hover:border-knox-red">
                  <div className="font-medium text-gray-900">🥗 Diet Plans</div>
                  <p className="text-xs text-gray-600 mt-1">Personalized nutrition guides</p>
                </a>
                
                {/* Elite Program - Highlighted */}
                <a href="/elite-program" className="block py-3 px-4 rounded-lg bg-gradient-to-r from-knox-red/15 to-knox-red/5 border border-knox-red/30 transition-all duration-300 active:scale-95">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-knox-red text-sm">⭐ Elite Program</span>
                    <span className="bg-knox-red text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">HOT</span>
                  </div>
                  <p className="text-xs text-gray-600">Premium 1-on-1 coaching</p>
                </a>
                
                {/* Workout Plans */}
                <a href="/custom-workout-plan" className="block py-3 px-4 rounded-lg hover:bg-white transition-all duration-300 text-sm active:scale-95 border-l-4 border-transparent hover:border-knox-red">
                  <div className="font-medium text-gray-900">🏋️ Workout Plans</div>
                  <p className="text-xs text-gray-600 mt-1">Custom exercise routines</p>
                </a>
                
                {/* General Fitness */}
                <a href="/general-fitness" className="block py-3 px-4 rounded-lg hover:bg-white transition-all duration-300 text-sm active:scale-95 border-l-4 border-transparent hover:border-knox-red mb-2">
                  <div className="font-medium text-gray-900">🎯 General Fitness</div>
                  <p className="text-xs text-gray-600 mt-1">Balanced diet & workout plan</p>
                </a>
              </div>
            </div>
          </div>
          
          <a href="/testimonials" className="block py-3 header-nav-link text-base font-medium rounded-lg px-4 transition-all duration-300 hover:bg-knox-red/10 active:scale-95">💬 Testimonials</a>
          <a href="/free-plan" className="block py-3 header-nav-link text-knox-red font-semibold text-base rounded-lg px-4 transition-all duration-300 hover:bg-knox-red/10 active:scale-95">🎁 Free Plan</a>
          <a href="/blog" className="block py-3 header-nav-link text-base font-medium rounded-lg px-4 transition-all duration-300 hover:bg-knox-red/10 active:scale-95">📰 Blog</a>
          <a href="/contact" className="block py-3 header-nav-link text-base font-medium rounded-lg px-4 transition-all duration-300 hover:bg-knox-red/10 active:scale-95">📞 Contact</a>
          
          {/* Creative CTA button for mobile menu */}
          <div className="pt-2 px-4">
            <a 
              href="https://wa.me/919380422603?text=Hi%21%20I%20want%20to%20learn%20more%20about%20your%20fitness%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-knox-red hover:bg-knox-darkred text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
