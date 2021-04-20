import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerForm = styled.form`
  border: 1px solid ${props => props.theme.palette.orange};
  border-radius: 20px;
  width: 450px;
  margin: 2rem auto;
  padding: 1rem;

  ${deviceMedia.tablet`
    width: 300px;
  `}
`;
