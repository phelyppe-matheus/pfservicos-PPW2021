import React from 'react';
import ServiceCard from '../../components/ServiceCard';
import { Container } from './styles';

export default () => (
    <Container>
        <ServiceCard title='Troca de Pneu' subtitle='Serviço Simples' />
        <ServiceCard title='Montar Bike Elétrica' subtitle='Utilidades' />
        <ServiceCard title='Revenda de peças usadas' subtitle='Parcerias' />
        <ServiceCard title='Mayonese' subtitle='Esse serviço tá no lugar errado' />
        <ServiceCard title='Serviço' subtitle='Subtítulo' />
    </Container>
);