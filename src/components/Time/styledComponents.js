import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerTime = styled.div`
  margin: 1rem;
`;

export const DayWithTime = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const Day = styled.div`
  font-weight: bold;
  color: ${props => props.theme.palette.orange};
  min-width: 80px;
`;

export const Hours = styled.div`
  font-weight: bold;
  color: ${props => props.theme.palette.lightGrey};
  text-align: end;
  min-width: 100px;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.palette.orange};
  margin: 1rem;
`;
