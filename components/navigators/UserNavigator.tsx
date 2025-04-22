import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardNavigator from './DashboardNavigator';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="DashboardNavigator" component={DashboardNavigator} />
        </Stack.Navigator>
    )
}

export default UserNavigator