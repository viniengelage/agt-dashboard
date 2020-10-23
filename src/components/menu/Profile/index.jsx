import React from 'react';
import { IoMdExit } from 'react-icons/io';

import logo from '../../../assets/avatar.png';
import { useAuth } from '../../../hooks/auth';

import { Container, ExitContainer, Exit } from './styles';

const Profile = (props) => {
  const { user } = useAuth();

  return (
    <Container>
      <img src={logo} alt="Logo user" />
      <p>{user.email}</p>
      <strong>{user.role}</strong>
    </Container>
  );
};

export default Profile;
