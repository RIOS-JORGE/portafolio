import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import type { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/RIOS-JORGE',
    icon: AiFillGithub,
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jorgerios-react-frontend-developer',
    icon: FaLinkedinIn,
  },
];
