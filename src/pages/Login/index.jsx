import "react-loadingmask/dist/react-loadingmask.css";
import React, { useCallback, useState, useRef } from "react";
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { useAuth} from '../../hooks/auth';
import {Container, Logo, Image} from './styles';
import {IoIosLock, IoIosMail} from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import LoadingMask from "react-loadingmask";
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationsErrors';
import InputBasic from '../../components/InputBasic';
import Button from '../../components/Button';

import logoImg from '../../assets/agt-logo.svg';
import backgroundImg from '../../assets/background-login.svg';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data)=>{
    setLoading(true)
    try {
      await signIn(data);
      setLoading(false);
      history.push('/home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current.setErrors(errors);
      }
      setLoading(false);
      toast.error('Erro de validação. Cheque suas credenciais.')
    }
  },[signIn, history])

  return (
    <>
    <ToastContainer/>
      <Container>
        <Image src={backgroundImg} alt="background-login"/>
          <Form onSubmit={handleSubmit} >
            <Logo src={logoImg} alt="logo-agt"/>
            <InputBasic name="email" type="email"icon={IoIosMail} placeholder="Digite seu email"/>
            <InputBasic name="password" type="password" icon={IoIosLock} placeholder="Digite sua senha"/>
            <LoadingMask loading={loading} className="loadingContainer">
              <Button type="submit" title="Fazer Login"/>
            </LoadingMask> 
            <Link to="/register">Não tem conta? <strong>Cadastra-se!</strong></Link>
          </Form>
      </Container>
    </>
  );
};

export default Login;
