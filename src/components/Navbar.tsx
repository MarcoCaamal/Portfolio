import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for Navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-mono text-xl font-bold tracking-tight text-sky-400">
          &lt;MarcoCaamal /&gt;
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#experience" className="hover:text-sky-400 transition-colors">Experiencia</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Proyectos</a>
          <a href="#stack" className="hover:text-sky-400 transition-colors">Stack</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">Sobre Mí</a>
        </div>

        <a href="#contact" className="px-5 py-2 bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold rounded text-sm transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]">
          Contáctame
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
