import { Smartphone, Server, Database } from 'lucide-react';

const TechStack = () => {
  return (
    <section id="stack" className="py-20 bg-slate-800/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">El Ecosistema</h2>
          <p className="text-slate-400 max-w-2xl">
            Selecciono las herramientas adecuadas para cada problema. Mi stack combina la robustez de .NET con la agilidad de los frameworks modernos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-sky-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-sky-500/10 rounded text-sky-400">
                <Smartphone size={24} />
              </div>
              <h3 className="font-bold text-lg">Frontend & Mobile</h3>
            </div>
            <ul className="space-y-3 font-mono text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span> React.js / Ionic
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span> TypeScript / JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span> Tailwind CSS / Bootstrap
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span> Flutter (Dart)
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-indigo-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-500/10 rounded text-indigo-400">
                <Server size={24} />
              </div>
              <h3 className="font-bold text-lg">Backend Core</h3>
            </div>
            <ul className="space-y-3 font-mono text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> .NET / .NET Framework
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> Node.js / NestJS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> PHP / Laravel
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> REST APIs
              </li>
            </ul>
          </div>

          {/* Data & Infra */}
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-emerald-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/10 rounded text-emerald-400">
                <Database size={24} />
              </div>
              <h3 className="font-bold text-lg">Infra & Data</h3>
            </div>
            <ul className="space-y-3 font-mono text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> MySQL / SQL Server
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Git / GitHub
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Docker
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Integración de Pagos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
