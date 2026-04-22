export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  website?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievement: string;
  tools: string[];
}

export interface Project {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  ciUrl?: string;
  tools: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SiteConfig {
  personal: PersonalInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}
