
import React from 'react';

export const metadata = {
    title: 'About | Gabe Labariento',
    description: 'Learn more about me.',
};

export default function AboutPage() {
    return (
        <div className="space-y-12 py-12 max-w-3xl">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">About Me</h1>
                <p className="text-lg text-slate-600">
                    I'm a second-year Computer Science student at Ateneo de Manila University.
                </p>
            </div>

            <div className="prose prose-slate lg:prose-lg text-slate-600">
                <p>
                    I'm passionate about building web systems that solve real-world problems.
                    When I'm not coding, I'm likely exploring new technologies, playing video games, or working on community projects.
                </p>
                <p>
                    My journey started with a curiosity for how things work on the internet, which led me to dive deep into full-stack development.
                    I enjoy working with TypeScript, React, and Next.js to build performant and user-friendly applications.
                </p>
            </div>
        </div>
    );
}
