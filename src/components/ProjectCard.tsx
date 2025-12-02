import { Globe } from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';

interface ProjectCardProps {
  title: string;
  tags: Array<{ label: string; color: string }>;
  challenge: string;
  solution: string;
  icon: React.ReactNode;
  mockContent: React.ReactNode;
  reverse?: boolean;
}

const ProjectCard = ({ title, tags, challenge, solution, icon, mockContent, reverse = false }: ProjectCardProps) => {
  return (
    <div className="group grid lg:grid-cols-2 gap-10 items-start">
      {/* Visual Side */}
      <div className={`relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl ${reverse ? 'lg:order-2' : ''}`}>
        {/* Decorative Header */}
        <div className="h-8 bg-slate-900 flex items-center px-4 gap-2 border-b border-slate-700">
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        </div>
        {/* Mock Content */}
        {mockContent}
      </div>

      {/* Text Side */}
      <div className={reverse ? 'lg:order-1' : ''}>
        <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
          {tags.map((tag, index) => (
            <span key={index} className={`px-2 py-1 ${tag.color} rounded border`}>
              {tag.label}
            </span>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">El Reto</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {challenge}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">Solución Técnica</h4>
            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-indigo-500 pl-4">
              {solution}
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <button className="text-sm font-bold text-sky-400 hover:text-sky-300 flex items-center gap-2">
              <Globe size={16} /> Live Demo
            </button>
            <button className="text-sm font-bold text-slate-400 hover:text-slate-200 flex items-center gap-2">
              <GithubIcon size={16} /> Ver Código
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
