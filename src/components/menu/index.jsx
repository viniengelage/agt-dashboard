import React from "react";
import {IoMdCube} from 'react-icons/io'

import Profile from "./Profile";
import {Container, ButtonContainer} from './styles'

const Sidebar = props => {
  return (
    <Container>
      <Profile/>

      <ButtonContainer>
        <IoMdCube size={24} color="#fff"/>
        <strong>Pedidos</strong>
      </ButtonContainer>
    </Container>
  );
};

export default Sidebar;
