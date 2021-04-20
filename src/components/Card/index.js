import React from 'react';
import { ContainerCard, ImageCard, TextCard, TitleCard } from './styledComponents';

const Card = ({ title, text, src }) => {
  return (
    <ContainerCard>
      <ImageCard src={src} />
      <TitleCard>{title}</TitleCard>
      <TextCard>{text}</TextCard>
    </ContainerCard>
  );
};

export default Card;
