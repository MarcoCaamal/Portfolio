import { Code2, Server, Database } from 'lucide-react';

const TechStack = () => {
  return (
    <section id="stack" className="py-20 bg-slate-800/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">El Ecosistema</h2>
          <p className="text-slate-400 max-w-2xl">
            Selecciono las herramientas adecuadas para cada problema. Mi stack se centra en rendimiento, tipado estático y escalabilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-sky-500/50 transition-colors group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-sky-500/10 rounded text-sky-400">
                <Code2 size={24} />
              </div>
              <h3 className="font-bold text-lg">Frontend Experience</h3>
            </div>
            <ul className="space-y-3 font-mono text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span> React.js / Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span> Zustand / Redux
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
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> C# / ASP.NET Core
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> Node.js / NestJS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> REST & GraphQL APIs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> Microservices
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
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> PostgreSQL / SQL Server
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Docker
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> CI/CD Pipelines
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Azure / AWS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
