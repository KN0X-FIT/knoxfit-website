import { Hero } from '../components/sections/hero';
import { Programs } from '../components/sections/programs';
import { Features } from '../components/sections/features';
import { FAQ } from '../components/sections/faq';
import { Contact } from '../components/sections/contact';
import { SEOHead } from '../components/SEOHead';
import { StructuredData } from '../components/StructuredData';

export function Home() {
  return (
    <>
      <SEOHead
        title="KN0X-FIT: Built for Change - Designed for You | Custom Workout Plans & Diet Guide"
        description="Get affordable custom workout plans for beginners and sustainable diet guides without supplements. Expert fitness coaching starting at ₹799. Built for Change - Designed for You. Transform your body with proven programs designed for real results. Free 5-day plan available."
        keywords="custom workout plan for beginners, sustainable diet without supplements, affordable fitness coaching, personal trainer online, diet plan weight loss, workout routine home, fitness transformation, body recomposition plan, home workout for beginners with no equipment, Expert Trainers"
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
        <FAQ />
        <Contact />
      </main>
    </>
  );
}