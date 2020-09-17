import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from './styles';

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
function PokeBall({ to }) {
  return (
    <Container
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={to} />
    </Container>
  );
}

PokeBall.propTypes = {
  to: PropTypes.string.isRequired,
};

export default PokeBall;
