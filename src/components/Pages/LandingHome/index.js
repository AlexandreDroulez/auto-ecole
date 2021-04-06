import React from 'react';
import { ContainerLandingHome } from './styledComponents';
import Footer from '../../Footer';
import LandingHomeBody from './Body';
import Navbar from '../../Navbar';
import Paralax from '../../Paralax';

const LandingHome = () => {
  return (
    <ContainerLandingHome>
      <Navbar />
      <Paralax />
      <LandingHomeBody />
      <Footer />
    </ContainerLandingHome>
  );
};

export default LandingHome;
