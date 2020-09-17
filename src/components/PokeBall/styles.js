import styled from 'styled-components';

import { motion } from 'framer-motion';

import { Colors } from '~/styles/Metrics';

export const Container = styled(motion.div)`
  height: 20rem;
  width: 20rem;
  border: 1.3rem solid ${Colors.Pokeball.Border};
  border-radius: 50%;
  position: relative;
  background-image: linear-gradient(
    180deg,
    ${Colors.Pokeball.Top} 50%,
    ${Colors.Pokeball.Bottom} 50%
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    height: 1.3rem;
    width: 105%;
    position: absolute;
    background-color: ${Colors.Pokeball.Border};
  }

  &::after {
    content: '';
    height: 7rem;
    width: 7rem;
    position: absolute;
    border-radius: 50%;
    background-image: radial-gradient(
      ${Colors.Pokeball.Bottom} 0rem,
      ${Colors.Pokeball.Bottom} 0.5rem,
      ${Colors.Pokeball.Border} 0.5rem,
      ${Colors.Pokeball.Border} 0.9rem,
      ${Colors.Pokeball.Bottom} 0.9rem,
      ${Colors.Pokeball.Bottom} 2.2rem,
      ${Colors.Pokeball.Border} 2.2rem
    );
  }
  a {
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
  }
`;
