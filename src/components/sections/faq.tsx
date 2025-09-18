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
    answer: "The KN0X-ELITE program offers an additional month free for clients who consistently follow their Body Recomposition plan and provide daily updates. It's our way of rewarding commitment and ensuring maximum results from your fitness journey."
  },
  {
    question: "Do you provide ongoing support after purchasing a program?",
    answer: "Yes! All programs include trainer consultations and follow-up support. For the Body Recomposition program, you get weekly trainer sessions and daily follow-up support to ensure you stay on track with your goals."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  React.useEffect(() => {
    // Add FAQ structured data to page
    let faqScript = document.querySelector('script[data-faq="structured-data"]');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.setAttribute('type', 'application/ld+json');
      faqScript.setAttribute('data-faq', 'structured-data');
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqStructuredData);
    
    return () => {
      const script = document.querySelector('script[data-faq="structured-data"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <section className="bg-gray-50 py-24" id="faq">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-knox-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
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
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-knox-red/20"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-knox-black pr-4">
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
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
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
        <div className="text-center mt-16">
          <div className="bg-knox-black text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Get personalized answers from our Expert Trainers. Contact us directly for specific questions about your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I%20have%20some%20questions%20about%20your%20fitness%20programs.%20Could%20you%20please%20help%20me%20understand%20more%20about%20the%20pricing,%20duration,%20and%20what's%20included%20in%20each%20program?"
                className="bg-knox-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                WhatsApp Us
              </a>
              <a 
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-knox-black transition-colors"
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