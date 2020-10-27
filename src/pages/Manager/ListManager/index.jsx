import React, { useEffect, useState } from 'react';
import Header from '../../../components/header';
import auth from '../../../services/api'

import {IoIosTrash} from 'react-icons/io';

import {Container, TableHeader, Title, TableTitle, TableCel, TableCelTitle } from './styles'

const ListManager = (props) => {
    const [manager, setManager] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function getItems(){
            try {
                const response = await auth.get('/managers');
                setManager(response.data.data);
                // setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        getItems()
    },[])

    return(
        <>
        <Header/>
        <Container>
            <Title>Lista de managers</Title>
                <TableHeader>
                    <TableTitle>NOME</TableTitle>
                    <TableTitle>ID</TableTitle>
                    <IoIosTrash size={28} color="#fff"/>
                </TableHeader>
                {manager.map((seller) => (
                    <TableCel key={seller.id}>
                        <TableCelTitle>{seller.name}</TableCelTitle>
                        <TableCelTitle>{seller.id}</TableCelTitle>
                        <IoIosTrash size={28} color="#c53030"/>
                    </TableCel>
                ))}
        </Container>
        </>
    )
}

export default ListManager;