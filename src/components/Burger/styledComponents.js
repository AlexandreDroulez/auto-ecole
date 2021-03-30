import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const ContainerBurger = styled.div`
  display: none;
  ${deviceMedia.tablet`
    display:block;
    cursor: pointer;
    position: relative;
    width: 54px;
    height: 54px;
    transition: transform 0.5s;
  `};
`;

export const IconSpan = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 22px;
  height: 2px;
  transition: background 0.5s;
  background-color: ${props => (props.show ? '' : props.theme.palette.lightGrey)};

  :after {
    background-color: ${props => props.theme.palette.lightGrey};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => (props.show ? 'translateY(0) rotate(-45deg)' : 'translateY(6px)')};
    display: block;
    width: 22px;
    height: 2px;
    transition: transform 0.5s;
  }
  :before {
    background-color: ${props => props.theme.palette.lightGrey};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 22px;
    height: 2px;
    transition: transform 0.5s;
    transform: ${props => (props.show ? 'translateY(0) rotate(45deg)' : 'translateY(-6px)')};
  }
`;
