import React from 'react';
import Header from '../../components/header';

import {Container, TableHeader, Title, TableTitle} from './styles'

const ListSeller = (props) => {
    return(
        <>
        <Header/>
        <Container>
            <Title>Lista de vendedores</Title>
            <TableHeader>
                <TableTitle>NOME</TableTitle>
                <TableTitle>CPF/CNPJ</TableTitle>
                <TableTitle>STATUS</TableTitle>
                <TableTitle>PRODUTOS REVELADOS</TableTitle>
            </TableHeader>
        </Container>
        </>
    )
}

export default ListSeller;