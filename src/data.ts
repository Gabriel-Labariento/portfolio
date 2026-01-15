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
  description: "Serving as Product Manager for IM Summit 2026, the largest event of the Ateneo Management Information Systems Association. I’m leading the planning and development of the event website, translating organizational requirements into clear product scope, timelines, and technical decisions. The role involves coordinating with multiple stakeholders, defining core user flows, and ensuring the site supports a large-scale tech and business case competition.",
  image: "/im-summit.png"
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
      approachImage: "/chic-couture-admin.png",
      techStack: [
        'TypeScript',
        'Next.js',
        'Supabase',
        'Cloudinary',
        'Resend',
        'Tailwind CSS',
      ],
      technicalDecisions: [
        {
          title: "Supabase for Auth & Database",
          description: "Chose Supabase to quickly bootstrap authentication for the admin panel and store product data. Its row-level security (RLS) policies ensured that only the admin could modify product details while public users could strictly only read data.",
          codeSnippet: {
            language: "sql",
            code: `create policy "Public profiles are viewable by everyone."
  on products for select
  using ( true );

create policy "Admins can insert products."
  on products for insert
  with check ( auth.role() = 'authenticated' );`
          }
        },
        {
          title: "Cloudinary for Image Optimization",
          description: "Jewelry requires high-quality images, but loading heavy assets hurts performance. I integrated Cloudinary to automatically resize and serve images in next-gen formats (WebP) based on the user's viewport, significantly improving LCP scores.",
        }
      ],
      tradeoffs: [
        {
          title: "Inquiry System vs. Full Checkout",
          description: "Opted for an inquiry-based model instead of a payment gateway. This reduces friction for the non-technical owner but adds a manual step to close sales.",
          type: "neutral"
        },
        {
          title: "Client-Side Filtering",
          description: "Fetched all products at build/runtime and filtered client-side. Good for small inventories (<100 items) and feels instant, but won't scale if inventory grows to thousands.",
          type: "positive"
        }
      ],
      learned: [
        "Implementing secure file uploads with signed URLs.",
        "Designing intuitive admin interfaces for non-technical clients.",
        "Handling email transactional flows with Resend."
      ]
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
      technicalDecisions: [
        {
          title: "Two-Sided Auth Architecture",
          description: "Implemented a custom role-based access control (RBAC) system within Supabase. Users are tagged as either 'host' or 'vendor' upon signup, which dictates their dashboard view and permissions throughout the app.",
        },
        {
          title: "Real-time Application Updates",
          description: "Leveraged Supabase Realtime to push status updates to vendors instantly when a host accepts or rejects their application, removing the need for page refreshes.",
        }
      ],
      tradeoffs: [
        {
          title: "Supabase vs. Custom Backend",
          description: "Using Supabase accelerated MVP development but limited flexibility in defining complex business logic triggers compared to a custom Express/Node server.",
          type: "neutral"
        },
        {
          title: "SPA over SSR",
          description: "Built as a pure React SPA. This made the dashboard interaction snappy but sacrificed initial load time and SEO for public browse pages compared to Next.js.",
          type: "negative"
        }
      ],
      learned: [
        "Modeling complex many-to-many relationships (Events <-> Vendors).",
        "Designing specific user flows for distinct personas.",
        "Balancing MVP features with long-term scalability concerns."
      ]
    },
  },
];

export const aboutData: import('./types').AboutPageData = {
  title: "About Me",
  bio: [
    "I'm a second-year Computer Science student at Ateneo de Manila University with a passion for building software that solves real problems. My journey began with simple web pages and has evolved into engineering complex full-stack applications.",
    "Beyond writing code, I love the product side of things—understanding user needs, iterating on designs, and delivering polished experiences. I thrive in environments where I can wear multiple hats, from system architecture to frontend polish.",
    "When I'm not coding, you can find me in the gym or running outdoors."
  ],
  skills: [
    "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Figma", "Git"
  ],
  education: [
    {
      institution: "Ateneo de Manila University",
      degree: "Bachelor of Science in Computer Science",
      period: "2023 - Present",
      honors: "Director's List Scholar (Top 200 Freshman Applicants)",
      relevantCoursework: ["Data Structures & Algorithms", "Software Tools and Development Frameworks"],
      activities: ["Management Information Systems Association (MISA)", "Computer Society of the Ateneo (CompSAt)"]
    }
  ],
  experience: [
    {
      company: "Pop Up",
      role: "Founder & Lead Developer",
      period: "2025 - Present",
      description: "Founded and engineered a two-sided marketplace connecting event organizers with pop-up businesses.",
      achievements: [
        "Designed and built the entire platform using React and Supabase.",
        "Implemented real-time features for application tracking.",
        "Onboarded initial pilot users from the university community."
      ]
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2024 - Present",
      description: "Worked with a local client to deliver custom web solutions.",
      achievements: [
        "Developed 'Chic Couture,' a catalog platform for a jewelry business.",
        "Improved site performance and SEO for client landing pages."
      ]
    }
  ],
  certifications: [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      url: "https://www.freecodecamp.org/certification/Gabrielabariento/responsive-web-design"
    },
    {
      name: "CS50: Introduction to the Intellectual Enterprises of Computer Science and the Art of Programming",
      issuer: "Harvard University, CS50",
      date: "2024",
      url: "https://certificates.cs50.io/fdc2ba22-ea0f-4f3e-b8e3-998d9f11ae78.png?size=letter"
    },
    // Add more actual certifications here
  ],
  volunteering: [
    {
      organization: "Ateneo Management Information Systems Association (MISA)",
      role: "Product Manager - IM Summit 2026",
      period: "2025 - Present",
      description: "Leading the product development for the website of MISA's flagship event. Managing a team of developers and designers to deliver a high-quality event platform."
    },
    {
      organization: "Computer Society of the Ateneo (CompSAt)",
      role: "Member Involvement Deputy",
      period: "2024 - Present",
      description: "Conducts initiatives to improve member engagement and retention for CompSAt's 400+ members."
    }
  ]
};
