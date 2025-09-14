import { Hero } from '../components/sections/hero';
import { Programs } from '../components/sections/programs';
import { Features } from '../components/sections/features';
import { Contact } from '../components/sections/contact';
import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';

export function Home() {
  return (
    <>
      <SEOHead
        title="Custom Workout Plans & Diet Guide - KN0X-FIT | Sustainable Fitness for Beginners"
        description="Get affordable custom workout plans for beginners and sustainable diet guides without supplements. Expert fitness coaching starting at ₹499. Transform your body with proven programs designed for real results."
        keywords="custom workout plan for beginners, sustainable diet without supplements, affordable fitness coaching, personal trainer online, diet plan weight loss, workout routine home, fitness transformation, body recomposition plan"
        canonical="https://knoxfit.com/"
      />
      <StructuredData
        type="organization"
        data={{}}
      />
      <StructuredData
        type="website"
        data={{}}
      />
      <StructuredData
        type="service"
        data={{}}
      />
      <main className="flex-grow">
        <Hero />
        <Programs />
        <Features />
        <Contact />
      </main>
    </>
  );
}