import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerFooter = styled.nav`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.palette.darkBlue};
  color: ${props => props.theme.palette.lightGrey};
  ${deviceMedia.tablet`
   text-align: center;
  `}
`;

export const ContainerStar = styled.div`
  margin: 2rem auto 0 auto;
  display: flex;
  align-items: center;
  ${deviceMedia.tablet`
      justify-content: center;  
  `}
`;

export const Star = styled.img`
  width: 1%;
  ${deviceMedia.tablet`
    width: 5%;
  `}
`;

export const FlagFrench = styled.img`
  width: 1%;
  margin: 0 0 0 1rem;
  ${deviceMedia.tablet`
    width: 5%;
  `}
`;

export const LinkFooter = styled.a`
  margin: 0 1rem;
`;

export const LogoFooter = styled.div`
  color: ${props => props.theme.palette.lightGrey};
  font-weight: bold;
  font-size: 3rem;
  ${deviceMedia.tablet`
      text-align: center;
  `}
`;

export const ContainerAgrement = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem auto 0 auto;
  ${deviceMedia.tablet`
      justify-content: center;
  `}
`;
