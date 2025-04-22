import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"

import SupportChatScreen from './components/screens/main/profile/SupportChatScreen';
import HeightScreen from './components/screens/set-up/HeightScreen';
import GoalScreen from './components/screens/set-up/GoalScreen';
import ActivityLevelScreen from './components/screens/set-up/ActivityLevelScreen';
import MainApp from './components/MainApp';

export default function App() {
  return (
    <>
      <StatusBar/>
      <MainApp />
    </>
  );
}

