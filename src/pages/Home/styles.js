import styled from 'styled-components';

import { motion } from 'framer-motion';

import { Spaces } from '~/styles/Metrics';

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Table = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: calc(${Spaces.BaseMargin} * 2);
`;

export const Title = styled(motion.h1)`
  font-family: 'Podkova', serif;
  margin-bottom: calc(${Spaces.BaseMargin} * 5);
  font-size: 4rem;
  text-align: center;
  max-width: 100%;
  width: 500px;
`;
