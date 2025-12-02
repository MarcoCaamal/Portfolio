import { Cpu, Terminal } from 'lucide-react';

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
              Soy un desarrollador Fullstack apasionado por la mejora continua. Con experiencia sólida en la construcción de APIs y soluciones móviles, me enfoco en crear software que no solo funcione, sino que aporte valor real al negocio.
            </p>
            
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Terminal size={16} className="text-sky-400"/> Educación
              </h4>
              <p className="text-slate-400 text-sm">
                  <strong className="text-slate-200">TSU en Tecnologías de la Información</strong><br/>
                  Área Desarrollo de Software Multiplataforma (2023 - Presente)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
