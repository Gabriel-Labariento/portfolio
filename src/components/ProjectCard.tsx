import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <div className="relative flex flex-col h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200">
        <div className="flex justify-between items-start mb-6">
          <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
             {/* Dynamic icons based on slug could go here, defaulting to generic */}
             <span className="font-bold text-lg">{project.title.charAt(0)}</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
            <ArrowUpRight size={20} />
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
            <h3 className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {project.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
                {project.shortDescription}
            </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.content.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} className="bg-slate-100 text-slate-600 font-medium text-xs px-2.5 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};