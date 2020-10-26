import React, { useCallback } from 'react';
import { IoMdExit } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import Profile from './Profile';
import { Container, ButtonContainer, ExitContainer, Exit } from './styles';

import { SellersRoutes, CustomerRoutes } from '../../routes/config';

const Sidebar = ({ open }) => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const handleLogOut = useCallback(() => {
    signOut();

    history.push('/login');
  }, [history, signOut]);

  const handleVerifyRole = useCallback((role) => {
    switch (role) {
      case 'customer':
        return CustomerRoutes 
      case 'seller':
        return SellersRoutes
      default:
        break
    }
  },[])

  return (
    <Container>
      <Profile />
      {handleVerifyRole(user.role).map((route, i) => {
        if (!route.menu) {
          return '';
        }
        const Icon = route.icon;
        return (
          <ButtonContainer key={i} onClick={() => history.push(route.path)}>
            <Icon size={24} className={route.icon} />
            <strong>{route.title}</strong>
          </ButtonContainer>
        );
      })}
      <ExitContainer onClick={handleLogOut}>
        <IoMdExit size={24} />
        <Exit>Sair</Exit>
      </ExitContainer>
    </Container>
  );
};

export default Sidebar;
