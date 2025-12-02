const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8">¿Hablamos de arquitectura?</h3>
          <a href="mailto:hola@dev.com" className="text-2xl md:text-4xl font-mono text-slate-400 hover:text-sky-400 transition-colors border-b-2 border-transparent hover:border-sky-400 pb-2">
              contacto@tudominio.com
          </a>
          
          <div className="mt-16 text-slate-500 text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; {new Date().getFullYear()} Built with React & Tailwind.</p>
              <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>Open to work</span>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
