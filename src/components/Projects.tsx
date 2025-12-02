import { Layers } from 'lucide-react';
import CancunImg from './../assets/images/cancun.png';
import PagaEnLineaImg from './../assets/images/pagaenlinea.png';
import SiuImg from './../assets/images/siu.png';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Layers className="text-sky-500" /> Proyectos Destacados
          </h2>
          <p className="text-slate-400">
            Soluciones tecnológicas implementadas que generan valor real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Project 1: Cancún Accesible */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-sky-500/50 transition-all shadow-xl flex flex-col group">
            <div className="h-56 bg-slate-900 overflow-hidden relative border-b border-slate-700">
              <img 
                src={CancunImg} 
                alt="Cancún Accesible Interface" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <span className="px-2 py-1 text-[10px] font-mono bg-slate-900/90 backdrop-blur border border-slate-600 rounded text-slate-300">Stripe</span>
                <span className="px-2 py-1 text-[10px] font-mono bg-slate-900/90 backdrop-blur border border-slate-600 rounded text-slate-300">PHP</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-100">Cancún Accesible</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4 flex-1">
                Sistema de gestión para turismo y transporte inclusivo. Flujo completo de reservaciones, automatización de notificaciones (Cron Jobs) post-venta, y generación de QR para control de inventario.
              </p>
              <div className="border-t border-slate-700 pt-4 mt-auto">
                <p className="text-xs text-sky-400 font-mono mb-2">Key Features:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-400">Cron Jobs</span>
                  <span className="text-[10px] px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-400">QR Gen</span>
                  <span className="text-[10px] px-2 py-1 bg-slate-900 rounded border border-slate-700 text-slate-400">PDF Reports</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: PAGAENLÍNEA */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-all shadow-xl flex flex-col group">
            <div className="h-56 bg-slate-900 overflow-hidden relative border-b border-slate-700">
              <img 
                src={PagaEnLineaImg} 
                alt="Pagaenlinea Interface" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <span className="px-2 py-1 text-[10px] font-mono bg-slate-900/90 backdrop-blur border border-slate-600 rounded text-slate-300">Ionic</span>
                <span className="px-2 py-1 text-[10px] font-mono bg-slate-900/90 backdrop-blur border border-slate-600 rounded text-slate-300">White-label</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-100 mb-2">PAGAENLÍNEA</h3>
              <p className="text-slate-400 text-sm mb-4 flex-1">
                Plataforma SaaS de cobranza para organismos operadores de agua. Desarrollo de portales web y Apps personalizadas para cada cliente, con integración robusta de múltiples pasarelas.
              </p>
              <div className="border-t border-slate-700 pt-4 mt-auto">
                <p className="text-xs text-emerald-400 font-mono mb-2">Integraciones Bancarias:</p>
                <p className="text-xs text-slate-500">BBVA Multipagos, EVO, BanBajío.</p>
              </div>
            </div>
          </div>
          
          {/* Project 3: University ERP */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all shadow-xl flex flex-col lg:col-span-2 group">
            <div className="grid md:grid-cols-3 h-full">
              <div className="h-48 md:h-auto bg-slate-900 border-b md:border-b-0 md:border-r border-slate-700 relative overflow-hidden">
                <img 
                  src={SiuImg} 
                  alt="ERP Dashboard Mockup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <h4 className="font-bold text-slate-200">SIU / EVADOC</h4>
                </div>
              </div>
              <div className="p-6 md:col-span-2 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-100 mb-3">Sistemas de Gestión Universitaria</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Desarrollo backend y estabilización de módulos críticos para la operación universitaria masiva en Ozelot Technologies.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-3 rounded border border-slate-700/50">
                    <h5 className="text-xs font-bold text-indigo-400 mb-1">SIU (Sistema Institucional)</h5>
                    <p className="text-[10px] text-slate-500">Optimización de procesos administrativos y APIs de gestión académica.</p>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded border border-slate-700/50">
                    <h5 className="text-xs font-bold text-indigo-400 mb-1">EVADOC</h5>
                    <p className="text-[10px] text-slate-500">Sistema para la gestión y aplicación de evaluaciones docentes y estudiantiles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
