
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
    title: 'Blog | Gabe Labariento',
    description: 'Thoughts and writings.',
};

export default function BlogPage() {
    return (
        <div className="space-y-12 py-12 text-center">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">Blog</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Some thoughts and updates on my journey.
                </p>
            </div>

            <div className="py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                <p className="text-slate-500 dark:text-slate-400 mb-4">No posts yet. Check back soon!</p>
                <Link href="/">
                    <Button variant="outline" className="bg-white dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900">Return Home</Button>
                </Link>
            </div>
        </div>
    );
}
