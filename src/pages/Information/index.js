import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Information() {
  return (
    <Container
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to="/">Homer</Link>
    </Container>
  );
}

export default Information;
