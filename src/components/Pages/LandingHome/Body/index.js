import React from 'react';
import {
  ContainerLandingHomeBody,
  ContainerFirstSection,
  ContainerSecondSection,
  ContainerThirdSection,
} from './styledComponents';
import ImageAndText from '../../../ImageAndText';

const LandingHomeBody = () => {
  return (
    <ContainerLandingHomeBody>
      <ImageAndText reverse />
      <ContainerFirstSection>ContainerFirstSection</ContainerFirstSection>
      <ContainerSecondSection>ContainerSecondSection</ContainerSecondSection>
      <ContainerThirdSection>ContainerThirdSection</ContainerThirdSection>
    </ContainerLandingHomeBody>
  );
};

export default LandingHomeBody;
