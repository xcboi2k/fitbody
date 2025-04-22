import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import Onboarding1Screen from '../screens/onboarding/Onboarding1Screen';
import Onboarding2Screen from '../screens/onboarding/Onboarding2Screen';
import Onboarding3Screen from '../screens/onboarding/Onboarding3Screen';
import Onboarding4Screen from '../screens/onboarding/Onboarding4Screen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const OnboardingNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='Onboarding1'
            >

                <Stack.Screen name="Onboarding1" component={Onboarding1Screen}/>
                <Stack.Screen name="Onboarding2" component={Onboarding2Screen}/>
                <Stack.Screen name="Onboarding3" component={Onboarding3Screen}/>
                <Stack.Screen name="Onboarding4" component={Onboarding4Screen}/>
            </Stack.Navigator>
    )
}

export default OnboardingNavigator