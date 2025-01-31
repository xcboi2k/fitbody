import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import HelpScreen from './components/screens/main/profile/HelpScreen';

export default function App() {
  return (
    <>
      <StatusBar/>
      <HelpScreen />
    </>
  );
}

