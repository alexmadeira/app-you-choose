import React, { useEffect } from 'react';

import PokeBall from '~/components/PokeBall';
import { useFatch } from '~/hooks/useFatch';

import { Container, Table, Title } from './styles';

const statList = [0, 3, 6];

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: easing },
  },
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { data } = useFatch('pokemon');
  const pokemons = data ? data.results : [];
  const startPokemons = pokemons.filter((_, index) => statList.includes(index));

  useEffect(() => {
    document.title = 'Choose your Pokémon';
  }, []);

  return (
    <Container initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Container variants={stagger}>
        <Title variants={fadeInUp}>
          Which one will you choose for yourself?
        </Title>
        <Table variants={stagger}>
          {startPokemons.map(pokemon => (
            <PokeBall key={pokemon.name} pokemon={pokemon} />
          ))}
        </Table>
      </Container>
    </Container>
  );
}
