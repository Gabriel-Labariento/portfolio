'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { Badge } from './ui/badge';
import { useAnalytics } from '@/hooks/useAnalytics';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { trackEvent } = useAnalytics();

  const handleProjectClick = () => {
    trackEvent('project_clicked', {
      project_name: project.title,
      project_slug: project.slug,
    });
  };

  return (
    <Link href={`/projects/${project.slug}`} onClick={handleProjectClick} className="group block h-full">
      <div className="relative flex flex-col h-full p-8 rounded-2xl bg-card border border-border hover:border-ring hover:shadow-md transition-all duration-200">
        <div className="flex justify-between items-start mb-6">
          <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            {/* Dynamic icons based on slug could go here, defaulting to generic */}
            <span className="font-bold text-lg">{project.title.charAt(0)}</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <h3 className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.content.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} className="bg-muted text-muted-foreground font-medium text-xs px-2.5 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};
