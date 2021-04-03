import React from 'react';
import { ButtonCustom, ContainerButton } from './styledComponents';

const Button = ({
  onClick,
  children,
  size,
  color,
  bgColor,
  borderColor,
  hoverOff,
  type,
  height,
  borderRadius,
  fontWeight,
  textAlign,
  margin,
}) => {
  return (
    <ContainerButton textAlign={textAlign} margin={margin}>
      <ButtonCustom
        fontWeight={fontWeight}
        onClick={onClick}
        type={type}
        size={size}
        height={height}
        borderRadius={borderRadius}
        color={color}
        bgColor={bgColor}
        borderColor={borderColor}
        hoverOff={hoverOff}
      >
        {children}
      </ButtonCustom>
    </ContainerButton>
  );
};

export default Button;
