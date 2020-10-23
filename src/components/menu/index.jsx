import React, { useCallback } from 'react';
import { IoMdExit } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import Profile from './Profile';
import { Container, ButtonContainer, ExitContainer, Exit } from './styles';

import { SellersRoutes } from '../../routes/config';

const Sidebar = ({ open }) => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const handleLogOut = useCallback(() => {
    signOut();

    history.push('/login');
  }, []);

  return (
    <Container>
      <Profile />
      {SellersRoutes.map((route, i) => {
        if (!route.menu) {
          return '';
        }
        const IconTeste = route.icon;
        return (
          <ButtonContainer key={i} onClick={() => history.push(route.path)}>
            <IconTeste size={24} className={route.icon} />
            <strong>{route.title}</strong>
          </ButtonContainer>
        );
      })}
      <ExitContainer onClick={handleLogOut}>
        <IoMdExit size={24} stroke="0" />
        <Exit>Sair</Exit>
      </ExitContainer>
    </Container>
  );
};

export default Sidebar;
