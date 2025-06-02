import { Navbar } from './components/ui/navbar';
import { Footer } from './components/ui/footer';
import { Hero } from './components/sections/hero';
import { Programs } from './components/sections/programs';
import { Features } from './components/sections/features';
import { Contact } from './components/sections/contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Programs />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
