import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/ui/navbar';
import { Footer } from './components/ui/footer';

const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })));
const EliteProgram = lazy(() => import('./pages/EliteProgram').then(({ EliteProgram }) => ({ default: EliteProgram })));
const GeneralFitness = lazy(() => import('./pages/GeneralFitness').then(({ GeneralFitness }) => ({ default: GeneralFitness })));
const CustomWorkoutPlan = lazy(() => import('./pages/CustomWorkoutPlan').then(({ CustomWorkoutPlan }) => ({ default: CustomWorkoutPlan })));
const DietGuide = lazy(() => import('./pages/DietGuide').then(({ DietGuide }) => ({ default: DietGuide })));
const Blog = lazy(() => import('./pages/Blog').then(({ Blog }) => ({ default: Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(({ BlogPost }) => ({ default: BlogPost })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(({ PrivacyPolicy }) => ({ default: PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(({ TermsOfService }) => ({ default: TermsOfService })));
const Contact = lazy(() => import('./pages/Contact').then(({ Contact }) => ({ default: Contact })));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const FreePlan = lazy(() => import('./pages/FreePlan').then(({ FreePlan }) => ({ default: FreePlan })));
const Programs = lazy(() => import('./pages/Programs').then(({ Programs }) => ({ default: Programs })));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function RouteLoadingState() {
  return (
    <main
      className="flex min-h-[55vh] items-center justify-center"
      aria-busy="true"
      aria-live="polite"
    >
      <div role="status" className="flex items-center gap-3 text-gray-600">
        <span
          className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-knox-red"
          aria-hidden="true"
        />
        <span>Loading page…</span>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Suspense fallback={<RouteLoadingState />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/elite-program" element={<EliteProgram />} />
            <Route path="/general-fitness" element={<GeneralFitness />} />
            <Route path="/custom-workout-plan" element={<CustomWorkoutPlan />} />
            <Route path="/diet-guide" element={<DietGuide />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/free-plan" element={<FreePlan />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
