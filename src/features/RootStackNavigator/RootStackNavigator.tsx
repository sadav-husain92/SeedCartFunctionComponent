/**
 ROOT STACK NAVIGATOR
 */
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../SplashScreen/Splash';
import Login from '../Auth/LoginScreen/Login';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;