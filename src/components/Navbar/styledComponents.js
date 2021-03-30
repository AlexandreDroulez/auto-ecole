import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerNavbar = styled.nav`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.palette.darkBlue};
`;

export const ContainerLinksDesktop = styled.div`
  display: flex;
  align-items: center;
  ${deviceMedia.tablet`
    display: none;
  `};
`;
export const ContainerLinksTablet = styled.div`
  display: none;

  ${deviceMedia.tablet`
      display: flex;
      height: calc(100vh - 86px);
      width: 100%;
      height: ;
      position: absolute;
      left: ${props => (props.show ? '0px' : '-1000px')};
      transition: 1s;
      flex-direction: column;
      text-align: center;
      background: ${props => props.theme.palette.lightGrey};
  `};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  color: ${props => props.theme.palette.lightGrey};
  font-weight: bold;
`;
export const LinkForBurger = styled.a`
  color: ${props => props.theme.palette.darkBlue};
  font-weight: bold;
  margin-top: 1rem;
`;

export const ContainerForWidth = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
