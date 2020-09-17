import React from 'react';

import PokeBall from '~/components/PokeBall';
import { useFatch } from '~/hooks/useFatch';

import { Container, Table } from './styles';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const statList = [0, 3, 6];
export default function Home() {
  const { data } = useFatch('pokemon');
  const pokemons = data ? data.results : [];
  const startPokemons = pokemons.filter((_, index) => statList.includes(index));

  return (
    <Container initial="initial" animate="animate">
      <Container>
        <Table variants={stagger}>
          {startPokemons.map(pokemon => (
            <PokeBall key={pokemon.name} pokemon={pokemon} />
          ))}
        </Table>
      </Container>
    </Container>
  );
}
