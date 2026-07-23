import abc from '@/Assets/Projects/abc-e.vercel.app.png';
import bacan from '@/Assets/Projects/bacan.vercel.app.png';
import anas from '@/Assets/Projects/as-anas.vercel.app.png';
import labrutal from '@/Assets/Projects/la-brutal-hamburgueseria.vercel.app.svg';

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
    title: 'La Brutal Hamburguesería',
    description: 'Landing page con menú vivo, carrito y checkout por WhatsApp. Panel admin con Supabase.',
    image: labrutal,
    github: 'https://github.com/RIOS-JORGE/la-brutal-hamburgueseria',
    demo: 'https://la-brutal-hamburgueseria.vercel.app',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
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
