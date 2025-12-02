import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-sky-400 selection:text-slate-900">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default App;