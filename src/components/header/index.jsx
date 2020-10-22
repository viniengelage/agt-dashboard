import React from 'react';

import {Container} from './styles'
import Sidebar from '../menu'

import logo from '../../assets/agt-logo-branco.svg'

const Header = (props) => {
    return(
        <Container>
            <img src={logo}/>
        </Container>
    )
}

export default Header;