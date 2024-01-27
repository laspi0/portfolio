import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Lassana Diarra.',
  tagline: 'je suis developpeur web et mobile.',
  description:
    'Je suis un développeur web front-end passionné ayant une expérience des applications web avec lavavel, Flutter, javascript, java et UI / UX design. ',
  specialText: 'Actuellement disponible pour un emploi ou stage',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
