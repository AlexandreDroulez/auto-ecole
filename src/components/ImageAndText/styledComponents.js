import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerImageAndText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.reverse ? 'row' : 'row-reverse')};
  ${deviceMedia.tablet`
        flex-direction: ${props => (props.reverse ? 'column' : 'column-reverse;')};
  `};
`;
export const Image = styled.div`
  width: 50%;
  background-color: aqua;
  ${deviceMedia.tablet`
        width: 100%;
  `};
`;
export const Text = styled.div`
  width: 50%;
  background-color: olive;
  ${deviceMedia.tablet`
        width: 100%;
  `};
`;
