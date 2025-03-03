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
import BeginnerScreen from './components/screens/main/workout/BeginnerScreen';
import BeginnerRoutineScreen from './components/screens/main/workout/BeginnerRoutineScreen';
import IntermediateScreen from './components/screens/main/workout/IntermediateScreen';
import IntermediateRoutineScreen from './components/screens/main/workout/IntermediateRoutineScreen';
import AdvancedScreen from './components/screens/main/workout/AdvancedScreen';
import AdvancedRoutineScreen from './components/screens/main/workout/AdvancedRoutineScreen';
import CreateYourRoutineScreen from './components/screens/main/workout/CreateYourRoutineScreen';
import YourRoutineScreen from './components/screens/main/workout/YourRoutineScreen';
import YourRoutineDetailsScreen from './components/screens/main/workout/YourRoutineDetailsScreen';
import ProgressTrackingScreen from './components/screens/main/ProgressTrackingScreen';

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
      {/* <WorkoutScreen /> */}
      {/* <BeginnerScreen /> */}
      {/* <BeginnerRoutineScreen /> */}
      {/* <IntermediateScreen /> */}
      {/* <IntermediateRoutineScreen /> */}
      {/* <AdvancedScreen /> */}
      {/* <AdvancedRoutineScreen /> */}
      {/* <CreateYourRoutineScreen /> */}
      {/* <YourRoutineScreen /> */}
      {/* <YourRoutineDetailsScreen /> */}
      <ProgressTrackingScreen />
    </>
  );
}

