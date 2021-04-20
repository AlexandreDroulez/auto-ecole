import React from 'react';
import Navbar from '../../Navbar';
import { linksAdminNavbar } from '../../../../enums/links/admin/index';
import LoginForm from '../../Form/Login';
import SignIn from '../../Form/SignIn';

const LandingAdmin = () => {
  return (
    <>
      <Navbar linksNavbar={linksAdminNavbar} />
      <LoginForm />
      <SignIn />
    </>
  );
};

export default LandingAdmin;
