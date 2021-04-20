import React from 'react';
import {
  ContainerLandingHomeBody,
  Subtitle,
  Title,
  Text,
  ContainerForTime,
  ContainerBodyCard,
  ContainerBodyOpinion,
  MainOpinionTitle,
  ContainerBodyOpinionWithTitle,
} from './styledComponents';
import pereFourras from '../../../../../assets/jpeg/PereFouras.jpeg';
import ImageAndText from '../../../ImageAndText';
import Button from '../../../Button';
import Time from '../../../Time';
import Card from '../../../Card';
import Opinion from '../../../Opinion';

const LandingHomeBody = () => {
  return (
    <ContainerLandingHomeBody>
      <ImageAndText flexDirectonDesktopReverse src={pereFourras}>
        <Title>Code de la Route</Title>
        <Subtitle>
          Révisez votre code partout et en illimité grâce à notre formation complète en ligne !
        </Subtitle>
        <Text>
          2 000 questions d&apos;entraînement, cours et séries thématiques conformes à l&apos;examen
          2020 pour obtenir votre code de la route rapidement.
        </Text>
        <Button margin="2rem auto 0 auto" textAlign="center">
          Contact-nous
        </Button>
      </ImageAndText>

      <ImageAndText src={pereFourras}>
        <Title>Permis de Conduire</Title>
        <Subtitle>
          Apprenez à conduire près de chez vous selon votre emploi du temps en choisissant
          l’enseignant de la conduite qui vous accompagnera tout au long de votre formation.
        </Subtitle>
        <Text>
          Obtenez votre permis grâce à la pédagogie Ornikar : plan de formation personnalisé, livret
          pédagogique et accompagnement par notre équipe.
        </Text>
      </ImageAndText>
      <ContainerForTime>
        <Time title="Conduite" />
        <Time title="Bureau" />
      </ContainerForTime>
      <ContainerBodyCard>
        <Card
          src={pereFourras}
          title="Nos Enseignants"
          text="Ils seront mettres à profit leurs années afin de garantir une pedagogie adapte a votre
        profils.Parce aue la conduite n'est aps seulement lie a la techniaue mais aussi a la
        psychologie"
        />
        <Card
          src={pereFourras}
          title="Nos Secretaires"
          text="Ils seront mettres à profit leurs années afin de garantir une pedagogie adapte a votre
        profils.Parce aue la conduite n'est aps seulement lie a la techniaue mais aussi a la
        psychologie"
        />
        <Card
          src={pereFourras}
          title="Nos Eleves"
          text="Jeunes ou moins jeune ils viennent pour decouvrir de nouvele chose ou pour trouver un nouveau travaille avec pour chacun d'entre eux des peru et des doutes concernant l'apprentissage de la conduite.Un seul constat ils repartent tous heureux avec le permis en poche"
        />
      </ContainerBodyCard>
      <ContainerBodyOpinionWithTitle>
        <MainOpinionTitle>Ce qu’en disent nos élèves...</MainOpinionTitle>
        <ContainerBodyOpinion>
          <Opinion
            title="Jules Droulez"
            text="Très bonne expérience! Au niveau du code les cours sont clair et nous aident vraiment à apprendre comprendre et surtout retenir à l'aide de petites astuces. Les vidéos..."
          />
          <Opinion
            title="Maxence Droulez"
            text="Parfait ! Procédé rapide facile et efficace je recommande surtout pendant cette période..."
          />
          <Opinion title="Alexandre Droulez" text="Cours adapté et date d'examen a la demande..." />
        </ContainerBodyOpinion>
      </ContainerBodyOpinionWithTitle>
    </ContainerLandingHomeBody>
  );
};

export default LandingHomeBody;
