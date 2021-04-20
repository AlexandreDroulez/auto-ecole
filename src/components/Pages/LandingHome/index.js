import React from 'react';
import { ContainerLandingHome } from './styledComponents';
import Footer from '../../Footer';
import LandingHomeBody from './Body';
import Navbar from '../../Navbar';
import Paralax from '../../Paralax';
import { linksNavbar } from '../../../../enums/links/navbar';

const LandingHome = () => {
  return (
    <ContainerLandingHome>
      <Navbar linksNavbar={linksNavbar} />
      <Paralax />
      <LandingHomeBody />
      <Footer />
    </ContainerLandingHome>
  );
};

export default LandingHome;
