import styled from 'styled-components';

export const ContainerCard = styled.div`
  max-width: 300px;
`;
export const TitleCard = styled.h3`
  text-align: center;
  color: ${props => props.theme.palette.orange};
`;
export const ImageCard = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 300px;
`;
export const TextCard = styled.div`
  color: ${props => props.theme.palette.lightGrey};
`;
