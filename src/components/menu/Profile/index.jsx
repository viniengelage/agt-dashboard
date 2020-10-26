import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../hooks/auth';

import { Container, ProfileImg } from './styles';

import logo from '../../../assets/avatar.png';

const Profile = (props) => {
  const { user } = useAuth();
  const history = useHistory()

  return (
    <Container>
      <ProfileImg src={logo} alt="Logo user" onClick={()=>history.push('/profile')}/>
      <p>{user.email}</p>
      <strong>{user.role}</strong>
    </Container>
  );
};

export default Profile;
