import React from "react";
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'

import {IoIosLock, IoIosMail} from 'react-icons/io'

import InputBasic from '../../components/InputBasic'

import Button from '../../components/Button'

import {Container, Logo, Image} from './styles'
import logoImg from '../../assets/agt-logo.svg'
import backgroundImg from '../../assets/background-register.svg'

function handleSubmit(data){
  console.log(data)
}

const Register = () => {
  return (
    <Container>
        <Form onSubmit={handleSubmit} >
          <Logo src={logoImg} alt="logo-agt"/>
          <InputBasic name="email" type="email"icon={IoIosMail} placeholder="Digite seu email"/>
          <InputBasic name="password" type="password" icon={IoIosLock} placeholder="Digite sua senha"/>
          <InputBasic name="password_confimation" type="password" icon={IoIosLock} placeholder="Digiste sua senha novamente"/>
          <Button type="submit" title="Fazer cadastro" onClick={()=>console.log('passou por aqui')}/>
          <Link to="/login">Já tem conta? <strong>Faça seu login!</strong></Link>
        </Form>
      <Image src={backgroundImg} alt="background-login"/>
    </Container>
  );
};

export default Register;
