import React from 'react';

import PokeBall from '~/components/PokeBall';

import { Container, Table } from './styles';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export default function Home() {
  return (
    <Container initial="initial" animate="animate">
      <Container>
        <Table variants={stagger}>
          <PokeBall to="/information" />
          <PokeBall to="/information" />
          <PokeBall to="/information" />
        </Table>
      </Container>
    </Container>
  );
}
