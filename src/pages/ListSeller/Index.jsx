import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import auth from '../../services/api'

import {IoIosTrash} from 'react-icons/io';

import {Container, TableHeader, Title, TableTitle, TableCel, TableCelTitle, TableRevealed, TableRevealedTitle} from './styles'

const ListSeller = (props) => {
    const [sellers, setSellers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function getItems(){
            try {
                const response = await auth.get('/sellers');

                setSellers(response.data.data);
                setIsLoading(false);
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
            <Title>Lista de vendedores</Title>
                <TableHeader>
                    <TableTitle>NOME</TableTitle>
                    <TableTitle>CPF/CNPJ</TableTitle>
                    <TableTitle>STATUS</TableTitle>
                    <TableRevealedTitle>REVELADOS</TableRevealedTitle>
                    <IoIosTrash size={28} color="#fff"/>
                </TableHeader>
                {sellers.map((seller) => (
                    <TableCel key={seller.id}>
                        <TableCelTitle>{seller.name}</TableCelTitle>
                        <TableCelTitle>{seller.cpf_cnpj}</TableCelTitle>
                        <TableCelTitle>{seller.status}</TableCelTitle>
                        <TableRevealed>72</TableRevealed>
                        <IoIosTrash size={28} color="#fff"/>
                    </TableCel>
                ))}
        </Container>
        </>
    )
}

export default ListSeller;