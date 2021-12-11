import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../src/pages/Login";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export default () =>
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="Home" component={Home}
            options={{
                headerStyle: {
                    backgroundColor: '#3C373D',
                },
                headerTintColor: '#FFF'
            }}
        />
    </Stack.Navigator>