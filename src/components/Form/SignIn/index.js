import React from 'react';
import { useForm } from 'react-hook-form';

import { ContainerForm } from '../styledComponents';
import GenericInput from '../../Input';
import Button from '../../Button';

const SignIn = () => {
  const reactHookForm = useForm();
  const onSubmit = data => console.log(data);

  return (
    <ContainerForm onSubmit={reactHookForm.handleSubmit(onSubmit)}>
      <GenericInput
        id="email_sign_in"
        label="Email"
        placeholder="Email"
        name="email"
        type="email"
        useForm={reactHookForm}
      />
      <GenericInput
        id="password_sign_in"
        label="Mot De Passe"
        placeholder="Mot De Passe"
        name="password"
        type="password"
        useForm={reactHookForm}
      />
      <Button margin="1rem" textAlign="center" type="submit">
        Valider
      </Button>
    </ContainerForm>
  );
};

export default SignIn;
