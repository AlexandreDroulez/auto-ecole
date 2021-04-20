import styled from 'styled-components';

export const ContainerGenericInput = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: 0.5s;
  position: absolute;
  z-index: 3;
  left: 21px;
  top: 22px;
  font-weight: bold;
  cursor: text;
`;

export const StyledImage = styled.img`
  transition: 0.5s;
  margin: 0 2rem 0 0;
  cursor: pointer;
  width: 17px;
  :hover {
    transform: scale(1.1) translateX(-2px);
  }
`;

export const StyledInput = styled.input`
  position: relative;
  z-index: 4;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${props => props.theme.palette.orange};
  margin: 1rem 0;
  padding: 0.5rem;
  width: 100%;

  ::placeholder {
    opacity: 0;
  }

  :focus {
    outline: none;
  }

  :focus + ${StyledLabel}, :not(:placeholder-shown) + ${StyledLabel} {
    outline: none;
    top: 0px;
    left: 7px;
  }
`;
