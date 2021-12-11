import React, { Component, Props } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, Input, LoginButton, LoginButtonText, Retrieve, RetrieveText, Subtitle, Title } from './styles';
import { NavigationRouteContext } from '@react-navigation/native';

type LoginProps = {
    navigation: {
        navigate: Function
    }
}

export default ({ navigation }: LoginProps) => {
    return (
        <Container>
            <AntDesign name="setting" size={50} color="black" />
            <Title>PF SERVIÇOS</Title>
            <Subtitle>OFICINA MECÂNICA</Subtitle>
            <Input placeholder='Username' placeholderTextColor={"#646E78"} />
            <Input placeholder='Password' placeholderTextColor={"#646E78"} />
            <Retrieve>
                <RetrieveText>Esqueci a senha</RetrieveText>
            </Retrieve>
            <LoginButton onPress={() => navigation.navigate('Home')}>
                <LoginButtonText>LOGIN</LoginButtonText>
            </LoginButton>
        </Container>
    );
}