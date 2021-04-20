import React from 'react';
import { useForm } from 'react-hook-form';

import { ContainerForm } from '../styledComponents';
import GenericInput from '../../Input';
import Button from '../../Button';

const LoginForm = () => {
  const reactHookForm = useForm();
  const onSubmit = data => console.log(data);

  return (
    <ContainerForm onSubmit={reactHookForm.handleSubmit(onSubmit)}>
      <GenericInput label="Nom" placeholder="Nom" name="last_name" useForm={reactHookForm} />
      <GenericInput label="Prénom" placeholder="Prénom" name="first_name" useForm={reactHookForm} />
      <GenericInput
        id="birthday_login_form"
        label="Date de naissance"
        placeholder="Date"
        name="date_of_birth"
        useForm={reactHookForm}
      />
      <GenericInput
        id="adresse_login"
        label="Adresse"
        placeholder="Adresse"
        name="adress"
        useForm={reactHookForm}
        required
      />
      <GenericInput
        id="password_login"
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

export default LoginForm;
