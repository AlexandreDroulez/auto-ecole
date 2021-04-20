import React from 'react';
import { ContainerOpinion, TextOpinion, TitleOpinion } from './styledComponents';

const Opinion = ({ title, text }) => {
  return (
    <ContainerOpinion>
      <TitleOpinion>{title}</TitleOpinion> <TextOpinion>{text}</TextOpinion>
    </ContainerOpinion>
  );
};

export default Opinion;
