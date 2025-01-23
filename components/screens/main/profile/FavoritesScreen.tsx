import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome5';

export default function FavoritesScreen() {
    const [selected, setSelected] = useState('All');

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[15px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Favorites
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-between items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>
            <View className='w-full flex-row justify-between items-center mb-[30px] px-[30px]'>
                <Text className='text-[12px] text-limeGreen ml-[5px]'>
                    Sort By
                </Text>
                <TouchableOpacity 
                    className={`w-[70px] rounded-[25px] ${selected === 'All' ? 'bg-limeGreen' : 'bg-white'} px-[10px]`} 
                    onPress={() => setSelected('All')}
                >
                    <Text className={`text-[12px] text-center ${selected === 'All' ? 'text-black' : 'text-lightPurple'}`}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className={`w-[70px] rounded-[25px] ${selected === 'Video' ? 'bg-limeGreen' : 'bg-white'} px-[10px]`} 
                    onPress={() => setSelected('Video')}
                >
                    <Text className={`text-[12px] text-center ${selected === 'Video' ? 'text-black' : 'text-lightPurple'}`}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className={`w-[70px] rounded-[25px] ${selected === 'Article' ? 'bg-limeGreen' : 'bg-white'} px-[10px]`} 
                    onPress={() => setSelected('Article')}
                >
                    <Text className={`text-[12px] text-center ${selected === 'Article' ? 'text-black' : 'text-lightPurple'}`}>Article</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View className='w-full px-[30px] justify-between mb-[20px]'>
                    {/* Bookmarked Video */}
                    <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                        // key={bookmark.id}
                    >
                        <View className="w-[50%] p-[15px] items-center justify-center">
                            <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                <Text className="text-black text-[16px]">Upper Body</Text>
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
                                        120 KCal
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
                                className="h-40 w-full rounded-[20px] p-0"
                            />
                            <View className="absolute top-2 right-2">
                                <AntDesign name="star" size={24} color="#E2F163" />
                            </View>
                            <View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <FontAwesome6 name="play" size={24} color="#B3A0FF" />
                            </View>
                        </View>
                    </View>
                    {/* Bookmarked Article */}
                    <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                        // key={bookmark.id}
                    >
                        <View className="w-[50%] p-[15px] items-center justify-center">
                            <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                <Text className="text-black text-[16px]">Boost Energy and Vitality</Text>
                            </View>
                            <View className="flex-row justify-between items-start w-full">
                                <Text className="text-black text-[13px]">Incorporating physical exercise into your daily routine can boost...</Text>
                            </View>
                        </View>
                        <View className="w-[50%] relative">
                            <Image
                                source={require('@/assets/images/misc/squats.png')}
                                className="h-40 w-full rounded-[20px] p-0"
                            />
                            <View className="absolute top-2 right-2">
                                <AntDesign name="star" size={24} color="#E2F163" />
                            </View>
                        </View>
                    </View>
                    {/* Bookmarked Food */}
                    <View className="w-full bg-white rounded-[20px] flex-row mb-[20px]"
                        // key={bookmark.id}
                    >
                        <View className="w-[50%] p-[15px] items-center justify-center">
                            <View className='flex-row justify-between items-start mb-[5px] w-full'>
                                <Text className="text-black text-[16px]">Upper Body</Text>
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
                                        120 KCal
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-[50%] relative">
                            <Image
                                source={require('@/assets/images/misc/squats.png')}
                                className="h-40 w-full rounded-[20px] p-0"
                            />
                            <View className="absolute top-2 right-2">
                                <AntDesign name="star" size={24} color="#E2F163" />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
