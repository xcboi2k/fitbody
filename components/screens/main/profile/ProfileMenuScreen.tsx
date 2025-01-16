import React, { useState, useRef, useEffect } from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft, ChevronRight } from 'lucide-react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ProfileMenuScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <ScrollView>
                <View className='w-full p-[30px] bg-lightPurple items-center mt-[50px] '>
                    <View className='flex-row w-full justify-between items-center mb-[20px]'>
                        <TouchableOpacity className='flex-row items-center'>
                            <ChevronLeft size={20} color={'#E2F163'} />
                            <Text className='text-[20px] font-bold text-white ml-[5px]'>
                                My Profile
                            </Text>
                        </TouchableOpacity>
                        <Text className='text-[20px] text-lightPurple font-bold'>
                            /
                        </Text>
                        <ChevronLeft size={20} color={'#B3A0FF'} />
                    </View>
                    <View className="items-center justify-center mb-[5px]">
                        <View className="w-[100px] h-[100px] rounded-full overflow-hidden">
                            <Image
                            source={require('@/assets/images/misc/sample-user.jpg')}
                            className="w-full h-full object-cover"
                            />
                        </View>
                    </View>
                    <View className="items-center justify-center mb-[15px]">
                        <Text className='text-[20px] text-white font-bold'>
                            User
                        </Text>
                        <Text className='text-[13px] text-white'>
                            user@email.com
                        </Text>
                        <View className='flex-row w-full'>
                            <Text className='text-[13px] text-white font-bold mr-[5px]'>
                                Birthday:
                            </Text>
                            <Text className='text-[13px] text-white'>
                                January 1st
                            </Text>
                        </View>
                    </View>
                    <View className="bg-purple w-full rounded-[10px] px-2 py-3 flex-row items-center justify-between">
                        {/* Weight */}
                        <View className="flex-1 items-center">
                            <Text className="text-white font-bold text-[15px]">75 Kg</Text>
                            <Text className="text-white text-[15px]">Weight</Text>
                        </View>
                        <View className='h-[40px] border border-white' />
                        {/* Age */}
                        <View className="flex-1 items-center">
                            <Text className="text-white font-bold text-[15px]">28</Text>
                            <Text className="text-white text-[15px]">Years Old</Text>
                        </View>
                        <View className='h-[40px] border border-white' />
                        {/* Height */}
                        <View className="flex-1 items-center">
                            <Text className="text-white font-bold text-[15px]">1.65 Cm</Text>
                            <Text className="text-white text-[15px]">Height</Text>
                        </View>
                    </View>
                </View>
                
                <View className='w-full p-[30px] items-center mb-[20px]'>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <FontAwesome name="user" size={24} color='white' />
                            </View>
                            <Text className='text-[20px] text-white'>
                                Profile
                            </Text>
                        </View>
                        <ChevronRight size={20} color={'#E2F163'} />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <AntDesign name="star" size={24} color="white" />
                            </View>
                            <Text className='text-[20px] text-white'>
                                Favorite
                            </Text>
                        </View>
                        <ChevronRight size={20} color={'#E2F163'} />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <FontAwesome name="lock" size={24} color="white" />
                            </View>
                            <Text className='text-[20px] text-white'>
                                Privacy Policy
                            </Text>
                        </View>
                        <ChevronRight size={20} color={'#E2F163'} />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <FontAwesome name="cog" size={24} color="white" />
                            </View>
                            <Text className='text-[20px] text-white'>
                                Settings
                            </Text>
                        </View>
                        <ChevronRight size={20} color={'#E2F163'} />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <MaterialIcons name="support-agent" size={24} color="white" />
                            </View>
                            <Text className='text-[20px] text-white'>
                                Help
                            </Text>
                        </View>
                        <ChevronRight size={20} color={'#E2F163'} />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <MaterialCommunityIcons name="logout" size={24} color="white" />
                            </View>
                            <Text className='text-[20px] text-white'>
                                Logout
                            </Text>
                        </View>
                        <ChevronRight size={20} color={'#E2F163'} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
