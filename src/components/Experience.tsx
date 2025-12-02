import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800/30 border-y border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="text-sky-500" /> Trayectoria Laboral
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Historial de roles donde he aportado valor técnico y estratégico.
          </p>
        </div>

        <div className="space-y-12 relative border-l-2 border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12">
          {/* Junkyard */}
          <div className="relative">
            <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-sky-500"></span>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100">Desarrollador Web</h3>
              <span className="text-sm font-mono text-sky-400 flex items-center gap-2">
                <Calendar size={14}/> Oct 2023 - Jul 2025
              </span>
            </div>
            <h4 className="text-lg text-slate-400 mb-4 font-medium">Junkyard | Playa del Carmen</h4>
            <ul className="list-disc list-outside text-slate-400 space-y-2 ml-4">
              <li>Desarrollo integral de plataformas como <strong>Cancún Accesible</strong> y <strong>PAGAENLÍNEA</strong>.</li>
              <li>Implementación de arquitecturas de pagos complejas (BBVA, EVO, Stripe).</li>
              <li>Automatización de procesos administrativos mediante Cron Jobs y generación de reportes.</li>
            </ul>
          </div>

          {/* Ozelot */}
          <div className="relative">
            <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-indigo-500"></span>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100">Desarrollador Backend Junior</h3>
              <span className="text-sm font-mono text-indigo-400 flex items-center gap-2">
                <Calendar size={14}/> Feb 2022 - Ago 2023
              </span>
            </div>
            <h4 className="text-lg text-slate-400 mb-4 font-medium">Ozelot Technologies | Cancún</h4>
            <ul className="list-disc list-outside text-slate-400 space-y-2 ml-4">
              <li>Construcción de APIs RESTful y arquitectura <strong>MVC</strong> con <strong>.NET y .NET Framework</strong>.</li>
              <li>Desarrollo de módulos clave para el SIU y EVADOC.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
