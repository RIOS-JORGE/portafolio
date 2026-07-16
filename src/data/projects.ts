import abc from '@/Assets/Projects/abc-e.vercel.app.png';
import bacan from '@/Assets/Projects/bacan.vercel.app.png';
import anas from '@/Assets/Projects/as-anas.vercel.app.png';
import multitecnicos from '@/Assets/Projects/multitecnicos.com.ar.svg';

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'ABC-E',
    description: 'Website built with HTML5, SCSS, and JavaScript.',
    image: abc,
    github: 'https://github.com/RIOS-JORGE/ABC-E',
    demo: 'http://abc-e.vercel.app',
    tags: ['HTML5', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Bacan Barbershop',
    description: 'Website built with HTML5, CSS3.',
    image: bacan,
    github: 'https://github.com/RIOS-JORGE/Bacan',
    demo: 'https://bacan.vercel.app/',
    tags: ['HTML5', 'CSS3'],
  },
  {
    title: 'Multitecnicos',
    description: 'Directorio público de técnicos y profesionales.',
    image: multitecnicos,
    github: 'https://github.com/RIOS-JORGE/multitecnicos',
    demo: 'https://multitecnicos.com.ar',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'As Anas',
    description: 'Website built with TypeScript, Next.js, React and Tailwind CSS.',
    image: anas,
    github: 'https://github.com/RIOS-JORGE/As-Anas',
    demo: 'https://www.as-anas.pt/en',
    tags: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
  },
];
