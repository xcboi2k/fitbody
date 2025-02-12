import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function WorkoutScreen() {
    const [selectedMode, setSelectedMode] = useState('Beginner');

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Workout
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
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
                {
                    selectedMode === 'Beginner' ? (
                        <>
                            <View className='w-full p-[30px] bg-lightPurple items-center'>
                                <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                                    {/* Workout Image */}
                                    <View className="relative">
                                        <Image
                                            source={require('../../../../assets/images/misc/plank.png')} // Replace with your actual image
                                            className="w-full h-[140px] object-cover"
                                        />
                                        <View className="absolute top-2 right-2 bg-limeGreen px-3 py-1 rounded-full">
                                            <Text className="text-black text-[12px] font-bold">Training Of The Day</Text>
                                        </View>
                                    </View>

                                    {/* Workout Details */}
                                    <View className="px-[15px] py-[10px]">
                                        {/* Stats Row */}
                                        <View className='w-full flex flex-row items-center'>
                                            <View className='w-[80%] flex-col'>
                                                <Text className="text-limeGreen text-[14px] font-bold mb-[5px]">Functional Training</Text>
                                                <View className="w-full flex-row items-center justify-between">
                                                    <View className="flex-row items-center">
                                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                                        <Text className="text-white text-[12px] ml-1">45 Minutes</Text>
                                                    </View>

                                                    <View className="flex-row items-center">
                                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                                        <Text className="text-white text-[12px] ml-1">1450 Kcal</Text>
                                                    </View>

                                                    <View className="flex-row items-center">
                                                        <FontAwesome5 name="walking" size={15} color="white" />
                                                        <Text className="text-white text-[12px] ml-1">5 Exercises</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View className="w-[20%] flex-row items-center justify-end">
                                                <AntDesign name="star" size={35} color="white" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View className='w-full p-[30px] mb-[20px]'>
                                <Text className="text-limeGreen text-[20px] mb-[5px]">Let's Go Beginner</Text>
                                <Text className="text-white text-[12px] mb-[15px]">Explore Different Workout Styles</Text>
                                <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    <View className="w-[50%] px-[15px] py-[5px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">Upper Body</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                                <Text className="text-black text-[10px] ml-[2px]">
                                                    60 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={18} color='black' />
                                                <Text className="text-black text-[10px]">
                                                    1320 KCal
                                                </Text>
                                            </View>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <FontAwesome5 name="walking" size={15} color="black" />
                                                <Text className="text-black text-[10px] ml-[5px]">
                                                    5 Exercises
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[50%] relative">
                                        <Image
                                            source={require('@/assets/images/misc/squats.png')}
                                            className="h-[110px] w-full rounded-[20px] p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="#E2F163" />
                                        </View>
                                    </View>
                                </View>
                                <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    <View className="w-[50%] px-[15px] py-[5px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">Full Body stretching</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                                <Text className="text-black text-[10px] ml-[2px]">
                                                    45 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={18} color='black' />
                                                <Text className="text-black text-[10px]">
                                                    1450 KCal
                                                </Text>
                                            </View>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <FontAwesome5 name="walking" size={15} color="black" />
                                                <Text className="text-black text-[10px] ml-[5px]">
                                                    5 Exercises
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[50%] relative">
                                        <Image
                                            source={require('@/assets/images/misc/full-body-stretching.jpg')}
                                            className="h-[110px] w-full rounded-[20px] p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="white" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </>
                    ) : selectedMode === 'Intermediate' ? (
                        <>
                            <View className='w-full p-[30px] bg-lightPurple items-center'>
                                <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                                    {/* Workout Image */}
                                    <View className="relative">
                                        <Image
                                            source={require('../../../../assets/images/misc/plank.png')} // Replace with your actual image
                                            className="w-full h-[140px] object-cover"
                                        />
                                        <View className="absolute top-2 right-2 bg-limeGreen px-3 py-1 rounded-full">
                                            <Text className="text-black text-[12px] font-bold">Training Of The Day</Text>
                                        </View>
                                    </View>

                                    {/* Workout Details */}
                                    <View className="px-[15px] py-[10px]">
                                        {/* Stats Row */}
                                        <View className='w-full flex flex-row items-center'>
                                            <View className='w-[80%] flex-col'>
                                                <Text className="text-limeGreen text-[14px] font-bold mb-[5px]">Cardio Fitness</Text>
                                                <View className="w-full flex-row items-center justify-between">
                                                    <View className="flex-row items-center">
                                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                                        <Text className="text-white text-[12px] ml-1">45 Minutes</Text>
                                                    </View>

                                                    <View className="flex-row items-center">
                                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                                        <Text className="text-white text-[12px] ml-1">1200 Kcal</Text>
                                                    </View>

                                                    <View className="flex-row items-center">
                                                        <FontAwesome5 name="walking" size={15} color="white" />
                                                        <Text className="text-white text-[12px] ml-1">5 Exercises</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View className="w-[20%] flex-row items-center justify-end">
                                                <AntDesign name="star" size={35} color="white" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View className='w-full p-[30px] mb-[20px]'>
                                <Text className="text-limeGreen text-[20px] mb-[5px]">Keep Raising Your Level</Text>
                                <Text className="text-white text-[12px] mb-[15px]">Explore Intermediate Workouts</Text>
                                <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    <View className="w-[50%] px-[15px] py-[5px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">Circuit Training</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                                <Text className="text-black text-[10px] ml-[2px]">
                                                    50 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={18} color='black' />
                                                <Text className="text-black text-[10px]">
                                                    1300 KCal
                                                </Text>
                                            </View>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <FontAwesome5 name="walking" size={15} color="black" />
                                                <Text className="text-black text-[10px] ml-[5px]">
                                                    5 Exercises
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[50%] relative">
                                        <Image
                                            source={require('@/assets/images/misc/squats.png')}
                                            className="h-[110px] w-full rounded-[20px] p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="#E2F163" />
                                        </View>
                                    </View>
                                </View>
                                <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    <View className="w-[50%] px-[15px] py-[5px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">Split Strength Training</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                                <Text className="text-black text-[10px] ml-[2px]">
                                                    12 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={18} color='black' />
                                                <Text className="text-black text-[10px]">
                                                    1250 KCal
                                                </Text>
                                            </View>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <FontAwesome5 name="walking" size={15} color="black" />
                                                <Text className="text-black text-[10px] ml-[5px]">
                                                    5 Exercises
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[50%] relative">
                                        <Image
                                            source={require('@/assets/images/misc/full-body-stretching.jpg')}
                                            className="h-[110px] w-full rounded-[20px] p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="white" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </>
                    )  : selectedMode === 'Advanced' ? (
                        <>
                            <View className='w-full p-[30px] bg-lightPurple items-center'>
                                <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                                    {/* Workout Image */}
                                    <View className="relative">
                                        <Image
                                            source={require('../../../../assets/images/misc/plank.png')} // Replace with your actual image
                                            className="w-full h-[140px] object-cover"
                                        />
                                        <View className="absolute top-2 right-2 bg-limeGreen px-3 py-1 rounded-full">
                                            <Text className="text-black text-[12px] font-bold">Training Of The Day</Text>
                                        </View>
                                    </View>

                                    {/* Workout Details */}
                                    <View className="px-[15px] py-[10px]">
                                        {/* Stats Row */}
                                        <View className='w-full flex flex-row items-center'>
                                            <View className='w-[80%] flex-col'>
                                                <Text className="text-limeGreen text-[14px] font-bold mb-[5px]">Upper Body Strength</Text>
                                                <View className="w-full flex-row items-center justify-between">
                                                    <View className="flex-row items-center">
                                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                                        <Text className="text-white text-[12px] ml-1">60 Minutes</Text>
                                                    </View>

                                                    <View className="flex-row items-center">
                                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                                        <Text className="text-white text-[12px] ml-1">120 Kcal</Text>
                                                    </View>

                                                    <View className="flex-row items-center">
                                                        <FontAwesome5 name="walking" size={15} color="white" />
                                                        <Text className="text-white text-[12px] ml-1">5 Exercises</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View className="w-[20%] flex-row items-center justify-end">
                                                <AntDesign name="star" size={35} color="white" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View className='w-full p-[30px] mb-[20px]'>
                                <Text className="text-limeGreen text-[20px] mb-[5px]">Unlock Your Potential</Text>
                                <Text className="text-white text-[12px] mb-[15px]">Explore Advanced Fitness Routines</Text>
                                <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    <View className="w-[50%] px-[15px] py-[5px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">Cardio Boxing</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                                <Text className="text-black text-[10px] ml-[2px]">
                                                    50 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={18} color='black' />
                                                <Text className="text-black text-[10px]">
                                                    1300 KCal
                                                </Text>
                                            </View>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <FontAwesome5 name="walking" size={15} color="black" />
                                                <Text className="text-black text-[10px] ml-[5px]">
                                                    5 Exercises
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[50%] relative">
                                        <Image
                                            source={require('@/assets/images/misc/squats.png')}
                                            className="h-[110px] w-full rounded-[20px] p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="#E2F163" />
                                        </View>
                                    </View>
                                </View>
                                <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    <View className="w-[50%] px-[15px] py-[5px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">Hypertrophy - Legs</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                                <Text className="text-black text-[10px] ml-[2px]">
                                                    12 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={18} color='black' />
                                                <Text className="text-black text-[10px]">
                                                    1250 KCal
                                                </Text>
                                            </View>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <FontAwesome5 name="walking" size={15} color="black" />
                                                <Text className="text-black text-[10px] ml-[5px]">
                                                    5 Exercises
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="w-[50%] relative">
                                        <Image
                                            source={require('@/assets/images/misc/full-body-stretching.jpg')}
                                            className="h-[110px] w-full rounded-[20px] p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="white" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </>
                    ) : (
                        null
                    )
                }
            </ScrollView>
        </View>
    )
}
