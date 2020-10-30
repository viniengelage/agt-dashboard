import React, { useCallback, useState } from 'react';
import { IoMdMenu, IoMdPerson } from 'react-icons/io';
import CheeseburgerMenu from 'cheeseburger-menu';
import { useHistory } from 'react-router-dom';

import Menu from '../menu';

import { Container, Logo } from './styles';

import logo from '../../assets/agt-logo-branco.svg';

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory()

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  },[])

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  },[])

  function renderSize(windowWidth){
    if(windowWidth <= 1920){
      return 360
    }
    if(windowWidth <= 1400){
      return 300
    }
    if(windowWidth >= 700){
      return 220
    }
  }
  return (
    <>
      <Container>
        <IoMdMenu size={36} onClick={openMenu} />
        <Logo src={logo} alt="logo-agora-tem" onClick={()=>history.push('/home')} />
        <IoMdPerson size={36} />
      </Container>
      <CheeseburgerMenu isOpen={menuOpen} closeCallback={closeMenu} width={320}>
        <Menu />
      </CheeseburgerMenu>
    </>
  );
};

export default Header;
