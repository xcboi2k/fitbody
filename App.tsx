import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import Onboarding1Screen from './components/screens/onboarding/Onboarding1Screen';
import Onboarding2Screen from './components/screens/onboarding/Onboarding2Screen';
import Onboarding3Screen from './components/screens/onboarding/Onboarding3Screen';
import Onboarding4Screen from './components/screens/onboarding/Onboarding4Screen';
import LoginScreen from './components/screens/auth/LoginScreen';

export default function App() {
  return (
    <>
      <StatusBar/>
      {/* <Onboarding1Screen /> */}
      {/* <Onboarding2Screen /> */}
      {/* <Onboarding3Screen /> */}
      {/* <Onboarding4Screen /> */}
      <LoginScreen />
    </>
  );
}

