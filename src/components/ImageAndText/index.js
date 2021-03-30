import React from 'react';
import { ContainerImageAndText, Image, Text } from './styledComponents';

const ImageAndText = ({ reverse }) => {
  return (
    <ContainerImageAndText reverse={reverse}>
      <Image>Il va faloir que je code cette image rapidement</Image>
      <Text>
        bla blablablab bla bla bla blab la bla blablablab bla bla bla blab la bla blablablab bla bla
        bla blab la bla blablablab bla bla bla blab labla blablablab bla bla bla blab la bla
        blablablab bla bla bla blab la bla blablablab bla bla bla blab la
      </Text>
    </ContainerImageAndText>
  );
};

export default ImageAndText;
