import styled from 'styled-components';
import { deviceMedia, sizes } from '../../../../../styles/helper';

export const ContainerLandingHomeBody = styled.div`
  max-width: ${sizes.largeDesktop}px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 4rem;
  line-height: 1.3;
  color: ${props => props.theme.palette.orange};
  ${deviceMedia.tablet`
    font-size: 3rem;
  `}
`;

export const Subtitle = styled.div`
  font-size: 2rem;
  margin: 1rem 0 0 0;
  color: ${props => props.theme.palette.orange};
  ${deviceMedia.tablet`
    font-size: 1.5rem;
  `}
`;

export const Text = styled.div`
  margin: 1rem 0 0 0;
  color: ${props => props.theme.palette.lightGrey};
`;

export const ContainerForTime = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${deviceMedia.tablet`
    display: block;
  `}
`;
export const ContainerBodyCard = styled.div`
  display: flex;
  margin: 4rem auto;

  justify-content: space-between;
  ${deviceMedia.tablet`
    display: block;
  `}
`;

export const ContainerBodyOpinion = styled.div`
  display: flex;
  justify-content: space-between;
  ${deviceMedia.tablet`
    flex-direction: column;  
  `}
`;

export const MainOpinionTitle = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: ${props => props.theme.palette.orange};
`;
export const ContainerBodyOpinionWithTitle = styled.div`
  margin: 4rem auto;
`;
