import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["sustainable", "balanced", "effective", "personalized", "natural"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-knox-black text-white relative overflow-hidden">
      {/* 3D Effect Background Elements - Same as Home Page */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-[10%] top-[15%] w-32 h-32 bg-knox-red rounded-full blur-3xl opacity-20 animate-pulse-slow" />
        <div className="absolute left-[15%] top-[35%] w-48 h-48 bg-knox-red rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div className="absolute right-[15%] bottom-[20%] w-40 h-40 bg-knox-red blob-shape blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 border-knox-red/20">
              Start Your Journey <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular text-white">
              <span className="text-white">General Fitness –</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 min-h-[4rem] md:min-h-[5rem]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-knox-red"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-white"> Approach</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-300 max-w-3xl text-center">
              Kickstart your fitness journey with a sustainable approach designed for beginners. 
              Get a balanced diet plan, basic workout routine, and one expert trainer consultation – 
              all without supplements. Perfect for home or gym workouts.
            </p>
          </div>
          <div className="flex flex-row gap-3 flex-wrap justify-center">
            <Button size="lg" className="gap-4 bg-knox-red hover:bg-knox-darkred text-white" asChild>
              <a href="https://wa.me/919380422603?text=Hi%21%20I'm%20interested%20in%20the%20General%20Fitness%20Plan">
                Join Now - ₹999 <Dumbbell className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-knox-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Supplements Required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-knox-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Beginner-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-knox-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Affordable Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
