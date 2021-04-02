import React from 'react';
import { ContainerImageAndText, Image, ContainerText } from './styledComponents';

const ImageAndText = ({ flexDirectonDesktopReverse, flexDirectonPhoneReverse, src, children }) => {
  return (
    <ContainerImageAndText
      flexDirectonPhoneReverse={flexDirectonPhoneReverse}
      flexDirectonDesktopReverse={flexDirectonDesktopReverse}
    >
      <Image src={src} />
      <ContainerText>{children}</ContainerText>
    </ContainerImageAndText>
  );
};

export default ImageAndText;
