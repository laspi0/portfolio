import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "Actuellement en quête d'un stage ou d'un emploi",
    'ma boîte de réception est ouverte à toutes opportunités',
  ],
  link: `mailto:${author.email}`,
};
