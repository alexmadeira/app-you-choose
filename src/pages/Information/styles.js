import styled from 'styled-components';

import { motion } from 'framer-motion';
import { transparentize } from 'polished';

import { Colors, Spaces } from '~/styles/Metrics';

export const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const ImageBox = styled(motion.div)`
  height: 100vh;
  width: 50vw;
  background: ${Colors.ImageBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(motion.img)`
  max-width: 100%;
  width: 475px;
`;

export const StartsData = styled.div`
  height: 100vh;
  width: 50vw;
  background: ${Colors.White};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(${Spaces.BaseMargin}*5);
`;

export const Name = styled(motion.h1)`
  font-family: 'Podkova', serif;
  font-size: 4rem;
  color: ${Colors.Black};
  text-transform: capitalize;
  margin: calc(${Spaces.BaseMargin}*2) 0;
  width: 100%;
  span {
    font-size: 2.5rem;
    color: ${transparentize(0.5, Colors.Black)};
  }
`;

export const Details = styled(motion.div)`
  display: grid;
  width: 100%;
  grid-gap: ${Spaces.BaseMargin}*2;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;

export const Detail = styled(motion.div)`
  display: flex;
  flex-direction: column;
  strong {
    font-family: 'Podkova', serif;
    font-size: 2.5rem;
    font-weight: bold;
  }
  p {
    font-family: 'Podkova', serif;
    font-size: 1.6rem;
    font-weight: normal;
    margin-top: calc(${Spaces.BaseMargin} / 2);
    padding-left: ${Spaces.BasePadding};
    text-transform: capitalize;
  }
`;
