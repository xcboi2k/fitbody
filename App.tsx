import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"

import HelpScreen from './components/screens/main/profile/HelpScreen';
import ProfileMenuScreen from './components/screens/main/profile/ProfileMenuScreen';
import NotificationsScreen from './components/screens/main/NotificationsScreen';
import SearchScreen from './components/screens/main/SearchScreen';
import HomeScreen from './components/screens/main/HomeScreen';
import FavoritesScreen from './components/screens/main/profile/FavoritesScreen';
import WorkoutScreen from './components/screens/main/workout/WorkoutScreen';

export default function App() {
  return (
    <>
      <StatusBar/>
      {/* <FavoritesScreen /> */}
      {/* <HelpScreen /> */}
      {/* <ProfileMenuScreen /> */}
      {/* <HomeScreen /> */}
      {/* <NotificationsScreen /> */}
      {/* <SearchScreen /> */}
      <WorkoutScreen />
    </>
  );
}

