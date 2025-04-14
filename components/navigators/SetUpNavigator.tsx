import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import SetUpScreen from '../screens/set-up/SetUpScreen';
import GenderScreen from '../screens/set-up/GenderScreen';
import AgeScreen from '../screens/set-up/AgeScreen';
import WeightScreen from '../screens/set-up/WeightScreen';
import HeightScreen from '../screens/set-up/HeightScreen';
import GoalScreen from '../screens/set-up/GoalScreen';
import ActivityLevelScreen from '../screens/set-up/ActivityLevelScreen';
import SetProfileScreen from '../screens/set-up/SetProfileScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const SetUpNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='SetUpMain'
            >

                <Stack.Screen name="SetUpMain" component={SetUpScreen}/>
                <Stack.Screen name="SetGender" component={GenderScreen}/>
                <Stack.Screen name="SetAge" component={AgeScreen}/>
                <Stack.Screen name="SetWeight" component={WeightScreen}/>
                <Stack.Screen name="SetHeight" component={HeightScreen}/>
                <Stack.Screen name="SetGoal" component={GoalScreen}/>
                <Stack.Screen name="SetActivityLevel" component={ActivityLevelScreen}/>
                <Stack.Screen name="SetProfile" component={SetProfileScreen}/>
            </Stack.Navigator>
    )
}

export default SetUpNavigator