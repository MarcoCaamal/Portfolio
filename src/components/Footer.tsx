import { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';

const Footer = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      alert("Gracias por tu mensaje. Te responderé pronto.");
      setFormStatus('idle');
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <footer id="contact" className="py-20 border-t border-slate-800 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Col: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">¿Listo para colaborar?</h3>
              <p className="text-slate-400 leading-relaxed">
                Estoy disponible para discutir nuevas oportunidades, colaboraciones en proyectos de arquitectura de software o desarrollo de aplicaciones móviles.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:caamalmarco99@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors group">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-800/80 border border-slate-700">
                  <Mail size={24} />
                </div>
                <span className="font-mono">caamalmarco99@gmail.com</span>
              </a>
              
              <a href="https://www.linkedin.com/in/marco-antonio-caamal-chi-965941283/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors group">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-800/80 border border-slate-700">
                  <LinkedinIcon size={24} />
                </div>
                <span className="font-mono">Marco Antonio Caamal Chi</span>
              </a>

              <a href="https://github.com/MarcoCaamal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors group">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-800/80 border border-slate-700">
                  <GithubIcon size={24} />
                </div>
                <span className="font-mono">@MarcoCaamal</span>
              </a>
            </div>
          </div>

          {/* Right Col: Contact Form */}
          <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <User size={16} className="text-sky-500"/> Nombre
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  placeholder="Tu nombre o empresa"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <Mail size={16} className="text-sky-500"/> Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <MessageSquare size={16} className="text-sky-500"/> Mensaje
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
                  placeholder="¿Cómo puedo ayudarte con tu proyecto?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-linear-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Mensaje <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm font-mono flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Marco Caamal. Built with React.</p>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>System Online</span>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
