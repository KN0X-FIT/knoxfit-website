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
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/final_logo-removebg-preview.png" alt="KN0X-FIT Logo - Custom Workout Plans and Diet Guides for Sustainable Fitness" className="h-20 w-auto" />
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="header-nav-link">Home</a>
          
          {/* Programs Dropdown */}
          <div className="relative group">
            <button className="header-nav-link header-nav-link-programs flex items-center gap-1">
              Programs
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <div className="font-medium text-gray-900 group-hover/item:text-knox-red">Diet Plans</div>
                      <p className="text-sm text-gray-600 mt-1">Personalized nutrition guides</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover/item:text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                
                {/* Elite Program - Highlighted */}
                <a href="/elite-program" className="block px-6 py-3 hover:bg-gradient-to-r hover:from-knox-red/10 hover:to-knox-red/5 transition-all duration-200 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-knox-red group-hover/item:text-knox-darkred">Elite Program</span>
                        <span className="bg-knox-red text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">NEW</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Premium 1-on-1 coaching</p>
                    </div>
                    <svg className="w-5 h-5 text-knox-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
                
                {/* Workout Plans */}
                <a href="/custom-workout-plan" className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 group-hover/item:text-knox-red">Workout Plans</div>
                      <p className="text-sm text-gray-600 mt-1">Custom exercise routines</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover/item:text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                
                {/* General Fitness */}
                <a href="/general-fitness" className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group/item">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 group-hover/item:text-knox-red">General Fitness</div>
                      <p className="text-sm text-gray-600 mt-1">Balanced diet & workout plan</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover/item:text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <a href="/testimonials" className="header-nav-link">Testimonials</a>
          <a href="/free-plan" className="header-nav-link text-knox-red font-semibold hover:text-red-600 transition-colors duration-200">Free Plan</a>
          <a href="/blog" className="header-nav-link">Blog</a>
          <a href="/contact" className="header-nav-link">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden items-center p-2 text-knox-black"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 space-y-2">
            <a href="/" className="block py-3 header-nav-link">Home</a>
            
            {/* Mobile Programs Menu */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={togglePrograms}
                className="flex items-center justify-between w-full py-3 header-nav-link header-nav-link-programs-mobile text-left"
              >
                <span>Programs</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${
                    isProgramsOpen ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Programs Submenu */}
              {isProgramsOpen && (
                <div className="pl-4 pt-2 space-y-2 bg-gray-50 rounded-lg mt-2">
                  {/* Diet Plans */}
                  <a href="/diet-guide" className="block py-3 px-4 rounded-lg hover:bg-white transition-colors">
                    <div className="font-medium text-gray-900">Diet Plans</div>
                    <p className="text-sm text-gray-600 mt-1">Personalized nutrition guides</p>
                  </a>
                  
                  {/* Elite Program - Highlighted */}
                  <a href="/elite-program" className="block py-3 px-4 rounded-lg bg-gradient-to-r from-knox-red/10 to-knox-red/5 border border-knox-red/20">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-knox-red">Elite Program</span>
                      <span className="bg-knox-red text-white text-xs px-2 py-0.5 rounded-full font-bold">NEW</span>
                    </div>
                    <p className="text-sm text-gray-600">Premium 1-on-1 coaching</p>
                  </a>
                  
                  {/* Workout Plans */}
                  <a href="/custom-workout-plan" className="block py-3 px-4 rounded-lg hover:bg-white transition-colors">
                    <div className="font-medium text-gray-900">Workout Plans</div>
                    <p className="text-sm text-gray-600 mt-1">Custom exercise routines</p>
                  </a>
                  
                  {/* General Fitness */}
                  <a href="/general-fitness" className="block py-3 px-4 rounded-lg hover:bg-white transition-colors">
                    <div className="font-medium text-gray-900">General Fitness</div>
                    <p className="text-sm text-gray-600 mt-1">Balanced diet & workout plan</p>
                  </a>
                </div>
              )}
            </div>
            
            <a href="/testimonials" className="block py-3 header-nav-link">Testimonials</a>
            <a href="/free-plan" className="block py-3 header-nav-link text-knox-red font-semibold">🎁 Free Plan</a>
            <a href="/blog" className="block py-3 header-nav-link">Blog</a>
            <a href="/contact" className="block py-3 header-nav-link">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
