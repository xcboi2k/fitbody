import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import Onboarding1Screen from './components/screens/onboarding/Onboarding1Screen';
import Onboarding2Screen from './components/screens/onboarding/Onboarding2Screen';
import Onboarding3Screen from './components/screens/onboarding/Onboarding3Screen';
import Onboarding4Screen from './components/screens/onboarding/Onboarding4Screen';
import LoginScreen from './components/screens/auth/LoginScreen';
import SignUpScreen from './components/screens/auth/SignUpScreen';
import ForgotPasswordScreen from './components/screens/auth/ForgotPasswordScreen';
import SetPasswordScreen from './components/screens/auth/SetPasswordScreen';
import SetFingerprintScreen from './components/screens/auth/SetFingerprintScreen';
import SetUpScreen from './components/screens/set-up/SetUpScreen';
import GenderScreen from './components/screens/set-up/GenderScreen';
import AgeScreen from './components/screens/set-up/AgeScreen';
import WeightScreen from './components/screens/set-up/WeightScreen';
import HeightScreen from './components/screens/set-up/HeightScreen';
import HomeScreen from './components/screens/main/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar/>
      {/* <Onboarding1Screen /> */}
      {/* <Onboarding2Screen /> */}
      {/* <Onboarding3Screen /> */}
      {/* <Onboarding4Screen /> */}

      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <SetPasswordScreen /> */}
      {/* <SetFingerprintScreen /> */}

      {/* <SetUpScreen /> */}
      {/* <GenderScreen /> */}
      {/* <AgeScreen /> */}
      {/* <WeightScreen /> */}
      {/* <HeightScreen /> */}

      <HomeScreen />
    </>
  );
}

