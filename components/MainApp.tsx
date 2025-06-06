import React from 'react'
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from './navigators/AuthNavigator';

import AuthenticatedNavigator from './navigators/AuthenticatedNavigator';
import UserStore from '@/stores/UserStore';
import OnboardingNavigator from './navigators/OnboardingNavigator';
import SetUpNavigator from './navigators/SetUpNavigator';
import { NestedParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<NestedParamList>();
export default function MainApp() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };

    const isLoggedIn = UserStore(state => state.isLoggedIn)

    return (
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    isLoggedIn === true ? (
                        <Stack.Screen name="AuthenticatedScreens" component={AuthenticatedNavigator} />
                    ) : (
                        <>
                            <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
                            <Stack.Screen name="Auth" component={AuthNavigator} />
                            <Stack.Screen name="SetUp" component={SetUpNavigator} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
