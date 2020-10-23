import React, { useCallback, useState } from 'react';
import { IoMdMenu, IoMdPerson } from 'react-icons/io';
import CheeseburgerMenu from 'cheeseburger-menu';

import Menu from '../menu';

import { Container } from './styles';

import logo from '../../assets/agt-logo-branco.svg';

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <>
      <Container>
        <IoMdMenu size={36} onClick={openMenu} />
        <img src={logo} alt="logo-agora-tem" />
        <IoMdPerson size={36} />
      </Container>

      <CheeseburgerMenu isOpen={menuOpen} closeCallback={closeMenu}>
        <Menu />
      </CheeseburgerMenu>
    </>
  );
};

export default Header;
