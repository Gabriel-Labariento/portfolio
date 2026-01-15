
import React from 'react';
import { aboutData } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Award, Heart, User, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: 'About | Gabe Labariento',
    description: 'My background, experience, and skills.',
};

export default function AboutPage() {
    return (
        <div className="py-16 md:py-24 max-w-4xl mx-auto space-y-24">

            {/* Header / Bio Section */}
            <section className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
                <div className="relative aspect-square w-full max-w-[280px] mx-auto md:mx-0 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl">
                    <Image
                        src="/avatar.png" // Ensure this exists or fallback to a placeholder in real usage
                        alt="Portrait of Gabe"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                            {aboutData.title}
                        </h1>
                        <div className="h-1.5 w-20 bg-blue-500 rounded-full" />
                    </div>
                    <div className="space-y-4 text-lg text-slate-600 dark:text-slate-200 leading-relaxed">
                        {aboutData.bio.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="pt-4">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Core Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {aboutData.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium md:text-sm">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="space-y-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                        <Briefcase size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Experience</h2>
                </div>

                <div className="border-l-2 border-slate-100 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
                    {aboutData.experience.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white border-4 border-blue-500" />

                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                                    <span className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="text-blue-600 font-semibold text-lg">{exp.company}</div>
                                <p className="text-slate-600 leading-relaxed max-w-2xl">{exp.description}</p>
                                {exp.achievements && (
                                    <ul className="space-y-2 mt-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600">
                                                <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-1" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="space-y-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400">
                        <GraduationCap size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Education</h2>
                </div>

                <div className="grid gap-8">
                    {aboutData.education.map((edu, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:border-indigo-100 dark:hover:border-indigo-900 hover:shadow-md transition-all">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{edu.institution}</h3>
                                    <div className="text-indigo-600 dark:text-indigo-400 font-medium text-lg mt-1">{edu.degree}</div>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full mb-2">
                                        {edu.period}
                                    </span>
                                    {edu.honors && <div className="text-slate-600 dark:text-slate-300 text-sm font-medium">{edu.honors}</div>}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {edu.relevantCoursework && (
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Coursework</h4>
                                        <ul className="space-y-1.5">
                                            {edu.relevantCoursework.map((course, i) => (
                                                <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 dark:bg-indigo-600" />
                                                    {course}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {edu.activities && (
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Campus Involvement</h4>
                                        <ul className="space-y-1.5">
                                            {edu.activities.map((activity, i) => (
                                                <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 dark:bg-indigo-600" />
                                                    {activity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Leadership & Volunteering */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-2.5 bg-rose-50 rounded-xl text-rose-600 dark:text-rose-400">
                            <Heart size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Involvement</h2>
                    </div>

                    <div className="space-y-6">
                        {aboutData.volunteering.map((vol, idx) => (
                            <div key={idx} className="group">
                                <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{vol.role}</h3>
                                <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">{vol.organization} • {vol.period}</div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{vol.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications and Extras */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-2.5 bg-amber-50 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400">
                            <Award size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Certifications</h2>
                    </div>

                    <div className="space-y-4">
                        {aboutData.certifications.map((cert, idx) => (
                            <a
                                key={idx}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-amber-50/50 dark:hover:bg-amber-900/20 border border-slate-100 dark:border-slate-800 hover:border-amber-100 dark:hover:border-amber-800/50 transition-all group"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{cert.name}</h3>
                                        <div className="text-slate-500 dark:text-slate-400 text-sm">{cert.issuer}</div>
                                    </div>
                                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm">{cert.date}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    );
}
