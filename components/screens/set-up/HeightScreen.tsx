import React, { useEffect, useRef, useState } from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import { RulerPicker } from 'react-native-ruler-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function HeightScreen() {
    const height = [150, 155, 160, 165, 170]; // Example dates
    const [selectedHeight, setSelectedHeight] = useState<number>(160); // Set default to last date
    const scrollViewRef = useRef<ScrollView>(null); // Create a ref for the ScrollView
    const itemWidth = 80; // Width of each item (adjust as needed)

    useEffect(() => {
        // Scroll to the selected item when the component mounts
        if (scrollViewRef.current) {
            const index = height.indexOf(selectedHeight);
            scrollViewRef.current.scrollTo({
                x: index * itemWidth - (itemWidth / 2), // Center the selected item
                animated: true,
            });
        }
    }, [selectedHeight]);

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
                <TouchableOpacity className='flex-row'>
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
                        What Is Your Height?
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] items-center mb-[50px]'>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                {/* <View className='w-full px-[30px] justify-between items-center mb-[30px]'>
                    <View className="flex-row items-center mb-[10px]">
                        <Text className="text-white text-[64px] font-bold">{selectedHeight}</Text>
                        <Text className="text-white text-[24px] font-bold ml-[10px]">Cm</Text>
                    </View>
                </View> */}
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
                        unit="Cm"
                        valueTextStyle={{color: '#ffffff', fontSize: 64 }}
                        unitTextStyle={{color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}
                        longStepColor='white'
                    />
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Continue' onClick={() => {}} />
                </View>
            </ScrollView>
        </View>
    )
}
