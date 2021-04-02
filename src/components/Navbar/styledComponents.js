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
      width: 100%;
      transition: 1s;
      height: calc(100vh - 86px);
      position: absolute;
      left: ${props => (props.show === true ? '0px' : '-1000px')};
      transition: 1s;
      flex-direction: column;
      text-align: center;
      background: ${props => props.theme.palette.lightGrey};
  `};
  ${deviceMedia.phone`
left: ${props => (props.show === true ? '0px' : '-600px')};
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
export const ContainerButton = styled.div`
  margin: 0 0 0 1rem;
  ${deviceMedia.tablet`
      margin: 1rem 0 0 0;
  `};
`;
