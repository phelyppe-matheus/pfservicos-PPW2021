import styled from 'styled-components/native';

const Container = styled.View`
    height: 450px;
    width: 250px;

    align-items: center;
    justify-content: center;
    margin: auto;
`;

const Title = styled.Text`
    color: #000;
    text-align: center;
    font-size: 24px;
    font-family: AlfaSlabOne_400Regular;
`;

const Subtitle = styled.Text`
    color: #000;
    text-align: center;
    font-size: 9px;
    margin-bottom: auto;
    font-family: OpenSans_400Regular;
`;

const Input = styled.TextInput`
    border-bottom-color: #3C373D;
    border-bottom-width: 1px;

    width: 200px;
    height: 50px;

    text-align: center;
    font-family: OpenSans_400Regular;
`

const Retrieve = styled.TouchableHighlight`
    margin-top: 10px;
    margin-bottom: auto;
`

const RetrieveText = styled.Text`
    font-size: 9px;
    color: #DAAF50;
    font-family: OpenSans_400Regular;
`

const LoginButton = styled.TouchableHighlight`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;

    border-radius: 35px;

    background-color: #A1AFB0;
`

const LoginButtonText = styled.Text`
    font-size: 15px;
    font-family: AlfaSlabOne_400Regular;
`

export { Container, Title, Subtitle, Input, Retrieve, LoginButton, RetrieveText, LoginButtonText }