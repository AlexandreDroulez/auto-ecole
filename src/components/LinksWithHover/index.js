import React, { useState } from 'react';
import { LinkNavBar } from './styledComponents';

const LinksWithHover = ({ children, href }) => {
  const [show, setShow] = useState(null);
  return (
    <LinkNavBar
      show={show}
      href={href}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
    </LinkNavBar>
  );
};

export default LinksWithHover;
