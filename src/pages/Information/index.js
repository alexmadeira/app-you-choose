import React, { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

import iconImg from '~/assets/imgs/favicon-16x16.png';
import { useFatch } from '~/hooks/useFatch';

import {
  Container,
  Back,
  ImageBox,
  Image,
  StatsData,
  Name,
  Details,
  Detail,
  Stat,
  StatBar,
} from './styles';

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Information() {
  const { slug } = useParams();

  const { data } = useFatch(`/pokemon/${slug}/`);

  useEffect(() => {
    document.title = data
      ? data.name.charAt(0).toUpperCase() + data.name.slice(1)
      : 'Carregando...';

    const icon = document.getElementById('icon');
    icon.href = data
      ? data.sprites.other['official-artwork'].front_default
      : iconImg;
  }, [data]);

  if (!data) {
    return null;
  }
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <ImageBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={data.types[0].type.name}
      >
        <Image
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          src={data.sprites.other['official-artwork'].front_default}
          alt={data.name}
        />
      </ImageBox>
      <StatsData>
        <Details variants={stagger}>
          <Back variants={fadeInUp}>
            <Link to="/">
              <BsArrowLeft /> Voltar
            </Link>
          </Back>
          <Name variants={fadeInUp}>
            <span>#{`00${data.id}`.slice(-3)}</span> {data.name}
          </Name>
          <Detail variants={fadeInUp}>
            <strong>Height</strong>
            <p>{data.height / 10} M</p>
          </Detail>
          <Detail variants={fadeInUp}>
            <strong>Weight</strong>
            <p>{data.weight / 10} Kg</p>
          </Detail>
          <Detail variants={fadeInUp}>
            <strong>Habilidades</strong>
            {data.abilities.map(({ ability }) => (
              <p key={ability.name}>{ability.name}</p>
            ))}
          </Detail>

          {data.stats.map(({ stat, base_stat }) => (
            <Stat key={stat.name} variants={fadeInUp}>
              <strong>{stat.name}</strong>
              <StatBar
                className={data.types[0].type.name}
                stat={base_stat <= 100 ? base_stat : 100}
              />
            </Stat>
          ))}
        </Details>
      </StatsData>
    </Container>
  );
}

export default Information;
