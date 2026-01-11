
import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data';

export const metadata = {
    title: 'Projects | Gabe Labariento',
    description: 'A showcase of my projects and work.',
};

export default function ProjectsPage() {
    return (
        <div className="space-y-12 py-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Projects</h1>
                <p className="text-lg text-slate-600 max-w-3xl">
                    A collection of projects I've worked on, ranging from web applications to experiments.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
