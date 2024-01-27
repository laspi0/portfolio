import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "Projets Académiques réalisés",
  projects: [
    {
      id: getId(),
      name: 'Systeme de reservation TER Dakar',
      description: 'Une plateforme de reservation de billets.',
      tasks:
        'Développement d\'une application Laravel de réservation de billets avec authentification sécurisée et scanner de billets par codes QR. Garantie de fiabilité et de performance pour une expérience utilisateur optimale.',
      url: 'https://github.com/laspi0/ter.git',
      img: '/ter.png',
      tags: ['Lavavel', 'Ajax', 'Mysql', 'React',],
    },
    {
      id: getId(),
      name: 'Clone de Wave ',
      description: 'Reprise total de l\'application de Wave digital finance.',
      tasks:
      'Développement d\'une application Flutter, clonant Wave Digital Finance, avec intégration d\'un système de carte Master virtuel. Spécialisé dans la conception d\'une expérience utilisateur avancée et sécurisée.',
      url: 'https://github.com/laspi0/wave.git',
      img: '/wave.png',
      tags: ['Flutter', 'Dart',],
    },
  ],
};

export default featuredProjectsSection;
