import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerImageAndText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;
  flex-direction: ${props => (props.flexDirectonDesktopReverse ? 'row-reverse' : 'row')};
  ${deviceMedia.tablet`
        flex-direction: ${props => (props.flexDirectonPhoneReverse ? 'column-reverse' : 'column;')};
        margin: 4rem 1rem;
        text-align:center;
       
  `};
`;
export const Image = styled.img`
  width: 50%;
  margin: 0 1rem;
  border-radius: 20px;
  ${deviceMedia.tablet`
        width: 100%;
  `};
`;

export const ContainerText = styled.div`
  margin: 0 1rem;
  width: 100%;
  ${deviceMedia.tablet`
        padding: 0;
  `};
`;
