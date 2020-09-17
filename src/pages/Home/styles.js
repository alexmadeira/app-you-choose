import styled from 'styled-components';

import { motion } from 'framer-motion';

import { Spaces } from '~/styles/Metrics';

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: calc(${Spaces.BaseMargin} * 2);
`;
