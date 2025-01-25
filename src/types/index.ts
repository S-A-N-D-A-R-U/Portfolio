export interface NavItem {
    label: string;
    href: string;
    icon: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    demoUrl: string;
    githubUrl: string;
  }
  
  export interface Service {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface Testimonial {
    content: string;
    author: string;
    role: string;
    avatarUrl: string;
    company: string;
  }
  
  export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';