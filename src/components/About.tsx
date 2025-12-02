import { Cpu, Mail } from 'lucide-react';
import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          {/* Image Placeholder */}
          <div className="aspect-square rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
             <Cpu size={64} className="text-slate-600 group-hover:text-sky-400 transition-colors duration-500" />
             <span className="absolute bottom-4 text-xs font-mono text-slate-500">profile_pic.jpg</span>
          </div>

          {/* Text */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Más allá del código</h2>
            <p className="text-slate-400 leading-relaxed">
              Comencé mi carrera en el desarrollo web tradicional, pero mi curiosidad por saber "cómo funcionan las cosas por debajo" me llevó hacia la arquitectura de software.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Hoy en día, no solo construyo UIs; diseño sistemas completos. Me apasiona el Clean Architecture, la optimización de queries SQL y crear experiencias de usuario que se sientan instantáneas.
            </p>
            <div className="flex gap-4 pt-4">
               <a href="#" className="p-2 bg-slate-800 rounded hover:bg-slate-700 hover:text-sky-400 transition-colors">
                  <LinkedinIcon size={24} />
               </a>
               <a href="#" className="p-2 bg-slate-800 rounded hover:bg-slate-700 hover:text-sky-400 transition-colors">
                  <GithubIcon size={24} />
               </a>
               <a href="#" className="p-2 bg-slate-800 rounded hover:bg-slate-700 hover:text-sky-400 transition-colors">
                  <Mail size={24} />
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
