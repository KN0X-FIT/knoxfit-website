import { Hero } from '../components/sections/hero';
import { Programs } from '../components/sections/programs';
import { Features } from '../components/sections/features';
import { FAQ } from '../components/sections/faq';
import { Contact } from '../components/sections/contact';
import { HowItWorks } from '../components/sections/how-it-works';
import { Testimonials } from '../components/sections/testimonials';
import { Gallery } from '../components/sections/gallery';
import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';

export function Home() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "How do custom plans work?",
      answer: "Our custom plans are created by Expert Trainers based on your fitness level, goals, and lifestyle. After signing up, you'll complete a detailed assessment, and we'll design a personalized workout and diet plan specifically for you."
    },
    {
      question: "Do I need equipment?",
      answer: "No! Many of our workout plans can be done at home with minimal or no equipment. We focus on bodyweight exercises and movements that can be performed in any space, making fitness accessible regardless of your location or budget."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients start seeing initial changes within 2-3 weeks, with significant results visible after 6-8 weeks of consistent following. Results vary based on individual goals, starting fitness level, and adherence to the program."
    },
    {
      question: "Are your programs suitable for beginners?",
      answer: "Absolutely! Our custom workout plans are specifically designed for beginners. We start with basic movements and gradually progress based on your fitness level. Each program includes detailed instructions and modifications for different fitness levels."
    },
    {
      question: "Do I need supplements?",
      answer: "No! All our programs are designed to deliver results using whole foods and proper nutrition. We believe in sustainable fitness that doesn't rely on expensive supplements. Our diet guides focus on balanced nutrition using easily available ingredients."
    }
  ];

  return (
    <>
      <SEOHead
        title="KN0X-FIT | Custom Workout & Diet Plans for Beginners | Sustainable Fitness"
        description="KN0X-FIT delivers affordable custom workout and diet plans for beginners. No supplements. Just sustainable fitness. Start your transformation with our free 5-day plan."
        keywords="custom workout plan for beginners, sustainable diet without supplements, affordable fitness coaching, personal trainer online, home workout for beginners with no equipment, best workout plan for desk job people, diet plan weight loss, workout routine home, fitness transformation, body recomposition plan"
        canonical="https://knoxfit.com/"
        ogImage="https://knoxfit.com/hero-image.webp"
        breadcrumb={[
          { name: "Home", url: "https://knoxfit.com/" }
        ]}
      />
      <StructuredData
        type="organization"
        data={{
          image: [
            "https://knoxfit.com/hero-image.webp",
            "https://knoxfit.com/diet-plan.jpeg",
            "https://knoxfit.com/workout-plan.avif"
          ]
        }}
      />
      <StructuredData
        type="website"
        data={{}}
      />
      <StructuredData
        type="service"
        data={{
          "offers": {
            "@type": "Offer",
            "name": "Custom Workout & Diet Plans",
            "description": "Personalized fitness programs designed for beginners with sustainable diet plans and custom workout routines without supplements",
            "price": "799",
            "priceCurrency": "INR"
          }
        }}
      />
      {/* FAQ Structured Data */}
      <script type="application/ld+json" data-faq="structured-data">
        {JSON.stringify({
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
        })}
      </script>
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Programs />
        <Features />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}