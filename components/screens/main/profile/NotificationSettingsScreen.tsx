import React, { useState } from 'react'
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { ChevronDown, ChevronLeft } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function NotificationSettingsScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[15px]'>
                <TouchableOpacity className='flex-row items-center'
                    onPress={() => navigation.navigate('AuthenticatedScreens', {
                        screen: 'User',
                        params: {
                            screen: 'Settings',
                        },
                    })}
                >
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Notifications Settings
                    </Text>
                </TouchableOpacity>
                <Text className='text-[20px] text-black font-bold'>
                    /
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <ScrollView>
                <View className='w-full p-[30px] items-center mb-[20px]'>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <Text className='text-[18px] text-white'>
                                General Notification
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#B3A0FF', true: '#E2F163'}}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <Text className='text-[18px] text-white'>
                                Sound
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#B3A0FF', true: '#E2F163'}}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <Text className='text-[18px] text-white'>
                                Don't Disturb Mode
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#B3A0FF', true: '#E2F163'}}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <Text className='text-[18px] text-white'>
                                Vibrate
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#B3A0FF', true: '#E2F163'}}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <Text className='text-[18px] text-white'>
                                Lock Screen
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#B3A0FF', true: '#E2F163'}}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View className='flex-row w-full items-center justify-between mb-[20px]'>
                        <View className='flex-row w-[70%] items-center'>
                            <Text className='text-[18px] text-white'>
                                Reminders
                            </Text>
                        </View>
                        <Switch
                            trackColor={{false: '#B3A0FF', true: '#E2F163'}}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
