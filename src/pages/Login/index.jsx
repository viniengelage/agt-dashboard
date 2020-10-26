import React, {useCallback} from "react";
import { Form } from '@unform/web'
import { Link, useHistory } from 'react-router-dom'
import { useAuth} from '../../hooks/auth'

import {IoIosLock, IoIosMail} from 'react-icons/io'

import InputBasic from '../../components/InputBasic'

import Button from '../../components/Button'

import {Container, Logo, Image} from './styles'
import logoImg from '../../assets/agt-logo.svg'
import backgroundImg from '../../assets/background-login.svg'

const Login = () => {
  const { signIn } = useAuth();
  const history = useHistory()

  const handleSubmit = useCallback(async (data)=>{
    await signIn(data);

    history.push('/home');
  },[signIn, history])

  return (
    <Container>
      <Image src={backgroundImg} alt="background-login"/>
        <Form onSubmit={handleSubmit} >
          <Logo src={logoImg} alt="logo-agt"/>
          <InputBasic name="email" type="email"icon={IoIosMail} placeholder="Digite seu email"/>
          <InputBasic name="password" type="password" icon={IoIosLock} placeholder="Digite sua senha"/>
          <Button type="submit" title="Fazer Login" onClick={()=>console.log('passou por aqui')}/>
          <Link to="/register">Não tem conta? <strong>Cadastra-se!</strong></Link>
        </Form>
    </Container>
  );
};

export default Login;
