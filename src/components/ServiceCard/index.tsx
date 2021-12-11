import React from 'react';
import { Container, Subtitle, Title } from './styles';

type ServiceCardProps = {
    title: string,
    subtitle: string,
}

export default ({ title, subtitle }: ServiceCardProps) => (
    <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Container>
);