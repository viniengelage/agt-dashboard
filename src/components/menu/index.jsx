import React, { useCallback } from "react";
import {IoMdCube} from 'react-icons/io'
import { useAuth } from "../../hooks/auth";

import Profile from "./Profile";
import {Container, ButtonContainer,Icon} from './styles'

import {SellersRoutes} from '../../routes/config'

import MenuLink from './MenuLink'
import { useHistory } from "react-router-dom";

const Sidebar = props => {
  const {user} = useAuth()
  const history = useHistory()

  return (
    <Container>
      <Profile/>
      {SellersRoutes.map((route, i) => {
      if (!route.menu) {
        return "";
      } else {
        const IconTeste = route.icon;
        return (
           <ButtonContainer key={i} onClick={() => history.push(route.path)}>
             <IconTeste size={24} className={route.icon}/>
             <strong>{route.title}</strong>
           </ButtonContainer>
        );
      }
    })}
    </Container>
  );
};

export default Sidebar;
