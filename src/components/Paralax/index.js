import React from 'react';
import auto from '../../../assets/jpeg/thumb-1920-717700.jpg';
import { ContainerParralax, TitleParalax } from './styledComponents';

const Paralax = () => {
  return (
    <ContainerParralax bgImage={auto} bgImageAlt="the dog" strength={-500}>
      <TitleParalax>Une Auto Ecole à votre écoute</TitleParalax>
    </ContainerParralax>
  );
};

export default Paralax;
