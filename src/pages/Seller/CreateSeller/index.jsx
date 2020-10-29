import 'react-tabs/style/react-tabs.css';
import React, { useCallback, useState, useRef } from 'react';
import { Form } from '@unform/web';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import { ToastContainer, toast } from 'react-toastify';
import getValidationErrors from '../../../utils/getValidationsErrors';
import * as Yup from 'yup';
import axios from 'axios'
// import numOnly from '@lacussoft/num-only';

import {IoIosImage, IoIosPerson, IoIosNavigate, IoIosMap, IoIosBusiness, IoIosAttach, IoIosMail, IoIosCall, IoIosLock, IoIosContact} from 'react-icons/io'

import Header from '../../../components/header';
import Button from '../../../components/Button'
import InputBasic from '../../../components/InputBasic';
import InputSelect from '../../../components/InputSelect';
import InputMask from '../../../components/InputMask';

import { Container, Title, CepContainer } from './styles';
import auth from '../../../services/api';

const CreateSeller = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [userInfos, setUserInfos] = useState({
    userId: '',
    addressId: '',
  })
  const [address, setAddress] = useState({
    street: '',
    district: '',
    city: '',
    state: '',
  })
  const [seller, setSeller] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'seller'
  })

  const handleSaveInfos = useCallback((event)=>{
    console.log(event)
    const { value, name } = event.target;

    return setSeller((data) => ({ ...data, [name]: value }));
  },[])

  const handleSubmit1 = useCallback(async (infos) => {
    setLoading(true);
    try {
      formRef.current.setErrors({});
      await setSeller((data) => ({ ...data,
        email: infos.email,
        password: infos.password,
        password_confirmation: infos.password_confirmation,
      }));

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required('Senha é necessária'),
        password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais'),
        role: Yup.string().required()
      })

      console.log(infos)

      await schema.validate(infos, {
        abortEarly: false,
      });

      const response = await auth.post('/auth/register', infos);

      setUserInfos((data) => ({...data, userId: response.data.user.id}))

      setTabIndex(1);
      setLoading(false)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current.setErrors(errors);
      }
      setLoading(false);
      toast.error('Erro de validação. Cheque suas credenciais.')
    }
  },[])

  const handleSubmit2 = useCallback((infos)=>{
    console.log(infos.name)
    setSeller((data) => ({ ...data,
      img: infos.img,
      name: infos.name,
    }));
    setTabIndex(2)
  },[])

  const handleSubmit3 = useCallback((infos)=>{
    console.log(infos.name)
    setSeller((data) => ({ ...data,
      img: infos.img,
      name: infos.name,
    }));
  },[])

  const handleGetCep = useCallback( async (data) => {
    setLoading(true)

   try {
    const response = await axios.get(`https://ws.apicep.com/cep/${data.postcode}.json`);

    console.log(response)

    setAddress( () => ({
      street: response.data.address,
      district: response.data.district,
      city: response.data.city,
      state: response.data.state,
    }))

    setLoading(false)
    toast.success('Endereço adicionado')
   } catch (error) {
     toast.error(error.message)
   }
  },[])

  return (
    <>
      <Header />
      <ToastContainer/>
      <Container>
        <Title>Adicionar vendedor</Title>
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} selectedTabClassName="selectedTab">
          <TabList className="tabContainer">
            <Tab className="titleTabe">Informações sobre o vendedor</Tab>
            <Tab className="titleTabe">Endereço</Tab>
            <Tab className="titleTabe">Contato</Tab>
          </TabList>

          <TabPanel>
            <Form onSubmit={handleSubmit1} initialData={seller} ref={formRef}>
              <InputBasic name="email" placeholder="Digite o email" type="text" icon={IoIosMail} label="E-mail"/>
              <InputBasic name="password" placeholder="Digite a senha" type="password" icon={IoIosLock} label="Senha"/>
              <InputBasic name="password_confirmation" placeholder="Repita a senha" type="password" icon={IoIosLock} label="Confirmação de senha"/>
              <InputSelect name="role" placeholder="Tipo de usuário" label="Tipo de usuário" icon={IoIosContact} options={[
                {value: 'seller', label: 'Vendedor'}
              ]}/>
              <LoadingMask loading={loading} className="loadingContainer">
                <Button type="submit" title="Próximo"/>
              </LoadingMask>
            </Form>
          </TabPanel>
          <TabPanel>
            <CepContainer>
              <Form onSubmit={handleGetCep} ref={formRef}>
                <InputMask mask="99999-999" name="postcode" placeholder="Digite seu CEP" type="text" icon={IoIosMap} label="CEP"/>
                  <Button type="submit" title="Buscar"/>
              </Form>
            </CepContainer>

            <Form onSubmit={handleSubmit2} initialData={address}>
              <InputBasic name="street" placeholder="Digite seu endereço" type="text" icon={IoIosNavigate} label="Rua"/>
              <InputBasic name="district" placeholder="Digite seu bairro" type="text" icon={IoIosBusiness} label="Bairro"/>
              <InputBasic name="complement" placeholder="Digite o complemento" type="text" icon={IoIosAttach} label="Complemento"/>
              <LoadingMask loading={loading} className="loadingContainer">
                <Button title="Próximo" onClick={() => setTabIndex(1)} />
              </LoadingMask>
            </Form>
            
          </TabPanel>

          <TabPanel>
            <Form onSubmit={handleSubmit3} initialData={seller}>
              <InputBasic name="name" placeholder="Digite seu nome" type="text" icon={IoIosPerson} label="Nome"/>
              <InputBasic name="cellphone" placeholder="Digite o telefone" type="text" icon={IoIosCall} label="Telefone"/>
              <InputBasic name="img" placeholder="Envie sua logo" type="file" icon={IoIosImage} label="Logo" />
              <LoadingMask loading={loading} className="loadingContainer">
                <Button type="submit" title="Cadastrar vendedor"/>
              </LoadingMask>
            </Form>
          </TabPanel>
        </Tabs>
      </Container>
    </>
  );
};

export default CreateSeller;
