import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

interface Program {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
  image: string;
}

const programs: Program[] = [
  {
    id: 'diet-plan',
    title: 'Diet Plan',
    description: 'Effective diet plan focused on sustainable weight loss. Includes BMI and BMR report.',
    price: '499',
    originalPrice: '1000',
    features: [
      'Customized diet plan',
      'No supplements required',
      'BMI and BMR report',
      'Sustainable eating patterns',
      'One session with expert nutritionist'
    ],
    image: '/diet-plan.jpeg'
  },
  {
    id: 'workout-plan',
    title: 'Workout Plan',
    description: 'Comprehensive workout plan designed for building muscle with professional guidance.',
    price: '499',
    originalPrice: '1000',
    features: [
      'Specialized workout routine',
      'Progressive training plan',
      'Assigned to your goals',
      'Tailored to fitness level',
      'One session with expert trainer'
    ],
    image: '/workout-plan.avif'
  },
  {
    id: 'total-recomposition',
    title: 'Total Transformation',
    description: 'Complete diet and workout plan with weekly trainer consultation and daily follow-ups.',
    price: '2999',
    originalPrice: '4999', 
    features: [
      'Personalised diet & workout combined plan',
      'Assigned to your goals',
      'Weekly trainer sessions',
      'Daily follow-up support',
      'Elite program eligible',
      'Get 1 month FREE with daily updates'
    ],
    popular: true,
    image: '/total-transformation.webp'
  },
  {
    id: 'general-fitness',
    title: 'General Fitness',
    description: 'Balanced diet and workout plan with one trainer session to kickstart your fitness journey.',
    price: '999',
    originalPrice: '2000',
    features: [
      'Balanced diet plan',
      'Basic workout routine',
      'One trainer consultation',
      'BMI report included',
      'Sustainable approach'
    ],
    image: '/gen-fitness.webp'
  }
];

export function Programs() {
  return (
    <section className="bg-white py-24" id="programs">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">Our Result-Oriented Programs</h2>
          <p className="text-gray-600 text-lg">
            Choose from our range of affordable fitness programs designed to help you achieve
            your specific goals with guaranteed results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <Card
              key={program.id}
              className={`program-card card-effect ${program.popular ? 'ring-2 ring-knox-red' : ''}`}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                {program.popular && (
                  <div className="absolute top-4 right-4 bg-knox-red text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-white font-bold text-xl">{program.title}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={`${program.id}-${feature.substring(0, 10)}`} className="flex items-start">
                      <svg className="h-5 w-5 text-knox-red mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
<CardFooter className="flex flex-col gap-4 pt-0">
  <div className="w-full flex justify-between items-center">
    <div className="flex items-baseline space-x-2">
      {program.originalPrice && (
        <span className="text-xl text-gray-400 line-through">₹{program.originalPrice}</span>
      )}
      <span className="text-3xl font-bold text-knox-black">₹{program.price}</span>
      <span className="text-gray-500 ml-1">/month</span>
    </div>
    {program.id === 'body-recomposition' && (
      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
        Royalty Program
      </div>
    )}
  </div>
                <Button onClick={()=>{window.location.href = " https://wa.me/919148898988?text=I'm%20interested%20to%20join%20the%20program"}} className={`w-full ${program.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-knox-black text-white p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="h3 mb-4">KN0X-ELITE PROGRAM</h3>
              <p className="mb-4">
                Get an extra month FREE when you consistently follow your plan and share daily updates.
                Only available with our Body Recomposition program.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-knox-red mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Send daily updates without missing any day</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-knox-red mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stick to your plan consistently</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-knox-red mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get rewarded with an additional month free</span>
                </li>
              </ul>
            </div>
            <div className="bg-knox-red/10 p-6 rounded-xl border border-knox-red/20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <span className="text-knox-red text-5xl font-bold font-knockout">1 MONTH</span>
                <div className="text-2xl mt-2 font-bold">FREE</div>
                <p className="mt-4 text-gray-300">Complete daily check-ins for 30 days</p>
                <Button onClick={()=>{window.location.href = "#programs"}} className="mt-6 btn-primary">Join Elite Program</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
