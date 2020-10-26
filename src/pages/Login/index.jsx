import React, { useCallback, useState } from "react";
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { useAuth} from '../../hooks/auth';
import {Container, Logo, Image} from './styles';
import {IoIosLock, IoIosMail} from 'react-icons/io';

import InputBasic from '../../components/InputBasic';
import Button from '../../components/Button';
import Loading from '../../components/Loading'

import logoImg from '../../assets/agt-logo.svg';
import backgroundImg from '../../assets/background-login.svg';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (data)=>{
    setLoading(true)
    await signIn(data);
    setLoading(false);
    history.push('/home');
  },[signIn, history])

  return (
    <>
    <Loading loading={loading} />
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
    </>
  );
};

export default Login;
