import React from 'react';
import { ContainerBurger, IconSpan } from './styledComponents';

const Burger = ({ setShow, show }) => {
  return (
    <ContainerBurger show={show} onClick={() => setShow(!show)}>
      <IconSpan show={show} />
    </ContainerBurger>
  );
};

export default Burger;
