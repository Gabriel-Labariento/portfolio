export interface ProjectContent {
  problem: string;
  approach: string;
  approachImage?: string;
  techStack: string[];
  technicalDecisions: {
    title: string;
    description: string;
    codeSnippet?: {
      language: string;
      code: string;
    };
  }[];
  tradeoffs: {
    title: string;
    description: string;
    type: 'positive' | 'negative' | 'neutral';
  }[];
  learned: string[];
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

export interface HeroData {
  headline: {
    start: string;
    highlight: string;
    subHighlight: string;
  };
  subtext: string;
  techStack: string[];
}

export interface CurrentFocusData {
  title: string;
  description: string;
  role: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  honors?: string;
  relevantCoursework?: string[];
  activities?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  period: string;
  description: string;
}

export interface AboutPageData {
  title: string;
  bio: string[];
  skills: string[];
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  volunteering: Volunteering[];
}