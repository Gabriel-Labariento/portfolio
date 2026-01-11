import { Project, SocialLink, NavItem, HeroData, CurrentFocusData } from './types';

// RECRUITER NOTE: This file acts as the content source.
// It uses strict typing to ensure all projects follow the STAR (Situation, Task, Action, Result) format subtly.

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: "/blog" }
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Gabriel-Labariento', label: 'github.com' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/gabriel-labariento/', label: 'linkedin.com/in/' },
  { platform: 'Email', url: 'mailto:gabrielmatthew.labariento@gmail.com', label: 'email@example.com' },
];

export const heroData: HeroData = {
  headline: {
    start: "I'm Gabe! I build",
    highlight: "web systems and",
    subHighlight: "solutions."
  },
  subtext: "I’m a second-year Computer Science student at Ateneo de Manila University focused on building thoughtful, real-world web products.",
  techStack: ["TypeScript", "React / Next.js"]
};

export const currentFocus: CurrentFocusData = {
  title: "IM Summit 2026 — Website & Product Management",
  role: "Current Focus",
  description: "Serving as Product Manager for IM Summit 2026, the largest event of the Ateneo Management Information Systems Association. I’m leading the planning and development of the event website, translating organizational requirements into clear product scope, timelines, and technical decisions. The role involves coordinating with multiple stakeholders, defining core user flows, and ensuring the site supports a large-scale tech and business case competition."
};

export const projects: Project[] = [
  {
    id: '1',
    slug: 'chic-couture-catalog',
    title: 'Chic Couture Product Catalog Website',
    shortDescription:
      'A full-stack catalog website for a local jewelry reseller with admin management and customer inquiries.',
    year: '2025',
    role: 'Full Stack Developer',
    links: {
      demo: 'https://chic-couture-a75n.vercel.app/',
    },
    content: {
      problem:
        "A local jewelry reseller needed a professional way to showcase their products online without the complexity of a full e-commerce system. They wanted customers to browse products by category and easily inquire about items, while retaining manual control over sales and inventory.",
      approach:
        "I built a catalog-style website focused on product discovery rather than checkout. Products are organized into categories such as bracelets, watches, necklaces, and rings, with client-side filtering for ease of browsing. Instead of a shopping cart, customers can send inquiries directly to the business via email using Resend. On the backend, I implemented an admin dashboard where the business owner can upload products with images, update availability statuses, and track inquiry statuses.",
      techStack: [
        'TypeScript',
        'Next.js',
        'Supabase',
        'Cloudinary',
        'Resend',
        'Tailwind CSS',
      ],
      challenges:
        "Designing a system that felt simple for customers but powerful for the business owner was the main challenge. I had to ensure image uploads were reliable and performant while keeping the admin dashboard intuitive for a non-technical user. Another consideration was separating inquiry tracking from actual email replies, since responses are handled externally via email.",
      outcome:
        "The business gained a clean, easy-to-maintain online catalog that improved how they present products to customers. This project strengthened my experience with real client requirements, admin tooling, third-party integrations, and building systems that prioritize usability over unnecessary complexity.",
    },
  },
  {
    id: '2',
    slug: 'pop-up-marketplace',
    title: 'Pop Up — Event & Booth Matching Platform',
    shortDescription:
      'A two-sided platform connecting event hosts and pop-up businesses for sponsorship and booth placements.',
    year: '2025',
    role: 'Founder & Full Stack Developer',
    links: {},
    content: {
      problem:
        "Pop-up business owners struggle to discover legitimate events where they can set up stalls, while event hosts—especially student organizations—find it equally difficult to source pop-up booths to sponsor or participate in their events. Most coordination happens through fragmented Facebook pages and group chats, making discovery inefficient and unreliable.",
      approach:
        "I designed Pop Up as a focused two-sided platform. Event hosts can publish upcoming events, while pop-up business owners can browse and apply to sponsor or participate in these events. Hosts can then review applications and approve or reject them through a centralized interface, reducing back-and-forth and keeping all coordination in one place.",
      techStack: ['React', 'React Router', 'Supabase', 'PostgreSQL'],
      challenges:
        "Designing the application flow between two different user roles was the biggest challenge. I had to carefully model permissions, ensuring hosts could manage events and applications while pop-up owners could only apply and track their submissions. Since the project is still in MVP stage, I’m actively iterating on the data model and business logic to keep the system flexible without overengineering it.",
      outcome:
        "Pop Up is currently in active development as an MVP. The project has helped me develop stronger product thinking, especially in translating real-world pain points into clear user flows, designing marketplace-style interactions, and building scalable foundations even at an early stage.",
    },
  },

];
