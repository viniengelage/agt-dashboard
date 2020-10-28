import React, { useCallback } from 'react';
import { IoMdExit } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import {IconBase} from 'react-icons'

import Profile from './Profile';
import { Container, ButtonContainer, ExitContainer, Exit } from './styles';

import { SellersRoutes, ManagerRoutes, AdminRoutes } from '../../routes/config';

const Sidebar = ({ open }) => {
  const { role, signOut } = useAuth();
  const history = useHistory();

  const handleLogOut = useCallback(() => {
    signOut();

    history.push('/login');
  }, [history, signOut]);

  const handleVerifyRole = useCallback((roleUser) => {
    switch (roleUser) {
      case 'manager':
        return ManagerRoutes 
      case 'seller':
        return SellersRoutes
      case 'admin':
        return AdminRoutes
      default:
        break
    }
  },[])

  let Icon = '';

  return (
    <Container>
      <Profile />
      {handleVerifyRole(role).map(route => {
      console.log('sadsadsadsadasd')
      return(
          <ButtonContainer onClick={() => history.push(route.path)}>
            <IconBase className={route.icon} size={26} color="#fff" />
            <strong>{route.title}</strong>
          </ButtonContainer>
      )})}
      
      <ExitContainer onClick={handleLogOut}>
        <IoMdExit size={24} />
        <Exit>Sair</Exit>
      </ExitContainer>
    </Container>
  );
};

export default Sidebar;
