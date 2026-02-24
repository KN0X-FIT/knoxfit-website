import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/ui/navbar';
import { Footer } from './components/ui/footer';
import { Home } from './pages/Home';
import { EliteProgram } from './pages/EliteProgram';
import { GeneralFitness } from './pages/GeneralFitness';
import { CustomWorkoutPlan } from './pages/CustomWorkoutPlan';
import { DietGuide } from './pages/DietGuide';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Contact } from './pages/Contact';
import Testimonials from './pages/Testimonials';
import { FreePlan } from './pages/FreePlan';
import { Programs } from './pages/Programs';
// import { GoogleAnalytics } from './components/GoogleAnalytics';

// Replace with your actual Google Analytics Measurement ID
// const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'GA_MEASUREMENT_ID';

function App() {
  return (
    <Router>
      {/* <GoogleAnalytics trackingId={GA_TRACKING_ID} /> */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
