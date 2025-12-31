export interface ProjectContent {
  problem: string;
  approach: string;
  techStack: string[];
  challenges: string; // "Key Technical Decisions & Tradeoffs"
  outcome: string; // "What I Learned"
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  year: string;
  role: string; // e.g., "Full Stack Engineer"
  links: {
    repo?: string;
    demo?: string;
  };
  content: ProjectContent;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface NavItem {
  label: string;
  path: string;
}