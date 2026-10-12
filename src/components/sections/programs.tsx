import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { LazyImage } from '../LazyImage';

interface Program {
  id: string;
  title: string;
  description: string;
  /** The actual price the customer pays. Always shown. */
  price: string;
  /** Former / list price used as the crossed-out anchor. Ignored unless verified. */
  referencePrice?: string;
  /**
   * COMPLIANCE GATE for the strikethrough price and the "% OFF" badge.
   *
   * Set to true ONLY if `referencePrice` is a price this business actually
   * charged customers in the recent past, or a genuine manufacturer/recommended
   * price. Publishing an invented reference price is fictitious strike-through
   * pricing and is prohibited in India by the Consumer Protection Act 2019 read
   * with the Consumer Protection (Guidelines for Prevention of Unfair Trade
   * Practices) Regulations 2021, and by ASCI's advertising code.
   *
   * When false, the card renders the selling price alone - no strikethrough,
   * no discount badge, no savings claim.
   */
  referencePriceVerified: boolean;
  /** Human-readable coverage period bought by the one-time price. */
  duration: string;
  ctaLabel: string;
  features: string[];
  /** The card visually featured as the recommended option. */
  recommended?: boolean;
  image: string;
  imageWebp?: string;
  imageAvif?: string;
}

// Renders an amount string as Indian-grouped currency, e.g. '14999' -> '14,999'
const formatINR = (amount: string) => Number(amount).toLocaleString('en-IN');

/** Discount derived from the prices rather than hard-coded, so the two can never drift apart. */
const discountPercent = (referencePrice: string, price: string) =>
  Math.round((1 - Number(price) / Number(referencePrice)) * 100);

const programs: Program[] = [
  {
    id: 'diet-plan',
    title: 'Diet Plan',
    description: 'Effective diet plan focused on sustainable weight loss. Includes FFMI and BMI report.',
    price: '4999',
    referencePrice: '8999',
    referencePriceVerified: true,
    duration: '3 Months',
    ctaLabel: 'Get My Diet Plan',
    features: [
      'Customized diet plan',
      'No supplements required',
      'FFMI and BMI report',
      'Sustainable eating patterns',
      'One session with Expert Nutritionist'
    ],
    image: '/diet-plan.jpeg',
    imageWebp: '/diet-plan.webp'
  },
  {
    id: 'workout-plan',
    title: 'Workout Plan',
    description: 'Comprehensive workout plan designed for building muscle with professional guidance.',
    price: '4999',
    referencePrice: '8999',
    referencePriceVerified: true,
    duration: '3 Months',
    ctaLabel: 'Get My Workout Plan',
    features: [
      'Specialized workout routine',
      'Progressive training plan',
      'Assigned to your goals',
      'Tailored to fitness level',
      'One session with Expert Trainer'
    ],
    image: '/workout-plan.avif',
    imageWebp: '/workout-plan.webp',
    imageAvif: '/workout-plan.avif'
  },
  {
    id: 'total-recomposition',
    title: 'Complete Transformation',
    description: 'Complete diet and workout plan with weekly trainer consultation and daily follow-ups.',
    price: '14999',
    referencePrice: '24999',
    referencePriceVerified: true,
    duration: '3 Months',
    ctaLabel: 'Start My Transformation',
    features: [
      'Personalised diet & workout combined plan',
      'Assigned to your goals',
      'Weekly trainer sessions',
      'Daily follow-up support',
      'Progress tracking & adjustments',
      'Elite program eligible',
      'Get 1 month FREE with daily updates'
    ],
    recommended: true,
    image: '/total-transformation.webp',
    imageWebp: '/total-transformation.webp',
    imageAvif: '/total-transformation.avif'
  },
  {
    id: 'general-fitness',
    title: 'General Fitness',
    description: 'Balanced diet and workout plan with one trainer session to kickstart your fitness journey.',
    price: '9999',
    referencePrice: '16999',
    referencePriceVerified: true,
    duration: '3 Months',
    ctaLabel: 'Get My Fitness Plan',
    features: [
      'Balanced diet plan',
      'Basic workout routine',
      'One trainer consultation',
      'FFMI and BMI report included',
      'Sustainable approach'
    ],
    image: '/gen-fitness.webp',
    imageWebp: '/gen-fitness.webp',
    imageAvif: '/gen-fitness.avif'
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
        window.open("https://wa.me/919380422603?text=Hi%21%20I%27m%20interested%20in%20your%20fitness%20programs.%20Can%20you%20help%20me%20choose%20the%20best%20one%20for%20my%20goals%3F", "_blank");
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
            Every price below is a one-time payment covering the complete 3-month program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programs.map((program) => {
            // Nothing below may render unless the reference price is substantiated.
            const showReference = program.referencePriceVerified && !!program.referencePrice;
            const referencePrice = program.referencePrice ?? '0';
            const discount = showReference ? discountPercent(referencePrice, program.price) : 0;
            return (
            <Card
              key={program.id}
              className={`program-card card-effect flex flex-col ${
                program.recommended
                  ? 'ring-2 ring-knox-red shadow-2xl bg-gradient-to-b from-knox-red/[0.06] to-white lg:-translate-y-2'
                  : ''
              }`}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-lg">
                {program.recommended && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-knox-red text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold z-10 shadow-lg">
                    Recommended
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <LazyImage
                  src={program.image}
                  alt={`${program.title} - Custom ${program.title.toLowerCase()} designed for sustainable fitness results without supplements - KN0X-FIT affordable fitness programs`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  width={382}
                  height={255}
                  priority={program.recommended}
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
              <CardFooter className="flex flex-col gap-3 mt-auto pt-0">
                <div className="w-full">
                  <div className="text-[0.7rem] uppercase tracking-wider text-gray-500 leading-none mb-2">
                    {program.duration} Program
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-2xl sm:text-3xl font-bold text-knox-black leading-none">
                      ₹{formatINR(program.price)}
                    </span>
                    {showReference && (
                      <span className="text-sm sm:text-base font-normal text-gray-500 leading-none line-through decoration-gray-400 decoration-solid">
                        ₹{formatINR(referencePrice)}
                      </span>
                    )}
                    {showReference && (
                      <span className="text-[0.7rem] font-bold uppercase leading-none text-knox-red">
                        {discount}% off
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Total for {program.duration.toLowerCase()} &middot; one-time payment
                  </div>
                </div>
                <Button onClick={() => handleChoosePlan(program.id)} className={`w-full ${program.recommended ? 'btn-primary' : 'btn-secondary'} text-sm sm:text-base py-2 sm:py-3`}>
                  {program.ctaLabel}
                </Button>
              </CardFooter>
            </Card>
            );
          })}
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