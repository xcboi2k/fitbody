import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ChevronLeft } from 'lucide-react-native';

export default function NotificationsScreen() {
    const [selectedMode, setSelectedMode] = useState('Reminders');
    
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[20px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-white ml-[5px]'>
                        Notifications
                    </Text>
                </TouchableOpacity>
                <View className='w-[30%] flex-row justify-between items-center'>
                    <FontAwesome name="search" size={23} color='#B3A0FF' />
                    <MaterialIcons name="notifications" size={25} color='#B3A0FF' />
                    <FontAwesome name="user" size={24} color='#B3A0FF' />
                </View>
            </View>
            <View className='w-full flex flex-col items-center mb-[10px] px-[30px]'>
                <View className='w-full flex-row justify-between items-center'>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[35px] ${selectedMode === 'Reminders' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('Reminders')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'Reminders' ? 'text-black' : 'text-lightPurple'}`}>Reminders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[35px] ${selectedMode === 'System' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('System')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'System' ? 'text-black' : 'text-lightPurple'}`}>System</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {
                    selectedMode === 'Reminders' ? (
                        <View className='w-full flex flex-col mb-[10px] px-[30px]'>
                            <Text className='text-[12px] text-limeGreen mb-[5px] ml-[20px]'>
                                Today
                            </Text>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[10px]">
                                    <AntDesign name="star" size={30} color="white" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        New Workout is Available
                                    </Text>
                                    <Text className='text-[13px] text-lightPurple'>
                                        June 10 - 10:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                                    <MaterialCommunityIcons name="lightbulb-on" size={30} color="black" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        Don’t Forget to Drink Water
                                    </Text>
                                    <Text className='text-[13px] text-lightPurple'>
                                        June 10 - 8:00 AM
                                    </Text>
                                </View>
                            </View>

                            <Text className='text-[12px] text-limeGreen mb-[5px] ml-[20px]'>
                                Yesterday
                            </Text>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                                    <FontAwesome5 name="trophy" size={24} color="black" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        Upper Body Workout Completed!
                                    </Text>
                                    <Text className='text-[13px] text-lightPurple'>
                                        June 09 - 6:00 PM
                                    </Text>
                                </View>
                            </View>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[10px]">
                                    <Ionicons name="document-text" size={30} color="white" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        New Article & Tip Posted!
                                    </Text>
                                    <Text className='text-[13px] text-lightPurple'>
                                        June 09 - 11:00 AM
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View className='w-full flex flex-col mb-[10px] px-[30px]'>
                            <Text className='text-[12px] text-limeGreen mb-[5px] ml-[20px]'>
                                Today
                            </Text>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                                    <AntDesign name="star" size={30} color="black" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        You Have a New Message! 
                                    </Text>
                                    <Text className='text-[13px] text-lightPurple'>
                                        June 10 - 2:00 pM
                                    </Text>
                                </View>
                            </View>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-limeGreen items-center justify-center p-[5px] mr-[10px]">
                                    <Ionicons name="document-text" size={30} color="black" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        Scheduled Maintenance
                                    </Text>
                                    <Text className='text-[13px] text-lightPurple'>
                                        June 10 - 8:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View className='w-full flex flex-row items-center mb-[10px] bg-white rounded-[36px] p-[10px]'>
                                <View className="w-[45px] h-[45px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[10px]">
                                    <MaterialIcons name="notifications" size={30} color="white" />
                                </View>
                                <View className='flex-col w-[70%]'>
                                    <Text className='text-[13px] text-black font-bold'>
                                        We've Detected a Login From a New Device
                                    </Text>
                                    <Text className='text-[13px] text-lightPurple'>
                                        June 10 - 5:00 aM
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
