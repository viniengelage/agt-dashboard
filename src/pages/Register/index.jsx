import React from "react";
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import auth from '../../services/api'

import {IoIosLock, IoIosMail, IoIosBriefcase} from 'react-icons/io';

import InputBasic from '../../components/InputBasic';
import InputSelect from '../../components/InputSelect';

import Button from '../../components/Button'

import {Container, Logo, Image} from './styles'
import logoImg from '../../assets/agt-logo.svg'
import backgroundImg from '../../assets/background-register.svg'

const Register = () => {
  const history = useHistory()

  async function handleSubmit(data){
    await auth.post('/auth/register', data);
    history.push('/login')
  }

  return (
    <Container>
        <Form onSubmit={handleSubmit} >
          <Logo src={logoImg} alt="logo-agt"/>
          <InputBasic name="email" type="email"icon={IoIosMail} placeholder="Digite seu email"/>
          <InputBasic name="password" type="password" icon={IoIosLock} placeholder="Digite sua senha"/>
          <InputBasic name="password_confirmation" type="password" icon={IoIosLock} placeholder="Digiste sua senha novamente"/>
          <InputSelect name="role" icon={IoIosBriefcase} placeholder="Selecione a permissão" options={[
            {value: 'customer', label: 'Customer'},
            {value: 'admin', label: 'Administrador'},
            {value: 'drive', label: 'Entregador'},
            {value: 'manager', label: 'Manager'},
          ]}/>
          <Button type="submit" title="Fazer cadastro"/>
          <Link to="/login">Já tem conta? <strong>Faça seu login!</strong></Link>
        </Form>
      <Image src={backgroundImg} alt="background-login"/>
    </Container>
  );
};

export default Register;
