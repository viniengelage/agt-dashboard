import React from "react";
import { slide as Menu } from "react-burger-menu";

import logo from '../../assets/agt-logo.svg'
import {Container} from './styles'

const Sidebar = props => {
  return (
    <Container>
      <img src={logo}/>
    </Container>
  );
};

export default Sidebar;
