import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import HomeScreen from '../screens/main/HomeScreen';
import SearchScreen from '../screens/main/SearchScreen';
import NotificationsScreen from '../screens/main/NotificationsScreen';
import ProfileMenuScreen from '../screens/main/profile/ProfileMenuScreen';
import ProfileScreen from '../screens/main/profile/ProfileScreen';
import FavoritesScreen from '../screens/main/profile/FavoritesScreen';
import SettingsScreen from '../screens/main/profile/SettingsScreen';
import PasswordSettingsScreen from '../screens/main/profile/PasswordSettingsScreen';
import HelpScreen from '../screens/main/profile/HelpScreen';
import SupportChatScreen from '../screens/main/profile/SupportChatScreen';
import WorkoutScreen from '../screens/main/workout/WorkoutScreen';
import BeginnerScreen from '../screens/main/workout/BeginnerScreen';
import BeginnerRoutineScreen from '../screens/main/workout/BeginnerRoutineScreen';
import IntermediateScreen from '../screens/main/workout/IntermediateScreen';
import IntermediateRoutineScreen from '../screens/main/workout/IntermediateRoutineScreen';
import AdvancedScreen from '../screens/main/workout/AdvancedScreen';
import AdvancedRoutineScreen from '../screens/main/workout/AdvancedRoutineScreen';
import CreateYourRoutineScreen from '../screens/main/workout/CreateYourRoutineScreen';
import YourRoutineScreen from '../screens/main/workout/YourRoutineScreen';
import YourRoutineDetailsScreen from '../screens/main/workout/YourRoutineDetailsScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='HomeMain'
            >

                <Stack.Screen name="HomeMain" component={HomeScreen}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Notifications" component={NotificationsScreen}/>

                <Stack.Screen name="ProfileMenu" component={ProfileMenuScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
                <Stack.Screen name="Favorites" component={FavoritesScreen}/>

                <Stack.Screen name="Settings" component={SettingsScreen}/>
                <Stack.Screen name="NotificationSettings" component={NotificationsScreen}/>
                <Stack.Screen name="PasswordSettings" component={PasswordSettingsScreen}/>
                <Stack.Screen name="Help" component={HelpScreen}/>
                <Stack.Screen name="SupportChat" component={SupportChatScreen}/>

                <Stack.Screen name="Workout" component={WorkoutScreen}/>
                <Stack.Screen name="WorkoutBeginnerMain" component={BeginnerScreen}/>
                <Stack.Screen name="WorkoutBeginnerRoutine" component={BeginnerRoutineScreen}/>
                <Stack.Screen name="WorkoutIntermediateMain" component={IntermediateScreen}/>
                <Stack.Screen name="WorkoutIntermediateRoutine" component={IntermediateRoutineScreen}/>
                <Stack.Screen name="WorkoutAdvancedMain" component={AdvancedScreen}/>
                <Stack.Screen name="WorkoutAdvancedRoutine" component={AdvancedRoutineScreen}/>
                <Stack.Screen name="WorkoutCreateYourRoutine" component={CreateYourRoutineScreen}/>
                <Stack.Screen name="WorkoutYourRoutine" component={YourRoutineScreen}/>
                <Stack.Screen name="WorkoutYourRoutineDetails" component={YourRoutineDetailsScreen}/>

            </Stack.Navigator>
    )
}

export default AuthNavigator