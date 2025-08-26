import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';

interface Testimonial {
  id: string;
  name: string;
  age: number;
  program: string;
  quote: string;
  achievement: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    age: 32,
    program: 'Weight Loss',
    quote: 'I lost 15 kg in 3 months with the sustainable diet plan. No supplements, just clean eating and consistent workouts.',
    achievement: 'Lost 15 kg',
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZml0bmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    beforeImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    afterImage: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
  },
  {
    id: '2',
    name: 'Priya Patel',
    age: 28,
    program: 'Body Recomposition',
    quote: 'The trainers at KN0X-FIT are incredibly supportive. With daily check-ins and personalized guidance, I achieved a body I never thought possible!',
    achievement: 'Gained 5 kg muscle, lost 8 kg fat',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZml0bmVzcyUyMHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    beforeImage: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoaW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    afterImage: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlJTIwZml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3',
    name: 'Amit Khanna',
    age: 35,
    program: 'Muscle Gain',
    quote: 'As someone who had always been skinny, gaining muscle seemed impossible. KN0X-FIT provided a targeted workout plan that finally helped me build the physique I wanted.',
    achievement: 'Gained 8 kg lean muscle',
    image: 'https://images.unsplash.com/photo-1568243299791-86007884f249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    beforeImage: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbm55JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    afterImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2N1bGFyJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '4',
    name: 'Neha Gupta',
    age: 42,
    program: 'General Fitness',
    quote: 'After years of ignoring my health, I decided to make a change. The general fitness program was perfect for me as a beginner. Now I have more energy and confidence than ever before.',
    achievement: 'Improved stamina and overall health',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    beforeImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    afterImage: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBydW5uaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showComparison, setShowComparison] = useState<string | null>(null);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setShowComparison(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setShowComparison(null);
  };

  const handleToggleComparison = (id: string) => {
    setShowComparison(showComparison === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-50" id="testimonials">
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">Transformation Stories</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - see the real results from our members
            who have transformed their bodies and lives with KN0X-FIT.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="relative">
                          {showComparison === testimonial.id ? (
                            <div className="relative h-96 overflow-hidden rounded-xl">
                              <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                                {testimonial.beforeImage && (
                                  <img
                                    src={testimonial.beforeImage}
                                    alt={`${testimonial.name} before`}
                                    className="h-full w-full object-cover"
                                  />
                                )}
                                <div className="absolute top-2 left-2 bg-knox-black text-white text-xs py-1 px-3 rounded-full">
                                  Before
                                </div>
                              </div>
                              <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
                                {testimonial.afterImage && (
                                  <img
                                    src={testimonial.afterImage}
                                    alt={`${testimonial.name} after`}
                                    className="h-full w-full object-cover"
                                  />
                                )}
                                <div className="absolute top-2 right-2 bg-knox-red text-white text-xs py-1 px-3 rounded-full">
                                  After
                                </div>
                              </div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1 h-full bg-white shadow-lg"></div>
                              </div>
                            </div>
                          ) : (
                            <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                              {(testimonial.beforeImage && testimonial.afterImage) && (
                                <button
                                  onClick={() => handleToggleComparison(testimonial.id)}
                                  className="absolute bottom-4 right-4 bg-knox-red hover:bg-knox-darkred text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors shadow-lg"
                                >
                                  See Transformation
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                        {showComparison === testimonial.id && (
                          <button
                            onClick={() => setShowComparison(null)}
                            className="bg-knox-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                          >
                            Back to Profile
                          </button>
                        )}
                      </div>

                      <Card className="card-3d h-full">
                        <CardContent className="p-8 flex flex-col h-full">
                          <div className="mb-4">
                            <svg className="h-10 w-10 text-knox-red" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.0171 14.8838C14.0171 15.5392 13.8442 16.105 13.4984 16.5811C13.1698 17.0486 12.7241 17.4279 12.1611 17.719C11.6067 17.9973 10.9781 18.1338 10.2751 18.1277L9.97006 18.1269C9.3053 18.1186 8.72264 17.9718 8.22208 17.6866C7.71343 17.4097 7.31222 17.0121 7.01846 16.4938C6.73279 15.9668 6.58996 15.3742 6.58996 14.7162C6.58996 14.0608 6.73279 13.4682 7.01846 12.9384C7.31222 12.4028 7.71343 11.992 8.22208 11.7061C8.73073 11.4201 9.31336 11.2762 9.96998 11.2742L10.0321 11.274C11.1093 11.2889 11.9519 11.6652 12.5598 12.403C13.1864 13.1234 13.5 13.9325 13.5 14.8302C13.4957 14.8481 13.4935 14.866 13.4935 14.8838H14.0171ZM18.5864 14.7693C18.5864 15.4247 18.4135 15.9877 18.0677 16.4583C17.7391 16.9288 17.2934 17.3053 16.7304 17.5879C16.1673 17.8705 15.5302 18.0118 14.8192 18.0118C14.1081 18.0118 13.4682 17.8705 12.8993 17.5879C12.3363 17.3053 11.8905 16.9288 11.562 16.4583C11.2304 15.9903 11.0588 15.4273 11.0471 14.7693L11.0468 14.7156C11.0468 14.0602 11.1897 13.4676 11.4754 12.9379C11.7691 12.4023 12.1703 11.9915 12.679 11.7055C13.1876 11.4195 13.7702 11.2765 14.4269 11.2765C15.0835 11.2765 15.6633 11.4195 16.1662 11.7055C16.6749 11.9915 17.0761 12.4023 17.3698 12.9379C17.6635 13.4735 17.8064 14.0662 17.8054 14.7216C17.8054 14.7368 17.8047 14.7519 17.8033 14.7668C17.7991 14.7679 17.7947 14.7686 17.7904 14.7693H18.5864ZM17.4064 3.86879H14.9342L10.8382 10.1316H13.3104L17.4064 3.86879ZM6.4136 3.86879H3.94139L0 10.1316H2.47221L6.4136 3.86879ZM21 10.1316H23.5L19.7279 3.86879H17.2284L21 10.1316Z" fill="currentColor" />
                            </svg>
                          </div>
                          <blockquote className="text-lg mb-6 flex-grow text-gray-700 italic">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <div className="flex items-center mb-1">
                              <h3 className="font-bold text-xl">{testimonial.name}</h3>
                              <span className="text-gray-500 ml-2">{testimonial.age}</span>
                            </div>
                            <p className="text-knox-red font-semibold">{testimonial.achievement}</p>
                            <p className="text-gray-600">{testimonial.program} Program</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative border-knox-red text-knox-red hover:bg-knox-red hover:text-white" />
              <CarouselNext className="relative border-knox-red text-knox-red hover:bg-knox-red hover:text-white" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-knox-red/10 rounded-full px-6 py-2 text-knox-red font-medium">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Join 1000+ success stories</span>
          </div>
        </div>
      </div>
    </section>
  );
}
