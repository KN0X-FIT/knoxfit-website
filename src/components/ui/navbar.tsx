import { useState } from 'react';
import { Button } from './button';
import { Dialog, DialogContent, DialogTrigger } from './dialog';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/final_logo-removebg-preview.png" alt="KN0X-FIT" className="h-20 w-auto" />
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="header-nav-link">Home</a>
          <a href="#programs" className="header-nav-link">Programs</a>
          <a href="#contact" className="header-nav-link">Contact</a>
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
          <div className="container py-4 space-y-4">
            <a href="#home" className="block py-2 header-nav-link">Home</a>
            <a href="#programs" className="block py-2 header-nav-link">Programs</a>
            <a href="#contact" className="block py-2 header-nav-link">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
