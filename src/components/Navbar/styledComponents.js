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
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      width: 100%;
      transition: 1s;
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
  transition: 1s;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
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
