import type { ComponentType } from 'react';

export interface Skill {
  name: string;
  icon: ComponentType<{ className?: string }>;
  category: 'language' | 'framework' | 'tool';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
}
