import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ChevronLeft } from 'lucide-react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function SearchScreen() {
    const [searchText, setSearchText] = useState<string>('');
    const [selectedMode, setSelectedMode] = useState('All');

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-white ml-[5px]'>
                        Search
                    </Text>
                </TouchableOpacity>
                <View className='w-[20%] flex-row justify-around items-center'>
                    {/* <FontAwesome name="search" size={23} color='#B3A0FF' /> */}
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>
            <View className='w-full flex-row justify-between items-center mb-[10px] px-[30px]'>
                <View className="flex-row items-center bg-white rounded-[30px] p-[5px]">
                    <TextInput
                        className="ml-[20px] flex-1 text-gray-700 text-[15px]"
                        placeholder='Search'
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                    />
                </View>
            </View>
            <View className='w-full flex flex-col items-center mb-[10px] px-[30px]'>
                <View className='w-full flex-row justify-between items-center'>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selectedMode === 'All' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('All')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'All' ? 'text-black' : 'text-lightPurple'}`}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selectedMode === 'Workout' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('Workout')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'Workout' ? 'text-black' : 'text-lightPurple'}`}>Workout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selectedMode === 'Nutrition' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('Nutrition')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'Nutrition' ? 'text-black' : 'text-lightPurple'}`}>Nutrition</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {
                    selectedMode === 'All' ? (
                        <>
                            <View className='flex-row w-full px-[30px] justify-between items-center'>
                                <View className="w-[48%] border border-white rounded-[12px] p-2 mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    {/* Event Image */}
                                    <View className="relative">
                                        <Image
                                            source={require('@/assets/images/misc/squats.png')}
                                            className="h-40 w-full rounded-t-lg p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="#E2F163" />
                                        </View>
                                    </View>
                                    <View className="mt-4">
                                        <View className='flex-row justify-between items-start mb-[10px] w-full'>
                                            <Text className="text-limeGreen text-[16px]">Squat Exercise</Text>
                                        </View>
                                        <View className="flex-row items-center justify-between">
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="clock-time-eight" size={20} color='#B3A0FF' />
                                                <Text className="text-white text-[10px] ml-[2px]">
                                                    12 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={24} color='#B3A0FF' />
                                                <Text className="text-white text-[10px] ml-[2px]">
                                                    120 KCal
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View className="w-[48%] border border-white rounded-[12px] p-2 mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    {/* Event Image */}
                                    <View className="relative">
                                        <Image
                                            source={require('@/assets/images/misc/full-body-stretching.jpg')}
                                            className="h-40 w-full rounded-t-lg p-0"
                                        />
                                        <View className="absolute top-2 right-2">
                                            <AntDesign name="star" size={24} color="white" />
                                        </View>
                                    </View>
                                    <View className="mt-4">
                                        <View className='flex-row justify-between items-start mb-[10px] w-full'>
                                            <Text className="text-limeGreen text-[16px]">Full Body Stretching</Text>
                                        </View>
                                        <View className="flex-row items-center justify-between">
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="clock-time-eight" size={20} color='#B3A0FF' />
                                                <Text className="text-white text-[10px] ml-[2px]">
                                                    12 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={24} color='#B3A0FF' />
                                                <Text className="text-white text-[10px] ml-[2px]">
                                                    120 KCal
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View className='w-full px-[30px] justify-between mb-[20px]'>
                                {/* Bookmarked Video */}
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
                                                    1300 Kcal
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
                                            <AntDesign name="star" size={24} color="white" />
                                        </View>
                                    </View>
                                </View>
                                <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                                    // key={bookmark.id}
                                >
                                    <View className="w-[50%] px-[15px] py-[5px] items-center justify-center">
                                        <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                            <Text className="text-black text-[16px]">Delights with Greek Yogurt</Text>
                                        </View>
                                        <View className="flex-row justify-between items-start w-full">
                                            <View className="flex-row items-center mr-[10px]">
                                                <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                                <Text className="text-black text-[10px] ml-[2px]">
                                                    6 Minutes
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center">
                                                <MaterialCommunityIcons name="fire" size={18} color='black' />
                                                <Text className="text-black text-[10px]">
                                                    200 Cal
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
                                            <AntDesign name="star" size={24} color="white" />
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
                                                    1250 Kcal
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
                            </View>
                        </>
                    ) : selectedMode === 'Workout' ? (
                        <View className='w-full flex flex-col mb-[10px] px-[30px]'>
                            <Text className='text-[20px] text-limeGreen mb-[20px]'>
                                Top Searches
                            </Text>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[5px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                                    <FontAwesome name="search" size={25} color="#B3A0FF" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        Circuit
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View className='w-full flex flex-col mb-[10px] px-[30px]'>
                            <Text className='text-[20px] text-limeGreen mb-[20px]'>
                                Top Searches
                            </Text>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[5px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                                    <FontAwesome name="search" size={25} color="#B3A0FF" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        Breakfast
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}
