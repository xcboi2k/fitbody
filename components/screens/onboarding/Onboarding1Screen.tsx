import React, { useEffect } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/types/navigation';

export default function Onboarding1Screen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Onboarding2');
        }, 3000); // 3 seconds
    
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <ImageBackground source={require('@/assets/images/onboarding/onboarding-image-1.png')} style={{ flex: 1 }} resizeMode="stretch">
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black', opacity: 0.5 }} />
            <View className='flex-1 items-center justify-center px-4'>
                <Text className='text-limeGreen text-[25px] font-bold'>Welcome to</Text>
                <Image source={require('@/assets/logos/fitbody-logo.png')} style={{ width: '90%', height: undefined, aspectRatio: 2 }} resizeMode="contain" />
            </View>
        </ImageBackground>
    )
}
