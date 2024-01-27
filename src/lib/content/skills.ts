import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'full stack development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Création de sites Web dynamiques à l’aide de php,Python,Javascript',
        'Création d\'applications mobile multi-plateforme avec Flutter',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'mysql', icon: 'logos:mysql' },
        {
            name: 'typeScript',
            icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'logos:flask' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'java', icon: 'logos:java' },
        { name: 'javascript', icon: 'logos:javascript' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'flutter', icon: 'logos:flutter' },
          // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'postgresql', icon: 'logos:postgresql' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'laravel', icon: 'logos:laravel' },
        ],
    },
    {
        id: getId(),
        title: 'UI/UX designing',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Expérience dans la conception d’interfaces conviviales avec figma',
        'Expérience dans l’élaboration de systèmes de conception et de guides de style',
        'Fournir des solutions de conception conviviales',
        ],
        softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        ],
    },
    ],
};
