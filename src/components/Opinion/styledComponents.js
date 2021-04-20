import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerOpinion = styled.article`
  border: 1px solid ${props => props.theme.palette.lightGrey};
  border-radius: 20px;
  width: 300px;
  height: 200px;
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  ${deviceMedia.tablet`
    margin: 1rem auto 
  `}
`;

export const TitleOpinion = styled.h3`
  text-align: center;
  color: ${props => props.theme.palette.orange};
  margin-bottom: 1rem;
`;
export const TextOpinion = styled.div`
  color: ${props => props.theme.palette.lightGrey};
`;
