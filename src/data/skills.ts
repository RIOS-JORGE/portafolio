import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
  DiNpm,
} from 'react-icons/di';
import {
  SiFirebase,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVercel,
  SiNextdotjs,
  SiVite,
} from 'react-icons/si';
import { DiLinux } from 'react-icons/di';

import type { Skill } from '@/types';

export const techStack: Skill[] = [
  { name: 'HTML5', icon: DiHtml5, category: 'language' },
  { name: 'CSS3', icon: DiCss3, category: 'language' },
  { name: 'JavaScript', icon: DiJavascript1, category: 'language' },
  { name: 'React', icon: DiReact, category: 'framework' },
  { name: 'Node.js', icon: DiNodejs, category: 'framework' },
  { name: 'Firebase', icon: SiFirebase, category: 'tool' },
  { name: 'NPM', icon: DiNpm, category: 'tool' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'framework' },
  { name: 'Git', icon: DiGit, category: 'tool' },
];

export const tools: Skill[] = [
  { name: 'Linux', icon: DiLinux, category: 'tool' },
  { name: 'VS Code', icon: SiVisualstudiocode, category: 'tool' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'framework' },
  { name: 'Vite', icon: SiVite, category: 'tool' },
  { name: 'Vercel', icon: SiVercel, category: 'tool' },
];
