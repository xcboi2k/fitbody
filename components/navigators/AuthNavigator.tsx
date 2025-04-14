import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import SetPasswordScreen from '../screens/auth/SetPasswordScreen';
import SetFingerprintScreen from '../screens/auth/SetFingerprintScreen';
import { RootStackParamList } from '@/types/navigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='Login'
            >

                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="SetPassword" component={SetPasswordScreen}/>
                <Stack.Screen name="SetFingerprint" component={SetFingerprintScreen}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            </Stack.Navigator>
    )
}

export default AuthNavigator