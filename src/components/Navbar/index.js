import React, { useState } from 'react';
import {
  ContainerLinksDesktop,
  ContainerLinksTablet,
  ContainerNavbar,
  LinkForBurger,
  ContainerForWidth,
  Logo,
} from './styledComponents';
import LinksWithHover from '../LinksWithHover';
import Burger from '../Burger';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ContainerNavbar show={show}>
        <ContainerForWidth>
          <Logo>Cepr</Logo>
          <ContainerLinksDesktop>
            <LinksWithHover href="www.google.com">Tarifs</LinksWithHover>
            <LinksWithHover href="www.google.com">Horaires</LinksWithHover>
          </ContainerLinksDesktop>
          <Burger setShow={setShow} show={show} />
        </ContainerForWidth>
      </ContainerNavbar>
      <ContainerLinksTablet show={show}>
        <LinkForBurger href="/" onClick={() => setShow(false)}>
          Tarifs
        </LinkForBurger>
        <LinkForBurger href="/" onClick={() => setShow(false)}>
          Horaires
        </LinkForBurger>
      </ContainerLinksTablet>
    </>
  );
};

export default Navbar;
