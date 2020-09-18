import styled, { keyframes } from 'styled-components';

import { motion } from 'framer-motion';
import { transparentize } from 'polished';

import { Colors, Spaces } from '~/styles/Metrics';

const progressAnimate = keyframes`
  from {
      width: 0%;
  }
`;

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
  background-size: 400% 400%;
  animation: background 50s ease-in-out infinite;

  @keyframes background {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% -135%;
    }
  }

  &.grass {
    background-image: linear-gradient(
      0deg,
      #9be15d 0%,
      #00e3ae 50%,
      #9be15d 100%
    );
  }
  &.fire {
    background-image: linear-gradient(
      0deg,
      #f6d365 0%,
      #fda085 50%,
      #f6d365 100%
    );
  }
  &.water {
    background-image: linear-gradient(
      0deg,
      #74ebd5 0%,
      #9face6 50%,
      #74ebd5 100%
    );
  }
`;

export const Image = styled(motion.img)`
  max-width: 100%;
  width: 475px;
`;

export const StatsData = styled.div`
  height: 100vh;
  width: 50vw;
  background: ${Colors.White};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(${Spaces.BaseMargin}*5);
`;

export const Details = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const Back = styled(motion.div)`
  width: 100%;
  a {
    display: flex;
    align-items: center;
    color: ${Colors.Black};
    font-family: 'Podkova', serif;
    svg {
      margin-right: ${Spaces.BaseMargin};
    }
  }
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

export const Detail = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 320px;
  width: 100%;
  margin-bottom: ${Spaces.BaseMargin};
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

export const Stat = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: calc(${Spaces.BaseMargin} * 2);
  margin-bottom: ${Spaces.BaseMargin};
  align-items: flex-start;
  justify-content: center;
  & + div {
    margin-top: 0;
  }
  strong {
    font-family: 'Podkova', serif;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: ${Spaces.BaseMargin};
    margin-bottom: ${Spaces.BaseMargin};
  }
`;

export const StatBar = styled.span`
  width: 100%;
  height: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  position: relative;
  &::after {
    content: '';
    background-color: #069;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.stat}%;
    animation: ${progressAnimate} 2s ease-in-out;
  }
  &.grass {
    &:after {
      background-color: #9bcc50;
    }
  }
  &.fire {
    &:after {
      background-color: #fd7d24;
    }
  }
  &.water {
    &:after {
      background-color: #00c6fb;
    }
  }
`;
