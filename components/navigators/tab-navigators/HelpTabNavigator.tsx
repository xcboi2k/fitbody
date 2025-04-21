import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import HelpScreen from '@/components/screens/main/profile/HelpScreen';
import SupportChatScreen from '@/components/screens/main/profile/SupportChatScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HelpTabNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='HelpTabMain'
            >

                <Stack.Screen name="HelpTabMain" component={HelpScreen}/>
                <Stack.Screen name="HelpTabDetails" component={HelpScreen}/>
                <Stack.Screen name="HelpTabSupport" component={SupportChatScreen}/>
            </Stack.Navigator>
    )
}

export default HelpTabNavigator