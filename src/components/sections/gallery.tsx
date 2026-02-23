import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { LazyImage } from '../LazyImage';

const galleryImages = [
  {
    id: 1,
    src: "/images/inside our programs/workout plan example.png",
    alt: "Example of custom workout plan with exercise routines and instructions - KN0X-FIT",
    title: "Workout Plan Example",
    description: "See exactly how your personalized workout routines will look with detailed exercise instructions"
  },
  {
    id: 2,
    src: "/images/inside our programs/diet plan example 1.png",
    alt: "Example of personalized diet plan with meal suggestions and nutritional information - KN0X-FIT",
    title: "Diet Plan Example",
    description: "Preview your customized nutrition guide with meal suggestions and portion sizes"
  },
  {
    id: 3,
    src: "/images/inside our programs/diet plan example 2.png",
    alt: "Weekly meal planning guide with prep schedules and shopping lists - KN0X-FIT",
    title: "Meal Planning Guide",
    description: "Learn how to structure your meals throughout the week with our comprehensive planning system"
  },
  {
    id: 4,
    src: "/images/inside our programs/progess tracking.png",
    alt: "Progress tracking dashboard showing fitness metrics and improvements over time - KN0X-FIT",
    title: "Progress Tracking",
    description: "Monitor your fitness journey with our comprehensive tracking system"
  },
  {
    id: 5,
    src: "/images/inside our programs/nutrional tips.png",
    alt: "Nutritional tips and healthy eating guidance with food recommendations - KN0X-FIT",
    title: "Nutritional Tips",
    description: "Access our library of expert nutritional advice and sustainable eating strategies"
  }
];

export function Gallery() {
  // Simplified version without modal for now
  return (
    <section className="py-16 sm:py-24 bg-white" id="gallery">
      <div className="container">
        <div className="text-center max-w-3xs mx-auto mb-12 sm:mb-16">
          <div className="text-knox-red font-knockout text-sm tracking-widest uppercase mb-4">
            INSIDE OUR PROGRAMS
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-knox-black mb-4">
            Inside Our Programs
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Take a peek at what your transformation journey will look like with our comprehensive fitness programs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {galleryImages.map((image) => (
            <Card 
              key={image.id} 
              className="card-effect overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <LazyImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    width={300}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">{image.title}</h3>
                      <p className="text-gray-200 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a 
            href="/free-plan"
            className="inline-block bg-knox-red text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-base sm:text-lg"
          >
            Get Your Free 5-Day Starter Plan
          </a>
          <p className="text-gray-600 text-sm mt-3">
            See our complete programs in action with your personalized plan
          </p>
        </div>
      </div>
    </section>
  );
}