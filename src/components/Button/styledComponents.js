import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerButton = styled.div`
  margin: ${props => (props.margin ? props.margin : '0 0 0 1rem;')};
  color: ${props => {
    if (props.color) return props.color;
    return props.theme.palette.white;
  }};
  text-align: ${props => props.textAlign && props.textAlign};
  ${deviceMedia.tablet`
     margin: ${props => (props.margin ? props.margin : '0 0 0 1rem;')} margin: 1rem 0 0 0;    
  `};
`;

export const ButtonCustom = styled.button`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  line-height: 1.5;
  font-size: ${props => {
    if (props.height === 'xs') return '14px';
    return '16px';
  }};
  font-weight: ${props => {
    if (props.fontWeight) return props.fontWeight;
    return '400';
  }};
  height: ${props => {
    if (props.height === 'xs') return '2.3rem ';
    return '50px';
  }};
  border-radius: ${props => {
    if (props.borderRadius === 'xs') return '7px';
    return '12px';
  }};
  transition: 0.3s;
  width: ${props => {
    if (props.size === 'xl') return '350px';
    if (props.size === 'xs') return '195px';
    if (props.size === 'tiny') return '150px';
    return '225px';
  }};
  color: ${props => {
    if (props.color) return props.color;
    return props.theme.palette.white;
  }};
  background-color: ${props => {
    if (props.bgColor) return props.bgColor;
    return props.theme.palette.orange;
  }};
  border: 1px solid
    ${props => {
      if (props.borderColor) return props.borderColor;
      return props.theme.palette.orange;
    }};
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.9;
    transform: scale(1.1);
    ${props => {
      if (!props.hoverOff) {
        return `background-color: ${props.theme.palette.white};
                color: ${props.theme.palette.orange};
                border: 1px solid ${props.theme.palette.orange};
                `;
      }
      return null;
    }}
  }
  ${deviceMedia.phone`
  width: ${props => {
    if (props.size === 'xl') return '225px';
    return null;
  }};
  `}
`;
