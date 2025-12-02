import { ChevronRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Full Stack Developer
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Arquitectura robusta. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-400">
              Interfaces reactivas.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Especialista en construir aplicaciones escalables con <span className="text-indigo-400 font-mono">.NET/NestJS</span> y experiencias modernas en <span className="text-sky-400 font-mono">React</span>. Enfocado en performance, seguridad y código limpio.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-slate-100 text-slate-900 font-bold rounded hover:bg-white transition-colors flex items-center gap-2">
              Ver Proyectos <ChevronRight size={18} />
            </a>
            <button className="px-6 py-3 border border-slate-700 text-slate-300 font-mono rounded hover:border-sky-400 hover:text-sky-400 transition-colors flex items-center gap-2">
              <Download size={18} /> Descargar CV
            </button>
          </div>
        </div>

        {/* Right Visual: Abstract Code Snippet */}
        <div className="relative group perspective-1000">
          <div className="relative rounded-lg bg-[#0F172A] border border-slate-700 shadow-2xl overflow-hidden transform transition-transform group-hover:rotate-1 group-hover:scale-[1.02] duration-500">
            
            {/* VS Code Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-4 text-xs text-slate-400 font-mono">OrderController.cs</span>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="text-slate-400">
                <span className="text-indigo-400">namespace</span> <span className="text-slate-100">App.API.Controllers</span>
              </div>
              <div className="text-slate-400 mb-4">{`{`}</div>
              
              <div className="pl-4">
                <span className="text-sky-400">[HttpGet("{`{id}`}"]</span>
              </div>
              <div className="pl-4 mb-2">
                <span className="text-indigo-400">public async</span> <span className="text-emerald-400">Task&lt;IActionResult&gt;</span> <span className="text-yellow-300">GetOrder</span>(<span className="text-sky-300">int</span> id)
              </div>
              <div className="pl-4 text-slate-400 mb-2">{`{`}</div>
              
              <div className="pl-8 text-slate-500 border-l-2 border-slate-700 italic mb-2">
                 // Optimized query with Dapper/EF Core
              </div>
              
              <div className="pl-8 mb-1">
                <span className="text-indigo-400">var</span> order = <span className="text-indigo-400">await</span> _service.<span className="text-yellow-300">GetByIdAsync</span>(id);
              </div>
              <div className="pl-8 mb-1">
                <span className="text-indigo-400">if</span> (order == <span className="text-indigo-400">null</span>) <span className="text-indigo-400">return</span> <span className="text-yellow-300">NotFound</span>();
              </div>
              <div className="pl-8">
                <span className="text-indigo-400">return</span> <span className="text-yellow-300">Ok</span>(order);
              </div>

              <div className="pl-4 text-slate-400">{`}`}</div>
              <div className="text-slate-400">{`}`}</div>
            </div>

            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-1 bg-slate-800 text-[10px] font-mono text-slate-400 border-t border-slate-700">
              <div className="flex gap-4">
                <span>main*</span>
                <span>Ln 14, Col 32</span>
              </div>
              <div>Running on localhost:5000</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
