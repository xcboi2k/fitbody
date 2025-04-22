import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import UserNavigator from './UserNavigator';

const Stack = createNativeStackNavigator();

const AuthenticatedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="AppScreens" component={TabNavigator} />
            <Stack.Screen name="User" component={UserNavigator} />
        </Stack.Navigator>
    )
}

export default AuthenticatedNavigator