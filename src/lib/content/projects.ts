import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'D\'autres projets',
    projects: [
    {
        id: getId(),
        name: 'Systeme de gestion de chauffeurs de bus',
        url: 'https://vercel.com/laspi0s-projects/bus-driver-manager-app',
        repo: 'https://github.com/laspi0/bus_driver_manager_app.git',
        img: '/bus.png',
        year: 2023,
        tags: ['Flask', 'SQLAlchemy'],
    },
    {
        id: getId(),
        name: 'Plateforme de gestion des votes.',
        url: 'https://github.com/laspi0/sponsorship_app.git',
        repo: 'https://github.com/laspi0/sponsorship_app.git',
        img: '/vote.png',
        year: 2023,
        tags: ['JavaFx', 'Scene Builder'],
    },
    {
        id: getId(),
        name: 'calculatrice en ract',
        url: 'https://calculatrice-brown.vercel.app/',
        repo: 'https://github.com/laspi0/calculatrice.git',
        img: '/calcul.png',
        year: 2023,
        tags: ['React', 'Sass'],
    },
 
  
    ],
};