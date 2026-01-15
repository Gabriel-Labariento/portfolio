import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Box, Cpu, Copy, Layout } from 'lucide-react';
import { Button } from './ui/button';
import { ProjectCard } from '../components/ProjectCard';
import { projects, heroData, currentFocus } from '../data';
import Image from 'next/image';

const HomePage: React.FC = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="pt-8 md:pt-24 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800 px-3 py-1 text-sm text-blue-800 dark:text-blue-300">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              Open to Internship roles for Summer 2026
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground leading-[1.1]">
                {heroData.headline.start}<span className="text-muted-foreground"><br></br>{heroData.headline.highlight} <span className='italic underline'>{heroData.headline.subHighlight}</span> </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {heroData.subtext}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="h-12 px-8 text-base hover:cursor-pointer">
                    Browse Portfolio <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <a href="mailto:gabrielmatthew.labariento@gmail.com">
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-background hover:bg-accent">
                    Let's talk!
                  </Button>
                </a>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4 sm:items-center text-sm text-muted-foreground">
                <span className="font-semibold tracking-wider uppercase text-xs">Tech Stack</span>
                <div className="hidden sm:block h-px w-8 bg-border"></div>
                <div className="flex gap-6 items-center">
                  <span className="flex items-center gap-1.5"><Terminal size={14} />{heroData.techStack[0]}</span>
                  <span className="flex items-center gap-1.5"><Box size={14} /> {heroData.techStack[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Avatar / Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last ">
            <div className=" flex items-center justify-center">
              {/* Placeholder Avatar SVG */}
              {/* <User size={128} className="text-slate-300" /> */}
              <Image width={700} height={700} src="/avatar.png" alt="Profile" className="w-full h-full object-cover md:w-80 md:h-80 bg-muted rounded-3xl overflow-hidden  border-background shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-12">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Selected Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              Here are some projects I've worked on, check 'em out!
            </p>
          </div>
          <Link href="/projects" className="hidden md:block">
            <Button variant="ghost">View All Projects <ArrowRight size={16} className="ml-2" /></Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Current Focus Card */}
        <div className="rounded-3xl border border-border bg-card/50 p-2 md:p-3 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-muted/50 rounded-2xl p-8 md:p-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-800 dark:text-indigo-300">
                <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
                {currentFocus.role}
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {currentFocus.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {currentFocus.description}
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-muted rounded-xl flex items-center justify-center">
              {/* <Layout size={64} className="text-slate-400" /> */}
              <Image width={1000} height={1000} src={currentFocus.image} alt="Current Focus" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="py-24 text-center space-y-8 max-w-2xl mx-auto">
        <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
          <Terminal size={24} />
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight">
          Ready to build something together?
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          I'm currently looking for new opportunities in software engineering.
          My inbox is always open for questions or just to say hi.
        </p>

        <div className="pt-4 flex justify-center">
          <div className="flex items-center gap-2 p-1.5 pl-4 pr-1.5 bg-background border border-border rounded-full shadow-sm hover:border-ring transition-colors">
            <span className="text-muted-foreground font-medium text-sm">gabrielmatthew.labariento@gmail.com</span>
            <Button
              size="sm"
              className="rounded-full px-4 h-8"
            // onClick={() => {
            //   navigator.clipboard.writeText('gabrielmatthew.labariento@gmail.com');
            //   // Add your toast notification here
            // }}
            >
              <Copy size={14} className="mr-2" /> Copy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;