import abc from '@/Assets/Projects/abc-e.vercel.app.png';
import bacan from '@/Assets/Projects/bacan.vercel.app.png';
import fashions from '@/Assets/Projects/fashions-zeta.vercel.app.png';
import anas from '@/Assets/Projects/as-anas.vercel.app.png';

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
    title: 'Fashions',
    description: 'Website built with HTML5, CSS3.',
    image: fashions,
    github: 'https://github.com/RIOS-JORGE/Fashions',
    demo: 'https://fashions-zeta.vercel.app/',
    tags: ['HTML5', 'CSS3'],
  },
  {
    title: 'As Anas',
    description: 'Website built with HTML5, CSS3.',
    image: anas,
    github: 'https://github.com/RIOS-JORGE/As-Anas',
    demo: 'https://as-anas.vercel.app/',
    tags: ['HTML5', 'CSS3'],
  },
];
