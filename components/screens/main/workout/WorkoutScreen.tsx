import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';

export default function WorkoutScreen() {
    const [selectedMode, setSelectedMode] = useState('Beginner');

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-white ml-[5px]'>
                        Workout
                    </Text>
                </TouchableOpacity>
                <View className='w-[20%] flex-row justify-around items-center'>
                    {/* <FontAwesome name="search" size={23} color='#B3A0FF' /> */}
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>
            <View className='w-full flex flex-col items-center px-[30px] mb-[30px] '>
                <View className='w-full flex-row justify-between items-center'>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selectedMode === 'Beginner' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('Beginner')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'Beginner' ? 'text-black' : 'text-lightPurple'}`}>Beginner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selectedMode === 'Intermediate' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('Intermediate')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'Intermediate' ? 'text-black' : 'text-lightPurple'}`}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selectedMode === 'Advanced' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('Advanced')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'Advanced' ? 'text-black' : 'text-lightPurple'}`}>Advanced</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView className='w-full'>
                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    <View className="bg-black h-[125px] w-full rounded-[20px] overflow-hidden flex-row items-center">
                        {/* Left Side: Text Content */}
                        <View className="flex-1 px-4">
                            <Text className="text-limeGreen text-[24px] text-center font-bold">Weekly Challenge</Text>
                            <Text className="text-white text-[12px] text-center mt-2">Plank With Hip Twist</Text>
                        </View>

                        {/* Right Side: Image */}
                        <View className="rounded-[20px] overflow-hidden h-full w-1/2">
                            <Image
                                source={require('@/assets/images/misc/plank.png')}
                                className="h-full w-full object-cover"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}
