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
import Button from '../Button';
import { ContainerButton } from '../Button/styledComponents';

const Navbar = ({ linksNavbar }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ContainerNavbar show={show}>
        <ContainerForWidth>
          <Logo>
            <a href="/">Cepr</a>
          </Logo>
          <ContainerLinksDesktop>
            {linksNavbar &&
              Object.values(linksNavbar).map((link, index) => (
                <LinksWithHover key={index} href={link.href}>
                  {link.name}
                </LinksWithHover>
              ))}
            <ContainerButton>
              <Button fontWeight="600" size="tiny" height="xs">
                Connexion
              </Button>
            </ContainerButton>
          </ContainerLinksDesktop>
          <Burger setShow={setShow} show={show} />
        </ContainerForWidth>
      </ContainerNavbar>
      <ContainerLinksTablet show={show}>
        {linksNavbar &&
          Object.values(linksNavbar).map((link, index) => (
            <LinkForBurger key={index} href={link.href} onClick={() => setShow(false)}>
              {link.name}
            </LinkForBurger>
          ))}
        <Button margin="1rem 0" fontWeight="600" size="tiny" height="xs">
          Connexion
        </Button>
      </ContainerLinksTablet>
    </>
  );
};

export default Navbar;
