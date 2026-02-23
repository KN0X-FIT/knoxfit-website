import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes KN0X-FIT different from other fitness programs?",
    answer: "KN0X-FIT focuses on sustainable, no-supplement fitness solutions designed specifically for beginners. Our Expert Trainers create affordable custom workout plans and diet guides that deliver guaranteed results without expensive supplements or complicated routines."
  },
  {
    question: "Do I need supplements to see results with your programs?",
    answer: "No! All our programs are designed to deliver results using whole foods and proper nutrition. We believe in sustainable fitness that doesn't rely on expensive supplements. Our diet guides focus on balanced nutrition using easily available ingredients."
  },
  {
    question: "How quickly will I see results with your workout plans?",
    answer: "Most clients start seeing initial changes within 2-3 weeks, with significant results visible after 6-8 weeks of consistent following. Results vary based on individual goals, starting fitness level, and adherence to the program."
  },
  {
    question: "Are your programs suitable for complete beginners?",
    answer: "Absolutely! Our custom workout plans are specifically designed for beginners. We start with basic movements and gradually progress based on your fitness level. Each program includes detailed instructions and modifications for different fitness levels."
  },
  {
    question: "What's included in the ₹799 program packages?",
    answer: "Each ₹799 package includes a customized diet plan or workout routine, consultation with Expert Trainers, FFMI and BMI reports, and ongoing support. Programs are designed to be sustainable and result-oriented without hidden costs."
  },
  {
    question: "Can I follow the programs from home without gym equipment?",
    answer: "Yes! Many of our workout plans can be done at home with minimal or no equipment. We focus on bodyweight exercises and movements that can be performed in any space, making fitness accessible regardless of your location or budget."
  },
  {
    question: "What is the KN0X-ELITE program and how do I qualify?",
    answer: "The KN0X-ELITE program offers an additional month free for clients who consistently follow their Transformation plan and provide daily updates. It's our way of rewarding commitment and ensuring maximum results from your fitness journey. This program gets eligible on choosing the Total Transformation Plan"
  },
  {
    question: "Do you provide ongoing support after purchasing a program?",
    answer: "All programs include consultation and follow-up support. With Diet, Workout, or General Fitness plans, you'll get one consultation plus ongoing query support. Choose the Total Transformation Plan to unlock weekly trainer sessions, daily follow-ups, elite program access, and 1 month FREE with daily updates."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24" id="faq">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-knox-black mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Get answers to common questions about our fitness programs, pricing, and approach to sustainable health and wellness.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-5 sm:p-6 focus:outline-none focus:ring-2 focus:ring-knox-red/20"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-semibold text-knox-black pr-4">
                        {faq.question}
                      </h3>
                      <div className={`transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      } flex-shrink-0`}>
                        <svg className="w-5 h-5 text-knox-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-200 ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-knox-black text-white p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6">
              Get personalized answers from our Expert Trainers. Contact us directly for specific questions about your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="https://wa.me/919380422603?text=Hi%21%20I%20have%20questions%20about%20your%20fitness%20programs.%20Can%20you%20help%20me%20understand%20pricing%20and%20what%27s%20included%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-knox-red text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base"
              >
                WhatsApp Us
              </a>
              <a 
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-knox-black transition-colors text-sm sm:text-base"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}