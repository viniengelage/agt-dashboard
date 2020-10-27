import 'react-tabs/style/react-tabs.css';
import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import numOnly from '@lacussoft/num-only'


import {IoIosImage, IoIosDocument, IoIosCall, IoIosBulb, IoIosTime, IoIosPricetag, IoIosPricetags ,IoIosBicycle} from 'react-icons/io'

import Header from '../../../components/header';
import Button from '../../../components/Button'
import InputBasic from '../../../components/InputBasic';
import InputMask from '../../../components/InputMask';
import InputSelect from '../../../components/InputSelect';

import { Container, Title, CustomTabTitle } from './styles';

const CreateSeller = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleSubmit1 = useCallback((data)=>{
    data.cpf_cnpj = numOnly(data.cpf_cnpj);
    data.cellphone = numOnly(data.cellphone);
    console.log(data)
    setTabIndex(1)
  },[])
  const handleSubmit2 = useCallback((data)=>{
    data.cpf_cnpj = numOnly(data.cpf_cnpj);
    data.cellphone = numOnly(data.cellphone);
  },[])
  
  const CustomTab = ({ children, selected }) => (
    <Tab>
      <CustomTabTitle selected={tabIndex}>{children}</CustomTabTitle>
    </Tab>
  );
  
  CustomTab.tabsRole = 'Tab';

  return (
    <>
      <Header />
      <Container>
        <Title>Adicionar vendedor</Title>
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>
              <CustomTab>Informações sobre o seller</CustomTab>
              <CustomTab>Informações sobre o negócio</CustomTab>
            </TabList>

            <TabPanel>
              <Form onSubmit={handleSubmit1}>
              <InputBasic name="img" type="file" label="Enviar logo" icon={IoIosImage}/>
              <InputMask
                name="cpf_cnpj"
                label="CPF/CNPJ"
                mask="999.999.999-99"
                icon={IoIosDocument}
              />
              <InputMask
                name="cellphone"
                label="Telefone"
                mask="(99) 9 9999-9999"
                icon={IoIosCall}
              />
              <InputBasic name="status" label="Status" icon={IoIosBulb}/>
              <Button type="submit" title="Próximo"/>
              </Form>
            </TabPanel>
            <TabPanel>
              <Form onSubmit={handleSubmit2}>
              <InputMask
                name="opening_hours"
                label="Hora de abertura"
                mask="99:99"
                icon={IoIosTime}
              />
              <InputMask
                name="closing_hours"
                label="Hora de fechamento"
                mask="99:99"
                icon={IoIosTime}
              />
              <InputMask name="price_base" label="Preço básico" mask="R$ 99,99" icon={IoIosPricetag}/>
              <InputMask name="price_per_km" label="Preço por KM"  mask="R$ 99,99" icon={IoIosPricetags}/>
              <InputSelect
                name="freight_type"
                label="Tipo de frete"
                options={[
                  { value: 'free', label: 'Gratuito' },
                  { value: 'partner', label: 'Parceiro' },
                ]}
                inputText="Selecione"
                icon={IoIosBicycle}
              />
               <Button type="submit" title="Fazer cadastro"/>
               <Button type="button" title="Voltar" onClick={()=>setTabIndex(0)}/>
              </Form>
            </TabPanel>
          </Tabs>
      </Container>
    </>
  );
};

export default CreateSeller;
