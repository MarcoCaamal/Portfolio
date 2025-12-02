import { Layers, Terminal } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-slate-400">
            Casos de estudio enfocados en arquitectura y resolución de problemas complejos.
          </p>
        </div>

        <div className="space-y-20">
          {/* Project 1 */}
          <ProjectCard
            title="Enterprise Resource Planning (ERP) API"
            tags={[
              { label: '.NET Core 8', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
              { label: 'React', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
              { label: 'PostgreSQL', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' }
            ]}
            challenge="Migrar un sistema legacy monolítico a una arquitectura basada en microservicios para soportar 10k+ transacciones simultáneas sin degradación de servicio."
            solution="Implementé patrón CQRS para separar lecturas de escrituras. Frontend optimizado con React Query para cacheo inteligente y WebSockets para actualizaciones de inventario en tiempo real."
            icon={<Layers size={48} className="mx-auto text-sky-500 mb-4" />}
            mockContent={
              <div className="p-8 aspect-video flex flex-col justify-center items-center bg-linear-to-br from-slate-800 to-slate-900">
                <div className="text-center space-y-4">
                  <Layers size={48} className="mx-auto text-sky-500 mb-4" />
                  <h4 className="text-xl font-bold">Fintech Dashboard SaaS</h4>
                  <div className="flex gap-2 justify-center opacity-60">
                    <div className="w-20 h-2 bg-slate-600 rounded"></div>
                    <div className="w-12 h-2 bg-slate-600 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-xs mx-auto">
                    <div className="h-20 bg-slate-700/50 rounded border border-slate-600/50"></div>
                    <div className="h-20 bg-slate-700/50 rounded border border-slate-600/50"></div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Project 2 */}
          <ProjectCard
            title="Logistics Tracking System"
            tags={[
              { label: 'NestJS', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
              { label: 'Socket.io', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
              { label: 'Redis', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' }
            ]}
            challenge="Reducir la latencia en la geolocalización de flotas y gestionar la alta concurrencia de eventos WebSocket."
            solution="Arquitectura orientada a eventos usando Redis Pub/Sub para distribuir la carga de WebSockets entre múltiples instancias de Node.js. Frontend con Leaflet y React."
            icon={<Terminal size={48} className="mx-auto text-indigo-400 mb-4" />}
            mockContent={
              <div className="p-8 aspect-video flex flex-col justify-center items-center bg-linear-to-br from-indigo-900/20 to-slate-900">
                <Terminal size={48} className="mx-auto text-indigo-400 mb-4" />
                <h4 className="text-xl font-bold">Real-time Logistics</h4>
                <div className="mt-4 w-full max-w-sm font-mono text-xs text-indigo-300 bg-slate-900 p-4 rounded border border-slate-700">
                  &gt; docker-compose up -d<br/>
                  <span className="text-emerald-400">[+] Running 3/3</span><br/>
                  Container api-gateway Started<br/>
                  Container order-service Started
                </div>
              </div>
            }
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
