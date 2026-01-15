import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4 max-w-5xl flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center gap-2 font-sans font-bold text-lg text-foreground hover:opacity-80 transition-opacity">
        <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center">
          <Image width={50} height={50} src="./square-code.svg" alt="Logo" className="invert"></Image>
        </div>
        <span>Gabe Labariento</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="text-sm font-medium text-muted-foreground decoration-none transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
        <ModeToggle />
      </div>
      <div className="flex gap-4 md:hidden">
        <ModeToggle />
        {/* Mobile menu toggle would go here */}
      </div>
      <div className="hidden md:flex">
        <a href="mailto:gabrielmatthew.labariento@gmail.com" className="ml-4 text-sm font-medium text-foreground hover:text-primary transition-colors">
          Contact Me
        </a>
      </div>
    </div>
  </nav>
);
