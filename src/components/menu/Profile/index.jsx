import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../hooks/auth';

import { Container, ProfileImg } from './styles';

import logo from '../../../assets/avatar.png';

const Profile = (props) => {
  const { user, role } = useAuth();
  const history = useHistory()

  return (
    <Container>
      <ProfileImg src={logo} alt="Logo user" onClick={()=>history.push('/profile')}/>
      <p>{user.name}</p>
      <strong>{role}</strong>
    </Container>
  );
};

export default Profile;
