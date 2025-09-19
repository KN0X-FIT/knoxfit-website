import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { LazyImage } from '../LazyImage';

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
    description: 'Effective diet plan focused on sustainable weight loss. Includes FFMI and BMI report.',
    price: '799',
    originalPrice: '2000',
    features: [
      'Customized diet plan',
      'No supplements required',
      'FFMI and BMI report',
      'Sustainable eating patterns',
      'One session with Expert Nutritionist'
    ],
    image: '/diet-plan.jpeg'
  },
  {
    id: 'workout-plan',
    title: 'Workout Plan',
    description: 'Comprehensive workout plan designed for building muscle with professional guidance.',
    price: '799',
    originalPrice: '2000',
    features: [
      'Specialized workout routine',
      'Progressive training plan',
      'Assigned to your goals',
      'Tailored to fitness level',
      'One session with Expert Trainer'
    ],
    image: '/workout-plan.avif'
  },
  {
    id: 'total-recomposition',
    title: 'Total Transformation',
    description: 'Complete diet and workout plan with weekly trainer consultation and daily follow-ups.',
    price: '3499',
    originalPrice: '5000', 
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
      'FFMI and BMI report included',
      'Sustainable approach'
    ],
    image: '/gen-fitness.webp'
  }
];

export function Programs() {
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChoosePlan = (programId: string) => {
    switch(programId) {
      case 'diet-plan':
        navigate('/diet-guide', { replace: true });
        window.scrollTo(0, 0);
        break;
      case 'workout-plan':
        navigate('/custom-workout-plan', { replace: true });
        window.scrollTo(0, 0);
        break;
      case 'total-recomposition':
        navigate('/elite-program', { replace: true });
        window.scrollTo(0, 0);
        break;
      case 'general-fitness':
        navigate('/general-fitness', { replace: true });
        window.scrollTo(0, 0);
        break;
      default:
        // Default to WhatsApp for any other program
        window.location.href = "https://wa.me/919380422603?text=Hi%20KN0X-FIT!%20I'm%20interested%20in%20joining%20one%20of%20your%20programs.%20Could%20you%20help%20me%20choose%20the%20best%20program%20based%20on%20my%20fitness%20goals%20and%20current%20fitness%20level?";
    }
  };
  
  return (
    <section className="bg-white py-24" id="programs">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Brand Slogan */}
          <div className="text-knox-red font-knockout text-sm tracking-widest uppercase mb-4">
            BUILT FOR CHANGE - DESIGNED FOR YOU
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-knox-black mb-6">Our Result-Oriented Fitness Programs</h2>
          <p className="text-gray-600 text-lg">
            Choose from our range of affordable fitness programs designed to help you achieve
            your specific goals with guaranteed results. Custom workout plans for beginners and sustainable diet guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programs.map((program) => (
            <Card
              key={program.id}
              className={`program-card card-effect ${program.popular ? 'ring-2 ring-knox-red' : ''}`}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
                {program.popular && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-knox-red text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <LazyImage
                  src={program.image}
                  alt={`${program.title} - Custom ${program.title.toLowerCase()} designed for sustainable fitness results without supplements - KN0X-FIT affordable fitness programs`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  width={300}
                  height={200}
                  priority={program.popular}
                />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10">
                  <h3 className="text-white font-bold text-lg sm:text-xl">{program.title}</h3>
                </div>
              </div>
              <CardContent className="pt-4 sm:pt-6">
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">{program.description}</p>
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {program.features.map((feature) => (
                    <li key={`${program.id}-${feature.substring(0, 10)}`} className="flex items-start">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 text-knox-red mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
<CardFooter className="flex flex-col gap-3 sm:gap-4 pt-0">
  <div className="w-full flex flex-wrap justify-between items-center gap-2">
    <div className="flex items-baseline space-x-1 sm:space-x-2">
      {program.originalPrice && (
        <span className="text-lg sm:text-xl text-gray-400 line-through">₹{program.originalPrice}</span>
      )}
      <span className="text-2xl sm:text-3xl font-bold text-knox-black">₹{program.price}</span>
      <span className="text-gray-500 text-xs sm:text-sm ml-1">/month</span>
    </div>
    {program.id === 'body-recomposition' && (
      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
        Royalty Program
      </div>
    )}
  </div>
                <Button onClick={() => handleChoosePlan(program.id)} className={`w-full ${program.popular ? 'btn-primary' : 'btn-secondary'} text-sm sm:text-base py-2 sm:py-3`}>
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-knox-black text-white p-6 sm:p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="text-knox-red font-knockout text-xs tracking-widest uppercase mb-2 sm:mb-3">
                BUILT FOR CHANGE - DESIGNED FOR YOU
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">KN0X-ELITE PROGRAM</h3>
              <p className="text-sm sm:text-base mb-3 sm:mb-4">
                Get an extra month FREE when you consistently follow your plan and share daily updates.
                Only available with our Body Recomposition program.
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-knox-red mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Send daily updates without missing any day</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-knox-red mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Stick to your plan consistently</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-knox-red mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">Get rewarded with an additional month free</span>
                </li>
              </ul>
            </div>
            <div className="bg-knox-red/10 p-4 sm:p-6 rounded-xl border border-knox-red/20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <span className="text-knox-red text-3xl sm:text-5xl font-bold font-knockout">1 MONTH</span>
                <div className="text-xl sm:text-2xl mt-1 sm:mt-2 font-bold">FREE</div>
                <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base">Complete daily check-ins for 30 days</p>
                <Button onClick={()=> {navigate('/elite-program', { replace: true }); window.scrollTo(0, 0);}} className="mt-4 sm:mt-6 btn-primary text-sm sm:text-base py-2 sm:py-3">Learn More About Elite Program</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
