import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import FavoritesScreen from '@/components/screens/main/profile/FavoritesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const FavoritesTabNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='FavoritesTabMain'
            >

                <Stack.Screen name="FavoritesTabMain" component={FavoritesScreen}/>
            </Stack.Navigator>
    )
}

export default FavoritesTabNavigator