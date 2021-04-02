import React from 'react';
import { ContainerLandingHomeBody, Subtitle, Title } from './styledComponents';
import pereFourras from '../../../../../assets/jpeg/PereFouras.jpeg';
import ImageAndText from '../../../ImageAndText';
import Button from '../../../Button';

const LandingHomeBody = () => {
  return (
    <ContainerLandingHomeBody>
      <ImageAndText flexDirectonDesktopReverse src={pereFourras}>
        <Title>Code de la Route</Title>
        <Subtitle>
          Révisez votre code partout et en illimité grâce à notre formation complète en ligne !
        </Subtitle>
        <p>
          2 000 questions d&apos;entraînement, cours et séries thématiques conformes à l&apos;examen
          2020 pour obtenir votre code de la route rapidement.
        </p>
        <Button>test</Button>
      </ImageAndText>
      <ImageAndText src={pereFourras}>
        <Title>Permis de Conduire</Title>
        <Subtitle>
          Apprenez à conduire près de chez vous selon votre emploi du temps en choisissant
          l’enseignant de la conduite qui vous accompagnera tout au long de votre formation.
        </Subtitle>
        <p>
          Obtenez votre permis grâce à la pédagogie Ornikar : plan de formation personnalisé, livret
          pédagogique et accompagnement par notre équipe.
        </p>
      </ImageAndText>
    </ContainerLandingHomeBody>
  );
};

export default LandingHomeBody;
