import React from 'react';
import { ContainerLandingHome } from './styledComponents';
import Footer from '../../Footer';
import LandingHomeBody from './Body';
import Navbar from '../../Navbar';

const LandingHome = () => {
  return (
    <ContainerLandingHome>
      <Navbar />
      <LandingHomeBody />
      <Footer />
    </ContainerLandingHome>
  );
};

export default LandingHome;
