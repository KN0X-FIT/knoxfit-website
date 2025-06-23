import React from 'react';
import { Card, CardContent } from '../ui/card';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Sustainable Approach',
    description: 'Our programs focus on sustainable diet and exercise plans without relying on supplements or protein shakes.',
    icon: (
      <svg className="h-10 w-10 text-knox-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Custom Diet Plans',
    description: 'Personalized diet plans based on your body type, lifestyle, and preferences to ensure maximum results.',
    icon: (
      <svg className="h-10 w-10 text-knox-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 3V4.5M9.75 17.25V18.75M5.25 5.25L6.75 6.75M12.75 5.25L11.25 6.75M17.25 9.75H18.75M9.75 13.5C11.9591 13.5 13.75 11.7091 13.75 9.5C13.75 7.29086 11.9591 5.5 9.75 5.5C7.54086 5.5 5.75 7.29086 5.75 9.5C5.75 11.7091 7.54086 13.5 9.75 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 14C14 11.7909 15.7909 10 18 10C18.6906 10 19.3389 10.1962 19.8987 10.5294C20.5578 10.9427 21.0787 11.557 21.386 12.2868C21.7541 13.1501 21.8098 14.0925 21.5364 14.9587C21.2629 15.8248 20.683 16.5641 19.9028 17.0392C19.1225 17.5142 18.1856 17.6949 17.2717 17.5493C16.3579 17.4037 15.5224 16.9419 14.9108 16.2429" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 13.5H5.25M3 19.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Effective Workout Plans',
    description: 'Science-backed exercise routines that maximize results in minimal time, tailored to your fitness level.',
    icon: (
      <svg className="h-10 w-10 text-knox-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7 8C19.1 8 19.5 8.2 19.7 8.5C20 8.8 20 9.1 20 9.5V14.5C20 14.9 19.8 15.3 19.5 15.5C19.2 15.8 18.9 15.8 18.5 15.8H16.9L15.5 18L14.1 15.8H5.5C5.1 15.8 4.7 15.6 4.5 15.3C4.2 15 4.2 14.7 4.2 14.3V9.5C4.2 9.1 4.4 8.7 4.7 8.5C5 8.2 5.3 8.2 5.7 8.2H18.7V8ZM10.8 13.2C10.8 12.5 10.3 12 9.5 12C8.8 12 8.2 12.5 8.2 13.2C8.2 14 8.7 14.5 9.5 14.5C10.2 14.5 10.8 14 10.8 13.2ZM16 13.2C16 12.5 15.5 12 14.8 12C14 12 13.5 12.5 13.5 13.2C13.5 14 14 14.5 14.8 14.5C15.5 14.5 16 14 16 13.2ZM7.3 4.5H14.8V6H7.3V4.5Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Personal Coaching',
    description: 'Regular sessions with certified trainers who provide guidance, motivation, and accountability.',
    icon: (
      <svg className="h-10 w-10 text-knox-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Royalty Program',
    description: 'Get rewarded for your consistency with an extra month free when you follow your plan and share daily updates.',
    icon: (
      <svg className="h-10 w-10 text-knox-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Guaranteed Results',
    description: "We're confident in our approach - our programs are designed to deliver visible and measurable results.",
    icon: (
      <svg className="h-10 w-10 text-knox-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">Why Choose KN0X-FIT?</h2>
          <p className="text-gray-600 text-lg">
            We combine expert knowledge, personalized programs, and proven methods
            to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={`feature-${feature.title}`} className="card-3d">
              <CardContent className="p-6 space-y-4">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center card-effect">
            <div className="text-5xl font-bold font-knockout text-knox-red mb-2">100%</div>
            <div className="text-xl font-semibold mb-2">Result Oriented</div>
            <p className="text-gray-600">Our clients love their results</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center card-effect">
            <div className="text-5xl font-bold font-knockout text-knox-red mb-2">1000+</div>
            <div className="text-xl font-semibold mb-2">First step taken</div>
            <p className="text-gray-600">The transformation starts today</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center card-effect">
            <div className="text-5xl font-bold font-knockout text-knox-red mb-2">30+</div>
            <div className="text-xl font-semibold mb-2">Expert Trainers & Nutritonists</div>
            <p className="text-gray-600">Result-driven professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
