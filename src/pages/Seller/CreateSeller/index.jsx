import 'react-tabs/style/react-tabs.css';
import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import numOnly from '@lacussoft/num-only';

import {IoIosImage, IoIosPerson, IoIosNavigate, IoIosMap, IoIosBusiness, IoIosAttach, IoIosMail, IoIosCall, IoIosLock} from 'react-icons/io'

import Header from '../../../components/header';
import Button from '../../../components/Button'
import InputBasic from '../../../components/InputBasic';
// import InputMask from '../../../components/InputMask';
// import InputSelect from '../../../components/InputSelect';

import { Container, Title, ButtonTab } from './styles';

const CreateSeller = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [seller, setSeller] = useState({
    img: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleSaveInfos = useCallback((event)=>{
    console.log(event)
    const { value, name } = event.target;

    return setSeller((data) => ({ ...data, [name]: value }));
  },[])

  const handleSubmit1 = useCallback((infos)=>{
    console.log(infos.name)
    setSeller((data) => ({ ...data,
      email: infos.email,
      password: infos.password,
      password_confirmation: infos.password_confirmation,
    }));
    setTabIndex(1)
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

  return (
    <>
      <Header />
      <Container>
        <Title>Adicionar vendedor</Title>
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} selectedTabClassName="selectedTab">
          <TabList className="tabContainer">
            <Tab className="titleTabe">Informações sobre o vendedor</Tab>
            <Tab className="titleTabe">Endereço</Tab>
            <Tab className="titleTabe">Contato</Tab>
          </TabList>

          <TabPanel>
            <Form onSubmit={handleSubmit1} initialData={seller}>
              <InputBasic name="email" placeholder="Digite o email" type="text" icon={IoIosMail} label="E-mail"/>
              <InputBasic name="password" placeholder="Digite a senha" type="password" icon={IoIosLock} label="Senha"/>
              <InputBasic name="password_confirmation" placeholder="Repita a senha" type="password" icon={IoIosLock} label="Confirmação de senha"/>
              <Button type="submit" title="Próximo"/>
            </Form>
          </TabPanel>
          <TabPanel>
            <Form onSubmit={handleSubmit2} initialData={seller}>
              <InputBasic name="street" placeholder="Digite seu endereço" type="text" icon={IoIosNavigate} label="Rua"/>
              <InputBasic name="district" placeholder="Digite seu bairro" type="text" icon={IoIosBusiness} label="Bairro"/>
              <InputBasic name="complement" placeholder="Digite o complemento" type="text" icon={IoIosAttach} label="Complemento"/>
              <InputBasic name="postcode" placeholder="Digite seu CEP" type="text" icon={IoIosMap} label="CEP"/>
              <Button title="Próximo" onClick={() => setTabIndex(1)} />
            </Form>
          </TabPanel>

          <TabPanel>
            <Form onSubmit={handleSubmit3} initialData={seller}>
              <InputBasic name="name" placeholder="Digite seu nome" type="text" icon={IoIosPerson} label="Nome"/>
              <InputBasic name="cellphone" placeholder="Digite o telefone" type="text" icon={IoIosCall} label="Telefone"/>
              <InputBasic name="img" placeholder="Envie sua logo" type="file" icon={IoIosImage} label="Logo" />
              <Button type="submit" title="Cadastrar vendedor"/>
            </Form>
          </TabPanel>
        </Tabs>
      </Container>
    </>
  );
};

export default CreateSeller;
