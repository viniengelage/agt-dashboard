import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../../../components/header'

import {
Container, BannerContainer, Title,
TableHeader, TableHeaderSmall, TableHeaderBig
} from './styles'

const ListCostumer = () => {
    return(
        <>
            <Header />
            <Container>
                <BannerContainer>
                    <Title>Lista de clientes</Title>
                    <Link>Chamar entregador</Link>
                </BannerContainer>

                <TableHeader>
                    <TableHeaderSmall>Status</TableHeaderSmall>
                    <TableHeaderBig>Telefone/WhatsApp</TableHeaderBig>
                    <TableHeaderBig>Cliente</TableHeaderBig>
                    <TableHeaderSmall>Ver pedidos</TableHeaderSmall>
                    <TableHeaderSmall>Falar com cliente</TableHeaderSmall>
                    <TableHeaderSmall>Operações</TableHeaderSmall>
                </TableHeader>
            </Container>
        </>
    )
}

export default ListCostumer;