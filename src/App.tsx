import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-sky-400 selection:text-slate-900">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <About />
      <Footer />
    </div>
  );
};

export default App;