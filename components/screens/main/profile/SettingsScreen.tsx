import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

import ScreenHeader from '@/components/shared/ScreenHeader';

export default function SettingsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    return (
        <View className='flex-1 items-center bg-black'>
            <ScreenHeader title='Settings' 
                backPress={
                    () => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'ProfileMenu',
                        },
                    })
                }
            />
            <ScrollView>
                <View className='w-full p-[30px] items-center mb-[20px]'>
                    <TouchableOpacity className='flex-row w-full items-center justify-between mb-[20px]'
                        onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'NotificationSettings',
                            },
                        })}
                    >
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <MaterialIcons name="notifications" size={24} color='white' />
                            </View>
                            <Text className='text-[18px] text-white'>
                                Notification Setting
                            </Text>
                        </View>
                        <ChevronDown size={20} color={'#E2F163'} />
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row w-full items-center justify-between mb-[20px]'
                        onPress={() => navigation.navigate('AuthenticatedScreens', {
                            screen: 'User',
                            params: {
                                screen: 'PasswordSettings',
                            },
                        })}
                    >
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <Ionicons name="key" size={24} color="white" />
                            </View>
                            <Text className='text-[18px] text-white'>
                                Password Setting
                            </Text>
                        </View>
                        <ChevronDown size={20} color={'#E2F163'} />
                    </TouchableOpacity>
                    {/* <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                <FontAwesome name="user" size={24} color='white' />
                            </View>
                            <Text className='text-[18px] text-white'>
                                Delete Account
                            </Text>
                        </View>
                        <ChevronDown size={20} color={'#E2F163'} />
                    </View> */}
                </View>
            </ScrollView>
        </View>
    )
}
