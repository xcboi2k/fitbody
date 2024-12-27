import React, { useState, useRef, useEffect } from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft, ChevronUp } from 'lucide-react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function AgeScreen() {
    const age = [26, 27, 28, 29, 30]; // Example dates
    const [selectedAge, setSelectedAge] = useState<number>(28); // Set default to last date
    const scrollViewRef = useRef<ScrollView>(null); // Create a ref for the ScrollView
    const itemWidth = 80; // Width of each item (adjust as needed)

    useEffect(() => {
        // Scroll to the selected item when the component mounts
        if (scrollViewRef.current) {
            const index = age.indexOf(selectedAge);
            scrollViewRef.current.scrollTo({
                x: index * itemWidth - (itemWidth / 2), // Center the selected item
                animated: true,
            });
        }
    }, [selectedAge]);

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
                        How Old Are You?
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] items-center mb-[30px]'>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[30px] justify-between items-center mb-[10px]'>
                    <Text className="text-white text-[64px] font-bold mb-[10px]">{selectedAge}</Text>
                    {/* Pointer */}
                    <ChevronUp size={40} color={'#E2F163'} />

                    {/* Date Picker */}
                </View>
                <View className='w-full px-[40px] py-[20px] bg-lightPurple items-center mb-[30px]'>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ScrollView 
                            horizontal 
                            showsHorizontalScrollIndicator={false} 
                            ref={scrollViewRef} 
                            snapToInterval={itemWidth} // Snap to item width
                            decelerationRate="fast" // Smooth scrolling
                            contentContainerStyle={{ alignItems: 'center' }} // Center items vertically
                        >
                            <View className="flex-row items-center">
                                {age.map((item) => (
                                <TouchableOpacity
                                    key={item}
                                    onPress={() => {
                                        setSelectedAge(item);
                                        // Scroll to the selected item when pressed
                                        if (scrollViewRef.current) {
                                            scrollViewRef.current.scrollTo({
                                                x: age.indexOf(item) * itemWidth - (itemWidth / 2),
                                                animated: true,
                                            });
                                        }
                                    }}
                                    className={`px-4 py-2 mx-1`}
                                >
                                    <Text
                                        className={`text-[40px] font-bold ${
                                            item === selectedAge ? "text-white" : "text-black"
                                        }`}
                                    >
                                    {item}
                                    </Text>
                                </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Continue' onClick={() => {}} />
                </View>
            </ScrollView>
        </View>
    )
}
