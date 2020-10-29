import 'react-tabs/style/react-tabs.css';
import "react-loadingmask/dist/react-loadingmask.css";
import React, { useCallback, useState, useRef, useEffect } from 'react';
import LoadingMask from "react-loadingmask";
import { Form } from '@unform/web';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import removeWhitespace from 'remove-whitespace'
import axios from 'axios';
import numOnly from '@lacussoft/num-only';

import {
IoIosImage, IoIosPerson, IoIosNavigate,
IoIosMap, IoIosBusiness, IoIosAttach,
IoIosMail, IoIosCall, IoIosLock, IoIosContact,
IoIosHome, IoIosFlag, IoIosKey
} from 'react-icons/io'

import getValidationErrors from '../../../utils/getValidationsErrors';
import Header from '../../../components/header';
import Button from '../../../components/Button'
import InputBasic from '../../../components/InputBasic';
import InputSelect from '../../../components/InputSelect';
import InputMask from '../../../components/InputMask';
import InputSelectAsync from '../../../components/InputSelectAsync';
import InputFile from '../../../components/InputFile';

import { Container, Title, CepContainer } from './styles';
import auth from '../../../services/api';

const CreateSeller = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [userId, setUserId] = useState(0)
  const [address, setAddress] = useState({
    postcode: '',
    street: '',
    district: '',
    latitude: '',
    longitude: '',
  })
  const [seller, setSeller] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'seller'
  })

  const handleSubmit1 = useCallback(async (infos) => {
    setLoading(true);
    try {
      formRef.current.setErrors({});
      setSeller((data) => ({ ...data,
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

      setUserId(response.data.user.id)

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

  const handleSubmit2 = useCallback(async (infos)=>{
    try {
      const schema = Yup.object().shape({
        postcode: Yup.number().required('CEP é necessário'),
        street: Yup.string().required('Rua é necessária'),
        district: Yup.string().required('Bairro é necessário'),
        latitude: Yup.string().required('Lagitude necessária'),
        longitude: Yup.string().required('Longitude necessária'),
        name: Yup.string().required('Nome do local necessário'),
        complement: Yup.string().required('Complemento necessário'),
        number: Yup.number().required('Número necessário'),
        city_id: Yup.number().required('Cidade necessária')
      });

      const sellerAddress = {
        postcode: address.postcode,
        street: address.street,
        district: address.district,
        latitude: address.latitude.toString(),
        longitude: address.longitude.toString(),
        name: infos.name,
        complement: infos.complement,
        number: infos.number,
        city_id: infos.city_id
      }

      await schema.validate(sellerAddress, {
        abortEarly: false
      })

      const response = await auth.post('/addresses', sellerAddress);

      await auth.put(`/sellers/${userId}`, {
        address_id: response.data.id
      })
      
      setLoading(false)
      setTabIndex(2)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current.setErrors(errors);
      }
      console.log(error)
      setLoading(false);
      toast.error('Erro de validação. Cheque suas credenciais.')
    }
  },[address.district, address.latitude, address.longitude, address.postcode, address.street, userId])

  const handleSubmit3 = useCallback( async (infos) => {
    setLoading(true)

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        cellphone: Yup.string().required(),
        img: Yup.string().required()
      });

      await schema.validate(infos)

      const sellerImg = new FormData();

      sellerImg.append('img', infos.img);
      await auth.post(`/sellers/${userId}/upload`, sellerImg);

      const sellerInfos = {
        cellphone: numOnly(infos.cellphone),
        name: infos.name
      }

      await auth.put(`/sellers/${userId}`, sellerInfos);

      setLoading(false)

      toast.success('Usuário adicionado com sucesso.')
      
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
    
  },[userId])

  const handleGetCep = useCallback( async (data) => {
    setLoading(true)

   try {
    const response = await axios.get(`https://ws.apicep.com/cep/${data.postcode}.json`);

    const keyApi = "AIzaSyALgdzkuB1O_yxkYwecS5bKjd9WQZZgb0w"

    const teste = removeWhitespace(response.data.address)
    const teste2 = removeWhitespace(response.data.city)

    const coordsResponse = await axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${teste}%${teste2}&key=${keyApi}`)

    const addressComponents = coordsResponse.data.results[0].address_components;
    const location = coordsResponse.data.results[0].geometry.location;

    setAddress( () => ({
      postcode: numOnly(data.postcode),
      street: addressComponents[0].long_name,
      district: addressComponents[1].long_name,
      latitude: location.lat,
      longitude: location.lng
    }))

    setLoading(false)
    toast.success('Endereço adicionado')
   } catch (error) {
     setLoading(false)
     toast.error(error.message)
   }
  },[])

  const mapResponseToValuesAndLabels = (data) => ({
    value: data.id,
    label: data.name,
  })

  const handleCityOptions = useCallback( async (value) => {
    const response = await auth.get('/cities')
    
    const options = response.data.data.map((value)=>mapResponseToValuesAndLabels(value))

    return options;
},[])

  return (
    <>
      <Header />
      <ToastContainer/>
      <Container>
        <Title>Adicionar usuário</Title>
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} selectedTabClassName="selectedTab" className="tabsContainer">
          <TabList className="tabContainer">
            <Tab className="titleTabe">Informações sobre o vendedor</Tab>
            <Tab className="titleTabe">Endereço</Tab>
            <Tab className="titleTabe">Contato</Tab>
          </TabList>

          <TabPanel className="panelContainer">
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
          <TabPanel className="panelContainer">
            <CepContainer>
              <Form onSubmit={handleGetCep} ref={formRef}>
                <InputMask mask="99999-999" name="postcode" placeholder="Digite seu CEP" type="text" icon={IoIosMap} label="CEP"/>
                  <Button type="submit" title="Buscar"/>
              </Form>
            </CepContainer>

            <Form onSubmit={handleSubmit2} initialData={address} ref={formRef}>
              <InputBasic name="street" placeholder="Digite seu endereço" type="text" icon={IoIosNavigate} label="Rua"/>
              <InputBasic name="district" placeholder="Digite seu bairro" type="text" icon={IoIosBusiness} label="Bairro"/>
              <InputBasic name="number" placeholder="Digite o número" type="number" icon={IoIosHome} label="Número"/>
              <InputBasic name="complement" placeholder="Digite o complemento" type="text" icon={IoIosAttach} label="Complemento"/>
              <InputBasic name="name" placeholder="Digite o nome do endereço" type="text" icon={IoIosKey} label="Nome do endereço"/>
              <InputSelectAsync 
                  name="city_id"
                  type="text"
                  label="Cidade"
                  loadOptions={handleCityOptions}
                  defaultOptions
                  icon={IoIosFlag}
                  placeholder="Escolha a cidade"
              />
              <LoadingMask loading={loading} className="loadingContainer">
                <Button type="submit" title="Próximo"/>
              </LoadingMask>
            </Form>
            
          </TabPanel>

          <TabPanel>
            <Form onSubmit={handleSubmit3} initialData={seller} className="panelContainerContact">
              <InputBasic name="name" placeholder="Digite seu nome" type="text" icon={IoIosPerson} label="Nome"/>
              <InputMask mask="(99) 9 9999-9999" name="cellphone" placeholder="Digite o telefone" type="text" icon={IoIosCall} label="Telefone"/>
              <InputFile name="img" placeholder="Envie sua logo" type="file" icon={IoIosImage} label="Logo" />
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
