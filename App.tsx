import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import Onboarding1Screen from './components/screens/onboarding/Onboarding1Screen';
import Onboarding2Screen from './components/screens/onboarding/Onboarding2Screen';

export default function App() {
  return (
    <>
      <StatusBar/>
      {/* <Onboarding1Screen /> */}
      <Onboarding2Screen />
    </>
  );
}

