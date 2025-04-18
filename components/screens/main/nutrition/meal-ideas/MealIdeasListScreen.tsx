import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function MealIdeasListScreen() {
    const [selected, setSelected] = useState('Breakfast');

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Meal Ideas
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>

            <ScrollView className='w-full mb-[15px]'>
                <View className='w-full flex-row justify-between items-center mb-[20px] px-[30px]'>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selected === 'Breakfast' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelected('Breakfast')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Breakfast' ? 'text-black' : 'text-lightPurple'}`}>Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selected === 'Lunch' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelected('Lunch')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Lunch' ? 'text-black' : 'text-lightPurple'}`}>Lunch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[32%] rounded-[35px] ${selected === 'Dinner' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelected('Dinner')}
                    >
                        <Text className={`text-[17px] text-center ${selected === 'Dinner' ? 'text-black' : 'text-lightPurple'}`}>Dinner</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-full p-[30px] bg-lightPurple items-center mb-[20px]'>
                    <View className="bg-black w-full h-[200px] rounded-[20px] overflow-hidden">
                        {/* Workout Image */}
                        <View className="relative">
                            <Image
                                source={require('@/assets/images/misc/plank.png')} // Replace with your actual image
                                className="w-full h-[140px] object-cover"
                            />
                            <View className="absolute top-2 right-2 bg-limeGreen px-3 py-1 rounded-full">
                                <Text className="text-black text-[12px] font-bold">Recipe Of The Day</Text>
                            </View>
                        </View>

                        {/* Workout Details */}
                        <View className="px-[15px] py-[10px]">
                            {/* Stats Row */}
                            <View className='w-full flex flex-row items-center'>
                                <View className='w-[80%] flex-col'>
                                    <Text className="text-limeGreen text-[14px] font-bold mb-[5px]">Spinach and Tomato Omelette</Text>
                                    <View className="w-full flex-row items-center">
                                        <View className="flex-row items-center mr-[10px]">
                                            <MaterialCommunityIcons name="clock-time-eight" size={12} color='white' />
                                            <Text className="text-white text-[12px] ml-1">10 Minutes</Text>
                                        </View>

                                        <View className="flex-row items-center">
                                            <MaterialCommunityIcons name="fire" size={15} color='white' />
                                            <Text className="text-white text-[12px] ml-1">220 Kcal</Text>
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

                <View className='w-full px-[30px] mb-[20px]'>
                    <Text className="text-limeGreen text-[20px] mb-[5px]">Recommended</Text>
                    <View className='flex-row w-full justify-between items-center'>
                        <View className="w-[48%] border border-white rounded-[12px] p-2"
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
                                    <Text className="text-limeGreen text-[16px]">Fruit Smoothie</Text>
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
                                            120 Cal
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className="w-[48%] border border-white rounded-[12px] p-2"
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
                                    <Text className="text-limeGreen text-[16px]">Green Celery Juice</Text>
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
                                            120 Cal
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View className='w-full px-[30px] mb-[20px]'>
                    <Text className="text-limeGreen text-[20px] mb-[5px]">Recipes For You</Text>
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
                                <Text className="text-black text-[16px]">Baked Salmon</Text>
                            </View>
                            <View className="flex-row justify-between items-start w-full">
                                <View className="flex-row items-center mr-[10px]">
                                    <MaterialCommunityIcons name="clock-time-eight" size={15} color='black' />
                                    <Text className="text-black text-[10px] ml-[2px]">
                                        30 Minutes
                                    </Text>
                                </View>
                                <View className="flex-row items-center">
                                    <MaterialCommunityIcons name="fire" size={18} color='black' />
                                    <Text className="text-black text-[10px]">
                                        350 Cal
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
                </View>
            </ScrollView>
        </View>
    )
}
