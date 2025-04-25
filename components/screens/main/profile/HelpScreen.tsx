import React, { useState } from 'react'
import { Image, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ChevronDown, ChevronLeft } from 'lucide-react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NestedParamList, RootStackParamList } from '@/types/navigation';

export default function HelpScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    const [selectedMode, setSelectedMode] = useState('FAQ');
    const [selectedFAQCategory, setSelectedFAQCategory] = useState('General');

    const [searchText, setSearchText] = useState<string>('');

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
                        Help & FAQs
                    </Text>
                </TouchableOpacity>
                <Text className='text-[20px] text-black font-bold'>
                    /
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <View className='w-full flex flex-col items-center mb-[10px] px-[30px]'>
                <View className='w-full flex-row justify-center items-center mb-[15px]'>
                    <Text className={`text-[20px] text-center text-white`}>How Can We Help You?</Text>
                </View>
                <View className='w-full flex-row justify-between items-center'>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[35px] ${selectedMode === 'FAQ' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('FAQ')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'FAQ' ? 'text-black' : 'text-lightPurple'}`}>FAQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className={`w-[48%] rounded-[35px] ${selectedMode === 'Contact Us' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                        onPress={() => setSelectedMode('Contact Us')}
                    >
                        <Text className={`text-[17px] text-center ${selectedMode === 'Contact Us' ? 'text-black' : 'text-lightPurple'}`}>Contact Us</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                selectedMode === 'FAQ' ? (
                    <>
                        <View className='w-full flex-row justify-between items-center mb-[10px] px-[30px]'>
                            <TouchableOpacity 
                                className={`w-[32%] rounded-[25px] ${selectedFAQCategory === 'General' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                                onPress={() => setSelectedFAQCategory('General')}
                            >
                                <Text className={`text-[15px] text-center ${selectedFAQCategory === 'General' ? 'text-black' : 'text-lightPurple'}`}>General</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                className={`w-[32%] rounded-[25px] ${selectedFAQCategory === 'Account' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                                onPress={() => setSelectedFAQCategory('Account')}
                            >
                                <Text className={`text-[15px] text-center ${selectedFAQCategory === 'Account' ? 'text-black' : 'text-lightPurple'}`}>Account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                className={`w-[32%] rounded-[25px] ${selectedFAQCategory === 'Services' ? 'bg-limeGreen' : 'bg-white'} p-[5px]`} 
                                onPress={() => setSelectedFAQCategory('Services')}
                            >
                                <Text className={`text-[15px] text-center ${selectedFAQCategory === 'Services' ? 'text-black' : 'text-lightPurple'}`}>Services</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View className='w-full flex-row justify-between items-center mb-[30px] px-[30px]'>
                            <View className="flex-row items-center bg-white rounded-[30px] p-[5px]">
                                <TextInput
                                    className="ml-[20px] flex-1 text-gray-700 text-[15px]"
                                    placeholder='Search'
                                    onChangeText={(text) => setSearchText(text)}
                                    value={searchText}
                                />
                            </View>
                        </View>
                        <View className='w-full flex-col items-center mb-[30px] px-[30px]'>
                            <View className='w-full h-[5px] border-t border-[#E2F163]' />
                            <TouchableOpacity 
                                className={`w-full flex-row justify-between items-center p-[5px] mb-[5px]`} 
                                // onPress={() => setSelectedFAQCategory('Services')}
                            >
                                <Text className={`text-[18px] font-bold ${selectedFAQCategory === 'Services' ? 'text-white' : 'text-lightPurple'}`}>Lorem ipsum dolor sit amet?</Text>
                                <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                            </TouchableOpacity>
                            <View className='w-full h-[5px] border-t border-[#E2F163]' />
                            <Text className="text-white text-[14px] p-[5px] mb-[5px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.
                            </Text>

                            <View className='w-full h-[5px] border-t border-[#E2F163]' />
                            <TouchableOpacity 
                                className={`w-full flex-row justify-between items-center p-[5px] mb-[5px]`} 
                                // onPress={() => setSelectedFAQCategory('Services')}
                            >
                                <Text className={`text-[18px] font-bold ${selectedFAQCategory === 'Services' ? 'text-white' : 'text-lightPurple'}`}>Lorem ipsum dolor sit amet?</Text>
                                <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                            </TouchableOpacity>
                            <View className='w-full h-[5px] border-t border-[#E2F163]' />
                            <TouchableOpacity 
                                className={`w-full flex-row justify-between items-center p-[5px] mb-[5px]`} 
                                // onPress={() => setSelectedFAQCategory('Services')}
                            >
                                <Text className={`text-[18px] font-bold ${selectedFAQCategory === 'Services' ? 'text-white' : 'text-lightPurple'}`}>Lorem ipsum dolor sit amet?</Text>
                                <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                            </TouchableOpacity>
                            <View className='w-full h-[5px] border-t border-[#E2F163]' />
                            <TouchableOpacity 
                                className={`w-full flex-row justify-between items-center p-[5px] mb-[5px]`} 
                                // onPress={() => setSelectedFAQCategory('Services')}
                            >
                                <Text className={`text-[18px] font-bold ${selectedFAQCategory === 'Services' ? 'text-white' : 'text-lightPurple'}`}>Lorem ipsum dolor sit amet?</Text>
                                <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                            </TouchableOpacity>
                            <View className='w-full h-[5px] border-t border-[#E2F163]' />
                            <TouchableOpacity 
                                className={`w-full flex-row justify-between items-center p-[5px] mb-[5px]`} 
                                // onPress={() => setSelectedFAQCategory('Services')}
                            >
                                <Text className={`text-[18px] font-bold ${selectedFAQCategory === 'Services' ? 'text-white' : 'text-lightPurple'}`}>Lorem ipsum dolor sit amet?</Text>
                                <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                            </TouchableOpacity>
                            <View className='w-full h-[5px] border-t border-[#E2F163]' />
                            <TouchableOpacity 
                                className={`w-full flex-row justify-between items-center p-[5px] mb-[5px]`} 
                                // onPress={() => setSelectedFAQCategory('Services')}
                            >
                                <Text className={`text-[18px] font-bold ${selectedFAQCategory === 'Services' ? 'text-white' : 'text-lightPurple'}`}>Lorem ipsum dolor sit amet?</Text>
                                <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                            </TouchableOpacity>
                            <View className='w-full h-[5px] border-t border-[#E2F163]' />
                        </View>
                    </> 
                ) : (
                    <View className='w-full flex-col items-center mb-[30px] px-[30px] mt-[10px]'>
                        <TouchableOpacity className='flex-row w-full items-center justify-between mb-[20px]'
                            onPress={() => navigation.navigate('AuthenticatedScreens', {
                                screen: 'User',
                                params: {
                                    screen: 'HelpDetails',
                                },
                            })}
                        >
                            <View className='flex-row w-[70%] items-center'>
                                <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                    <AntDesign name="customerservice" size={24} color="white" />
                                </View>
                                <Text className='text-[18px] text-white'>
                                    Customer Service
                                </Text>
                            </View>
                            <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                        </TouchableOpacity>
                        <View className='flex-row w-full items-center justify-between mb-[20px]'>
                            <View className='flex-row w-[70%] items-center'>
                                <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                    <MaterialCommunityIcons name="web" size={24} color="white" />
                                </View>
                                <Text className='text-[18px] text-white'>
                                    Website
                                </Text>
                            </View>
                            <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                        </View>
                        <View className='flex-row w-full items-center justify-between mb-[20px]'>
                            <View className='flex-row w-[70%] items-center'>
                                <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                    <MaterialCommunityIcons name="whatsapp" size={24} color="white" />
                                </View>
                                <Text className='text-[18px] text-white'>
                                    Whatsapp
                                </Text>
                            </View>
                            <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                        </View>
                        <View className='flex-row w-full items-center justify-between mb-[20px]'>
                            <View className='flex-row w-[70%] items-center'>
                                <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                    <MaterialCommunityIcons name="facebook" size={24} color="white" />
                                </View>
                                <Text className='text-[18px] text-white'>
                                    Facebook
                                </Text>
                            </View>
                            <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                        </View>
                        <View className='flex-row w-full items-center justify-between mb-[20px]'>
                            <View className='flex-row w-[70%] items-center'>
                                <View className="w-[40px] h-[40px] rounded-full bg-lightPurple items-center justify-center p-[5px] mr-[20px]">
                                    <MaterialCommunityIcons name="instagram" size={24} color="white" />
                                </View>
                                <Text className='text-[18px] text-white'>
                                    Instagram
                                </Text>
                            </View>
                            <FontAwesome5 name="caret-down" size={24} color='#E2F163' />
                        </View>
                    </View>
                )
            }
            
        </View>
    )
}
