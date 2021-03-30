import styled, { css, keyframes } from 'styled-components';

const AnimationLinkOn = keyframes`
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const AnimationLinkOff = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
`;

const complexMixinAnimationLinkOn = css`
  animation: ${AnimationLinkOn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const complexMixinAnimationLinkOff = css`
  animation: ${AnimationLinkOff} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const LinkNavBar = styled.a`
  position: relative;
  overflow: hidden;
  margin-left: 1rem;
  color: ${props => props.theme.palette.lightGrey};
  transition: 0.4s;
  :before {
    border: 1px solid ${props => props.theme.palette.lightGrey};
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    ${props => props.show === true && complexMixinAnimationLinkOn};
    ${props => props.show === false && complexMixinAnimationLinkOff};
  }
  :hover {
    transform: scale(1.2);
  }
`;
