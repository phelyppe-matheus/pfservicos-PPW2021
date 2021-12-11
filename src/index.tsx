import React from 'react';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { AlfaSlabOne_400Regular } from '@expo-google-fonts/alfa-slab-one';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// import Login from './pages/Login';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular, AlfaSlabOne_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        );
    }
};