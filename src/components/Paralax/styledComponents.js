import styled from 'styled-components';
import { Parallax } from 'react-parallax';

export const ContainerParralax = styled(Parallax)``;

export const TitleParalax = styled(Parallax)`
  height: calc(100vh - 70px);
  font-size: 4rem;
  color: ${props => props.theme.palette.orange};
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
