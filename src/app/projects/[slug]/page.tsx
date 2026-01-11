import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertTriangle, Monitor, ExternalLink, Moon } from 'lucide-react';
import { projects } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | Gabe Labariento',
        };
    }

    return {
        title: `${project.title} | Gabe Labariento`,
        description: project.shortDescription,
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const nextProject = projects[currentIndex + 1];
    const prevProject = projects[currentIndex - 1];

    return (
        <div className="min-h-screen py-16 pb-24">
            {/* Navigation Breadcrumb */}
            <div className="mb-8 container mx-auto px-4 max-w-4xl">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Projects
                </Link>
            </div>

            {/* Header Section */}
            <header className="mb-16 container mx-auto px-4 max-w-4xl">
                <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                            <span>{project.year}</span>
                            <span className="text-slate-300">•</span>
                            <span>{project.role}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                            {project.shortDescription}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.content.techStack.map((tech) => (
                            <Badge key={tech} className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium border-0 px-3 py-1">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        {project.links.demo && (
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white gap-2 rounded-full px-6">
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                    <Monitor size={16} />
                                    View Demo
                                </a>
                            </Button>
                        )}
                        {project.links.repo && (
                            <Button asChild variant="outline" className="gap-2 rounded-full px-6 bg-white hover:bg-slate-50">
                                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={16} />
                                    View Code
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 max-w-3xl grid grid-cols-1 gap-16 md:gap-20">

                {/* Problem Section */}
                <section>
                    <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">The Problem</h2>
                    <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed">
                        <p>{project.content.problem}</p>
                    </div>
                </section>

                {/* Approach Section */}
                <section>
                    <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">The Approach</h2>
                    <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed">
                        <p>{project.content.approach}</p>
                    </div>
                    {/* Approach Image */}
                    {project.content.approachImage ? (
                        <div className="w-full h-auto rounded-2xl overflow-hidden border border-slate-200 my-8 shadow-sm">
                            <Image
                                src={project.content.approachImage}
                                alt={`${project.title} Approach`}
                                width={1200}
                                height={675}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-auto aspect-video rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 my-8 shadow-sm">
                            <div className="text-center p-6">
                                <Moon size={40} className="mx-auto mb-3 opacity-20" />
                                <p className="text-sm font-medium">Project Architecture / Diagram View</p>
                            </div>
                        </div>
                    )}
                </section>

                {/* Key Technical Decisions */}
                <section>
                    <div className="p-8 md:p-10 rounded-3xl bg-blue-50/50 border border-blue-100/60">
                        <h2 className="text-lg font-bold text-blue-900 mb-8 flex items-center gap-2">
                            Key Technical Decisions
                        </h2>

                        <div className="grid gap-10">
                            {project.content.technicalDecisions.map((decision, index) => (
                                <div key={index} className="grid md:grid-cols-1 gap-6 items-start">
                                    <div className="space-y-3">
                                        <h3 className="font-bold text-slate-900 text-lg">{decision.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {decision.description}
                                        </p>
                                    </div>
                                    {decision.codeSnippet && (
                                        <div className="rounded-xl overflow-hidden bg-[#1e1e1e] text-slate-300 text-xs font-mono shadow-xl border border-slate-700/50">
                                            <div className="px-4 py-2 bg-[#252526] border-b border-[#3e3e3e] flex items-center justify-between">
                                                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{decision.codeSnippet.language}</span>
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50" />
                                                </div>
                                            </div>
                                            <pre className="p-5 overflow-x-auto">
                                                <code>{decision.codeSnippet.code}</code>
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tradeoffs */}
                <section>
                    <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-6">Tradeoffs</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {project.content.tradeoffs.map((tradeoff, index) => (
                            <div key={index} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200">
                                <div className="flex items-center gap-3 mb-3">
                                    {tradeoff.type === 'positive' && <div className="bg-green-100 p-1.5 rounded-full"><CheckCircle2 className="text-green-600" size={16} /></div>}
                                    {tradeoff.type === 'negative' && <div className="bg-amber-100 p-1.5 rounded-full"><AlertTriangle className="text-amber-600" size={16} /></div>}
                                    {tradeoff.type === 'neutral' && <div className="bg-slate-100 p-1.5 rounded-full"><div className="w-4 h-4 rounded-full border-2 border-slate-400" /></div>}
                                    <h3 className="font-bold text-slate-900 text-sm">{tradeoff.title}</h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {tradeoff.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What I Learned */}
                <section>
                    <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-6">What I Learned</h2>
                    <div className="grid gap-3">
                        {project.content.learned.map((item, index) => (
                            <div key={index} className="flex gap-4 items-start p-4 rounded-xl bg-slate-50/80 border border-slate-100 text-slate-700">
                                <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                                <p className="text-base leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* Footer Navigation */}
            <div className="mt-32 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl py-12 flex justify-between items-center text-sm">
                    <div className="w-1/2 pr-4">
                        {prevProject ? (
                            <Link href={`/projects/${prevProject.slug}`} className="group flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Previous Project</span>
                                    <span className="font-medium text-slate-900 group-hover:text-blue-700 line-clamp-1">{prevProject.title}</span>
                                </div>
                            </Link>
                        ) : <div />}
                    </div>
                    <div className="w-1/2 pl-4 flex justify-end">
                        {nextProject ? (
                            <Link href={`/projects/${nextProject.slug}`} className="group flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors text-right">
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Next Project</span>
                                    <span className="font-medium text-slate-900 group-hover:text-blue-700 line-clamp-1">{nextProject.title}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </div>
        </div>
    );
}
