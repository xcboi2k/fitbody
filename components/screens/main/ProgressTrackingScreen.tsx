import React, { useRef, useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function ProgressTrackingScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    const [selected, setSelected] = useState('Workout Log');

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'HomeMain',
                        },
                    })}
                >
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Progress Tracking
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-around items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>

            <ScrollView className='w-full mb-[15px]'>
                <View className='w-full px-[30px] py-[15px] bg-lightPurple items-center mb-[20px]'>
                    <View className='w-full flex flex-row items-center'>
                        <View className='w-[50%] flex flex-col items-center py-[10px] mr-[15px]'>
                            <View className='w-full flex-row items-center'>
                                <Text className='text-[22px] text-white font-bold mr-[10px]'>
                                    Username
                                </Text>
                                <Foundation name="female-symbol" size={26} color="#E2F163" />
                            </View>
                            <View className='w-full flex-row items-center'>
                                <Text className='text-[14px] text-white font-bold mr-[5px]'>
                                    Age:
                                </Text>
                                <Text className='text-[14px] text-white'>
                                    28
                                </Text>
                            </View>
                            <View className='w-full flex-row items-center mt-[15px]'>
                                <View className='w-1/2 flex-row items-center'>
                                    <View className='h-[40px] w-[10px] rounded-lg bg-limeGreen mr-[8px]' />
                                    <View className='flex-col'>
                                        <Text className='text-[14px] text-white font-bold'>
                                            75 Kg
                                        </Text>
                                        <Text className='text-[14px] text-white'>
                                            Weight
                                        </Text>
                                    </View>
                                </View>
                                <View className='w-1/2 flex-row items-center'>
                                    <View className='h-[40px] w-[10px] rounded-lg bg-limeGreen mr-[8px]' />
                                    <View className='flex-col'>
                                        <Text className='text-[14px] text-white font-bold'>
                                            1.65 Cm
                                        </Text>
                                        <Text className='text-[14px] text-white'>
                                            Height
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className='w-[50%]'>
                            <View className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                <Image
                                source={require('@/assets/images/misc/sample-user.jpg')}
                                className="w-full h-full object-cover"
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View className='w-full flex-row justify-between items-center mb-[20px] px-[30px]'>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[25px] ${selected === 'Workout Log' ? 'bg-limeGreen' : 'bg-white'} px-[12px] py-[8px]`} 
                        onPress={() => setSelected('Workout Log')}
                    >
                        <Text className={`text-[20px] text-center ${selected === 'Workout Log' ? 'text-black' : 'text-lightPurple'}`}>Workout Log</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[25px] ${selected === 'Charts' ? 'bg-limeGreen' : 'bg-white'} px-[12px] py-[8px]`} 
                        onPress={() => setSelected('Charts')}
                    >
                        <Text className={`text-[20px] text-center ${selected === 'Charts' ? 'text-black' : 'text-lightPurple'}`}>Charts</Text>
                    </TouchableOpacity>
                </View>

                {
                    selected === 'Workout Log' ? (
                        <View className='w-full px-[30px]'>
                            <Text className="text-limeGreen text-[20px] mb-[15px]">Activities</Text>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[18px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[10px]">
                                    <FontAwesome5 name="walking" size={22} color="white" />
                                </View>
                                <View className='flex-col w-[50%]'>
                                    <View className="flex-row items-center">
                                        <MaterialCommunityIcons name="fire" size={15} color='#B3A0FF' />
                                        <Text className="text-black text-[12px] ml-1">120 KCal</Text>
                                    </View>
                                    <Text className='text-[13px] text-black font-bold'>
                                        Upper Body Workout
                                    </Text>
                                    <Text className="text-lightPurple text-[12px]">June 09</Text>
                                </View>
                                <View className='flex-col w-[30%] justify-end'>
                                    <Text className='text-[13px] text-lightPurple font-bold text-right'>
                                        Duration
                                    </Text>
                                    <View className="flex-row items-center justify-end">
                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                        <Text className="text-lightPurple text-[12px] ml-1">30 Mins</Text>
                                    </View>
                                </View>
                            </View>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[18px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[10px]">
                                    <FontAwesome5 name="walking" size={22} color="white" />
                                </View>
                                <View className='flex-col w-[50%]'>
                                    <View className="flex-row items-center">
                                        <MaterialCommunityIcons name="fire" size={15} color='#B3A0FF' />
                                        <Text className="text-black text-[12px] ml-1">130 KCal</Text>
                                    </View>
                                    <Text className='text-[13px] text-black font-bold'>
                                        Pull Out
                                    </Text>
                                    <Text className="text-lightPurple text-[12px]">April 15 - 4:00 PM</Text>
                                </View>
                                <View className='flex-col w-[30%] justify-end'>
                                    <Text className='text-[13px] text-lightPurple font-bold text-right'>
                                        Duration
                                    </Text>
                                    <View className="flex-row items-center justify-end">
                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='#B3A0FF' />
                                        <Text className="text-lightPurple text-[12px] ml-1">30 Mins</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View className='w-full px-[30px]'>
                            <Text className="text-limeGreen text-[14px] mb-[5px]">My Progress</Text>
                            <Text className="text-limeGreen text-[24px] mb-[15px]">January 12th</Text>

                            <View className='w-full flex flex-row items-center justify-between mb-[10px] bg-lightPurple rounded-[10px] p-[5px]'>
                                {/* Date (Centered) */}
                                <View className='w-[30%] flex items-center justify-center p-[2px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Thu</Text>
                                    <Text className="text-white text-[25px] text-center">14</Text>
                                </View>

                                {/* Divider */}
                                <View className='h-[60px] border-l border-white' />

                                {/* Steps */}
                                <View className='flex-1 flex items-center justify-center p-[5px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Steps</Text>
                                    <Text className="text-white text-[25px] text-center">3,769</Text>
                                </View>

                                {/* Duration */}
                                <View className='flex-1 flex items-center justify-center p-[5px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Duration</Text>
                                    <View className="flex-row items-center">
                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                        <Text className="text-white text-[14px] ml-1">30 Mins</Text>
                                    </View>
                                </View>
                            </View>

                            <View className='w-full flex flex-row items-center justify-between mb-[10px] bg-lightPurple rounded-[10px] p-[5px]'>
                                {/* Date (Centered) */}
                                <View className='w-[30%] flex items-center justify-center p-[2px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Sat</Text>
                                    <Text className="text-white text-[25px] text-center">16</Text>
                                </View>

                                {/* Divider */}
                                <View className='h-[60px] border-l border-white' />

                                {/* Steps */}
                                <View className='flex-1 flex items-center justify-center p-[5px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Steps</Text>
                                    <Text className="text-white text-[25px] text-center">10,769</Text>
                                </View>

                                {/* Duration */}
                                <View className='flex-1 flex items-center justify-center p-[5px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Duration</Text>
                                    <View className="flex-row items-center">
                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                        <Text className="text-white text-[14px] ml-1">30 Mins</Text>
                                    </View>
                                </View>
                            </View>

                            <View className='w-full flex flex-row items-center justify-between mb-[10px] bg-lightPurple rounded-[10px] p-[5px]'>
                                {/* Date (Centered) */}
                                <View className='w-[30%] flex items-center justify-center p-[2px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Mon</Text>
                                    <Text className="text-white text-[25px] text-center">18</Text>
                                </View>

                                {/* Divider */}
                                <View className='h-[60px] border-l border-white' />

                                {/* Steps */}
                                <View className='flex-1 flex items-center justify-center p-[5px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Steps</Text>
                                    <Text className="text-white text-[25px] text-center">5,769</Text>
                                </View>

                                {/* Duration */}
                                <View className='flex-1 flex items-center justify-center p-[5px]'>
                                    <Text className='text-[13px] text-white font-bold text-center'>Duration</Text>
                                    <View className="flex-row items-center">
                                        <MaterialCommunityIcons name="clock-time-eight" size={15} color='white' />
                                        <Text className="text-white text-[14px] ml-1">30 Mins</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}
