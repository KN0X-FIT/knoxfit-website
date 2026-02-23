import React from 'react';
import { Card, CardContent } from '../ui/card';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Tell Us Your Goals",
    description: "Complete our simple assessment to help us understand your fitness level, goals, and preferences.",
    icon: (
      <svg className="h-10 w-10 text-knox-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Get Your Custom Plan",
    description: "Receive your personalized workout and diet plan designed by Expert Trainers specifically for you.",
    icon: (
      <svg className="h-10 w-10 text-knox-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Follow Your Plan",
    description: "Implement your plan with clear instructions and daily guidance.",
    icon: (
      <svg className="h-10 w-10 text-knox-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Track Your Progress",
    description: "Send your daily updates via WhatsApp and let our Expert Trainers monitor your progress, keeping you accountable every step of the way",
    icon: (
      <svg className="h-10 w-10 text-knox-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="how-it-works">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-knox-red font-knockout text-sm tracking-widest uppercase mb-4">
            BUILT FOR CHANGE - DESIGNED FOR YOU
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-knox-black mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Get started with our simple 4-step process to transform your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => (
            <Card key={step.id} className="card-effect h-full">
              <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4 text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="bg-knox-red/10 p-3 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <div className="text-knox-red font-knockout text-3xl sm:text-4xl font-bold">
                  0{step.id}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-knox-black text-white p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start Your Transformation?</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6">
              Join hundreds of satisfied clients who have transformed their bodies with our proven programs.
            </p>
            <a 
              href="/free-plan"
              className="inline-block bg-knox-red text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-base sm:text-lg"
            >
              Get My Free 5-Day Starter Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}