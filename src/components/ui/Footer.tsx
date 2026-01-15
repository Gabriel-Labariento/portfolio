import { socialLinks } from "@/data";
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-bold text-foreground">Gabe Labariento</span>
          <p className="text-sm text-muted-foreground">
            © 2026 Gabe Labariento. Built with Next.js & Tailwind.
          </p>
        </div>
        <div className="flex gap-6">
          {socialLinks.map((link) => {
            const Icon = link.platform === 'GitHub' ? Github : link.platform === 'LinkedIn' ? Linkedin : Mail;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.platform}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  )
}
