import React, { useEffect, useRef, useState } from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft, ChevronUp } from 'lucide-react-native'
import { RulerPicker } from 'react-native-ruler-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'
import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function WeightScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()

    const weight = [26, 27, 28, 29, 30]; // Example dates
    const [selectedWeight, setSelectedWeight] = useState<number>(28); // Set default to last date
    const scrollViewRef = useRef<ScrollView>(null); // Create a ref for the ScrollView
    const itemWidth = 80; // Width of each item (adjust as needed)

    useEffect(() => {
        // Scroll to the selected item when the component mounts
        if (scrollViewRef.current) {
            const index = weight.indexOf(selectedWeight);
            scrollViewRef.current.scrollTo({
                x: index * itemWidth - (itemWidth / 2), // Center the selected item
                animated: true,
            });
        }
    }, [selectedWeight]);
    
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
                <TouchableOpacity className='flex-row' onPress={() => navigation.navigate('SetUp', {screen: 'SetAge'})}>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[15px] text-limeGreen ml-[5px]'>
                        Back
                    </Text>
                </TouchableOpacity>
                <Text className='text-[20px] text-black font-bold'>
                    /
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <ScrollView>
                <View className='w-full px-[30px] justify-between items-center mb-[20px]'>
                    <Text className='text-[25px] text-white font-bold mb-[20px]'>
                        What Is Your Weight?
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] items-center mb-[50px]'>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[50px] justify-between items-center mb-[70px]'>
                    <View className='w-full flex-row px-[60px] py-[20px] bg-limeGreen justify-between items-center rounded-[14px] mb-[10px]'>
                        <Text className="text-black text-[20px] font-bold">KG</Text>
                        <View style={{ width: 4, height: 40, backgroundColor: 'black' }} />
                        <Text className="text-black text-[20px] font-bold">LB</Text>
                    </View>
                </View>
                <View className='w-full py-[20px] items-center bg-lightPurple mt-[50px] mb-[50px]'>
                    <RulerPicker
                        width={300}
                        height={100}
                        min={0}
                        max={240}
                        step={1}
                        fractionDigits={0}
                        initialValue={0}
                        indicatorColor='#E2F163'
                        onValueChange={(number) => console.log(number)}
                        onValueChangeEnd={(number) => console.log(number)}
                        unit="Kg"
                        valueTextStyle={{color: '#ffffff', fontSize: 64 }}
                        unitTextStyle={{color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}
                        longStepColor='white'
                    />
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Continue' onClick={() => navigation.navigate('SetUp', {screen: 'SetHeight'})} />
                </View>
            </ScrollView>
        </View>
    )
}
