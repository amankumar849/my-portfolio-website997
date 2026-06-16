export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // percentage, e.g. 90
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface ExperienceItem {
  year: string;
  title: string;
  companyOrContext: string;
  description: string;
  tags: string[];
}
