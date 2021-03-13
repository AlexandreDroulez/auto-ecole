import React from 'react'
import { ContainerLandingHome } from './styledComponents'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import LandingHomeBody from './Body'

const LandingHome = () => {
  return (
    <ContainerLandingHome>
      <Navbar />
      <LandingHomeBody />
      <Footer />
    </ContainerLandingHome>
  )
}

export default LandingHome
