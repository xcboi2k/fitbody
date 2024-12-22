import React from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function LoginScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
                <ChevronLeft size={20} color={'#E2F163'} />
                <Text className='text-[20px] text-limeGreen font-bold'>
                    Login
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <ScrollView>
                <View className='w-full px-[30px] justify-between items-center mb-[20px]'>
                    <Text className='text-[20px] text-white font-bold mb-[20px]'>
                        Welcome
                    </Text>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] bg-lightPurple items-center mb-[50px]'>
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "example@example.com",
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Username or email'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "***************",
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Password'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <View className='w-full flex items-end'>
                        <TouchableOpacity>
                            <Text className='text-[12px] text-black mb-[5px]'>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <OnboardingButton buttonText='Log In' onClick={() => {}} />
                    <Text className='text-[12px] text-white mt-[20px] mb-[10px]'>
                        or sign up with
                    </Text>
                    <View className='w-full flex flex-row mb-[40px] justify-center'>
                        <TouchableOpacity>
                            <View className='w-[35px] h-[35px] rounded-[15px] bg-white items-center justify-center mr-[10px]'>
                                <FontAwesome5 name="google" size={20} color={'#B3A0FF'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className='w-[35px] h-[35px] rounded-[15px] bg-white items-center justify-center mr-[10px]'>
                                <FontAwesome5 name="facebook" size={22} color={'#B3A0FF'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className='w-[35px] h-[35px] rounded-[15px] bg-white items-center justify-center'>
                                <Entypo name="fingerprint" size={22} color={'#B3A0FF'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className='w-full flex flex-row justify-center'>
                        <Text className='text-[12px] text-white mr-[5px]'>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text className='text-[12px] text-limeGreen'>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
