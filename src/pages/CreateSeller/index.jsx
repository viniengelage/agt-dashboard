import 'react-tabs/style/react-tabs.css';
import React from 'react';
import { Form } from '@unform/web';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Button from '../../components/Button'

import {IoIosMail} from 'react-icons/io'

import Header from '../../components/header';
import InputBasic from '../../components/InputBasic';
import InputMask from '../../components/InputMask';
import InputSelect from '../../components/InputSelect';

import { Container, Title, CustomTabTitle } from './styles';

const CustomTab = ({ children }) => (
  <Tab>
    <CustomTabTitle>{children}</CustomTabTitle>
  </Tab>
);

CustomTab.tabsRole = 'Tab';

const CreateSeller = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Adicionar vendedor</Title>
        <Form>
          <Tabs>
            <TabList>
              <CustomTab>Informações sobre o seller</CustomTab>
              <CustomTab>Informações sobre o negócio</CustomTab>
            </TabList>

            <TabPanel>
              <InputBasic name="img" type="file" label="Enviar logo" icon={IoIosMail}/>
              <InputMask
                name="cpf_cnpj"
                label="CPF/CNPJ"
                mask="999.999.999-99"
                icon={IoIosMail}
              />
              <InputMask
                name="cellphone"
                label="Telefone"
                mask="(99) 9 9999-9999"
                icon={IoIosMail}
              />
              <InputBasic name="status" label="Status" icon={IoIosMail}/>
            </TabPanel>
            <TabPanel>
              <InputMask
                name="opening_hours"
                label="Hora de abertura"
                mask="99:99"
                icon={IoIosMail}
              />
              <InputMask
                name="closing_hours"
                label="Hora de fechamento"
                mask="99:99"
                icon={IoIosMail}
              />
              <InputBasic name="price_base" label="Preço básico" icon={IoIosMail}/>
              <InputBasic name="price_per_km" label="Preço por KM" icon={IoIosMail}/>
              <InputSelect
                name="freight_type"
                label="Tipo de frete"
                options={[
                  { value: 'free', label: 'Gratuito' },
                  { value: 'partner', label: 'Parceiro' },
                ]}
                inputText="Selecione"
                icon={IoIosMail}
              />
            </TabPanel>
          </Tabs>
          <Button type="submit" title="Realizar cadastro"/>
        </Form>
      </Container>
    </>
  );
};

export default CreateSeller;
