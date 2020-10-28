import React, { useCallback, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Form } from '@unform/web'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import 'react-toastify/dist/ReactToastify.css';

import Loading from '../../../components/Loading';
import auth from '../../../services/api'
import Header from '../../../components/header';
import Button from '../../../components/Button';
import InputBasic from '../../../components/InputBasic'
import InputSelectAsync from '../../../components/InputSelectAsync'

import {  IoIosBarcode, IoIosFlag, IoIosHome, IoIosBusiness, IoIosBriefcase } from 'react-icons/io'
import { Container, Title } from './styles';

const CreateLocale = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const mapResponseToValuesAndLabels = (data) => ({
        value: data.id,
        label: data.name,
    })

    const handleStateOptions = useCallback( async (value) => {
        const response = await auth.get('/states')
        
        const options = response.data.data.map((value)=>mapResponseToValuesAndLabels(value))

        return options;
    },[])

    const handleCountryOptions = useCallback( async (value) => {
        const response = await auth.get('/countries')
        
        const options = response.data.data.map((value)=>mapResponseToValuesAndLabels(value))

        return options;
    },[])

    const handleManagerOptions = useCallback( async (value) => {
        const response = await auth.get('/managers')
        
        const options = response.data.data.map((value)=>mapResponseToValuesAndLabels(value))

        return options;
    },[])

    const handleSubmitCity = useCallback( async (data) => {
        try {
            setLoading(true)
            await auth.post('/cities', data)
            setLoading(false)
            return toast.success('Cidade adicionada!')
        } catch (error) {
            setLoading(false)
            console.log(error)
            return toast.error('Alguma coisa deu errado.')
        }
    },[])

    const handleSubmitState = useCallback( async (data) => {
        try {
            setLoading(true)
            await auth.post('/states', data)
            setLoading(false)
            return toast.success('Estado adicionado!')
        } catch (error) {
            setLoading(false)
            console.log(error)
            return toast.error('Alguma coisa deu errado.')
        }
    },[])
    const handleSubmitCountry = useCallback( async (data) => {
        try {
            setLoading(true)
            await auth.post('/countries', data)
            setLoading(false)
            return toast.success('País adicionado!')
        } catch (error) {
            setLoading(false)
            console.log(error)
            return toast.error('Alguma coisa deu errado.')
        }
    },[])

    return(
        <>
            <Loading loading={loading} />        
            <Header/>
            <ToastContainer />
            <Container>
                <Title>Adicionar Localização</Title>

                <Tabs className="tabContext" selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} selectedTabClassName="selectedTab">
                    <TabList className="tabContainer">
                        <Tab className="titleTabe">Cidade</Tab>
                        <Tab className="titleTabe">Estado</Tab>
                        <Tab className="titleTabe">País</Tab>
                    </TabList>

                    <TabPanel>
                    <Form onSubmit={handleSubmitCity}>
                        <InputBasic
                            name="name"
                            type="text"
                            label="Nome da cidade"
                            icon={IoIosHome}
                        />
                        <InputBasic
                            name="code"
                            type="text"
                            label="Código da cidade"
                            icon={IoIosBarcode}
                        />
                        <InputSelectAsync 
                            name="state_id"
                            type="text"
                            label="Estado"
                            loadOptions={handleStateOptions}
                            defaultOptions
                            icon={IoIosBusiness}
                        />
                        <InputSelectAsync 
                            name="manager_id"
                            type="text"
                            label="Manager responsável"
                            loadOptions={handleManagerOptions}
                            defaultOptions
                            icon={IoIosBriefcase}
                        />
                        <Button type="submit" title="Cadastrar cidade"/>
                        </Form>
                    </TabPanel>
                    <TabPanel className="panelContainer">
                        <Form onSubmit={handleSubmitState}>
                            <InputBasic
                                name="name"
                                type="text"
                                label="Nome do estado"
                                icon={IoIosBusiness}
                            />
                            <InputBasic
                                name="code"
                                type="text"
                                label="Código do estado"
                                icon={IoIosBarcode}
                            />
                            <InputSelectAsync 
                                name="country_id"
                                type="text"
                                label="País"
                                loadOptions={handleCountryOptions}
                                defaultOptions
                                icon={IoIosFlag}
                            />
                            <Button title="Cadastrar estado"/>
                        </Form>
                    </TabPanel>
                    <TabPanel>
                        <Form onSubmit={handleSubmitCountry}>
                            <InputBasic
                                name="name"
                                type="text"
                                label="Nome do país"
                                icon={IoIosFlag}
                            />
                            <InputBasic
                                name="code"
                                type="text"
                                label="Código do país"
                                icon={IoIosBarcode}
                            />
                            <Button title="Cadastrar país"/>
                        </Form>
                    </TabPanel>
                </Tabs>
            </Container>
        </>
    )
}

export default CreateLocale;