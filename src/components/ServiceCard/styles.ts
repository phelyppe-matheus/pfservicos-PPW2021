import styled from 'styled-components/native';

const Container = styled.View`
    height: 200px;
    background-color: #3C373D;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 10px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-family: AlfaSlabOne_400Regular;

    color: #FFF
`

const Subtitle = styled.Text`
    font-size: 14px;
    font-family: OpenSans_400Regular;

    color: #FFF
`

export { Container, Title, Subtitle }