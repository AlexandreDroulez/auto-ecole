import React from 'react';
import {
  ContainerFooter,
  Star,
  ContainerStar,
  LinkFooter,
  LogoFooter,
  FlagFrench,
  ContainerAgrement,
} from './styledComponents';
import star from '../../../assets/svg/star.svg';
import flagFrench from '../../../assets/svg/flagFrench.svg';

const Footer = () => {
  return (
    <ContainerFooter>
      <LogoFooter>Cepr</LogoFooter>
      <ContainerStar>
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <LinkFooter href="https://www.vroomvroom.fr/auto-ecoles/val-d-oise/franconville/cepr-95">
          5/5 sur www.vroomvroom.fr
        </LinkFooter>
      </ContainerStar>
      <ContainerAgrement>
        Numéro d&apos;agrément : 030038408370537
        <FlagFrench src={flagFrench} />
      </ContainerAgrement>
    </ContainerFooter>
  );
};

export default Footer;
