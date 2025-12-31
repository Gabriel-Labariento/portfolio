import { socialLinks } from "@/data";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50 py-12">
    <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <span className="font-bold text-slate-900">Gabe Labariento</span>
        <p className="text-sm text-slate-500">
          © 2026 Gabe Labariento. Built with Next.js & Tailwind.
        </p>
      </div>
      <div className="flex gap-6">
        {socialLinks.map((link) => {
          const Icon = link.platform === 'GitHub' ? GitHubIcon : link.platform === 'LinkedIn' ?  LinkedInIcon : EmailIcon;
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
              aria-label={link.platform}
            >
            <Icon></Icon>
            </a>
          );
        })}
      </div>
    </div>
  </footer>
)}
