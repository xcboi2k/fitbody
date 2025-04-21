import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import ResourcesMainScreen from '@/components/screens/main/resources/ResourcesMainScreen';
import ResourcesWorkoutVideosListScreen from '@/components/screens/main/resources/ResourcesWorkoutVideosListScreen';
import ResourcesWorkoutVideosDetailsScreen from '@/components/screens/main/resources/ResourcesWorkoutVideosDetailsScreen';
import ResourcesDetailsScreen from '@/components/screens/main/resources/ResourcesDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ResourcesTabNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='ResourcesTabMain'
            >

                <Stack.Screen name="ResourcesTabMain" component={ResourcesMainScreen}/>
                <Stack.Screen name="ResourcesTabWorkoutVideosList" component={ResourcesWorkoutVideosListScreen}/>
                <Stack.Screen name="ResourcesTabWorkoutVideosDetails" component={ResourcesWorkoutVideosDetailsScreen}/>
                <Stack.Screen name="ResourcesTabArticlesDetails" component={ResourcesDetailsScreen}/>
            </Stack.Navigator>
    )
}

export default ResourcesTabNavigator