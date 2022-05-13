import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../SplashScreen/Splash';
import Login from '../Auth/LoginScreen/Login';


const Stack = createNativeStackNavigator();
class StackNavigation extends Component {

    myStack = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={Splash} />
                    <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.myStack()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default StackNavigation;