'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Bonjour, je m’appelle Lassana Diarra, je suis développeur web full
            stack et je souhaite explorer toutes les stacks technologiques.
          </p>
          <p>
            Aujourd’hui, je me concentre principalement sur l’apprentissage du
            développement mobile et la recherche d’un emploi décent.{' '}
            {/* <Link
              href="https://www.pixelwand.live/"
              target="_blank"
              className="text-accent"
            >
              Pixelwand
            </Link> */}
            .
          </p>
          <p>
            
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
