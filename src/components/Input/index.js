import React, { useState, useRef } from 'react';
import { ContainerGenericInput, StyledInput, StyledLabel, StyledImage } from './styledComponents';
import show from '../../../assets/svg/eye.svg';
import notShow from '../../../assets/svg/show.svg';

const GenericInput = ({
  label,
  name,
  type = 'text',
  required,
  minLength,
  maxLength,
  placeholder,
  useForm,
  id,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ContainerGenericInput>
      <StyledInput
        type={showPassword ? 'text' : type}
        id={id}
        name={name}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        {...useForm.register(`${name}`, { required, maxLength: 80 })}
      />
      <StyledLabel htmlFor={name}>
        {label}
        {type === 'password' && (
          <StyledImage
            src={showPassword ? show : notShow}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </StyledLabel>
    </ContainerGenericInput>
  );
};

export default GenericInput;
