import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data";

export const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="container mx-auto px-4 max-w-5xl flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center gap-2 font-sans font-bold text-lg text-slate-900 hover:opacity-80 transition-opacity">
        <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
          <Image width={50} height={50} src="./square-code.svg" alt="Logo" className="bg-background fill-foreground"></Image>
        </div>
        <span>Gabe Labariento</span>
      </Link>
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="text-sm font-medium transition-colors hover:text-secondary-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 md:hidden">
         {/* Mobile menu toggle would go here */}
      </div>
      <div className="hidden md:flex">
         <a href="" className="text-sm font-medium text-slate-900 hover:text-accent-foreground transition-colors">
            Contact Me
         </a>
      </div>
    </div>
  </nav>
);