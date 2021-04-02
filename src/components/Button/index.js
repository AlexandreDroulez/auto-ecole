import React from 'react';
import { ButtonCustom } from './styledComponents';

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
}) => {
  return (
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
  );
};

export default Button;
