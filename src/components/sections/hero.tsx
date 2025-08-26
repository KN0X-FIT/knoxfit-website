import React from 'react';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="relative bg-knox-black text-white pb-16 overflow-hidden" id="home">
      {/* 3D Effect Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-[10%] top-[15%] w-32 h-32 bg-knox-red rounded-full blur-3xl opacity-20 animate-pulse-slow" />
        <div className="absolute left-[15%] top-[35%] w-48 h-48 bg-knox-red rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div className="absolute right-[15%] bottom-[20%] w-40 h-40 bg-knox-red blob-shape blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 pt-16 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-7xl lg:text-8xl font-bold font-knockout tracking-tight animate-float">
                <span className="block">TRANSFORM</span>
                <span className="block text-knox-red">YOUR BODY</span>
                <span className="block">WITH KN0X-FIT</span>
              </h1>
              <p className="text-xl text-gray-300 mt-6 max-w-lg">
                Most affordable custom workout and diet plans that deliver guaranteed results.
                No supplements, just sustainable fitness.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button onClick={()=>{window.location.href = "#programs"}} className="btn-primary text-lg py-6 px-8" size="lg">Start Your Journey</Button>
              <Button onClick={()=>{window.location.href = "#programs"}} variant="outline" className="btn-outline text-lg py-6 px-8" size="lg">View Programs</Button>
            </div>

            <div className="flex items-center gap-10 pt-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-knockout">4+</span>
                <span className="text-gray-400 text-sm">Proven Programs</span>
              </div>
              <div className="h-10 w-px bg-gray-700" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-knockout">100%</span>
                <span className="text-gray-400 text-sm">Result Oriented</span>
              </div>
              <div className="h-10 w-px bg-gray-700" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-knockout">499₹</span>
                <span className="text-gray-400 text-sm">Starting Price</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* 3D Image Container with red gradient border effect */}
            <div className="relative overflow-hidden rounded-2xl">
              {/* Red gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-knox-red to-transparent opacity-70 mix-blend-overlay z-10" />

              {/* Floating elements */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-knox-red/20 rounded-full blur-md" />
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-knox-red/20 rounded-full blur-md" />

              {/* Main image */}
              <img
                src="/hero-image.webp"
                alt="Fitness training session"
                className="w-full h-auto object-cover rounded-2xl animate-float shadow-2xl"
                style={{ animationDelay: "0.5s" }}
              />
            </div>

            {/* 3D floating badge */}
            <div className="absolute -left-8 top-1/3 transform -translate-y-1/2 bg-knox-red text-white p-4 rounded-full shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.96 17.84C20.85 17.76 20.73 17.68 20.6 17.62C21.17 16.32 21.5 14.88 21.5 13.37C21.5 8.44 17.5 4.44 12.58 4.44C7.65 4.44 3.65 8.44 3.65 13.37C3.65 18.3 7.65 22.3 12.58 22.3C14.16 22.3 15.66 21.93 16.97 21.28" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.13 14.25L11.08 17.2L17.38 10.9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Floating stat card */}
            <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-lg shadow-xl animate-float transform" style={{ animationDelay: "1.5s" }}>
              <p className="text-knox-black font-bold">KN0X-ELITE PROGRAM</p>
              <p className="text-sm text-gray-600">Get 1 month FREE!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          d="M0,0 C240,40 480,60 720,60 C960,60 1200,40 1440,0 L1440,60 L0,60 Z"
          fill="white"
        />
      </svg>
    </section>
  );
}
