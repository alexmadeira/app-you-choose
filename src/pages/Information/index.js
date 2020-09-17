import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useFatch } from '~/hooks/useFatch';

import {
  Container,
  ImageBox,
  Image,
  StartsData,
  Name,
  Details,
  Detail,
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
  }, [data]);

  if (!data) {
    return null;
  }
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <ImageBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Image
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          src={data.sprites.other['official-artwork'].front_default}
          alt={data.name}
        />
      </ImageBox>
      <StartsData variants={stagger}>
        <Link to="/">Voltar</Link>
        <Name variants={fadeInUp}>
          <span>#{`00${data.id}`.slice(-3)}</span> {data.name}
        </Name>
        <Details variants={stagger}>
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
        </Details>
      </StartsData>
    </Container>
  );
}

export default Information;
