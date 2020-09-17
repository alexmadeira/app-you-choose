import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { useFatch } from '~/hooks/useFatch';

import { Container, WhoIs } from './styles';

const easing = [0.6, -0.5, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing },
  },
};
function PokeBall({ pokemon }) {
  const { name } = pokemon;

  const { data } = useFatch(`/pokemon/${name}/`);

  if (!data) {
    return null;
  }
  return (
    <Container
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`information/${name}`}>
        <WhoIs
          initial={{ opacity: 0, padding: 75 }}
          whileHover={{
            opacity: 1,
            padding: 15,
            transition: { ease: easing },
          }}
          src={data.sprites.other['official-artwork'].front_default}
          alt={name}
        />
      </Link>
    </Container>
  );
}

PokeBall.propTypes = {
  pokemon: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default PokeBall;
