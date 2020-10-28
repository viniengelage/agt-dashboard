import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';
import { Form } from '@unform/web';
import { Tabs, Tab, TabPanel, TabList } from 'react-re-super-tabs'
// import numOnly from '@lacussoft/num-only'

import CustomTab from '../../../components/CustomTab'

import {IoIosImage, IoIosPerson, IoIosNavigate, IoIosMap, IoIosBusiness, IoIosAttach, IoIosMail, IoIosCall, IoIosLock} from 'react-icons/io'

import Header from '../../../components/header';
import Button from '../../../components/Button'
import InputBasic from '../../../components/InputBasic';
// import InputMask from '../../../components/InputMask';
// import InputSelect from '../../../components/InputSelect';

import { Container, Title } from './styles';

const CreateSeller = () => {
  const [tabLabel, setTabLabel] = useState('businessInfo')

  return (
    <>
      <Header />
      <Container>
        <Title>Adicionar vendedor</Title>
        <Form>
          <Tabs activeTab={tabLabel}>
            <TabList>
              <Tab component={CustomTab} label='Informação sobre o seller' id='businessInfo' />
              <Tab component={CustomTab} label='Endereço' id='adressInfo' />
              <Tab component={CustomTab} label='Contato' id='contact' />
            </TabList>
            <TabList>
              <TabPanel component={ () =>
                <>
                  <InputBasic name="img" placeholder="Envie sua logo" type="file" icon={IoIosImage} label="Logo"/>
                  <InputBasic name="name" placeholder="Digite seu nome" type="text" icon={IoIosPerson} label="Nome"/>
                  <Button title="Próximo" onClick={() => setTabLabel('adressInfo')} />
                </>
              } id='businessInfo' />
              <TabPanel component={() => 
                <>
                  <InputBasic name="street" placeholder="Digite seu endereço" type="text" icon={IoIosNavigate} label="Rua"/>
                  <InputBasic name="district" placeholder="Digite seu bairro" type="text" icon={IoIosBusiness} label="Bairro"/>
                  <InputBasic name="complement" placeholder="Digite o complemento" type="text" icon={IoIosAttach} label="Complemento"/>
                  <InputBasic name="postcode" placeholder="Digite seu CEP" type="text" icon={IoIosMap} label="CEP"/>
                  <Button title="Próximo" onClick={() => setTabLabel('contact')} />
                </>
              } id='adressInfo' />
              <TabPanel component={() =>
                <>
                  <InputBasic name="email" placeholder="Digite o email" type="text" icon={IoIosMail} label="E-mail"/>
                  <InputBasic name="cellphone" placeholder="Digite o telefone" type="text" icon={IoIosCall} label="Telefone"/>
                  <InputBasic name="password" placeholder="Digite a senha" type="text" icon={IoIosLock} label="Senha"/>
                  <InputBasic name="password_confirmation" placeholder="Repita a senha" type="text" icon={IoIosLock} label="Confirmação de senha"/>
                  <Button type="submit" title="Cadastrar vendedor"/>
                </>
              } id='contact' />
            </TabList>
          </Tabs>
      </Form>
      </Container>
    </>
  );
};

export default CreateSeller;
